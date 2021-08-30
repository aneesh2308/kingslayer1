import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RadioButton } from "react-native-paper";
import { inject, observer } from "mobx-react";

const McqTestCl = ({ navigation, route }) => {
  const item = route.params.item;
  const [quesNo, setQuesNo] = useState(0);
  const [minute, setMinute] = useState((item.time_limit/60) - 1);
  const [second, setSecond] = useState(59);
  let size = item.mcqs.length;
  const [answers, setAnswers] = useState({})

  useEffect(() => {
    console.log(item.mcqs.length)
    if(minute == 0 && second == 0) {
        console.log("Time Out")
        finalize();
    }
    else
      setTimeout(() => changeTimer(), 1000); 
  })

  const changeTimer = () => {
    if(second == 0) {
      setSecond(59);
      setMinute(minute - 1);
    }
    else
      setSecond(second - 1)
  }

  const prev = () => {
    if(quesNo <= 0) return
    else setQuesNo(quesNo - 1);
  }

  const next = () => {
    if(quesNo >= size - 1) finalize();
    else setQuesNo(quesNo + 1);
  }

  const finalize = () => {
    let marksObtained = 0;
    Object.keys(answers).map( (index, value) => {
       if(answers[index].is_correct)
         marksObtained += 1;
    })
    console.log("answers", marksObtained)
    var requestOptions = {
      method: "POST",
      body: JSON.stringify({
      answers:item.answers
    }),
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
    
    fetch(`${apiURL}/mcq-test/${item.id}/answer`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("This is the user Data ",result.code);
        console.log("This is the user photo ",result.message);
      })
      // .then(console.log(userData))
      .catch((error) => console.log("error", error));
      navigation.goBack();
  }

  return (
    <View style={styles.container}>
      {/* ----------------------------header--------------------------------------- */}
      <ScrollView
        style={{ width: "100%", height: "90%" }}
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
              {item.title}
            </Text>
          </View>
          <View
            style={{
              width: "10%",
              alignItems: "flex-end",
            }}
          >
            <Avatar.Image
              source={{
                uri: "https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
              }}
              size={35}
              style={{ marginRight: 20 }}
            />
          </View>
        </View>
        {/* ---------------------------- time and question section--------------------------------------- */}
        <View style={styles.No_ques}>
          <Text style={styles.subtitle}>{quesNo + 1}/{size} Questions</Text>
          <Text style={styles.subtitle}>{minute}:{second} mins left</Text>
        </View>

        {/* ----------------------------  question section--------------------------------------- */}
        <Text
          style={{
            fontSize: 17,
            fontWeight: "700",
            color: "#434B56",
            marginTop: 40,
          }}
        >
          {item.mcqs[quesNo].question}
        </Text>
        {/* ---------------------------- radio button section--------------------------------------- */}
        <View style={{ width: "70%" }}>
        {
          item.mcqs[quesNo].answers.map( (value) => {
              return (
                <View style={styles.option} key={value.id}>
                <RadioButton
                  value={value.answer}
                  status={ Object.keys(answers).includes(item.mcqs[quesNo].id) &&
                    answers[item.mcqs[quesNo].id].id == value.id ? "checked" : "unchecked"}
                  onPress={() => setAnswers(state => ({...state, [item.mcqs[quesNo].id] : {
                    id : value.id,
                    is_correct : value.is_correct
                  }})) }
                  uncheckedColor="grey"
                  color="#1C2172"
                />
                <Text style={styles.optionname}>{value.answer}</Text>
              </View>
              )
          })
        }
        </View>
      </ScrollView>
      {/* ---------------------------- radio button section--------------------------------------- */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 20,
          height: "10%",
          paddingBottom: 15,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity 
          style={styles.Previous}
          onPress = {() => {prev()}}
        >
          <Text style={{ color: "#687980", fontSize: 14, fontWeight: "700" }}>
            PREVIOUS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.Next}
          onPress = {() => {next()}}
          >
          <Text style={{ color: "white", fontSize: 14, fontWeight: "700" }}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default inject("store")(observer(McqTestCl));

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
  No_ques: {
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    borderBottomWidth: 0.2,
    borderBottomColor: "darkgrey",
  },
  subtitle: {
    fontSize: 14,
    color: "#687980",
    fontWeight: "700",
    paddingVertical: 3,
  },
  option: {
    width: "100%",
    height: 50,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  optionname: {
    fontSize: 14,
    fontWeight: "700",
    color: "#687980",
  },
  Previous: {
    width: 145,
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1C2172",
  },
  Next: {
    width: 145,
    height: 50,
    backgroundColor: "#1C2172",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
