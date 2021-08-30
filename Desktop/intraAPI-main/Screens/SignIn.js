/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable valid-typeof */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React, {useState, useEffect, createContext} from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import firebase from "firebase";
import {inject, observer} from "mobx-react";
import AsyncStorage from "@react-native-community/async-storage";
import {Platform} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const SignIn = (props, {route}) => {
  const [spinner, setSpinner] = React.useState(false);

  useEffect(() => {
    setSpinner(true);
    // AsyncStorage.getItem("token").then(value => {
    //   //AsyncStorage returns a promise so adding a callback to get the value
    //   console.log(value, "asyncStorage");
    //   if (value) {
    //     props.navigation.navigate("Home");
    //   }
    //   //Setting the value in Text
    // });
    console.log("email");
    AsyncStorage.getItem("token").then(
      async token => {
        // console.log(token, "tokennnnnnnnnnnnnnnnnnnnnnnn");
        if (token !== "" && token !== undefined && token !== null) {
          props.store.setToken(token);

          await AsyncStorage.getItem("id").then(async id => {
            if (id !== "" && id !== undefined && id !== null)
              props.store.setUid(id);
          });
          setSpinner(false);

          props.navigation.navigate("Home");
        } else {
          setSpinner(false);
          // console.log("not working");
        }
      },

      // AsyncStorage.getItem("password").then(password => {
      //   // console.log(password);
      //   // firebase
      //   //   .auth()
      //   //   .signInWithEmailAndPassword(email, password)
      //   //   .then(async result => {
      //   //     await AsyncStorage.setItem("token", JSON.stringify(result));
      //   //     console.log(result);
      //   //     // console.log("this is working");
      //   //     props.navigation.navigate("Home");
      //   //   })
      //   //   .catch(error => {
      //   //     console.log(error);
      //   //   });
      // }),
    );
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [usercred, setusercred] = useState({});

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       console.log("User Present");
  //       props.navigation.replace("Home");
  //     } else {
  //       console.log("No User");
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  // const { login } = useContext(AuthContext);
  const apiURL = "https://us-central1-shellcode1-78f01.cloudfunctions.net/api";
  const login = async () => {
    let info = console.log("this is the ", email, password);
    // const resp = async () => {
    //   try {
    //     let response = await fetch(
    //       `https://www.desiimeat.com/app_api/getUserOrders.php?user_id=${dataUser.users.map((item)=>(item.id))}`
    //     );
    //     let json = await response.json();
    //     this.setState({UserOrders:json.orders})
    //     json.orders.map((item)=>console.log(item.cover_image))
    //   } catch (error) {
    //      console.error(error);
    //   }
    // };
    try {
      const res = await fetch(`${apiURL}/user/login`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      });
      let resJson = await res.json();
      props.store.setToken(resJson.token);
      await AsyncStorage.setItem("token", resJson.token);
      await AsyncStorage.setItem("id", resJson.id);
      console.log("Token is from above :", resJson.token);
      props.store.setUid(resJson.id);
      if (res.status === 200) {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(async result => {
            console.log(result);
            console.log("this is working");
            props.navigation.navigate("Home");
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        Alert.alert("Wrong Password or Email");
      }
    } catch (err) {
      Alert.alert("Wrong Password or Email");
      console.log(err);
    }
    // .then((response) => response.json())
    // .then((result) => {
    //   console.log("result ==========================>", result.token);
    //   await AsyncStorageStatic.setItem("token", result.token);
    //   const data = await AsyncStorageStatic.getItem("token");
    //   console.log(data);
    // })
    // .then((res) => {
    //   setusercred(res);
    //   console.log("usercred is ================>", usercred);
    // })
    // .then(() => props.navigation.replace("Home"))

    // .catch((error) => console.log("error", error));

    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     props.navigation.replace("Home");
    //   })

    //   .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "#191E63",
          "#191F64",
          "#191E62",
          "#1C237E",
          "#1F289C",
          "#1F289A",
        ]}
        style={styles.background}>
        <Spinner
          visible={spinner}
          textContent={"Loading..."}
          textStyle={{color: "#FFF"}}
        />
        <Text style={styles.maintext}>Sign In</Text>
        <Image
          source={{
            uri: "https://diana-cdn.naturallycurly.com/general/683x902_login-default-image.png",
          }}
          style={styles.image}
        />
        <View style={styles.inputcomponent}>
          <View
            iew
            style={{
              width: "80%",
              height: 50,
              marginTop: 0,
              borderBottomWidth: 0.6,
              borderBottomColor: "#687980",
              marginBottom: 10,
            }}>
            <View style={{position: "absolute", left: 0}}>
              <Text style={{fontSize: 11, color: "#687980"}}>Email</Text>
            </View>

            <View style={{paddingTop: 15}}>
              <TextInput
                style={styles.textbox}
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
          </View>
          <View
            style={{
              width: "80%",
              height: 50,
              borderBottomWidth: 0.6,
              borderBottomColor: "#687980",
              marginBottom: 0,
            }}>
            <View style={{position: "absolute", left: 0}}>
              <Text style={{fontSize: 11, color: "#687980"}}>Password</Text>
            </View>
            <View style={{paddingTop: 15}}>
              <TextInput
                style={styles.textbox}
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </View>
          </View>
        </View>
        <View style={styles.forget}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Forgetpass")}>
            <Text style={{color: "white", fontSize: 12, marginBottom: 0}}>
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.Signinbutton}
            onPress={login}
            // onPress={() => jadoo.login(email, password)}
          >
            <Text
              style={{
                color: "#1C2172",
                fontSize: 13,
                fontWeight: "bold",
              }}>
              SIGN IN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text
              style={{
                color: "white",
                fontSize: 13,
                marginTop: 20,
                marginBottom: 10,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default inject("store")(observer(SignIn));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  maintext: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    marginTop: 0,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 200,
    marginTop: 0,
  },
  Signinbutton: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textbox: {
    width: "100%",
    color: "white",
    fontSize: 13,
    height: 40,
    backgroundColor: "transparent",
  },
  inputcomponent: {
    height: 130,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  forget: {
    width: "100%",
    height: "7%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
  },
});
