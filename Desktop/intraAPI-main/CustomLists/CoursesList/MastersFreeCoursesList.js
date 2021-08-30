import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { inject, observer } from "mobx-react";

const MastersFreeCoursesList = (props) => {
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
  const [data, setData] = useState([]);

// const [data, setData] = useState([
  //   {
  //     img: {
  //       uri: "https://leverageedu.com/blog/wp-content/uploads/2019/08/Course-after-MBA.png",
  //     },
  //     name: "Deaken Unviersity",
  //     school: "MBA Business School",
  //     mentor: "1-1 Mentorship & job Support",
  //     pg: "Start Now",
  //     id: "1",
  //   },
  //   {
  //     img: {
  //       uri: "https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",
  //     },
  //     name: "Dewell Unviersity",
  //     school: "MBA Business School",
  //     mentor: "1-1 Mentorship & job Support",
  //     pg: "Start Now",
  //     id: "2",
  //   },
  //   {
  //     img: {
  //       uri: "https://assets.telegraphindia.com/abped/2020/Sep/1600357027_distance-learning.jpg",
  //     },
  //     name: "Dewell Unviersity",
  //     school: "MBA Business School",
  //     mentor: "1-1 Mentorship & job Support",
  //     pg: "Start Now",
  //     id: "3",
  //   },
  //   {
  //     img: {
  //       uri: "https://michiganvirtual.org/wp-content/uploads/2019/07/online-learning-illustration-Converted-1024x384.png",
  //     },
  //     name: "Dewell Unviersity",
  //     school: "MBA Business School",
  //     mentor: "1-1 Mentorship & job Support",
  //     pg: "Start Now",
  //     id: "4",
  //   },
  // ]);

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", paddingLeft: 10 }}>
        <Text style={styles.Courses}>Free Courses</Text>
      </View>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.id}
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
                style={{ height: 150, width: "100%", borderRadius: 10 }}
              />
              <View style={{ width: "100%" }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.school}>{item.school}</Text>
                <Text style={styles.pg}>{item.pg}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default inject("store")(observer(MastersFreeCoursesList));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
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
  Courses: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#434b56",
    textAlign: "left",
    paddingVertical: 5,
  },
});
