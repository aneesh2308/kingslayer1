import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { inject, observer } from "mobx-react";
function AssignmentsListCl(props) {
  const getUser = () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
    
    fetch(`${apiURL}/users/${props.store.getUid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserData(result);
        console.log("This is the user Data ",result.name);
        console.log("This is the institute_id Data ",result);
        console.log("This is the user photo ",result.profile_pic_url);
        var requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        };
        const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
        
        fetch(`${apiURL}/assignments?page_index=0&size=10&institute_id=${result.institute_id}&standard=${result.standard}`, requestOptions)
          .then((response) => response.json())
          .then((result1) => {
            setAssignment(result1.assignements);
            console.log("This is the Data ",result1);
            console.log("This is the user Data ",result1.assignements[0].title);
            console.log("This is the user photo ",result1.assignements[0].documents[0]);
          })
          // .then(console.log(userData))
          .catch((error) => console.log("error", error));
      })
      // .then(console.log(userData))
      .catch((error) => console.log("error", error));
  };
  React.useEffect(() => {
    getUser();
  }, [])
  const [assignment, setAssignment] = useState([])
  const [userData, setUserData] = useState({});
  //   {
  //     img: {
  //       uri: "https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg",
  //     },
  //     title: "Assignment title 01",
  //     subtitle: "lorem Ipsum",
  //     id: "1",
  //   },
  //   {
  //     img: {
  //       uri: "https://ibcces.org/wp-content/uploads/2019/03/Record-Teacher-Turnover-Tied-to-Lack-of-Mental-Health-Training-1.jpg",
  //     },
  //     title: "Assignment title 02",
  //     subtitle: "lorem Ipsum",
  //     id: "2",
  //   },
  //   {
  //     img: {
  //       uri: "https://previews.agefotostock.com/previewimage/medibigoff/bd0f884af0321d25f783253ddd72f842/esy-006764539.jpg",
  //     },
  //     title: "Assignment title 03",
  //     subtitle: "lorem Ipsum",
  //     id: "3",
  //   },
  //   {
  //     img: {
  //       uri: "https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201709/teacher-insta_090517073857.jpg",
  //     },
  //     title: "Assignment title 04",
  //     subtitle: "lorem Ipsum",
  //     id: "4",
  //   },
  // ]);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={assignment}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("AssignmentDetailCl", { item })
              }
              activeOpacity={0.8}
            >
              <View style={styles.Surface}>
                <Image
                  source={{uri:item.documents[0]}}
                  style={{ width: 110, height: 110, borderRadius: 10 }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "700",
                      color: "#434b56",
                      maxWidth:"90%"
                    }}
                  >
                    {item.title}
                  </Text>
                  {/* <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "600",
                      color: "#434b56",
                    }}
                  >
                    {item.subtitle}
                  </Text> */}
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
export default inject("store")(observer(AssignmentsListCl));

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
