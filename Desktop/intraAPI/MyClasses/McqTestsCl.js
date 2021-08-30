import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar, Button } from "react-native-paper";
import { ScrollView } from "react-native";
import { inject, observer } from "mobx-react";

const McqTestsCl = (props) => {
  const [userData, setUserData] = React.useState({})
  const [data,setData]=React.useState([
  // {
  //   "id" : 1,
  //   "level" : "Secondary level",
  //   "title" : "React Native",
  //   "mcqs" : [
  //     {
  //         "id": "111",
  //         "question": "What is Earth?",
  //         "answers": [
  //             {
  //                 "answer": "planet",
  //                 "is_correct": true,
  //                 "id": "1"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "fruit",
  //                 "id": "2"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "material",
  //                 "id": "3"
  //             },
  //             {
  //                 "answer": "toy",
  //                 "id": "4",
  //                 "is_correct": false
  //             }
  //         ]
  //     },
  //     {
  //         "id": "112",
  //         "question": "What is Venus",
  //         "answers": [
  //             {
  //                 "answer": "correct",
  //                 "is_correct": true,
  //                 "id": "feRt9GHfbhwH4OUin4IJN"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "dggs",
  //                 "id": "6_nPliviC4GZgRJXW-QkV"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "dsgsdg",
  //                 "id": "Djv0tLy97TkWxyRDKmwm2"
  //             },
  //             {
  //                 "answer": "sdgdsg",
  //                 "id": "9DhVFEUwIUbvCApmAEvez",
  //                 "is_correct": false
  //             }
  //         ]
  //     },
  //     {
  //         "id": "113",
  //         "question": "What is sdfsdf",
  //         "answers": [
  //             {
  //                 "answer": "yjyj",
  //                 "is_correct": false,
  //                 "id": "feRt9GHfbhwH4OUin4IJN"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "tyjty",
  //                 "id": "6_nPliviC4GZgRJXW-QkV"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "tyjy",
  //                 "id": "Djv0tLy97TkWxyRDKmwm2"
  //             },
  //             {
  //                 "answer": "right",
  //                 "id": "9DhVFEUwIUbvCApmAEvez",
  //                 "is_correct": true
  //             }
  //         ]
  //     }
  //           ],
  //   "time_limit" : 12
  // },
  // {
  //   "id" : 2,
  //   "level" : "Constitutional level",
  //   "title" : "JavaScript",
  //   "time_limit" : 12,
  //   "mcqs" : [
  //     {
  //         "id": "111",
  //         "question": "What is Earth?",
  //         "answers": [
  //             {
  //                 "answer": "planet",
  //                 "is_correct": true,
  //                 "id": "1"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "fruit",
  //                 "id": "2"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "material",
  //                 "id": "3"
  //             },
  //             {
  //                 "answer": "toy",
  //                 "id": "4",
  //                 "is_correct": false
  //             }
  //         ]
  //     },
  //     {
  //         "id": "112",
  //         "question": "What is Venus",
  //         "answers": [
  //             {
  //                 "answer": "correct",
  //                 "is_correct": true,
  //                 "id": "feRt9GHfbhwH4OUin4IJN"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "dggs",
  //                 "id": "6_nPliviC4GZgRJXW-QkV"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "dsgsdg",
  //                 "id": "Djv0tLy97TkWxyRDKmwm2"
  //             },
  //             {
  //                 "answer": "sdgdsg",
  //                 "id": "9DhVFEUwIUbvCApmAEvez",
  //                 "is_correct": false
  //             }
  //         ]
  //     },
  //     {
  //         "id": "113",
  //         "question": "What is sdfsdf",
  //         "answers": [
  //             {
  //                 "answer": "yjyj",
  //                 "is_correct": false,
  //                 "id": "feRt9GHfbhwH4OUin4IJN"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "tyjty",
  //                 "id": "6_nPliviC4GZgRJXW-QkV"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "tyjy",
  //                 "id": "Djv0tLy97TkWxyRDKmwm2"
  //             },
  //             {
  //                 "answer": "right",
  //                 "id": "9DhVFEUwIUbvCApmAEvez",
  //                 "is_correct": true
  //             }
  //         ]
  //     }
  //           ],
  // },
  // {
  //   "id" : 3,
  //   "level" : "Human level",
  //   "title" : "Django",
  //   "time_limit" : 12,
  //   "mcqs" : [
  //     {
  //         "id": "111",
  //         "question": "What is Earth?",
  //         "answers": [
  //             {
  //                 "answer": "planet",
  //                 "is_correct": true,
  //                 "id": "1"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "fruit",
  //                 "id": "2"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "material",
  //                 "id": "3"
  //             },
  //             {
  //                 "answer": "toy",
  //                 "id": "4",
  //                 "is_correct": false
  //             }
  //         ]
  //     },
  //     {
  //         "id": "112",
  //         "question": "What is Venus",
  //         "answers": [
  //             {
  //                 "answer": "correct",
  //                 "is_correct": true,
  //                 "id": "feRt9GHfbhwH4OUin4IJN"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "dggs",
  //                 "id": "6_nPliviC4GZgRJXW-QkV"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "dsgsdg",
  //                 "id": "Djv0tLy97TkWxyRDKmwm2"
  //             },
  //             {
  //                 "answer": "sdgdsg",
  //                 "id": "9DhVFEUwIUbvCApmAEvez",
  //                 "is_correct": false
  //             }
  //         ]
  //     },
  //     {
  //         "id": "113",
  //         "question": "What is sdfsdf",
  //         "answers": [
  //             {
  //                 "answer": "yjyj",
  //                 "is_correct": false,
  //                 "id": "feRt9GHfbhwH4OUin4IJN"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "tyjty",
  //                 "id": "6_nPliviC4GZgRJXW-QkV"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "tyjy",
  //                 "id": "Djv0tLy97TkWxyRDKmwm2"
  //             },
  //             {
  //                 "answer": "right",
  //                 "id": "9DhVFEUwIUbvCApmAEvez",
  //                 "is_correct": true
  //             }
  //         ]
  //     }
  //           ],
  // },
  // {
  //   "id" : 4,
  //   "level" : "Constitutional level",
  //   "title" : "MERN Stakc",
  //   "time_limit" : 8,
  //   "mcqs" : [
  //     {
  //         "id": "111",
  //         "question": "What is Earth?",
  //         "answers": [
  //             {
  //                 "answer": "planet",
  //                 "is_correct": true,
  //                 "id": "1"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "fruit",
  //                 "id": "2"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "material",
  //                 "id": "3"
  //             },
  //             {
  //                 "answer": "toy",
  //                 "id": "4",
  //                 "is_correct": false
  //             }
  //         ]
  //     },
  //     {
  //         "id": "112",
  //         "question": "What is Venus",
  //         "answers": [
  //             {
  //                 "answer": "correct",
  //                 "is_correct": true,
  //                 "id": "feRt9GHfbhwH4OUin4IJN"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "dggs",
  //                 "id": "6_nPliviC4GZgRJXW-QkV"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "dsgsdg",
  //                 "id": "Djv0tLy97TkWxyRDKmwm2"
  //             },
  //             {
  //                 "answer": "sdgdsg",
  //                 "id": "9DhVFEUwIUbvCApmAEvez",
  //                 "is_correct": false
  //             }
  //         ]
  //     },
  //     {
  //         "id": "113",
  //         "question": "What is sdfsdf",
  //         "answers": [
  //             {
  //                 "answer": "yjyj",
  //                 "is_correct": false,
  //                 "id": "feRt9GHfbhwH4OUin4IJN"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "tyjty",
  //                 "id": "6_nPliviC4GZgRJXW-QkV"
  //             },
  //             {
  //                 "is_correct": false,
  //                 "answer": "tyjy",
  //                 "id": "Djv0tLy97TkWxyRDKmwm2"
  //             },
  //             {
  //                 "answer": "right",
  //                 "id": "9DhVFEUwIUbvCApmAEvez",
  //                 "is_correct": true
  //             }
  //         ]
  //     }
  //           ],
  // }
])
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
        console.log("This is the user photo ",result.profile_pic_url);
        var requestOptions1 = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        };
        const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
        fetch(`${apiURL}/mcq-test?size=10&page_index=0&institute_id=${result.institute_id}&standard=${result.standard}`, requestOptions1)
          .then((response) => response.json())
          .then((result1) => {
            setData(result1.mcq_tests)
            console.log(result1)
          }).catch((error) => console.log("error", error));
      })
      // .then(console.log(userData))
      .catch((error) => console.log("error", error));
  };

  React.useEffect(() => {
    props.navigation.addListener("focus", () => {
      getUser();
    });
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      {/* ----------------------------header--------------------------------------- */}
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.TitileHeader}>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
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
              MCQ Tests
            </Text>
          </View>
          <View
            style={{
              width: "10%",
              alignItems: "flex-end",
            }}
          >
            <Avatar.Image
              source={{uri: "https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",}}
              size={35}
              style={{ marginRight: 20 }}
            />
          </View>
        </View>
        
        {
          data.map( (value) => {
            return (
              <View style={styles.list} key={value.id}>
                <Text style={styles.title}>{value.sub_title}</Text>
                <View style={styles.listleftcontent}>
                  <Text style={styles.subtitle}>{value.title}</Text>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("McqTestCl", {item : value})}
                  >
                    <Text style={styles.Start}>Start</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.smallText}>{value.mcqs.length} MCQ's/{value.time_limit/60} mins</Text>
              </View>
            )
          })
        }

      </ScrollView>
    </View>
  );
};
export default inject("store")(observer(McqTestsCl));

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
  list: {
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  listleftcontent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    color: "#535B65",
    fontWeight: "700",
    paddingVertical: 3,
  },
  subtitle: {
    fontSize: 12,
    color: "#535B65",
    fontWeight: "600",
    paddingVertical: 3,
  },
  Start: { fontSize: 12, color: "#E72C83", fontWeight: "700" },
  smallText: { fontSize: 12, color: "#535B65", fontWeight: "500" },
});
