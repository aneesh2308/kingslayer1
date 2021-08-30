import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { inject, observer } from "mobx-react";
import Ionicons from "react-native-vector-icons/Ionicons";
const OldBooksList = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [extraData, setExtraData] = useState([]);
  const [query, setQuery] = useState("");
  const searchFilter = (e) => {
    if(e){
      const newData = extraData.filter((item)=>{
       const itemData = item.name?item.name.toLowerCase():''.toLowerCase()
       const textData = e.toLowerCase();
       return itemData.indexOf(textData) > -1;
    });
    setData(newData);
    setQuery(e);
    }
    else{
    setData(extraData);
    setQuery(e);
    }
  }
  const getData = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        "Authorization":`Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjk2MDVjMzZlOThlMzAxMTdhNjk1MTc1NjkzODY4MzAyMDJiMmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoia3VtYXIxMjQ1IiwicGljdHVyZSI6Imh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1hZ2VzL2JyYW5kaW5nL2dvb2dsZWxvZ28vMXgvZ29vZ2xlbG9nb19jb2xvcl8yNzJ4OTJkcC5wbmciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXZwMS0yNWJlNiIsImF1ZCI6Im12cDEtMjViZTYiLCJhdXRoX3RpbWUiOjE2MjcyMTQzNDUsInVzZXJfaWQiOiJPZWFtVmR6dXNIaDFRc3E5bGZMbXZ5c3JKejQyIiwic3ViIjoiT2VhbVZkenVzSGgxUXNxOWxmTG12eXNySno0MiIsImlhdCI6MTYyNzIxNDM0NSwiZXhwIjoxNjI3MjE3OTQ1LCJlbWFpbCI6InRlc3QxQHlvcG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwaG9uZV9udW1iZXIiOiIrOTE3OTczMTU5NzI1IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrOTE3OTczMTU5NzI1Il0sImVtYWlsIjpbInRlc3QxQHlvcG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Bvlnu1KQw2ahGsgo9y0pGh1yC0Hn2aTgrIC_3qv6rbK6dOMrJp9J9-5Ka9TpsdmsR59bNNFxTgESxD7wetcbtnNv9-ORKPvuyhJp1kYbFX4173RpD7kEBOlX6cox9qVeSrwN-BuSFoZtuQf_ptmc6--bbMD5-s_5hZKx8oD5fvaH_r9q2nFuvuiJs6lq-mH2dbreAOynlYdnwm4nkflFuWK_k7NM-KwlRt_dN4fiCf4lBf85ORT0xQiENH2VBFJEtpEwNZZWYjSdAAauLaO6HecOe1cokcpLeOKq6lerpjya73Nqr_z1WG7CW6MTb7fiAhIDXrkrHzeHrOW4tu4Ptw`,
        "Content-Type": "application/json"
      },
      redirect: "follow",
    };
    const apiURL ="https://us-central1-shellcode1-78f01.cloudfunctions.net/app/api";

    fetch(`${apiURL}/books`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        var temp=result.filter(x=>x.bookCondition=="Old")
        console.log("old book result",temp);
        setData(temp);
        setExtraData(temp);
        setInitialData(temp);
      })
      .catch((error) => console.log("old book error", error));
  };

React.useEffect(() => {
  getData();
}, [])
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.BookId}
        ListHeaderComponent={() => {
          return (
            <View style={styles.searchbar}>
              <TouchableOpacity
                onpress={() => props.navigation.goBack()}
                activeOpacity={0.5}
              >
                <Ionicons name="search" size={18} color="#434B56" />
              </TouchableOpacity>
              <TextInput
                placeholder="Search "
                value={query}
                style={styles.textbox}
                placeholderTextColor="#535B65"
                onChangeText={(e) => searchFilter(e)}
              />
            </View>
          );
        }}
        renderItem={({ item }) => {
          console.log(item.bookimg!=undefined?item.bookimg[0]:item.img.uri);

          return (
            <TouchableOpacity
              style={{
                alignItems: "center",
                padding: 10,
                backgroundColor: "white",
                width: "50%",
              }}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("NovelDetail", { item })}
            >
              <Image
              source={
                  {uri:  item.bookimg!=undefined?item.bookimg[0]:item.img.uri}
                }
                style={{ height: 250, width: "100%", borderRadius: 10 }}
              />
              <View style={{ width: "100%" }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.school}>{item.school}</Text>
                <Text style={styles.mentor}>{item.mentor}</Text>
                <TouchableOpacity onPress={() => {navigation.navigate("NovelDetail", { item });setData(initialData)}}><Text style={styles.pg}>{item.pg}</Text></TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default inject("store")(observer(OldBooksList));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    width:"100%",
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "black",
    textAlign: "left",
    paddingVertical: 5,
  },
  school: {
    fontSize: 13,
    color: "grey",
    textAlign: "left",
    lineHeight: 15,
  },
  mentor: {
    fontSize: 13,
    color: "grey",
    textAlign: "left",
    lineHeight: 15,
  },
  pg: {
    fontSize: 11,
    color: "#EB3F8D",
    textAlign: "left",
    lineHeight: 15,
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.3,
    borderColor: "darkgrey",
    width: "85%",
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
    margin: 10,
    alignSelf: "center",
    borderRadius: 10,
  },
  textbox: {
    width: "80%",
    fontSize: 11,
    color: "black",
    padding: 10,
  },
});
