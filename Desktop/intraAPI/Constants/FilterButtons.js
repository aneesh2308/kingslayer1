import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const FilterButtons = ({ name }) => {
  const [isSelcted, setIsSelected] = useState(false);

  const [colors, setColor] = useState(["#1C2172"]);
  const handleChange = (index, value) => {
    const newColor = [...colors];
    newColor[index] = value;
    setColor(newColor);
  };
  const [colorsBack, setColorsBack] = useState(["#E72C83"]);

  const handleChangeback = (index, value) => {
    const newColor = [...colorsBack];
    newColor[index] = value;
    setColorsBack(newColor);
  };
  return (
    <View>
      {isSelcted ? (
        <TouchableOpacity
          onPress={() => {
            handleChange(0, "#e72c83");
            setIsSelected(false);
          }}
        >
          <View
            style={{
              backgroundColor: colors[0],
              paddingHorizontal: 10,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              alignItems: "center",
              height: 30,
              margin: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>{name}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            handleChangeback(0, "#1c2172");
            setIsSelected(true);
          }}
        >
          <View
            style={{
              backgroundColor: colorsBack[0],
              paddingHorizontal: 10,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
              alignItems: "center",
              height: 30,
              margin: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 12 }}>{name}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FilterButtons;

const styles = StyleSheet.create({});
