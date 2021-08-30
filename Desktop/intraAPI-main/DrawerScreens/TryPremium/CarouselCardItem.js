import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
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
        style={styles.background}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            height: "70%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-start",
              marginVertical: 10,
              paddingTop: 10,
            }}
          >
            <View
              style={{
                width: "15%",
                alignItems: "flex-start",
                paddingLeft: 20,
              }}
            >
              {item.icon}
            </View>
            <Text style={styles.body}>{item.plan}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-start",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                width: "15%",
                alignItems: "flex-start",
                paddingLeft: 20,
              }}
            >
              {item.icon}
            </View>
            <Text style={styles.body}>{item.amount}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-start",
              marginVertical: 10,
            }}
          >
            <View
              style={{
                width: "15%",
                alignItems: "flex-start",
                paddingLeft: 20,
              }}
            >
              {item.icon}
            </View>
            <Text style={styles.body}>{item.desc}</Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            height: "30%",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: "#1c2172",
                fontSize: 15,
                fontWeight: "bold",
                paddingLeft: 20,
              }}
            >
              Try for free
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: "white", fontSize: 13, marginTop: 10 }}>
              Learn more
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "100%",
    height: 360,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",

    alignItems: "center",
  },
  header: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#fff",
    fontSize: 11,
    width: "85%",
    textAlign: "left",
    paddingRight: 20,
    paddingLeft: 15,
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default CarouselCardItem;
