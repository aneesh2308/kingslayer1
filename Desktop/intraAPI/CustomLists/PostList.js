import React, {
  Component,
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native'
import { Avatar, Modal, Portal, Provider } from "react-native-paper";
import StoryList from "./StoryList";
import Video from "react-native-video";
import Share from 'react-native-share';
import Spinner from 'react-native-loading-spinner-overlay';
import RNFetchBlob from "rn-fetch-blob";
import { TouchableWithoutFeedback } from "react-native";
import AuthContext, { AuthConsumer } from "../Context";
import { inject, observer } from "mobx-react";
import firebase from 'firebase';
require("firebase/firebase-firestore")
require("firebase/firebase-storage")

function PostList(props) {
  const [userData, setUserData] = useState([]);
  const [spinner, setSpinner] = useState(false)

  const [visible, setVisible] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  // console.log(context);
  const fs = RNFetchBlob.fs;

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    height: 200,
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-evenly",
    paddingLeft: 30,
    paddingVertical: 10,
  };
  const myCustomShare = (base64) => {
    let imagePath = null;
    RNFetchBlob.config({
      fileCache: true
    })
      .fetch("GET", base64)
      // the image is now dowloaded to device's storage
      .then(resp => {
        // the image path you can use it directly with Image component
        imagePath = resp.path();
        return resp.readFile("base64");
      })
      .then(async(base64Data) => {
        // here's base64 encoded image
        const shareOptions = {
          url:"data:image/png;base64,"+base64Data
          // urls: [files.image1, files.image2]
        }

        try {
          const ShareResponse = await Share.open(shareOptions);
          console.log(JSON.stringify(ShareResponse));
        } catch(error) {
          console.log('Error => ', error);
        }

        // remove the file from storage
        return fs.unlink(imagePath);
      });
  };
  const myCustomShare1 = (base64) => {
    let imagePath = null;
    RNFetchBlob.config({
      fileCache: true
    })
      .fetch("GET", base64)
      // the image is now dowloaded to device's storage
      .then(resp => {
        // the image path you can use it directly with Image component
        imagePath = resp.path();
        return resp.readFile("base64");
      })
      .then(async(base64Data) => {
        // here's base64 encoded image
        const shareOptions = {
          url:"data:video/mp4;base64,"+base64Data
          // urls: [files.image1, files.image2]
        }

        try {
          const ShareResponse = await Share.open(shareOptions);
          console.log(JSON.stringify(ShareResponse));
        } catch(error) {
          console.log('Error => ', error);
        }

        // remove the file from storage
        return fs.unlink(imagePath);
      });
  };
  const onLikePress = (userId, postId,likes_count) => {
  setSpinner(true);
  console.log(userId+" "+postId+" "+likes_count)
  var requestOptions = {
      method: "POST",
      body: JSON.stringify({"comment": "very nice post"}),
      headers: {
        "Authorization":`Bearer ${props.store.getToken}`,
        "Content-Type": "application/json"
      },
      redirect: "follow",
  }
  const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
  fetch(`${apiURL}/user/posts/${postId}/like`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result.id);
      var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.store.getToken}`,
      },
    }
    fetch(`${apiURL}/user/posts?size=10&page_index=0`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPostList(result.posts);
        console.log(result.posts.map((item)=>item))
        // setdataloaded(false);
      }).catch((error) => console.log("error", error));
      getUser();
      setSpinner(false);
  }).catch((error) => console.log("error", error))}
  const onDislikePress = (userId, postId,likes_count) => {
    setSpinner(true);
    console.log("dislike "+userId+" "+postId+" "+likes_count)
      var requestOptions = {
        method: "GET",
        headers: {
          "Authorization":`Bearer ${props.store.getToken}`,
          "Content-Type": "application/json"
        },
        redirect: "follow",
      };
      const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
      fetch(`${apiURL}/user/posts/${postId}/likes`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
        result.likes.map((item)=>{
        if(item.created_by_user_id===userId){
          var requestOptions = {
          method: "DELETE",
          headers: {
            "Authorization":`Bearer ${props.store.getToken}`,
            "Content-Type": "application/json"
          },
          redirect: "follow",
          }
          fetch(`${apiURL}/user/posts/${postId}/likes/${item.id}`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result.id)
            var requestOptions = {
            method: "GET",
            redirect: "follow",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${props.store.getToken}`,
            },
          }
          fetch(`${apiURL}/user/posts?size=10&page_index=0`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
              setPostList(result.posts);
              console.log(result.posts.map((item)=>item))
              // setdataloaded(false);
            }).catch((error) => console.log("error", error));
            getUser();
            setSpinner(false);
          }).catch((error) => console.log("error", error));
        }})})
        .catch((error) => console.log("error", error));
   };
  const apiURL = "https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

  const getUser = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Authorization":`Bearer ${props.store.getToken}`,
        "Content-Type": "application/json"
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

    fetch(`${apiURL}/users/${props.store.getUid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserData(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    setSpinner(true);
    props.navigation.addListener("focus", () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.store.getToken}`,
      },
    };

    fetch(`${apiURL}/user/posts?size=10&page_index=0`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPostList(result.posts);
        console.log(result.posts.map((item)=>item))
        // setdataloaded(false);
        setSpinner(false);
      })
      .catch((error) => console.log("error", error));
        getUser();
      });
  }, []);
  const timeago = (timestamp)=>{
    console.log(timestamp);
    var difference = ((Date.now()-timestamp)/1000);
    var d = new Date(timestamp);
    var d1 = new Date(Date.now());
    function monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months+" months ago";
    }
    function treatAsUTC(date) {
        var result = new Date(date);
        result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
        return result;
    }

    function daysBetween(startDate, endDate) {
        var millisecondsPerDay = 24 * 60 * 60*1000;
        return parseInt((treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay)+" days ago";
    }
    var time = d.toTimeString( );
    console.log(d.toDateString());
    console.log(Date.now())
    console.log("difference ",difference)
    console.log(time)
    console.log(time.slice(0,2))
    console.log(time.slice(3,5))
    console.log(time.slice(6,8))
    console.log(Math.round(difference/60))
    console.log(Math.round(difference/3600))
    console.log(Math.round(difference/86400))
    console.log("These are the months ",parseInt(monthDiff(d,d1)))
    if(difference<60){
      return Math.round(difference)+" seconds ago";
    }
    else if(difference<3600){
      return Math.round(difference/60)+" minutes ago";
    }
    else if(difference<86400)
    {
      return Math.round(difference/3600)+" hours ago";
    }
    else if(difference<2678400){
    return daysBetween(timestamp, Date.now());
    }
    else if(difference>2678400 && (parseInt(monthDiff(d,d1))<12)  ){
      return monthDiff(d,d1);
    }else{
      time = d.toDateString();
      return time.slice(4);
    }
  }
  // useEffect(() => {
  //   const subscriber = db
  //     .collection("users")
  //     .doc(auth.currentUser.uid)
  //     .onSnapshot((doc) => {
  //       setImgUrl(doc.data().userImg);
  //     });
  // }, []);
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = () => {
    setRefreshing(true);
    getUser();
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.store.getToken}`,
      },
    };

    fetch(`${apiURL}/user/posts?size=10&page_index=0`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPostList(result.posts);
        console.log(result.posts.map((item)=>item))
        // setdataloaded(false);
      })
      .catch((error) => console.log("error", error));
    wait(1000).then(() => setRefreshing(false));
  }
    const [PostList, setPostList] = useState([]);
  // useState([
  //   {
  //     username: "Bessie Sima",
  //     location: "Delhi,India",
  //     img: {
  //       uri: "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbueSmUqh6xXBQmMsH1inrG1CdJrdVy-D1qxbzTgFMymzBMlBlkq754JLf1gIAsHtrLE&usqp=CAU",
  //     },
  //     likes: "12,123",
  //     caption: "Hell yeah!!!! It works <3",
  //     id: "1",
  //     comments: "112",
  //     timeago: "30s",
  //     post: {
  //       uri: "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg",
  //     },
  //     liked: false,
  //     color: color,
  //   },
  //   {
  //     username: "Vaibhav Dange",
  //     location: "Maharashtra,India",
  //     img: {
  //       uri: "https://i1.sndcdn.com/avatars-M68c3EWTC3yaREW0-mugr1A-t500x500.jpg",
  //     },
  //     likes: "120",
  //     caption: "Done with Dopeness!",
  //     id: "2",
  //     comments: "102",
  //     timeago: "50s",
  //     post: {
  //       uri: "https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg",
  //     },
  //     liked: false,
  //     color: color,
  //   },
  //   {
  //     username: "Sakshi Chavre",
  //     location: "Punjab,India",
  //     img: {
  //       uri: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
  //     },
  //     likes: "10,222",
  //     caption: "Noice! It works!!!",
  //     id: "3",
  //     comments: "200",
  //     timeago: "1m",
  //     post: {
  //       uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //     },
  //     liked: false,
  //     color: color,
  //   },
  // ]);
  const fileType = (file) => {
    if(file.toUpperCase().includes("MP4")||file.toUpperCase().includes("MOV")||file.toUpperCase().includes("WMV")||file.toUpperCase().includes("AVI")||file.toUpperCase().includes("AVCHD")||file.toUpperCase().includes("FLV")||file.toUpperCase().includes("F4V")||file.toUpperCase().includes("SWF")||file.toUpperCase().includes("MKV")||file.toUpperCase().includes("WEBM")||file.toUpperCase().includes("HTML5")||file.toUpperCase().includes("MPEG-2")){
      return "video";
    }else if(file.toUpperCase().includes("MP3")){
      return "audio";
    }
    else{
      return "photo";
    }
  }
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0)
  const onViewRef = React.useRef((viewableItems)=> {
    console.log("this is index of console",viewableItems.changed[0].index)
    setCurrentVisibleIndex(viewableItems.changed[0].index);
    // Use viewable items in state or as intended
})
const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  return (
    <Provider>
      <View style={styles.container}>
      <Spinner
          visible={spinner}
          textContent={'Loading...'}
          textStyle={{ color: '#FFF' }}
        />
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <TouchableOpacity
              style={{ paddingVertical: 10 }}
              onPress={() => {}}
              activeOpacity={0.5}
            >
              <Text style={styles.modaltext}>Report</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingVertical: 10 }}
              onPress={() => {}}
              activeOpacity={0.5}
            >
              <Text style={styles.modaltext}>Unfollow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingVertical: 10 }}
              onPress={() => {}}
              activeOpacity={0.5}
            >
              <Text style={styles.modaltext}>Share to</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingVertical: 10 }}
              onPress={() => {}}
              activeOpacity={0.5}
            >
              <Text style={styles.modaltext}>Save</Text>
            </TouchableOpacity>
          </Modal>
        </Portal>
        {/* ---------------------------------------------Header------------------------------------- */}

        {/* ---------------------------------------------Post View------------------------------------- */}
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={PostList}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          refreshControl={<RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
          horizontal={false}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  width: "100%",
                  height: 0,
                  backgroundColor: "darkgrey",
                }}
              ></View>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <View style={{ marginBottom: 0 }}>
                <View style={styles.header}>
                  {/* ---------------------------------------------Avatar------------------------------------- */}
                  <TouchableOpacity
                    onPress={() => props.navigation.openDrawer()}
                    activeOpacity={0.5}
                  >
                    <Avatar.Image
                      source={{uri: userData.profile_pic_url}}
                      size={35}
                    />
                  </TouchableOpacity>

                  {/* ---------------------------------------------Search------------------------------------- */}
                  {/* <View
                    style={{
                      flexDirection: "row",
                      width: "60%",
                      marginRight: 0,
                      alignItems: "center",
                      backgroundColor: "#efefff",
                      borderRadius: 10,
                      paddingLeft: 10,
                      borderWidth: 0.3,
                      borderColor: "#a1a1a1",
                    }}
                  >
                    <Ionicons name="search" size={22} color="#434b56" />
                    <TextInput
                      placeholder="Search"
                      placeholderTextColor="grey"
                      style={{
                        marginLeft: 15,
                        backgroundColor: "#efefff",
                        width: "75%",
                        height: 35,
                      }}
                    />
                  </View> */}
                  {/* ---------------------------------------------Right icons------------------------------------- */}
                  {/* <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      height: 24,
                      width: 25,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => props.navigation.navigate("AddPost")}
                  >
                    <FontAwesome
                      name="plus-square-o"
                      size={23}
                      color="#434b56"
                    />
                  </TouchableOpacity> */}
                  {/* <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                      height: 24,
                      width: 25,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onPress={() => props.navigation.navigate("Notfications")}>
                    <MaterialCommunityIcons
                      name="bell-outline"
                      size={26}
                      color="#434b56"
                    />
                  </TouchableOpacity> */}

                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("MyMessagesList")}
                    activeOpacity={0.5}
                    style={{
                      height: 25,
                      width: 25,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* <Feather name="message-circle" size={24} color="#434b56" /> */}
                    <Image
                      source={require("../assets/msg.png")}
                      style={{
                        height: 100,
                        width: 100,
                        tintColor: "#434b56",
                        position: "relative",
                        bottom: 1,
                      }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                </View>
                <StoryList navigation={props.navigation} />
                <View
                  style={{
                    width: "100%",
                    height: 2,
                    backgroundColor: "#f4f4f4",
                    marginBottom: 30,
                  }}
                ></View>
              </View>
            );
          }}
          renderItem={({ item, index }) => {
            return (
              <View style={{ flex: 1 }}>
                <View style={styles.post}>
                  {/* ---------------------------------------------User Info------------------------------------- */}
                  <View style={styles.userinfo}>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "70%",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{
                          height: 40,
                          width: 40,
                          borderRadius: 50,
                        }}
                        source={{uri:item.created_by_user.profile_pic_url}}
                      />
                      <View style={{ marginLeft: 15 }}>
                        <Text style={styles.username}>{item.created_by_user.name}</Text>
                        <Text style={styles.location}>{item.location.location_line}</Text>
                      </View>
                    </View>
                    <TouchableOpacity onPress={showModal}>
                      <Entypo
                        name="dots-three-vertical"
                        size={20}
                        color="#434b56"
                      />
                    </TouchableOpacity>
                  </View>
                  {/* ---------------------------------------------Post Image------------------------------------- */}
                  <TouchableWithoutFeedback>
                  {(fileType(item.image_url)==="video")?<VisibilitySensor onChange={()=>{console.log(currentVisibleIndex)}}><Video repeat={true} disableFocus={true} paused={index !== currentVisibleIndex} resizeMode="stretch" source={{ uri: item.image_url }} style={{ alignSelf: 'center',width: "100%", height: 300 }} muted={false} controls={false} /></VisibilitySensor>:<Image style={styles.postimage} source={{ uri:item.image_url }} />}
                  </TouchableWithoutFeedback>
                  {/* ---------------------------------------------Like Section------------------------------------- */}
                  <View style={styles.likesection}>
                    <View style={styles.likecmtshare}>
                      <TouchableOpacity
                        onPress={() => {item.is_auth_user_liked?onDislikePress(item.created_by_user.id,item.id,item.likes_count):onLikePress(item.created_by_user.id,item.id,item.likes_count)}}
                        activeOpacity={0.5}
                        style={{
                          height: 21,
                          width: 21,
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          top: 1,
                        }}
                      >
                        {/* <Text>{item.isliked ? "liked" : "notliked"}</Text> */}
                       { item.is_auth_user_liked    ?  <Image
                          // source={require("../assets/vict.png")}
                          source={require("../assets/skin_peace.png")}
                          style={{
                            height: 23,
                            width: 23,

                          }}
                          resizeMode="cover"
                        /> :   <Image
                          // source={require("../assets/vict.png")}
                          source={require("../assets/peace.png")}
                          style={{
                            height: 23,
                            width: 23,

                          }}
                          resizeMode="cover"
                        />}
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                          height: 21,
                          width: 21,
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          bottom: 1,
                        }}
                        onPress={()=>props.navigation.navigate("CommentList",{item:item})}
                      >
                        <Image
                          source={require("../assets/cmt.png")}
                          style={{
                            height: 125,
                            width: 125,
                          }}
                          resizeMode="cover"
                        />
                      </TouchableOpacity>
                      {(fileType(item.image_url)==="video")?<TouchableOpacity
                        onPress={()=>{myCustomShare1(item.image_url)}}
                        activeOpacity={0.5}
                        style={{
                          height: 21,
                          width: 21,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          source={require("../assets/send.png")}
                          style={{ height: 136, width: 136 }}
                          resizeMode="cover"
                        />
                      </TouchableOpacity>:<TouchableOpacity
                        onPress={()=>{myCustomShare(item.image_url)}}
                        activeOpacity={0.5}
                        style={{
                          height: 21,
                          width: 21,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          source={require("../assets/send.png")}
                          style={{ height: 136, width: 136 }}
                          resizeMode="cover"
                        />
                      </TouchableOpacity>}
                    </View>
                    <TouchableOpacity>
                      <Feather name="bookmark" size={23} color="#434b56" />
                    </TouchableOpacity>
                  </View>
                  {/* ---------------------------------------------Number of likes------------------------------------- */}
                  <View
                    style={{
                      width: "100%",
                      paddingLeft: 15,
                      marginBottom: 10,
                    }}
                  >
                    <Text style={styles.username}>{item.likes_count} likes</Text>
                  </View>
                  {/* ---------------------------------------------Number of likes------------------------------------- */}
                  <View style={styles.caption}>
                    <Text style={styles.username}>{item.created_by_user.name}</Text>
                    <Text style={styles.captiontext}> {item.caption}</Text>
                  </View>
                  <View style={{ width: "100%", paddingLeft: 15 }}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: "darkgrey",
                        fontWeight: "600",
                      }}
                    >
                      View all {item.comments_count} comments
                    </Text>
                    <Text style={{ fontSize: 11, color: "#c1c1c1" }}>
                      {timeago(item.timestamp)}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
<TouchableOpacity style={{ position: 'absolute',bottom: 10,right: 10,height:60,width:60,justifyContent:"center",alignItems:"center",backgroundColor:"#1F289A",borderRadius:60 }} onPress={() => props.navigation.navigate("AddPost")}><Feather name="plus" size={30} color="white" /></TouchableOpacity>
      </View>
    </Provider>
  );
}

export default inject("store")(observer(PostList));

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    borderWidth: 0,
    borderColor: "#E4E4E4",
  },
  post: {
    height: 530,
    width: "100%",
    backgroundColor: "white",
  },
  userinfo: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  avatarview: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#202AA8",
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    fontSize: 14,
    fontWeight: "700",
    color: "#434b56",
  },
  location: {
    fontSize: 12,
    color: "#434b56",
    marginBottom: 5,
  },
  postimage: {
    height: 300,
    width: "100%",
  },
  postvideo: {
    height: 300,
    width: "100%",
  },
  likesection: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingTop: 8,
  },
  likecmtshare: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    alignItems: "flex-start",
  },
  caption: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  captiontext: {
    fontSize: 14,
    color: "#434b56",
  },
  bottomTab: {
    height: "10%",
    backgroundColor: "white",
  },
  modaltext: {
    color: "#434b56",
    fontSize: 14,
    fontWeight: "600",
    paddingLeft: 5,
  },
});

{
  /*import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "react-native-vector-icons";
import { ScrollView } from "react-native";
import { Avatar } from "react-native-paper";
import StoryList from "./StoryList";
import { LogBox } from "react-native";
import { auth, db } from "../Config";

export default class PostList extends Component {
  state = {
    imgUrl: "",
  };

  constructor(props) {
    super(props);
  }

  render() {
    const subscriber = db
      .collection("users")
      .doc(auth.currentUser.uid)
      .onSnapshot((doc) => {
        this.setState({ imgUrl: doc.data().userImg });
      });

    let PostList = [
      {
        username: "Bessie Sima",
        location: "Delhi,India",
        img: {
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbueSmUqh6xXBQmMsH1inrG1CdJrdVy-D1qxbzTgFMymzBMlBlkq754JLf1gIAsHtrLE&usqp=CAU",
        },
        likes: "12,123",
        caption: "Hell yeah!!!! It works <3",
        id: "1",
        comments: "112",
        timeago: "30s",
        post: {
          uri: "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg",
        },
      },
      {
        username: "Vaibhav Dange",
        location: "Maharashtra,India",
        img: {
          uri: "https://i1.sndcdn.com/avatars-M68c3EWTC3yaREW0-mugr1A-t500x500.jpg",
        },
        likes: "120",
        caption: "Done with Dopeness!",
        id: "2",
        comments: "102",
        timeago: "50s",
        post: {
          uri: "https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg",
        },
      },
      {
        username: "Sakshi Chavre",
        location: "Punjab,India",
        img: {
          uri: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
        },
        likes: "10,222",
        caption: "Noice! It works!!!",
        id: "3",
        comments: "200",
        timeago: "1m",
        post: {
          uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      },
    ];

    return (
      <View style={styles.container}>

        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={PostList}
          horizontal={false}
          ListHeaderComponent={() => {
            return (
              <View>
                <View style={styles.header}>

                  <TouchableOpacity
                    onPress={() => this.props.navigation.openDrawer()}
                    activeOpacity={0.5}
                  >
                    <Avatar.Image
                      source={{
                        uri: this.state.imgUrl,
                      }}
                      size={35}
                    />
                  </TouchableOpacity>


                  <View
                    style={{
                      flexDirection: "row",
                      width: "65%",
                      marginRight: 0,
                      alignItems: "center",
                      backgroundColor: "#f4f4f4",
                      borderRadius: 20,
                      paddingLeft: 10,
                    }}
                  >
                    <Ionicons name="search" size={22} color="#434b56" />
                    <TextInput
                      placeholder="Search"
                      placeholderTextColor="grey"
                      style={{
                        marginLeft: 15,
                        backgroundColor: "#f4f4f4",
                        width: "75%",
                        height: 35,
                      }}
                    />
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => this.props.navigation.navigate("AddPost")}
                  >
                    <FontAwesome
                      name="plus-square-o"
                      size={24}
                      color="#434b56"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("MyMessagesList")
                    }
                    activeOpacity={0.5}
                  >
                    <Feather name="message-circle" size={24} color="#434b56" />
                  </TouchableOpacity>
                </View>
                <StoryList navigation={this.props.navigation} />
                <View
                  style={{
                    width: "100%",
                    height: 2,
                    backgroundColor: "#f4f4f4",
                    marginBottom: 30,
                  }}
                ></View>
              </View>
            );
          }}
          renderItem={({ item, index }) => {
            return (
              <View style={{ flex: 1 }}>
                <View style={styles.post}>

                  <View style={styles.userinfo}>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "70%",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        style={{ height: 40, width: 40, borderRadius: 50 }}
                        source={item.img}
                      />
                      <View style={{ marginLeft: 15 }}>
                        <Text style={styles.username}>{item.username}</Text>
                        <Text style={styles.location}>{item.location}</Text>
                      </View>
                    </View>
                    <TouchableOpacity>
                      <Entypo
                        name="dots-three-vertical"
                        size={22}
                        color="#434b56"
                      />
                    </TouchableOpacity>
                  </View>

                  <Image style={styles.postimage} source={item.post} />

                  <View style={styles.likesection}>
                    <View style={styles.likecmtshare}>
                      <FontAwesome5 name="heart" size={21} color="#434b56" />
                      <MaterialCommunityIcons
                        name="message-outline"
                        size={21}
                        color="#434b56"
                      />
                      <Feather name="send" size={19} color="#434b56" />
                    </View>
                    <Feather name="bookmark" size={23} color="#434b56" />
                  </View>

                  <View
                    style={{
                      width: "100%",
                      paddingLeft: 15,
                      marginBottom: 10,
                    }}
                  >
                    <Text style={styles.username}>{item.likes} likes</Text>
                  </View>

                  <View style={styles.caption}>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text style={styles.captiontext}> {item.caption}</Text>
                  </View>
                  <View style={{ width: "100%", paddingLeft: 15 }}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: "darkgrey",
                        fontWeight: "600",
                      }}
                    >
                      View all {item.comments} comments
                    </Text>
                    <Text style={{ fontSize: 11, color: "#c1c1c1" }}>
                      {item.timeago} ago
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
LogBox.ignoreLogs(["Warning: ..."]);
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    borderWidth: 0,
    borderColor: "#E4E4E4",
  },
  post: {
    height: 530,
    width: "100%",
    backgroundColor: "white",
  },
  userinfo: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  avatarview: {
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#202AA8",
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    fontSize: 14,
    fontWeight: "700",
    color: "#434b56",
  },
  location: {
    fontSize: 12,
    color: "#434b56",
    marginBottom: 5,
  },
  postimage: {
    height: 300,
    width: "100%",
  },
  likesection: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingTop: 8,
  },
  likecmtshare: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    alignItems: "flex-start",
  },
  caption: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  captiontext: {
    fontSize: 14,
    color: "#434b56",
  },
  bottomTab: {
    height: "10%",
    backgroundColor: "white",
  },
});
*/
}

{
  /* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
}

// setLiked((liked) => ({ liked: !liked }));

// const { PostList } = setPostList;
// let arr = PostList.map((item, index) => {
//   if (ind == index) {
//     item.isliked = !item.isliked;
//   }
//   return { ...item };
// });
// setPostList(arr);
// console.log("the arr is ==> ", arr);
{
  /* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
}
// let arr = PostList.map((item, index) => {
//   item.isliked = false;
//   return { ...item };
// });
// setPostList(arr);
