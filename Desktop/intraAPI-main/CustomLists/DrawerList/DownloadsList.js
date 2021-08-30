import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Surface } from "react-native-paper";
import { Avatar, Button } from "react-native-paper";

export default function DownloadsList(props) {
  const [download, setDownload] = useState([
    {
      img: {
        uri: "https://www.jotform.com/blog/wp-content/uploads/2020/07/How-to-create-an-online-lecture.png",
      },
      title: "Download 01",
      subtitle: "lorem Ipsum",
      id: "1",
    },
    {
      img: {
        uri: "https://www.epiphan.com/wp-content/uploads/2018/11/How-to-record-lectures_FB.png",
      },
      title: "Download 02",
      subtitle: "lorem Ipsum",
      id: "2",
    },
    {
      img: {
        uri: "https://wiki.nus.edu.sg/download/attachments/300975394/lecture-hall.png?version=1&modificationDate=1595555493940&api=v2",
      },
      title: "Download 03",
      subtitle: "lorem Ipsum",
      id: "3",
    },
    {
      img: {
        uri: "https://i.dlpng.com/static/png/6647063_preview.png",
      },
      title: "Download 04",
      subtitle: "lorem Ipsum",
      id: "4",
    },
    {
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOW8e9eDnQMxdK9utoW-EIN7gYMFTAnKtcyDT4uJbfOeUWWPDDAp9rc8q_XB5prZP-RvI&usqp=CAU",
      },
      title: "Download 04",
      subtitle: "lorem Ipsum",
      id: "5",
    },
    {
      img: {
        uri: "https://keystonekeynote.com/wp-content/uploads/2021/02/Article-Cover-Photo-Option-1.png",
      },
      title: "Download 04",
      subtitle: "lorem Ipsum",
      id: "6",
    },
    {
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAjqPGT8fUg1kJuJq0AcbEvsVMx7FG5Rt9nLD_8d8DC-jyTuUkr1m4Iwt1uONu8tEdkgo&usqp=CAU",
      },
      title: "Download 04",
      subtitle: "lorem Ipsum",
      id: "7",
    },
    {
      img: {
        uri: "https://i.pinimg.com/736x/5d/7c/eb/5d7cebe77655986e7869d85e417b634a.jpg",
      },
      title: "Download 04",
      subtitle: "lorem Ipsum",
      id: "8",
    },
  ]);
  const getDownloads = () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="http://us-central1-mvp1-25be6.cloudfunctions.net/app/api";

    fetch(`${apiURL}/download?userId=${props.store.getUid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("result ",result);
        setDownload(result["books"]);

      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    console.log(props);
    getDownloads();
  },[] )
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={download}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => {
          return (
            <View
              style={{ width: "100%", height: 100, backgroundColor: "white" }}
            ></View>
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
              <View style={styles.Surface}>
                <Image
                  source={item.img}
                  style={{ width: 110, height: 110, borderRadius: 10 }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      color: "#434b56",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
  },
  Surface: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 15,
    alignItems: "center",
  },
});
