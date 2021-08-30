import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity
} from "react-native";
import { ProgressBar } from 'react-native-paper'
import GestureRecognizer from 'react-native-swipe-gestures';
import Entypo from 'react-native-vector-icons/Entypo';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ViewStory = ({ navigation, route }) => {
  const story = route.params.story;
  const [storyIndex, setStoryIndex] = useState(route.params.storyIndex)
  const [imgIndex, setImgIndex] = useState(0)
  const [progress, setProgress] = useState(0.1)

  //console.log("storyindex ", storyIndex," imgIndex ", imgIndex)
  //console.log("strimgs ",story[storyIndex].storyimgs);

  useEffect(() => {
    let timer1 =  setTimeout(() => changeIndex(), 10000);
    let timer2 =  setTimeout(() => setProgress(progress + 0.1), 1000);
    
    if(Math.floor(progress) == 1.0) changeIndex()

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    }
  })

  const changeIndex = () => {
    setProgress(0.1)

    if(storyIndex == story.length - 1 && imgIndex == story[storyIndex].storyimgs.length - 1)
      navigation.goBack();
    
    else if(imgIndex == story[storyIndex].storyimgs.length - 1) {
      setImgIndex(0)
      setStoryIndex(storyIndex + 1)
    }

    else setImgIndex(imgIndex + 1)
  }

  return (
    <View style={styles.container}>
    <GestureRecognizer
      onSwipeLeft={() => {
        if(storyIndex < story.length - 1) {
          setProgress(0.1)
          setStoryIndex(storyIndex + 1); 
          setImgIndex(0)
        }
      }}
      onSwipeRight={() => {
        if(storyIndex > 0) {
          setProgress(0.1)
          setStoryIndex(storyIndex - 1); 
          setImgIndex(0)
        }
      }}
    >
      <TouchableOpacity onPress={() => {changeIndex()}}>
        <Image
          key = {story[storyIndex].id}
          source = {story[storyIndex].storyimgs[imgIndex].imgurl}
          style = {styles.image}
        />
        </TouchableOpacity>
      </GestureRecognizer>
      {/*  ------------------------------------ TOP VIEW ------------------------------------ */}
      <View style={styles.topView}>
      <View style={styles.pagging}>
      {
        story[storyIndex].storyimgs.map( (item, index) => {
          return (
            <View 
              key = {index}
              style={{width: width / story[storyIndex].storyimgs.length}}
            >
              <ProgressBar progress={(index == imgIndex) ? progress : 0 } color="white" style={{marginHorizontal:4}}/>
            </View>
          )
        })
      }
      </View> 
      <View style={styles.userinfo}>
        <View
          style={{
            flexDirection: "row",
            width: "70%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => {navigation.goBack()}}>
            <Entypo name="chevron-left" size={30} color="white" />
          </TouchableOpacity>
          <Image
            style={{ height: 40, width: 40, borderRadius: 50 }}
            source={story[storyIndex].img}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.username}>{story[storyIndex].username}</Text>
            <Text style={styles.time}>{story[storyIndex].timestamp}</Text>
          </View>
        </View>
      </View>
      </View>
      {/*  ------------------------------------ BOTTOM VIEW ------------------------------------ */}
      <View style={styles.bottomView}>
      <View style={{flexDirection:"row"}}>
        <Text style={{color: "white", alignSelf:"center"}}>9k Views</Text>
        <View style={{flexDirection:"row", marginHorizontal:10}}>
          <Image
            style={styles.bottomImages}
            source={story[storyIndex].img}
          />
          <Image
            style={styles.bottomImagesCenter}
            source={story[storyIndex].img}
          />
          <Image
            style={styles.bottomImages}
            source={story[storyIndex].img}
          />
        </View>
      </View>
        <TouchableOpacity >
        <Entypo name="dots-three-vertical" size={20} color="white" />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewStory;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "grey",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  image: {
    width,
    height,
    resizeMode: 'cover'
  },
  topView: {
    flexDirection: "column",
    position:"absolute",
    top:30,
  },
  pagging: {
    flexDirection:"row",
    alignSelf:"center",
  },
  username: {
    fontSize: 14,
    fontWeight: "700",
    color: "white",
  },
  userinfo: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  time: {
    fontSize: 12,
    color: "white",
    marginBottom: 5,
  },
  bottomView: {
    position: "absolute", 
    bottom: 20,
    width: width * 90 / 100,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  bottomImages: { 
    height: 40, 
    width: 40, 
    borderRadius: 50, 
    borderWidth:3, 
    borderColor:"white"
  },
  bottomImagesCenter: { 
    height: 40, 
    width: 40, 
    marginHorizontal: -15,
    borderRadius: 50, 
    borderWidth:3, 
    borderColor:"white"
  }
});