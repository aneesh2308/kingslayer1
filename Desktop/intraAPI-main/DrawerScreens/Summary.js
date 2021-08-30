import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar, Button } from "react-native-paper";
import { ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import RNUpiPayment from 'react-native-upi-pay';
import { inject, observer } from "mobx-react";


const Summary = (props) => {
  const [state,setState]=useState({
    Status:"",
    txnId:"",
    amount:1,
    message:""});
  const floo=()=>{
      RNUpiPayment.initializePayment({
          vpa: 'vikas9820539108@okhdfcbank',  		//your upi address like 12345464896@okhdfcbank
          payeeName: 'Intra',   			// payee name
          amount: state.amount,				//amount
          transactionNote:'Fees',		//note of transaction
          transactionRef: 'aasf-332-aoei-fn'	//some refs to aknowledge the transaction
      },successCallback,failureCallback);

  }
  const failureCallback=(data)=>{
    console.log("Failure callback",data);
    // in case no action taken
    if (data['status']=="FAILURE"){
        setState({...state,Status:"FAILURE",message:data['message']})

    }
    // in case of googlePay
    else if (data['Status']=="FAILURE"){
        setState({...state,Status:"FAILURE",message:"app closed without doing payment"})
    }
    // in case of phonepe
    else if (data['Status']=="Failed"){
        setState({...state,Status:"FAILURE",message:"app closed without doing payment"});
    }
    // in case of phonepe
    else if(data['Status']=="Submitted"){
        setState({...state,Status:"FAILURE",message:"transaction done but pending"});
    }
    // any other case than above mentioned
    else{
        setState({...state,Status:"FAILURE",message:data[Status]});
    }
  }
  const successCallback=(data)=>{
    //
    console.log("success callback",data);
    setState({...state,Status:"SUCCESS",txnId:data['txnId'],message:"Successful payment"});
    checkout();
  }
  const checkout = () => {
    var requestOptions = {
      method: "POST",
      body: JSON.stringify({
        userId:props.store.getUid,
        ...state
      }),

      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/app/api";
    console.log(requestOptions);
    fetch(`${apiURL}/checkout`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("checkout result ",result);
        props.navigation.navigate("PaymentSucc")

      })
      .catch((error) => console.log("error", error));
  };
  return (
    <View style={styles.container}>

      {/* ----------------------------header--------------------------------------- */}

      <View style={{ width: "100%", height: "90%", alignItems: "center" }}>
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
              activeOPacity={0.5}
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
              Summary
            </Text>
          </View>
        </View>
        {/*------------------------------------------summary --------------------------------------------------------------------- */}
        <View style={styles.cartItem1}>
          {/*------------------------------------------summary 1--------------------------------------------------------------------- */}
          <View style={{}}>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OFa7ZwZmLs5KzlEpXPYktVlDypCqGCuUJg&usqp=CAU",
              }}
              style={styles.img}
            />

            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: "#434B56",
                paddingVertical: 5,
              }}
            >
              Lorem Ipsum
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "700",
                color: "#1C2172",
              }}
            >
              $755
            </Text>
          </View>
          {/*------------------------------------------summary 2 --------------------------------------------------------------------- */}
          <View
            style={{
              margin: 15,
            }}
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OFa7ZwZmLs5KzlEpXPYktVlDypCqGCuUJg&usqp=CAU",
              }}
              style={styles.img}
            />

            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: "#434B56",
                paddingVertical: 5,
              }}
            >
              Lorem Ipsum
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "700",
                color: "#1C2172",
              }}
            >
              $755
            </Text>
          </View>
        </View>

        {/*-------------------------------------------------------- shipping address --------------------------------------------------------------------- */}
        <View
          style={{
            height: 130,
            width: "100%",
            borderBottomWidth: 0.3,
            borderBottomColor: "darkgrey",
            paddingHorizontal: 10,
            paddingVertical: 10,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#434B56",
            }}
          >
            Shipping Adress
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              paddingVertical: 10,
            }}
          >
            <View style={{ width: "80%" }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: "#434B56",
                }}
              >
                Ultimate mixin for rapid creating customizable Ultimate mixin
                for rapid creating customizable Ultimate mixin for rapid
                creating customizable
              </Text>
            </View>
            <View
              style={{
                width: "20%",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="check-circle"
                size={28}
                color="#202AA8"
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#1C2172",
            }}
          >
            Change
          </Text>
        </View>
        {/*-------------------------------------------------------- Payment --------------------------------------------------------------------- */}
        <View
          style={{
            height: 130,
            width: "100%",
            paddingHorizontal: 10,
            paddingVertical: 10,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "#434B56",
            }}
          >
            Payment
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              paddingVertical: 10,
            }}
          >
            <View style={{ width: "80%" }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: "#CDCDCD",
                }}
              >
                Cash on Delivery
              </Text>
            </View>
            <View
              style={{
                width: "20%",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialCommunityIcons
                name="check-circle"
                size={28}
                color="#202AA8"
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#1C2172",
            }}
          >
            Change
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#1C2172",
            }}
          >
            {state.message}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "10%",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 10,
          paddingHorizontal: 15,
        }}
      >
        {/*----------------------------------------pay button---------------------------------------------------- */}
        <TouchableOpacity
          style={styles.Pay}
          activeOpacity={0.7}
          onPress={floo}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
            PAY
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default inject("store")(observer(Summary));

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
  cartItem1: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 15,
    height: 200,
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    marginTop: 25,
  },
  img: {
    height: 110,
    width: 110,
    borderRadius: 5,
  },
  Pay: {
    width: "100%",
    height: 50,
    backgroundColor: "#202AA8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
