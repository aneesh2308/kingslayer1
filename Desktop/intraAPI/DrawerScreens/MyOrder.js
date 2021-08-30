import React,{useState,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { inject, observer } from "mobx-react";


const MyOrder = (props) => {

  const getOrders = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Authorization":`Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjk2MDVjMzZlOThlMzAxMTdhNjk1MTc1NjkzODY4MzAyMDJiMmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoia3VtYXIxMjQ1IiwicGljdHVyZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1hZ2VzL2JyYW5kaW5nL2dvb2dsZWxvZ28vMXgvZ29vZ2xlbG9nb19jb2xvcl8yNzJ4OTJkcC5wbmciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXZwMS0yNWJlNiIsImF1ZCI6Im12cDEtMjViZTYiLCJhdXRoX3RpbWUiOjE2MjcyMTQzNDUsInVzZXJfaWQiOiJPZWFtVmR6dXNIaDFRc3E5bGZMbXZ5c3JKejQyIiwic3ViIjoiT2VhbVZkenVzSGgxUXNxOWxmTG12eXNySno0MiIsImlhdCI6MTYyNzIxNDM0NSwiZXhwIjoxNjI3MjE3OTQ1LCJlbWFpbCI6InRlc3QxQHlvcG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV9udW1iZXIiOiIrOTE3OTczMTU5NzI1IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrOTE3OTczMTU5NzI1Il0sImVtYWlsIjpbInRlc3QxQHlvcG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Bvlnu1KQw2ahGsgo9y0pGh1yC0Hn2aTgrIC_3qv6rbK6dOMrJp9J9-5Ka9TpsdmsR59bNNFxTgESxD7wetcbtnNv9-ORKPvuyhJp1kYbFX4173RpD7kEBOlX6cox9qVeSrwN-BuSFoZtuQf_ptmc6--bbMD5-s_5hZKx8oD5fvaH_r9q2nFuvuiJs6lq-mH2dbreAOynlYdnwm4nkflFuWK_k7NM-KwlRt_dN4fiCf4lBf85ORT0xQiENH2VBFJEtpEwNZZWYjSdAAauLaO6HecOe1cokcpLeOKq6lerpjya73Nqr_z1WG7CW6MTb7fiAhIDXrkrHzeHrOW4tu4Ptw`,
        "Content-Type": "application/json"
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-mvp1-25be6.cloudfunctions.net/app";

    fetch(`${apiURL}/api/myorders?userId=${props.store.getUid}`,requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setOrders(result["books"]);

      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getOrders();
  }, [])
  const [orders,setOrders]=useState([]);
  // const orders = [
  //   {
  //     id: "1",
  //     img: {
  //       uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpeX7aUJoQB7TwfUNefeQywEi1hUAvmgtI_6IJCCwEdbcMvv7WE4dfHPI_G0fiAqteYwA&usqp=CAU",
  //     },
  //     date: "Aug 23,2020",
  //     orderno: "CH-462376459-N",
  //     amount: "$300",
  //     status: "In transit",
  //     numofitems: "1",
  //   },
  //   {
  //     id: "2",
  //     img: {
  //       uri: "https://m.media-amazon.com/images/I/410nynxH30L.jpg",
  //     },
  //     date: "Aug 23,2020",
  //     orderno: "CH-462376459-N",
  //     amount: "$500",
  //     status: "Delivered",
  //     numofitems: "6",
  //   },
  // ];

  return (
    <View style={styles.container}>

      <View style={styles.TitileHeader}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="md-chevron-back-outline" size={35} color="#434B56" />
        </TouchableOpacity>
        <Text style={styles.HeadingText}>My Orders</Text>
      </View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.OrderId}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        /*----------------------------------------------- orders 1 ------------------------------------------------------------------------------------ */
        renderItem={({ item, index }) => {
          console.log(item.Books);
          console.log(item.orderInfo);

          return (
            <View
              style={{
                width: "100%",
                alignItems: "center",
                padding: 5,
                backgroundColor: "white",
              }}
            >
              <View style={{ width: "90%", paddingVertical: 10 }}>
                <Text style={{ fontSize: 14 }}>
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "90%",
                  height: 160,
                  elevation: 5,
                  backgroundColor: "white",
                  borderRadius: 5,
                }}
              >
                <View
                  style={{
                    width: "50%",
                    paddingVertical: 15,
                    paddingHorizontal: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 14 }}>
                    {/* {item.OrderId} */}
                    {item.Books.name}

                  </Text>
                  <Text style={{ fontSize: 14, marginTop: 10 }}>
                  Total : Rs. {parseInt(item.Books.price)*parseInt(item.orderInfo.count)}
                  </Text>
                  <Text style={{ fontSize: 14, marginTop: 10 }}>
                    Quantity : {item.orderInfo.count}
                  </Text>

                  <View
                    style={{
                      height: 30,
                      width: 100,
                      backgroundColor:
                        item.status === "Delivered" ? "#1C2172" : "#E72C83",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 15,
                    }}
                  >
                    <Text style={{ color: "white" }}>Status</Text>
                  </View>
                </View>

                <View
                  style={{
                    width: "50%",
                    padding: 15,
                  }}
                >
                  <Image
                    source={{uri:item.Books.img.uri}}
                    style={{ height: "100%", width: "100%", borderRadius: 10 }}
                  />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default inject("store")(observer(MyOrder));
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  TitileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    width: "100%",
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: "#e4e4e4",
  },
  HeadingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#434B56",
    marginLeft: 15,
  },
});
