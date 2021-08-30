import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ImageBackground,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { Avatar } from "react-native-paper";
import DocumentPicker from 'react-native-document-picker';
import { inject, observer } from "mobx-react";
import RNFetchBlob from 'rn-fetch-blob';
const AssignmentDetail = ({ navigation, route,store }) => {
  const [userData, setUserData] = React.useState({})
  const getUser = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Authorization":`Bearer ${store.getToken}`,
        "Content-Type": "application/json"
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
    
    fetch(`${apiURL}/users/${store.getUid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserData(result);
      }).catch((error) => console.log("error", error));
  };

React.useEffect(() => {
  getUser();
}, [])
  const [fileName, setFileName] = React.useState("")
  const documentupload = async() => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileName(res.name);
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
  // const fileUrl = "http://www.africau.edu/images/default/sample.pdf";
  const checkPermission = async (fileUrl) => {
    console.log("download file ",route.params)
    // Function to check the platform
    // If Platform is Android then check for permissions.

    if (Platform.OS === 'ios') {
      downloadFile();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Start downloading
          downloadFile(fileUrl);
          console.log('Storage Permission Granted.');
        } else {
          // If permission denied then show alert
          Alert.alert('Error','Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.log("++++"+err);
      }
    }
  };
  const downloadFile = (fileUrl) => {
   
    // Get today's date to add the time suffix in filename
    let date = new Date();
    // File URL which we want to download
    let FILE_URL = fileUrl;    
    // Function to get extention of the file url
    let file_ext = getFileExtention(FILE_URL);
   
    file_ext = '.' + file_ext[0];
   
    // config: To get response by passing the downloading related options
    // fs: Root directory path to download
    const { config, fs } = RNFetchBlob;
    let RootDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:
          RootDir+
          '/file_' + 
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          file_ext,
        description: 'downloading file...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,   
      },
    };
    config(options)
      .fetch('GET', FILE_URL)
      .then(res => {
        // Alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Assignment Downloaded Successfully.');
      });
  };

  const getFileExtention = fileUrl => {
    // To get the file extension const myArr = str.split("?alt="); and myArr[0]
    return /[.]/.exec(fileUrl) ?
             /[^.]+$/.exec(fileUrl) : undefined;
  };
  const { item } = route.params;
  return (
    <View style={styles.container}>
      {/* ----------------------------header--------------------------------------- */}

      <View style={styles.TitileHeader}>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.5}
          >
            <Ionicons
              name="md-chevron-back-outline"
              size={35}
              color="#434B56"
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#434B56",
              marginLeft: 15,
            }}
          >
            Assignments
          </Text>
        </View>
        <View
          style={{
            width: "10%",
            alignItems: "flex-end",
          }}
        >
          <Avatar.Image
            source={{uri:userData.profile_pic_url}}
            size={35}
            style={{ marginRight: 20 }}
          />
        </View>
      </View>
      {/* ----------------------------Assignment--------------------------------------- */}
      <View
        style={{
          width: "100%",
          paddingHorizontal: 15,
          marginTop: 30,
        }}
      >
        <TouchableOpacity onPress={()=>{checkPermission(item.documents[1])}}>        
        <ImageBackground
            source={{uri:item.documents[0]}}
            style={{
            width: 110,
            height: 110,
            alignItems: "center",
            justifyContent: "center",
          }}
          imageStyle={{ borderRadius: 10 }}
        >
          <MaterialCommunityIcons
            name="download-circle-outline"
            size={24}
            color="white"
          />
        </ImageBackground>
        </TouchableOpacity>
        <View
          style={{
            width: 110,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 11,
              fontWeight: "700",
              color: "#434b56",
            }}
          >
            {item.title}
          </Text>
        </View>
      </View>
      {/* ----------------------------upload box--------------------------------------- */}
      <View
        style={{
          paddingHorizontal: 15,
          marginTop: 30,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        {fileName===""?
        <TouchableOpacity
          onPress={()=>{documentupload()}}
          style={{
            backgroundColor: "#e4e4e4",
            borderRadius: 10,
            width: "100%",
            height: 200,
          }}>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 20,
              color: "#a1a1a1",
              fontSize: 13,
            }}
          >
            Upload Your Assignment Here
          </Text>
        </TouchableOpacity>:
        <View
        style={{
          flexDirection:"row",
          backgroundColor: "#e4e4e4",
          borderRadius: 10,
          width: "100%",
          height: 57,
          alignItems:"center"
        }}>
          <Text
            style={{
              marginLeft: 10,
              color: "#a1a1a1",
              fontSize: 13,
              fontWeight:"bold",
              width:"83%"
            }}
          >
            {fileName}
          </Text>
          <TouchableOpacity onPress={()=>{setFileName("")}}>
          <Entypo
              style={{ marginLeft: 10 }}
              name="cross"
              size={20}
              color="#434B56"
            />
            </TouchableOpacity>
        </View>}
      </View>
      {/* ----------------------------Upload button--------------------------------------- */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 15,
        }}
      >
        <TouchableOpacity style={styles.Cancel} onPress={()=>navigation.goBack()}>
          <Text style={{ color: "#687980", fontSize: 13, fontWeight: "bold" }}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Upload} onPress={()=>navigation.goBack()}>
          <Text style={{ color: "white", fontSize: 13, fontWeight: "bold" }}>
            Upload
          </Text>
        </TouchableOpacity>
      </View>
      {/* ----------------------------bottom tab-------------------------------------- */}
    </View>
  );
};
export default inject("store")(observer(AssignmentDetail));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 40,
  },
  TitileHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
  },
  Cancel: {
    width: 120,
    height: 40,
    backgroundColor: "white",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1C2172",
  },
  Upload: {
    width: 120,
    height: 40,
    backgroundColor: "#1C2172",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
