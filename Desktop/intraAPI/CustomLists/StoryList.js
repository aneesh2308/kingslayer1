import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import { inject, observer } from "mobx-react";

function StoryList(props) {
  const [userData, setUserData] = useState([]);
  const [story, setStory] = useState({});
  const getStory = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Authorization":`Bearer ${props.store.getToken}`,
        "Content-Type": "application/json"
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
    fetch(`${apiURL}/user/stories/feed?size=10&page_index=0`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.stories);
        setStory(result.stories)
      })
      .catch((error) => console.log("error", error));
  };
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
  getUser();
  getStory();
  // getStory();
}, [])
  let story1 = [
    {
      id: "2",
      username: "Piyu",
      timestamp:"",
      img: {
        uri: "https://i1.sndcdn.com/avatars-M68c3EWTC3yaREW0-mugr1A-t500x500.jpg",
      },
      storyimgs: [
        {
          imgurl: {
            uri: "https://i.pinimg.com/originals/83/64/66/83646654668bf9ae412f45bb2e417ddf.jpg",
          },
          id: "1",
        },
        {
          imgurl: {
            uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          },
          id: "2",
        },
        {
          imgurl: {
            uri: "https://static.toiimg.com/photo/imgsize-74502,msid-82791170/82791170.jpg",
          },
          id: "3",
        },
      ],
    },
    {
      username: "Sakshi Chavre",
      timestamp:"",
      img: {
        uri: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
      },
      id: "3",
      storyimgs: [
        {
          imgurl: {
            uri: "https://images.pexels.com/photos/8556261/pexels-photo-8556261.jpeg?auto=compress&cs=tinysrgb&dpr=1",
          },
          id: "1",
        },
      ],
    },
    {
      username: "Vaibhav",
      timestamp:"",
      img: {
        uri: "https://cdn.wallpapersafari.com/93/96/5eP308.jpg",
      },
      id: "4",
      storyimgs: [
        {
          imgurl: {
            uri: "https://images.pexels.com/photos/8585444/pexels-photo-8585444.jpeg?auto=compress&cs=tinysrgb&dpr=1",
          },
          id: "1",
        },
      ],
    },
    {
      username: "Tanya",
      timestamp:"",
      img: {
        uri: "https://static.toiimg.com/photo/imgsize-74502,msid-82791170/82791170.jpg",
      },
      id: "5",
      storyimgs: [
        {
          imgurl: {
            uri: "https://images.pexels.com/photos/6815268/pexels-photo-6815268.jpeg?auto=compress&cs=tinysrgb&dpr=1",
          },
          id: "1",
        },
      ],
    },
    {
      username: "Tanisha",
      timestamp:"",
      img: {
        uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      id: "6",
      storyimgs: [
        {
          imgurl: {
            uri: "https://images.pexels.com/photos/7425185/pexels-photo-7425185.jpeg?auto=compress&cs=tinysrgb&dpr=1",
          },
          id: "1",
        },
      ],
    },
    {
      username: "Indra",
      timestamp:"",
      img: {
        uri: "https://1.bp.blogspot.com/-S6jFmpbgzHA/XZYGToPEoEI/AAAAAAAAmCs/5omQruzvMEsy-GpHJ_TB56zoJoBqSvhdQCNcBGAsYHQ/s1600/Alone%2BImages%2BWhatsapp%2BDp%2B%25281%2529.jpeg",
      },
      id: "7",
      storyimgs: [
        {
          imgurl: {
            uri: "https://images.pexels.com/photos/3639604/pexels-photo-3639604.jpeg?auto=compress&cs=tinysrgb&dpr=1",
          },
          id: "1",
        },
      ],
    },
    {
      username: "Meghana",
      timestamp:"",
      img: {
        uri: "https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=",
      },
      id: "8",
      storyimgs: [
        {
          imgurl: {
            uri: "https://images.pexels.com/photos/8285226/pexels-photo-8285226.jpeg?auto=compress&cs=tinysrgb&dpr=1",
          },
          id: "1",
        },
      ],
    },
    {
      username: "Srushti",
      timestamp:"",
      img: {
        uri: "https://static.autox.com/uploads/2019/12/Tata-Altroz-static-side-profile-g.jpg",
      },
      id: "9",
      storyimgs: [
        {
          imgurl: {
            uri: "https://images.pexels.com/photos/8567609/pexels-photo-8567609.jpeg?auto=compress&cs=tinysrgb&dpr=1",
          },
          id: "1",
        },
      ],
    },
    {
      username: "Soniya",
      timestamp:"",
      img: {
        uri: "https://media.istockphoto.com/photos/couple-in-love-picture-id1069131934?k=6&m=1069131934&s=612x612&w=0&h=TLnEENgg4i6W45ZJzkS00SlUZ3LAU3YWxCc9di5etgc=",
      },
      id: "10",
      storyimgs: [
        {
          imgurl: {
            uri: "https://images.pexels.com/photos/6154808/pexels-photo-6154808.jpeg?auto=compress&cs=tinysrgb",
          },
          id: "1",
        },
        {
          imgurl: {
            uri: "https://images.pexels.com/photos/8285226/pexels-photo-8285226.jpeg?auto=compress&cs=tinysrgb&dpr=1",
          },
          id: "2",
        },
      ],
    },
  ];
  return (
    <View style={styles.storycontainer}>
      <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => props.navigation.navigate("AddStory")}
              >
                <View
                  style={{
                    marginHorizontal: 0,
                    height: 80,
                    width: 70,
                    alignItems: "center",
                    backgroundColor: "white",
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 50,
                      height: 50,
                    }}
                    source={{uri:userData.profile_pic_url}}
                    imageStyle={{ borderRadius: 60 }}
                  >
                    <View style={styles.plus}>
                      <Entypo name="plus" size={13} color="white" />
                    </View>
                  </ImageBackground>
                  <Text
                    style={{
                      color: "#434b56",
                      fontSize: 11,
                      marginTop: 5,
                      maxWidth: 60,
                    }}
                  >
                    Add Story
                  </Text>
                </View>
              </TouchableOpacity>
        <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={story}
        horizontal={true}
        renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => props.navigation.navigate("ViewStory", { story : story, storyIndex: index})}
              >
                <View
                  style={{
                    marginHorizontal: 0,
                    height: 80,
                    width: 70,
                    alignItems: "center",
                    backgroundColor: "white",
                  }}
                >
                  <View style={styles.avatarview}>
                    <Image
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: 45,
                      }}
                      source={item.img}
                    />
                  </View>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{
                      color: "#434b56",
                      fontSize: 11,
                      marginTop: 5,
                      maxWidth: 60,
                      textAlign: "center",
                    }}
                  >
                    {item.username}
                  </Text>
                </View>
              </TouchableOpacity>
            )
            /*return (
              <TouchableOpacity activeOpacity={0.5}>
                <View
                  style={{
                    marginHorizontal: 0,
                    height: 70,
                    width: 100,
                    alignItems: "center",
                  }}
                >
                  <View style={styles.avatarview}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                      }}
                      source={item.img}
                    />
                  </View>
                  <Text
                    style={{ color: "#434b56", fontSize: 11, marginTop: 5 }}
                  >
                    {item.username}
                  </Text>
                </View>
              </TouchableOpacity>
            );*/
  
        }}
      />
    </View>
  );
}
export default inject("store")(observer(StoryList));

const styles = StyleSheet.create({
  storycontainer: {
    width: "100%",
    paddingHorizontal: 0,
    backgroundColor: "white",
    paddingTop: 10,
    height: 90,
    elevation: 5,
    marginTop: 0,
    flexDirection:"row"
  },
  avatarview: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#202AA8",
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    height: 15,
    width: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#202AA8",
    position: "absolute",
    top: 37,
    left: 40,
  },
});
