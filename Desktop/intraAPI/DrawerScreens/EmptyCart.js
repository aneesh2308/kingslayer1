import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
const EmptyCart = () => {
  return (
    <View style={styles.container}>
      {/* ----------------------------header--------------------------------------- */}

      <View style={styles.TitileHeader}>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Ionicons
              name="md-chevron-back-outline"
              size={35}
              color="#434B56"
            />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>My Cart</Text>
        </View>
      </View>
      {/* ----------------------------  empty cart --------------------------------------- */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          width: "100%",
        }}
      >
        <Entypo name="shopping-bag" size={50} color="#434b56" />

        <Text style={{ position: "relative", bottom: 140 }}>
          There is nothing in your cart, Let's add some items.
        </Text>
      </View>
    </View>
  );
};

export default EmptyCart;

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
    height: "10%",
    borderBottomWidth: 0.2,
    borderBottomColor: "darkgrey",
  },
  HeaderText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#434B56",
    marginLeft: 15,
  },
});
