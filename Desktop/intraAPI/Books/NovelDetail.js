import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { inject, observer } from "mobx-react";

const NovelDetail = ({ navigation, route,store }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      {/* ----------------------------------------------Image------------------------------------------------ */}
      <View style={{ width: "100%", height: "60%", backgroundColor: "white" }}>
        <ImageBackground style={styles.img}

        source={
                  {uri:  item.bookimg!=undefined?item.bookimg[0]:item.img.uri}
                }>
          <View style={styles.header}>
            <View style={{ right: 15 }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.5}
              >
                <Ionicons
                  name="chevron-back-outline"
                  size={35}
                  color="#434b46"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.starticon}>
              <MaterialCommunityIcons
                name="star-outline"
                size={24}
                color="#E92E83"
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      {/* ----------------------------------------------Product Description------------------------------------------------ */}
      <View
        style={{
          height: "40%",
          width: "100%",
          backgroundColor: "white",
          paddingTop: 10,
          paddingHorizontal: 15,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ backgroundColor: "white", height: 200 }}>
          {/* ----------------------------------------------Name and price------------------------------------------------ */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              marginTop: 15,
              justifyContent: "space-between",
              height: 55,
              backgroundColor: "white",
            }}
          >
            <View>
              <Text
                style={{ fontSize: 20, color: "#434b56", fontWeight: "bold" }}
              >
                {item.novelname}
              </Text>
              <Text style={{ fontSize: 14, color: "#a1a1a1" }}>Novel</Text>
            </View>
            <View>
              <Text style={{ fontSize: 14, color: "#a1a1a1" }}>PRICE</Text>
              <Text
                style={{ fontSize: 18, color: "#202AA8", fontWeight: "bold" }}
              >
                ${item.price}
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 18, color: "#434b56", fontWeight: "bold" }}>
            Details
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "black",
              fontWeight: "normal",
              lineHeight: 20,
            }}
          >
            {item.details}
          </Text>
        </View>
        {/* ----------------------------------------------Pay------------------------------------------------ */}
        <TouchableOpacity
          onPress={() => {
            var requestOptions = {
              method: "POST",
              body: JSON.stringify({by:store.getUid,count:1,bookId: item.BookId}),
              headers: {
                "Authorization":`Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjk2MDVjMzZlOThlMzAxMTdhNjk1MTc1NjkzODY4MzAyMDJiMmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoia3VtYXIxMjQ1IiwicGljdHVyZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1hZ2VzL2JyYW5kaW5nL2dvb2dsZWxvZ28vMXgvZ29vZ2xlbG9nb19jb2xvcl8yNzJ4OTJkcC5wbmciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXZwMS0yNWJlNiIsImF1ZCI6Im12cDEtMjViZTYiLCJhdXRoX3RpbWUiOjE2MjcyMTQzNDUsInVzZXJfaWQiOiJPZWFtVmR6dXNIaDFRc3E5bGZMbXZ5c3JKejQyIiwic3ViIjoiT2VhbVZkenVzSGgxUXNxOWxmTG12eXNySno0MiIsImlhdCI6MTYyNzIxNDM0NSwiZXhwIjoxNjI3MjE3OTQ1LCJlbWFpbCI6InRlc3QxQHlvcG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV9udW1iZXIiOiIrOTE3OTczMTU5NzI1IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrOTE3OTczMTU5NzI1Il0sImVtYWlsIjpbInRlc3QxQHlvcG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Bvlnu1KQw2ahGsgo9y0pGh1yC0Hn2aTgrIC_3qv6rbK6dOMrJp9J9-5Ka9TpsdmsR59bNNFxTgESxD7wetcbtnNv9-ORKPvuyhJp1kYbFX4173RpD7kEBOlX6cox9qVeSrwN-BuSFoZtuQf_ptmc6--bbMD5-s_5hZKx8oD5fvaH_r9q2nFuvuiJs6lq-mH2dbreAOynlYdnwm4nkflFuWK_k7NM-KwlRt_dN4fiCf4lBf85ORT0xQiENH2VBFJEtpEwNZZWYjSdAAauLaO6HecOe1cokcpLeOKq6lerpjya73Nqr_z1WG7CW6MTb7fiAhIDXrkrHzeHrOW4tu4Ptw`,
                "Content-Type": "application/json"
              },
              redirect: "follow",
          }
          const apiURL ="https://us-central1-mvp1-25be6.cloudfunctions.net/app"
          fetch(`${apiURL}/api/cart`, requestOptions)
                  .then((response) => response)
                  .then((result) => {
                    console.log(result);
                  navigation.navigate("MyCart")

                  })
                  .catch((error) => console.log("error", error));
          }}
          style={styles.addt}
          activeOpacity={0.5}
        >
          <View style={styles.add}>
            <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>
              ADD
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default inject("store")(observer(NovelDetail));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:50
  },
  img: {
    height: "100%",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    flex: 1,
    paddingTop: 50,
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  starticon: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    width: "100%",
    backgroundColor: "#202AA8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  addt: {
    width: "100%",
    backgroundColor: "#202AA8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 25,
  },
});
