import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Avatar } from "react-native-paper";

const PayFeesInvoice = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ height: "90%", width: "100%", alignItems: "center" }}>
        {/* ---------------------------------------------Header------------------------------------- */}
        <View style={styles.header}>
          <View
            style={{ width: "85%", flexDirection: "row", alignItems: "center" }}
          >
            <View style={{ position: "relative", right: 15 }}>
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
            </View>
            <Text
              style={{
                fontSize: 24,
                color: "#434b56",
                fontWeight: "bold",
                marginLeft: 0,
              }}
            >
              Pay fees & Invoice
            </Text>
          </View>
          <View
            style={{
              width: "15%",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 5,
            }}
          >
            <Avatar.Image
              size={35}
              source={{
                uri: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/179676946/original/894408990ef13b7e02f4c76c83558788e70e34ee/pack-of-ai-generated-faces.png",
              }}
            />
          </View>
        </View>
        {/* ---------------------------------------------Content Header------------------------------------- */}
        <View style={styles.userinfo}>
          <Image
            style={{ height: 60, width: 60, borderRadius: 60 }}
            source={{
              uri: "https://thumbs.dreamstime.com/b/human-expressions-emotions-young-attractive-man-sad-face-looking-depressed-unhappy-close-up-portrait-handsome-crying-153222300.jpg",
            }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.username}>Deaken University</Text>
            <Text style={styles.location}>Delhi, India</Text>
          </View>
        </View>
        {/* ---------------------------------------------List------------------------------------- */}
        <View style={styles.list}>
          <View
            style={{
              width: "70%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.listname}>Books</Text>
            <Text style={styles.dashline}>-------------------------------</Text>
          </View>
          <View style={{ width: "30%", alignItems: "flex-end" }}>
            <Text style={styles.amt}>$20</Text>
          </View>
        </View>
        {/* ---------------------------------------------List------------------------------------- */}
        <View style={styles.list}>
          <View
            style={{
              width: "70%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.listname}>Tution Fee</Text>
            <Text style={styles.dashline}>-------------------------------</Text>
          </View>
          <View style={{ width: "30%", alignItems: "flex-end" }}>
            <Text style={styles.amt}>$300</Text>
          </View>
        </View>
        {/* ---------------------------------------------List------------------------------------- */}
        <View style={styles.list}>
          <View
            style={{
              width: "70%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.listname}>Sub Total</Text>
            <Text style={styles.dashline}>-------------------------------</Text>
          </View>
          <View style={{ width: "30%", alignItems: "flex-end" }}>
            <Text style={styles.amt}>$320</Text>
          </View>
        </View>
        {/* ---------------------------------------------List------------------------------------- */}
        <View style={styles.list}>
          <View
            style={{
              width: "70%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.listname}>Tax</Text>
            <Text style={styles.dashline}>
              --------------------------------------
            </Text>
          </View>
          <View style={{ width: "30%", alignItems: "flex-end" }}>
            <Text style={styles.amt}>$50</Text>
          </View>
        </View>
        {/* ---------------------------------------------Dash------------------------------------- */}
        <View
          style={{
            width: "99%",
            borderBottomWidth: 0.5,
            borderBottomColor: "darkgrey",
            marginTop: 20,
          }}
        ></View>
        {/* ---------------------------------------------Payment------------------------------------- */}
        <View style={{ width: "100%", padding: 15, marginTop: 15 }}>
          <Text style={styles.username}>Payment</Text>
        </View>
        <View
          style={{
            width: "100%",
            paddingLeft: 15,
            marginTop: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.payment}>1234 4567 7890</Text>
          <Text style={styles.payment}>{"            "}VISA</Text>
          <View style={{ width: 60 }}>
            <AntDesign name="checkcircle" size={24} color="#202AA8" />
          </View>
        </View>
        <View style={{ width: "100%", paddingLeft: 15 }}>
          <Text style={styles.reward}>Change</Text>
        </View>
      </View>
      {/* ---------------------------------------------Payment Buttom------------------------------------- */}
      <View style={{ width: "100%", height: "10%", paddingHorizontal: 15 }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("DeakenUniversity")}
          activeOpacity={0.5}
        >
          <View style={styles.pay}>
            <Text style={{ fontSize: 16, color: "white", fontWeight: "700" }}>
              PAY
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PayFeesInvoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 25,
    borderBottomWidth: 0.3,
    borderBottomColor: "darkgrey",
    paddingHorizontal: 15,
  },
  userinfo: {
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  username: {
    fontSize: 16,
    fontWeight: "700",
    color: "#434b56",
  },
  location: {
    fontSize: 13,
    color: "grey",
    fontWeight: "700",
    marginTop: 5,
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  listname: {
    fontSize: 14,
    fontWeight: "600",
  },
  dashline: {
    color: "#E4E4E4",
    fontSize: 20,
    marginLeft: 20,
  },
  amt: {
    fontWeight: "700",
    fontSize: 14,
  },
  payment: {
    fontSize: 20,
    color: "#929292",
  },
  reward: {
    color: "#202AA8",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 10,
    marginRight: 5,
    marginBottom: 45,
  },
  pay: {
    width: "100%",
    backgroundColor: "#202AA8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 20,
  },
});
