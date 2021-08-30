import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import Ionicons from "react-native-vector-icons/Ionicons";

import data from "./Data";
import CarouselCardItem from "./CarouselCardItem";

const CarouselCards = (props) => {
  const isCarousel = React.useRef(null);

  return (
    <View style={styles.container}>
      
      {/*-----------------header------------------------- */}
      <View style={styles.TitileHeader}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          activeOpacity={0.5}
        >
          <Ionicons name="md-chevron-back-outline" size={35} color="#434B56" />
        </TouchableOpacity>
        <Text style={styles.HeadingText}>Try Premium</Text>
      </View>
      <Text
        style={{
          maxWidth: "80%",
          textAlign: "center",
          color: "grey",
          marginTop: 40,
        }}
      >
        Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem
        Ipsum has been
      </Text>
      <View style={{ width: "100%", alignItems: "center", marginTop: 80 }}>
        <Carousel
          layout="default"
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={400}
          itemWidth={280}
          inactiveSlideShift={0}
          useScrollView={true}
          loop={true}
        />
      </View>
    </View>
  );
};

export default CarouselCards;
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
  HeadingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#434B56",
    marginLeft: 15,
  },
});
