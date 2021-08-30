import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { inject, observer } from "mobx-react";
const MastersList = (props) => {
  const [data, setData] = useState([])

  const getData = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Authorization":`Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjk2MDVjMzZlOThlMzAxMTdhNjk1MTc1NjkzODY4MzAyMDJiMmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoia3VtYXIxMjQ1IiwicGljdHVyZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1hZ2VzL2JyYW5kaW5nL2dvb2dsZWxvZ28vMXgvZ29vZ2xlbG9nb19jb2xvcl8yNzJ4OTJkcC5wbmciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXZwMS0yNWJlNiIsImF1ZCI6Im12cDEtMjViZTYiLCJhdXRoX3RpbWUiOjE2MjcyMTQzNDUsInVzZXJfaWQiOiJPZWFtVmR6dXNIaDFRc3E5bGZMbXZ5c3JKejQyIiwic3ViIjoiT2VhbVZkenVzSGgxUXNxOWxmTG12eXNySno0MiIsImlhdCI6MTYyNzIxNDM0NSwiZXhwIjoxNjI3MjE3OTQ1LCJlbWFpbCI6InRlc3QxQHlvcG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV9udW1iZXIiOiIrOTE3OTczMTU5NzI1IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrOTE3OTczMTU5NzI1Il0sImVtYWlsIjpbInRlc3QxQHlvcG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Bvlnu1KQw2ahGsgo9y0pGh1yC0Hn2aTgrIC_3qv6rbK6dOMrJp9J9-5Ka9TpsdmsR59bNNFxTgESxD7wetcbtnNv9-ORKPvuyhJp1kYbFX4173RpD7kEBOlX6cox9qVeSrwN-BuSFoZtuQf_ptmc6--bbMD5-s_5hZKx8oD5fvaH_r9q2nFuvuiJs6lq-mH2dbreAOynlYdnwm4nkflFuWK_k7NM-KwlRt_dN4fiCf4lBf85ORT0xQiENH2VBFJEtpEwNZZWYjSdAAauLaO6HecOe1cokcpLeOKq6lerpjya73Nqr_z1WG7CW6MTb7fiAhIDXrkrHzeHrOW4tu4Ptw`,
        "Content-Type": "application/json"
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-mvp1-25be6.cloudfunctions.net/app";

    fetch(`${apiURL}/api/cources`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setData(result);
      })
      .catch((error) => console.log("error", error));
  };

React.useEffect(() => {
  getData();
}, [])
  // const [data, setData] = useState([
  //   {
  //     img: {
  //       uri: "https://leverageedu.com/blog/wp-content/uploads/2019/08/Course-after-MBA.png",
  //     },
  //     name: "Deaken Unviersity",
  //     school: "MBA Business School",
  //     mentor: "1-1 Mentorship & job Support",
  //     pg: "View Program",
  //     id: "1",
  //   },
  //   {
  //     img: {
  //       uri: "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",
  //     },
  //     name: "Dewell Unviersity",
  //     school: "MBA Business School",
  //     mentor: "1-1 Mentorship & job Support",
  //     pg: "View Program",
  //     id: "2",
  //   },
  //   {
  //     img: {
  //       uri: "https://images.indianexpress.com/2020/04/online759.jpg",
  //     },
  //     name: "Dewell Unviersity",
  //     school: "MBA Business School",
  //     mentor: "1-1 Mentorship & job Support",
  //     pg: "View Program",
  //     id: "3",
  //   },
  //   {
  //     img: {
  //       uri: "https://www.attitudetallyacademy.com/Blog/wp-content/uploads/2019/08/short-term-courses-attitude-academy-1024x582.jpg",
  //     },
  //     name: "Dewell Unviersity",
  //     school: "MBA Business School",
  //     mentor: "1-1 Mentorship & job Support",
  //     pg: "View Program",
  //     id: "4",
  //   },
  // ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={({ item }) => {
          return (
            <View
              style={{
                width: "100%",
                height: 40,
                justifyContent: "flex-start",
                paddingLeft: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                activeOpacity={0.5}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "#434b56" }}
                >
                  Paid Courses
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                alignItems: "center",
                padding: 10,
                backgroundColor: "white",
                width: "50%",
              }}
            >
              <Image
                source={item.img}
                style={{ height: 250, width: "100%", borderRadius: 10 }}
              />
              <View style={{ width: "100%" }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.school}>{item.school}</Text>
                <Text style={styles.mentor}>{item.mentor}</Text>
                <Text style={styles.pg}>{item.pg}</Text>
              </View>
            </View>
          );
        }}
        // ListFooterComponent={({ item }) => {
        //   return <MastersFreeCoursesList navigation={props.navigation} />;
        // }}
      />
    </View>
  );
};
export default inject("store")(observer(MastersList));

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "black",
    textAlign: "left",
    paddingVertical: 5,
  },
  school: {
    fontSize: 13,
    color: "grey",
    textAlign: "left",
    lineHeight: 15,
  },
  mentor: {
    fontSize: 13,
    color: "grey",
    textAlign: "left",
    lineHeight: 15,
  },
  pg: {
    fontSize: 11,
    color: "#EB3F8D",
    textAlign: "left",
    lineHeight: 15,
  },
});
