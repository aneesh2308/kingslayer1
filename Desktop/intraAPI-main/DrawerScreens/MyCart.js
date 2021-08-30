import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { inject, observer } from "mobx-react";

const MyCart = (props) => {
  const [subTotal, setSubTotal] = React.useState(0)
  const [cartitem, setCartitem] = React.useState([])
    const getData = async () => {
    setSubTotal(0);
    var requestOptions = {
      method: "GET",
      headers: {
        "Authorization":`Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjk2MDVjMzZlOThlMzAxMTdhNjk1MTc1NjkzODY4MzAyMDJiMmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoia3VtYXIxMjQ1IiwicGljdHVyZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1hZ2VzL2JyYW5kaW5nL2dvb2dsZWxvZ28vMXgvZ29vZ2xlbG9nb19jb2xvcl8yNzJ4OTJkcC5wbmciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXZwMS0yNWJlNiIsImF1ZCI6Im12cDEtMjViZTYiLCJhdXRoX3RpbWUiOjE2MjcyMTQzNDUsInVzZXJfaWQiOiJPZWFtVmR6dXNIaDFRc3E5bGZMbXZ5c3JKejQyIiwic3ViIjoiT2VhbVZkenVzSGgxUXNxOWxmTG12eXNySno0MiIsImlhdCI6MTYyNzIxNDM0NSwiZXhwIjoxNjI3MjE3OTQ1LCJlbWFpbCI6InRlc3QxQHlvcG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV9udW1iZXIiOiIrOTE3OTczMTU5NzI1IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrOTE3OTczMTU5NzI1Il0sImVtYWlsIjpbInRlc3QxQHlvcG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Bvlnu1KQw2ahGsgo9y0pGh1yC0Hn2aTgrIC_3qv6rbK6dOMrJp9J9-5Ka9TpsdmsR59bNNFxTgESxD7wetcbtnNv9-ORKPvuyhJp1kYbFX4173RpD7kEBOlX6cox9qVeSrwN-BuSFoZtuQf_ptmc6--bbMD5-s_5hZKx8oD5fvaH_r9q2nFuvuiJs6lq-mH2dbreAOynlYdnwm4nkflFuWK_k7NM-KwlRt_dN4fiCf4lBf85ORT0xQiENH2VBFJEtpEwNZZWYjSdAAauLaO6HecOe1cokcpLeOKq6lerpjya73Nqr_z1WG7CW6MTb7fiAhIDXrkrHzeHrOW4tu4Ptw`,
        "Content-Type": "application/json"
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-mvp1-25be6.cloudfunctions.net/app";
    fetch(`${apiURL}/api/cart?by=${props.store.getUid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setCartitem(result);
      })
      .catch((error) => console.log("error", error));
  };
  const [refreshing, setRefreshing] = React.useState(false);
function calculate(){
  var sub = 0;
  cartitem.map((item)=>{sub +=parseInt(item.price)*parseInt(item.cartItem.count)})
  return sub;

}
React.useEffect(() => {
  getData();
}, [])
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const onRefresh = () => {
  setRefreshing(true);
  getData()
  wait(1000).then(() => setRefreshing(false));
}
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
              My Cart
            </Text>
          </View>
        </View>
        {/* ----------------------------Cart item 1--------------------------------------- */}
        <FlatList
          style={{
            backgroundColor: "white",
            width: "100%",
            borderBottomWidth: 0.3,
            borderBottomColor: "darkgrey",
          }}
          keyExtractor={(item) => item.cartItem.bookId}
          data={cartitem}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.cartItem1}>
                <Image source={
                  {uri:  item.bookimg!=undefined?item.bookimg[0]:item.img.uri}
                } style={styles.img} />
                <View style={{ marginLeft: 40 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "700",
                      color: "#434B56",
                      paddingVertical: 5,
                    }}
                  >
                    {item.novelname}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "700",
                      color: "#1C2172",
                      paddingVertical: 5,
                    }}
                  >
                    {item.price}
                  </Text>
                  <View style={{ flexDirection: "row", paddingVertical: 5 }}>
                    <View style={styles.plusminus}>
                      <TouchableOpacity onPress={()=>{cartitem[index].cartItem.count+=1
                      setCartitem([...cartitem]);

                      }}>
                        <Entypo name="plus" size={15} color="black" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.plusminus}>
                      <TouchableOpacity >
                        <Text style={{ fontSize: 11, fontWeight: "bold" }}>
                          {item.cartItem.count}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.plusminus}>
                      <TouchableOpacity onPress={()=>{cartitem[index].cartItem.count-=1
                      setCartitem([...cartitem]);
                      }}>
                        <Entypo name="minus" size={15} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
        {/* ----------------------------sub total 1--------------------------------------- */}
        <View
          style={{
            width: "100%",
            height: 50,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 15,
            justifyContent: "space-evenly",
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#434B56",
              padding: 5,
            }}
          >
            Sub Total
          </Text>

          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              color: "#CDCDCD",
              fontSize: 11,
              textAlign: "center",
              padding: 15,
            }}
          >
            .........................................................................
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#434B56",
              padding: 5,
            }}
          >
            {" "}
            ${calculate()}{" "}
          </Text>
        </View>
        {/* ----------------------------sub total 2--------------------------------------- */}
        <View
          style={{
            width: "100%",
            height: 50,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 15,
            justifyContent: "space-between",
            borderBottomColor: "darkgrey",
            borderBottomWidth: 0.3,
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#434B56",
            }}
          >
            Tax
          </Text>

          <Text
            style={{
              textAlign: "center",
              justifyContent: "center",
              color: "#CDCDCD",
              fontSize: 11,
              textAlign: "center",
              padding: 15,
            }}
          >
            .........................................................................
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "#434B56",
              padding: 5,
            }}
          >
            {" "}
            $50{" "}
          </Text>
        </View>
        {/*----------------------------------------input ---------------------------------------------------- */}
        <View
          style={{
            height: 50,
            width: "90%",

            alignitem: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#CDCDCD",
            borderRadius: 3,
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Enter Voucher Code"
            placeholderTextColor="#CDCDCD"
            style={{
              width: "75%",
              paddingLeft: 10,
            }}
          />
          <View
            style={{
              width: "25%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                color: "#434B56",
              }}
            >
              APPLY
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#202AA8",
            height: 50,
            width: 180,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            margin: 20,
          }}
          activeOpacity={0.7}
          onPress={() => {}}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            Redeem My Rewards
          </Text>
        </TouchableOpacity>
      </View>

      {/*----------------------------------------Button---------------------------------------------------- */}
      <View
        style={{
          width: "100%",
          height: "10%",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 10,
          paddingHorizontal: 15,
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          onPress={async () => await props.navigation.navigate("CheckOut")}
          style={styles.CheckOut}
          activeOpacity={0.7}
        >
          <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default inject("store")(observer(MyCart));

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
    height: 130,
    alignItems: "center",
  },
  cartItem: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 15,
    height: 130,
    alignItems: "center",
  },
  img: {
    height: 110,
    width: 110,
    borderRadius: 5,
  },
  plusminus: {
    justifyContent: "center",
    alignItems: "center",
    height: 28,
    width: 28,
    backgroundColor: "#CDCDCD",
    borderRadius: 1,
  },
  CheckOut: {
    width: "100%",
    backgroundColor: "#202AA8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 0,
    marginTop: 0,
  },
});
