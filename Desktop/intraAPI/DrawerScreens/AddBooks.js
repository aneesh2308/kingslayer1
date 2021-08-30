import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { inject, observer } from "mobx-react";

import RoundCheckbox from "rn-round-checkbox";

const AddBooks = (props) => {
  const [book, setBook] = useState();
  const addBook = () => {
    var requestOptions = {
      method: "POST",
      body: JSON.stringify({
        isAdmin:false,
        book:{
          bookCondition:"Old",
          bookRef:"Print",
          ...book}

      }),
      headers: {
        "Authorization":`Bearer ${props.store.getToken}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    console.log(requestOptions);
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/app/api";
    fetch(`${apiURL}/books`, requestOptions)
      .then((response) => {
        response.json()})
      .then((result) => {
        props.navigation.goBack();
        console.log("Book details added",result);
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
  }, []);
  return (
    <View style={styles.container}>
      {/* ----------------------------header--------------------------------------- */}
      <ScrollView
        style={{ width: "100%", height: "80%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.TitileHeader}>
          <View
            style={{ width: "80%", flexDirection: "row", alignItems: "center" }}
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
            <Text style={styles.Heading}>Add Book</Text>
          </View>
          <View style={{ width: "20%", alignItems: "flex-end" }}>
          <TouchableOpacity onPress={addBook} activeOpacity={0.5}>
            <Text
              style={{
                fontSize: 16,
                paddingRight: 10,
                color: "#A1a1a1",
                fontWeight: "700",
              }}
            >
              Save
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ---------------------------------------------- textInput ------------------------------------------------------ */}
        <View
          style={{
            width: "100%",
            paddingHorizontal: 15,
          }}
        >
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Name</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setBook({...book,"name":txt})}

            />
          </View>
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>School</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setBook({...book,"school":txt})}

            />
          </View>

          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Mentor</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setBook({...book,"mentor":txt})}

             />
          </View>

          {/* textInput grade */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>PG</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setBook({...book,"pg":txt})}

             />
          </View>
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>ID</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setBook({...book,"id":txt})}

             />
          </View>
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Novel name</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setBook({...book,"novelname":txt})}

             />
          </View>
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Details</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setBook({...book,"details":txt})}

             />
          </View>
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Price</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setBook({...book,"price":txt})}

             />
          </View>
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Quantity</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setBook({...book,"quantity":txt})}

             />
          </View>

          {/* <View style={styles.inputlist}>
            <Text style={styles.listtitle}>book category</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setBook({...book,"bookRef":txt})}

             />
          </View> */}
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Book type</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setBook({...book,"booktype":txt})}

             />
          </View>
          <View style={styles.inputlist}>
            <Text style={styles.listtitle}>Image url</Text>
            <TextInput style={styles.textbox}
               onChangeText={(txt) => setBook({...book,"bookimg":[txt]})}

             />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default inject("store")(observer(AddBooks));

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
  Heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#434B56",
    marginLeft: 15,
  },
  inputlist: {
    width: "100%",
    height: 60,
    borderBottomWidth: 0.3,
    borderBottomColor: "#e4e4e4",
    marginVertical: 10,
    marginTop: 20,
  },
  textbox: {
    width: "90%",
    color: "black",
    height: 40,
  },
  listtitle: {
    fontSize: 14,
    color: "#A1a1a1",
    fontWeight: "700",
  },
  bluetext: {
    fontSize: 14,
    color: "#202AA8",
    fontWeight: "700",
    marginLeft: 30,
  },
  inputlist1: {
    width: "100%",
    height: 60,
    borderBottomWidth: 0.3,
    borderBottomColor: "#e4e4e4",
    marginVertical: 10,
    marginTop: 20,
    marginBottom: 50,
  },
});
