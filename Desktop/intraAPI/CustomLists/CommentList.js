import React from 'react';
import {
  Platform,
  PlatformColor,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import EmojiBoard from 'react-native-emoji-board';
import { inject, observer } from "mobx-react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
const HASHTAG_FORMATTER = string => {
  return string.split(/((?:^|\s)(?:#[a-z\d-]+))/gi).filter(Boolean).map((v,i)=>{
    if(v.includes('#')){
      return <Text key={i} style={{color:'blue'}}>{v}</Text>
    }   else{
      return <Text key={i}>{v}</Text>
    }
  })
};

const Comment = (props) => {
  const [show, setShow] = React.useState(false);
  const [reply, setReply] = React.useState(false);
    const onClick = emoji => {
        console.log("emoji ka naam",emoji.name);
        console.log("emoji ka code",emoji.code);
        setText(text+emoji.code);
        setShow(false)
    };
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
  const refreshofpage = () => {
    console.log(like,"refresh");
    setLike(like);
  }
  const [userData, setUserData] = React.useState([]);
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
  const getComment = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Authorization":`Bearer ${props.store.getToken}`,
        "Content-Type": "application/json"
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
    
    fetch(`${apiURL}/user/posts/${props.route.params.item.id}/comments`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setComments(result.comments);
      })
      .catch((error) => console.log("error", error));
  };

React.useEffect(() => {
  getUser();
  getComment();
}, [])
  const [comments, setComments] = React.useState([]);
        // {
        //     "id": "HCzDGuWTqBv4loVBA5wJ",
        //     "comment": "very nice post",
        //     "created_by_user_id": "uQMlpdiPx0R4S3ywId1S",
        //     "created_by_user_photo":"https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
        //     "created_by_user_name":"Vaibhav",
        //     "timestamp": 1626550056300
        // },
        // {
        //     "id": "HCzDGuWTqBv4loVBA5wJ",
        //     "comment": "very nice post",
        //     "created_by_user_id": "uQMlpdiPx0R4S3ywId1S",
        //     "created_by_user_photo":"https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
        //     "created_by_user_name":"Vaibhav1",
        //     "timestamp": 1626550056300
        // },
        // {
        //     "id": "HCzDGuWTqBv4loVBA5wJ",
        //     "comment": "very nice post",
        //     "created_by_user_id": "uQMlpdiPx0R4S3ywId1S",
        //     "created_by_user_photo":"https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
        //     "created_by_user_name":"Vaibhav2",
        //     "timestamp": 1626550056300
        // },
        // {
        //     "id": "HCzDGuWTqBv4loVBA5wJ",
        //     "comment": "very nice post",
        //     "created_by_user_id": "uQMlpdiPx0R4S3ywId1S",
        //     "created_by_user_photo":"https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
        //     "created_by_user_name":"Vaibhav3",
        //     "timestamp": 1626684222000
        // },
        // {
        //     "id": "HCzDGuWTqBv4loVBA5wJ",
        //     "comment": "very nice post",
        //     "created_by_user_id": "uQMlpdiPx0R4S3ywId1S",
        //     "created_by_user_photo":"https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
        //     "created_by_user_name":"Vaibhav4",
        //     "timestamp": 1626644736000,
        // },
  const [text, setText] = React.useState("");
  const [like, setLike] = React.useState([{toggled:false},{toggled:false},{toggled:false},{toggled:false},{toggled:false}]);
  const [username, setUserName] = React.useState("");
  return (
    <View style={styles.container}>
       <View style={{flexDirection: "row",alignItems: "center",width: "100%",height: 50,borderBottomWidth: 0.17,borderBottomColor: "darkgrey"}}>
        <View style={{ width: "90%", flexDirection: "row", alignItems: "center"}}>
          <TouchableOpacity onPress={() => props.navigation.goBack()} activeOpacity={0.5}>
            <Ionicons name="md-chevron-back-outline" size={35} color="#434B56"/>
          </TouchableOpacity>
          <Text style={{fontSize: 24,fontWeight: "bold",color: "#434B56",marginLeft: 15,}}>Comments</Text>
        </View>
        <View
          style={{width: "10%",alignItems: "flex-end",}}>
          <Avatar.Image
            source={{uri: userData.profile_pic_url}}
            size={35}
            style={{ marginRight: 20 }}/>
        </View>
      </View>   
    <Text style={{ marginBottom:"2%",marginTop:"5%",alignSelf:"flex-start",marginLeft:"5%" }}>{HASHTAG_FORMATTER(`${props.route.params.item.caption}`)}</Text>
    <Text style={{ marginBottom:"2%",color: "#434B56",fontSize: 12,marginLeft:"5%" }}>{timeago(props.route.params.item.timestamp)}</Text>
    <View style={{ marginBottom:"3%",marginLeft:"5%",width:"90%",backgroundColor:"grey",height:0.25 }}></View>
        <View style={{ height:"78%" }}>
        {comments.length===0?<View style={{flex: 1,alignItems: "center",justifyContent: "center"}}>
          <MaterialCommunityIcons name={"magnify"} size={24} color="#434B56" />
          <Text style={{ color: "#434B56" }}>No Comments</Text>
        </View>:<FlatList
            numColumns={1}
            horizontal={false}
            data={comments}
            renderItem={({ item,index}) => (
              <View style={{ flexDirection:"row",marginBottom:"7%" }}>
              <Avatar.Image
            source={{uri:item.created_by_user.profile_pic_url}}
            size={35}
            style={{ marginLeft:"5%",marginRight:"2%" }}/>
                <View style={{ width:"42%" }}>
                    <View style={{ flexDirection:"row" }}>
                    <Text style={{ fontWeight:"bold" }}>{item.created_by_user.name}</Text>
                    <View style={{ marginLeft:"10%",marginTop:8,borderRadius:5,width:5,height:5,backgroundColor:"grey" }}></View>
                    <Text style={{ alignSelf:"center",marginLeft:"2%",fontSize:11 }}>{timeago(item.timestamp)}</Text>
                    </View>
                    <Text>{ item.comment }</Text>
                </View>
                <TouchableOpacity onPress={()=>{setReply(true);setUserName(item.created_by_user.name)}} style={{ marginLeft:"20%",alignSelf:"center" }}>
                <Text style={{ fontSize:11 }}>Reply</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft:"5%",alignSelf:"center" }} onPress={()=>{
                  const likelist = like;
                  likelist[index].toggled = !like[index].toggled;
                  setLike(likelist)
                  console.log(like,"this is the link");
                  refreshofpage();
                }}>
                <Ionicons name={like[index].toggled?"heart":"heart-outline"} size={20} color={like[index].toggled?"red":"#434B56"}/>
                </TouchableOpacity>
              </View>  
            )}
        />}
       {(reply)?<View style={{ justifyContent:"center",width:"100%",backgroundColor:"#202aa8",height:"8%" }}>
        <Text style={{ marginLeft:"5%",color:"white" }}>Replying to @{username}</Text>
       </View>:null}
       <View style={{ marginBottom:"3%",width:"100%",backgroundColor:"grey",height:0.25 }}></View>
        <View style={{ flexDirection:"row" }}>
        <TouchableOpacity onPress={() => setShow(!show)} style={{ alignSelf:"center",marginLeft:5 }}>
            <SimpleLineIcons name="emotsmile" size={27} color="grey" />
            </TouchableOpacity>
            <TextInput value={text} placeholderTextColor="grey" style={{ width: "76%",fontSize: 12,color: "black",padding: 10,marginLeft:"1%",borderColor:"grey",borderWidth:1,borderRadius:20,marginRight:"1%", }} placeholder='Type a message...' onChangeText={(text) => setText(text)} />
            <TouchableOpacity onPress={()=>{
              var requestOptions = {
                method: "POST",
                body: JSON.stringify({comment: text}),
                headers: {
                  "Authorization":`Bearer ${props.store.getToken}`,
                  "Content-Type": "application/json"
                },
                redirect: "follow",
            }
              const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
              
              fetch(`${apiURL}/user/posts/${props.route.params.item.id}/comment`, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                  console.log(result)
                  getComment();
                  setText("")
                })
                .catch((error) => console.log("error", error));
            }} style={{ justifyContent:"center",alignItems:"center",alignSelf:"center",borderRadius:40,width:40,height:40,backgroundColor:"blue" }}>
            <Feather name="send" size={19} color="white" />
            </TouchableOpacity>
            <EmojiBoard showBoard={show} onClick={onClick} />
        </View>
    </View>
  </View>
  )};

export default inject("store")(observer(Comment));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:"5%",
    marginBottom:"7%"
  }
});
