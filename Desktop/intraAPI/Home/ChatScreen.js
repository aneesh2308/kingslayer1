import React,{ useState , useEffect} from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Avatar } from "react-native-paper";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import { inject, observer } from "mobx-react";

const ChatScreen = ( props) => {
  const {receiver,userData} = props.route.params;
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  var prevDate=null;
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    width: "80%",
    height: 300,
    backgroundColor: "white",
    alignSelf: "center",
    padding: 15,
  };
  const [messages, setMessages]=useState([]);
  const getChat = (chatId) => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/app/api";
    fetch(`${apiURL}/chat?chatId=${chatId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result ",result);

        setMessages(result);
// getChat(cid)

      })
      .catch((error) =>{ console.log("error", error);
// getChat(cid)

    });
  };
  const [cid, setcid]=useState("");

  useEffect(() => {
    createChat(receiver.userId);

  }, [])

  const createChat = (userB) => {
    var requestOptions = {
      method: "POST",
      body: JSON.stringify({
        user:[userData.id,userB]
      }),

      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/app/api";
    console.log(requestOptions);
    fetch(`${apiURL}/chat`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("create chat result ",result);
       let x= result.find(item=>item.users.includes(receiver.userId))
       console.log(x);
        setcid(x["chatId"])
       getChat(x["chatId"]);
      })
      .catch((error) => console.log("error", error));
  };
  const sendMessage = () => {
    var requestOptions = {
      method: "PUT",
      body: JSON.stringify({
        sendby:userData.id,
        message:message,
        chatId:cid
      }),

      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/app/api";
    console.log(requestOptions);
    fetch(`${apiURL}/chat`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("send message result ",result);
        setMessage("")
        getChat(cid);

      })
      .catch((error) => console.log("error", error));
  };
  return (
    <Provider>
      <View style={styles.container}>
        {/* ---------------------------------------------Header------------------------------------- */}
        <View style={styles.header}>
          <View style={{ width: "30%" }}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              activeOpacity={0.5}
            >
              <Ionicons name="chevron-back-outline" size={35} color="#434b56" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "40%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar.Image size={40}
             source={{uri: receiver.profile_pic_url}}
 />
            <Text
              style={{
                fontWeight: "700",
                color: "#434b56",
                fontSize: 15,
                marginLeft: 10,
              }}
            >
              {receiver.name}
            </Text>
          </View>
          <View
            style={{
              width: "30%",
              justifyContent: "flex-end",
              flexDirection: "row",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <TouchableOpacity activeOpacity={0.5}>
              <Ionicons
                name="videocam-outline"
                size={32}
                color="#434b56"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={showModal}
              style={{ marginLeft: 10 }}
              activeOpacity={0.5}
            >
              <Feather name="info" size={29} color="#434b56" />
            </TouchableOpacity>
          </View>
        </View>
        {/*----------------------------------------------Modal---------------------------- */}
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <View
              style={{ flex: 1, justifyContent: "center", paddingLeft: 15 }}
            >
              <Text style={{ color: "#434b56" }}>Video Chat</Text>
            </View>
            <View
              style={{ flex: 1, justifyContent: "center", paddingLeft: 15 }}
            >
              <Text style={{ color: "#434b56" }}>Mute Messages</Text>
            </View>
            <View
              style={{ flex: 1, justifyContent: "center", paddingLeft: 15 }}
            >
              <Text style={{ color: "#434b56" }}>Unfollow</Text>
            </View>
            <View
              style={{ flex: 1, justifyContent: "center", paddingLeft: 15 }}
            >
              <Text style={{ color: "#434b56" }}>Block</Text>
            </View>
            <View
              style={{ flex: 1, justifyContent: "center", paddingLeft: 15 }}
            >
              <Text style={{ color: "#434b56" }}>Report</Text>
            </View>
          </Modal>
        </Portal>
        {/* ---------------------------------------------Chat------------------------------------- */}
        {/* <ScrollView style={{ width: "100%", padding: 0, height: "80%" }}> */}
        <FlatList
        showsVerticalScrollIndicator={false}
        data={messages}
        keyExtractor={(item) => item.sendTime}
        renderItem={({ item,index })=> {
          var currDate=new Date(item.sendTime).toLocaleDateString();

          var comp;

         if(item.sendBy!=undefined && item.sendBy!=userData.id){
            comp=(
              <View>
             { currDate!=prevDate?<View
            style={{
              width: "100%",
              alignItems: "center",
              height: 40,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "grey", fontSize: 14 }}>
              {currDate}
            </Text>
          </View>:<View></View>}
            <View style={styles.reciever}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 60,
                  backgroundColor: "white",
                  elevation: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 15,
                }}
              >
                <Avatar.Image size={55}
                 source={{uri: receiver.profile_pic_url}}
 />
              </View>
              <View style={styles.recievermsgcontainer}>
                <Text style={styles.recievermsg}>
                {item.message}
                </Text>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#434b56", fontSize: 13 }}>{new Date(item.sendTime).toLocaleTimeString('en-US',{
                    hour12:true,
                    hour:'numeric',
                    minute:'numeric'
                  })}</Text>
                  <Entypo name="dot-single" size={24} color="#434b56" />
                  <Text style={{ color: "#434b56", fontSize: 13 }}>Seen</Text>
                </View>
              </View>
            </View>
            </View>
            );
          }else{
              comp=(
                <View>
             { currDate!=prevDate?<View
            style={{
              width: "100%",
              alignItems: "center",
              height: 40,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "grey", fontSize: 14 }}>
              {currDate}
            </Text>
          </View>:<View></View>}
            <View style={styles.sender}>
                  <View style={styles.sendermsgcontainer}>
                <Text style={styles.sendermsg}>{item.message}</Text>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <Text style={{ color: "#E4E4E4", fontSize: 13 }}>{new Date(item.sendTime).toLocaleTimeString('en-US',{hour12:true,hour:'numeric',minute:'numeric'
                  })}</Text>
                  <Entypo name="dot-single" size={24} color="#E4E4E4" />
                  <Text style={{ color: "#E4E4E4", fontSize: 13 }}>Seen</Text>
                </View>
              </View>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 60,
                  backgroundColor: "white",
                  elevation: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 15,
                }}
              >
                <Avatar.Image
                  size={55}
                  source={{uri: userData.profile_pic_url}}
                />
              </View>
            </View></View>
              );
          }
          prevDate=currDate;
          return comp;
          }}
        />

          {/* ---------------------------------------------Reciever------------------------------------- */}
          {/* <View style={styles.reciever}>
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 60,
                backgroundColor: "white",
                elevation: 10,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <Avatar.Image size={55} source={item.avataruri} />
            </View> */}
            {/* ---------------------------------------------Reciever msg------------------------------------- */}
          {/*  <View style={styles.recievermsgcontainer}>
              <Text style={styles.recievermsg}>
                It is a long established fact that a reader will be distracted
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#434b56", fontSize: 13 }}>7:50 PM</Text>
                <Entypo name="dot-single" size={24} color="#434b56" />
                <Text style={{ color: "#434b56", fontSize: 13 }}>Seen</Text>
              </View>
            </View>
          </View> */}
          {/* ---------------------------------------------Sender------------------------------------- */}
          {/* <View style={styles.sender}>
            {/* ---------------------------------------------Sender msg------------------------------------- */}
          {/*  <View style={styles.sendermsgcontainer}>
              <Text style={styles.sendermsg}>It is a long established</Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ color: "#E4E4E4", fontSize: 13 }}>7:50 PM</Text>
                <Entypo name="dot-single" size={24} color="#E4E4E4" />
                <Text style={{ color: "#E4E4E4", fontSize: 13 }}>Seen</Text>
              </View>
            </View>
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 60,
                backgroundColor: "white",
                elevation: 10,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 15,
              }}
            >
              <Avatar.Image
                size={55}
                source={{
                  uri: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/179676946/original/bbcd7b485cc08faeb6a17b274543b0a3c2495bce/pack-of-ai-generated-faces.png",
                }}
              />
            </View>
          </View> */}
          {/*------------------------------------------------Time------------------------------------------------ */}
          {/* <View
            style={{
              width: "100%",
              alignItems: "center",
              height: 40,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "grey", fontSize: 14 }}>
              Today at 9:22 AM
            </Text>
          </View> */}
          {/* ---------------------------------------------Reciever------------------------------------- */}
          {/* <View style={styles.reciever}>
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 60,
                backgroundColor: "white",
                elevation: 10,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
              }}
            >
              <Avatar.Image size={55} source={item.avataruri} />
            </View>
            {/* ---------------------------------------------Reciever msg------------------------------------- */}
          {/*  <View style={styles.recievermsgcontainer}>
              <Text style={styles.recievermsg}>
                It is a long established fact that a reader will be distracted
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#434b56", fontSize: 13 }}>7:50 PM</Text>
                <Entypo name="dot-single" size={24} color="#434b56" />
                <Text style={{ color: "#434b56", fontSize: 13 }}>Seen</Text>
              </View>
            </View>
          </View> */}
          {/* ---------------------------------------------Sender------------------------------------- */}
          {/* <View style={styles.sender}> */}
            {/* ---------------------------------------------Sender msg------------------------------------- */}
            {/* <View style={styles.sendermsgcontainer}>
              <Text style={styles.sendermsg}>
                It is a long establishedIt is a long established fact that a
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Text style={{ color: "#E4E4E4", fontSize: 13 }}>7:50 PM</Text>
                <Entypo name="dot-single" size={24} color="#E4E4E4" />
                <Text style={{ color: "#E4E4E4", fontSize: 13 }}>Seen</Text>
              </View>
            </View>
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 60,
                backgroundColor: "white",
                elevation: 10,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 15,
              }}
            >
              <Avatar.Image
                size={55}
                source={{
                  uri: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/179676946/original/bbcd7b485cc08faeb6a17b274543b0a3c2495bce/pack-of-ai-generated-faces.png",
                }}
              />
            </View>
          </View> */}

        {/* </ScrollView> */}
        <View style={styles.msgsection}>
          <View
            style={{
              width: "13%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SimpleLineIcons name="emotsmile" size={30} color="#434b56" />
          </View>
          <View
            style={{
              width: "60%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              placeholder="Type a message...."
              placeHolderTextColor="#434b56"
              style={styles.entermsg}
              onChangeText={(txt)=>setMessage(txt)}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={sendMessage}
            style={{
              width: "13%",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 15,
            }}
          >
          <View

          >
            <Ionicons name="send" size={35} color="#434b56" />
          </View>
          </TouchableOpacity>
          <View
            style={{
              width: "13%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome name="paperclip" size={30} color="#434b56" />
          </View>
        </View>
      </View>
    </Provider>
  );
};

export default inject("store")(observer(ChatScreen));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: "10%",
    marginBottom: 10,
  },
  reciever: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    marginVertical: 5,
  },
  recievermsgcontainer: {
    backgroundColor: "#E4E4E4",
    width: 250,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20,
  },
  recievermsg: {
    color: "black",
    fontSize: 13,
    fontWeight: "100",
  },
  sender: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 5,
  },
  sendermsgcontainer: {
    backgroundColor: "#202AA8",
    width: 250,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20,
  },
  sendermsg: {
    color: "white",
    fontSize: 13,
    fontWeight: "100",
  },
  msgsection: {
    height: "10%",
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  entermsg: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    height: 50,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "#434b56",
  },
});