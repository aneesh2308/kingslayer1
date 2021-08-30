import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import SignIn from "./Screens/SignIn";
import Signup from "./Screens/Signup";
import Forgetpass from "./Screens/Forgetpass";
import EnterOtp from "./Screens/EnterOtp";
import Home from "./BottomTabScreens/Home";
import MyCollege from "./BottomTabScreens/MyCollege";
import JoinClass from "./BottomTabScreens/JoinClass";
import MyClasses from "./BottomTabScreens/MyClasses";
import Books from "./BottomTabScreens/Books";
import Player from "./Constants/Player";
import ChatScreen from "./Home/ChatScreen";
import RecordedLec from "./MyCollege/RecordedLec";
import AboutUs from "./MyCollege/AboutUs";
import McqTests from "./MyCollege/McqTests";
import PayFeesInvoice from "./MyCollege/PayFeesInvoice";
import McqTest from "./MyCollege/McqTest";
import RecordedLecCl from "./MyClasses/RecordedLecCl";
import AboutUsCl from "./MyClasses/AboutUsCl";
import McqTestsCl from "./MyClasses/McqTestsCl";
import CommentList from "./CustomLists/CommentList";
import PayFeesInvoiceCl from "./MyClasses/PayFeesinvoiceCl";
import McqTestCl from "./MyClasses/McqTestCl";
import MyMessagesList from "./CustomLists/MyMessagesList";
import DeakenUniversity from "./MyCollege/DeakenUniversity";
import ContactUsList from "./CustomLists/MyCollegeList/ContactUsList";
import UpcomingLecClList from "./CustomLists/MyClassesList/UpcomingLecClList";
import ContactUsClList from "./CustomLists/MyClassesList/ContactUsClList";
import AssignmentDetailCl from "./MyClasses/AssignmentDetailCl";
import UpcomingLecCl from "./MyClasses/UpcomingLecCl";
import Masters from "./Courses/Masters";
import PGProgram from "./Courses/PGProgram";
import Certification from "./Courses/Certification";
import {Avatar} from "react-native-paper";
import Novels from "./Books/Novels";
import OldBooksList from "./Books/Reading";
import EbooksList from "./Books/Writing";

import Writing from "./Books/Writing";
import DrawerContent from "./Screens/DrawerContent";
import EditProfile from "./DrawerScreens/EditProfile";
import PersonalDetails from "./DrawerScreens/PersonalDetails";
import UpcomingLec from "./MyCollege/UpcomingLec";
import Mentors from "./DrawerScreens/Mentors";
import MentorDetail from "./DrawerScreens/MentorDetail";
import Internships from "./DrawerScreens/Internships";
import Connections from "./DrawerScreens/Connections";
import MyCart from "./DrawerScreens/MyCart";
import EmptyCart from "./DrawerScreens/EmptyCart";
import CheckOut from "./DrawerScreens/CheckOut";
import CheckOut2 from "./DrawerScreens/CheckOut2";
import CheckOut3 from "./DrawerScreens/CheckOut3";
import Summary from "./DrawerScreens/Summary";
import PaymentSucc from "./DrawerScreens/PaymentSucc";
import AddBooks from "./DrawerScreens/AddBooks";

import AddEducation from "./DrawerScreens/AddEducation";
import NovelDetail from "./Books/NovelDetail";
import FilterConnection from "./DrawerScreens/FilterConnection";
import AddExperience from "./DrawerScreens/AddExperience";
import AddRewardsCertificates from "./DrawerScreens/AddRewardsCertificates";
import InternshipFilter from "./DrawerScreens/Internships/InternshipFilter";
import SavedInternship from "./DrawerScreens/Internships/SavedInternship";
import InternshipDetail from "./DrawerScreens/Internships/InternshipDetail";
import ManageNotifications from "./DrawerScreens/Internships/ManageNotifications";
import PostInternship from "./DrawerScreens/Internships/PostInternship";
import MyOrder from "./DrawerScreens/MyOrder";
import SellBook from "./DrawerScreens/SellBook";
import ChangeStatus from "./DrawerScreens/ChangeStatus";
import SellBookFilter from "./DrawerScreens/SellBookFilter";
import ReferEarn from "./DrawerScreens/ReferEarn";
import ContactUSDrawer from "./DrawerScreens/ContactUSDrawer";
import ContactUsCl from "./MyClasses/ContactUsCl";
import Rewards from "./DrawerScreens/Rewards";
import CarouselCards from "./DrawerScreens/TryPremium/CarouselCards";
import AddPost from "./Home/AddPost";
import UpcomingLecDetail from "./MyCollege/UpcomingLecDetail";
import Announcements from "./MyCollege/Announcements";
import Assignments from "./MyCollege/Assignments";
import AssignmentDetail from "./MyCollege/AssignmentDetail";
import AnnoncementsCl from "./MyClasses/AnnouncementsCl";
import UpcomingLecDetailCl from "./MyClasses/UpcommingLecDetailCl";
import AssignmentCl from "./MyClasses/AssignmentCl";
import Downloads from "./DrawerScreens/Downloads";
import Collaboration from "./Screens/Collaboration";
import ViewStory from "./Home/ViewStory";
import Notfications from "./Home/Notfications";
import MyPosts from "./DrawerScreens/ViewProfile/MyPosts";
import Saved from "./DrawerScreens/ViewProfile/Saved";
import Activities from "./DrawerScreens/ViewProfile/Activities";
import AddStory from "./Home/AddStory";
import {Provider} from "mobx-react";
import store from "./Screens/Store";
import * as firebase from "firebase";
import NewBooksList from "./CustomLists/BooksList/BooksNovelList";
import AsyncStorage from "@react-native-community/async-storage";
const MainStack = createStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyAjM8q_YD8AZHGUy5-8n8aPcUHai23dnQ8",
  authDomain: "shellcode1-78f01.firebaseapp.com",
  databaseURL: "https://shellcode1-78f01-default-rtdb.firebaseio.com",
  projectId: "shellcode1-78f01",
  storageBucket: "shellcode1-78f01.appspot.com",
  messagingSenderId: "324315657386",
  appId: "1:324315657386:web:b192bebe1919760d03ccd3",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    // AsyncStorage.getItem("token").then(value => {
    //   //AsyncStorage returns a promise so adding a callback to get the value
    //   console.log(value, "asyncStorage");
    //   if (value) {
    //     props.navigation.navigate("Home");
    //   }
    //   //Setting the value in Text
    // });
    console.log("email");
    AsyncStorage.getItem("token").then(
      async token => {
        // console.log(token, "tokennnnnnnnnnnnnnnnnnnnnnnn");
        if (token !== "" && token !== undefined && token !== null) {
          store.setToken(token);

          await AsyncStorage.getItem("id").then(async id => {
            if (id !== "" && id !== undefined && id !== null) store.setUid(id);

            setToken(token);
          });
        } else {
          // console.log("not working");
        }
      },

      // AsyncStorage.getItem("password").then(password => {
      //   // console.log(password);
      //   // firebase
      //   //   .auth()
      //   //   .signInWithEmailAndPassword(email, password)
      //   //   .then(async result => {
      //   //     await AsyncStorage.setItem("token", JSON.stringify(result));
      //   //     console.log(result);
      //   //     // console.log("this is working");
      //   //     props.navigation.navigate("Home");
      //   //   })
      //   //   .catch(error => {
      //   //     console.log(error);
      //   //   });
      // }),
    );
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            // initialParams={{ store }}
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Forgetpass"
            component={Forgetpass}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Home"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="EnterOtp"
            component={EnterOtp}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Collaboration"
            component={Collaboration}
            options={{
              headerShown: false,
            }}
          />
          {/* --------------------------------------------------------Book screen--------------------------------------------------- */}

          <MainStack.Screen
            name="NovelDetail"
            component={NovelDetail}
            options={{
              headerShown: false,
            }}
          />
          {/* --------------------------------------------------------Home chat screens---------------------------------------------------- */}

          <MainStack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="AddPost"
            component={AddPost}
            options={{
              headerShown: false,
            }}
            initialParams={store}
          />
          <HomeStack.Screen
            name="CommentList"
            component={CommentList}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="AddStory"
            component={AddStory}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="ViewStory"
            component={ViewStory}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Player"
            component={Player}
            options={{
              headerShown: true,
            }}
          />
          {/* --------------------------------------------------------My college screens---------------------------------------------------- */}

          <MainStack.Screen
            name="PayFeesInvoice"
            component={PayFeesInvoice}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="JoinClass"
            component={JoinClass}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="McqTest"
            component={McqTest}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Announcements"
            component={Announcements}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Assignments"
            component={Assignments}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="AssignmentDetail"
            component={AssignmentDetail}
            options={{
              headerShown: false,
            }}
          />

          {/* --------------------------------------------------------My classes screens---------------------------------------------------- */}

          <MainStack.Screen
            name="PayFeesInvoiceCl"
            component={PayFeesInvoiceCl}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="McqTestCl"
            component={McqTestCl}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="AnnoncementsCl"
            component={AnnoncementsCl}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="AssignmentCl"
            component={AssignmentCl}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="AssignmentDetailCl"
            component={AssignmentDetailCl}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="ContactUsCl"
            component={ContactUsCl}
            options={{
              headerShown: false,
            }}
          />
          {/* --------------------------------------------------------Drawer Screens---------------------------------------------------- */}
          <MainStack.Screen
            name="PersonalDetails"
            component={PersonalDetails}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="AddEducation"
            component={AddEducation}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="AddExperience"
            component={AddExperience}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="AddRewardsCertificates"
            component={AddRewardsCertificates}
            options={{
              headerShown: false,
            }}
          />
          {/* --------------------------------------------------------Connection view profile---------------------------------------------------- */}

          <MainStack.Screen
            name="Connections"
            component={Connections}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="FilterConnection"
            component={FilterConnection}
            options={{
              headerShown: false,
            }}
          />

          {/* --------------------------------------------------------Mentor Screens---------------------------------------------------- */}

          <MainStack.Screen
            name="MentorDetail"
            component={MentorDetail}
            options={{
              headerShown: false,
            }}
          />

          {/* --------------------------------------------------------Internship---------------------------------------------------- */}

          <MainStack.Screen
            name="SavedInternship"
            component={SavedInternship}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="InternshipDetail"
            component={InternshipDetail}
            options={{
              headerShown: false,
            }}
          />
          {/* <MainStack.Screen
          name="ManageNotifications"
          mcomponent={ManageNotifications}
          options={{
            headerShown: false,
          }}
        /> */}
          <MainStack.Screen
            name="PostInternship"
            component={PostInternship}
            options={{
              headerShown: false,
            }}
          />

          {/* --------------------------------------------------------deaken University ---------------------------------------------------- */}

          <MainStack.Screen
            name="DeakenUniversity"
            component={DeakenUniversity}
            options={{
              headerShown: false,
            }}
          />

          {/* -------------------------------------------------------- Sell Book status ---------------------------------------------------- */}

          <MainStack.Screen
            name="ChangeStatus"
            component={ChangeStatus}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="SellBookFilter"
            component={SellBookFilter}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="MyPosts"
            component={MyPosts}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Saved"
            component={Saved}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Activities"
            component={Activities}
            options={{
              headerShown: false,
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

{
  /*
const NoTabScreens = createStackNavigator();

function ScreensWithoutTab() {
  return (
    <NoTabScreens.Navigator>

    </NoTabScreens.Navigator>
  );
}
*/
}

{
  /* --------------------------------------------------------hOME sTACK---------------------------------------------------- */
}
const HomeStack = createStackNavigator();

function HomeStackScreens() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="MyMessagesList"
        component={MyMessagesList}
        options={{
          headerShown: false,
        }}
      />

      <HomeStack.Screen
        name="Notfications"
        component={Notfications}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

{
  /* --------------------------------------------------------COLLEGE STACK---------------------------------------------------- */
}

const MyCollegeStack = createStackNavigator();

function MyCollegeStackScreens() {
  return (
    <MyCollegeStack.Navigator>
      <MyCollegeStack.Screen
        name="MyCollege"
        component={MyCollege}
        options={{
          headerShown: false,
        }}
      />
      <MyCollegeStack.Screen
        name="UpcomingLec"
        component={UpcomingLec}
        options={{
          headerShown: false,
        }}
      />
      <MyCollegeStack.Screen
        name="RecordedLec"
        component={RecordedLec}
        options={{
          headerShown: false,
        }}
      />
      <MyCollegeStack.Screen
        name="UpcomingLecDetail"
        component={UpcomingLecDetail}
        options={{
          headerShown: false,
        }}
      />
      <MyCollegeStack.Screen
        name="ContactUsList"
        component={ContactUsList}
        options={{
          headerShown: false,
        }}
      />
      <MyCollegeStack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerShown: false,
        }}
      />
      <MyCollegeStack.Screen
        name="McqTests"
        component={McqTests}
        options={{
          headerShown: false,
        }}
      />
    </MyCollegeStack.Navigator>
  );
}

{
  /* --------------------------------------------------------CLASSES STACK---------------------------------------------------- */
}

const MyClassesStack = createStackNavigator();

function MyClassesStackScreens() {
  return (
    <MyClassesStack.Navigator>
      <MyClassesStack.Screen
        name="MyClasses"
        component={MyClasses}
        options={{
          headerShown: false,
        }}
      />
      <MyClassesStack.Screen
        name="UpcomingLecCl"
        component={UpcomingLecCl}
        options={{
          headerShown: false,
        }}
      />
      <MyClassesStack.Screen
        name="RecordedLecCl"
        component={RecordedLecCl}
        options={{
          headerShown: false,
        }}
      />
      <MyClassesStack.Screen
        name="UpcomingLecDetailCl"
        component={UpcomingLecDetailCl}
        options={{
          headerShown: false,
        }}
      />
      <MyClassesStack.Screen
        name="ContactUsClList"
        component={ContactUsClList}
        options={{
          headerShown: false,
        }}
      />
      <MyClassesStack.Screen
        name="AboutUsCl"
        component={AboutUsCl}
        options={{
          headerShown: false,
        }}
      />
      <MyClassesStack.Screen
        name="McqTestsCl"
        component={McqTestsCl}
        options={{
          headerShown: false,
        }}
      />
    </MyClassesStack.Navigator>
  );
}

{
  /* --------------------------------------------------------BOTTOM TAB---------------------------------------------------- */
}

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      activeColor="#1c2172"
      inactiveColor="#434b56"
      barStyle={{
        backgroundColor: "white",
        height: 80,
        justifyContent: "center",
      }}
      shifting={false}>
      <Tab.Screen
        name="Home1"
        component={HomeStackScreens}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" size={21} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MySchool"
        component={MyCollegeStackScreens}
        options={{
          headerShown: false,

          tabBarIcon: ({color}) => (
            <Image
              source={require("./assets/CollegeOut.png")}
              style={{height: 21, width: 21, tintColor: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyClasses"
        component={MyClassesStackScreens}
        options={{
          headerShown: false,

          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-outline"
              size={23}
              color={color}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Courses"
        component={CoursesStackScreens}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Image
              source={require("./assets/CoursesOut.png")}
              style={{ height: 21, width: 21, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Books"
        component={BooksStackScreens}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Feather name="book-open" size={21} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

{
  /* ---------------------------------------DRAWER NAVIGATION -------------------------------- */
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      {/* <Drawer.Screen name="Mentors" component={Mentors} /> */}
      {/* <Drawer.Screen name="Internships" component={Internships} /> */}
      <Drawer.Screen name="MyCart" component={MyCart} />
      <Drawer.Screen name="EmptyCart" component={EmptyCart} />
      <Drawer.Screen name="CheckOut" component={CheckOut} />
      <Drawer.Screen name="CheckOut2" component={CheckOut2} />
      <Drawer.Screen name="CheckOut3" component={CheckOut3} />
      <Drawer.Screen name="Summary" component={Summary} />
      <Drawer.Screen name="PaymentSucc" component={PaymentSucc} />
      <Drawer.Screen name="InternshipFilter" component={InternshipFilter} />
      <Drawer.Screen name="MyOrder" component={MyOrder} />
      <Drawer.Screen name="SellBook" component={SellBook} />
      <Drawer.Screen name="AddBooks" component={AddBooks} />

      <Drawer.Screen name="ReferEarn" component={ReferEarn} />
      <Drawer.Screen name="ContactUSDrawer" component={ContactUSDrawer} />
      <Drawer.Screen name="Rewards" component={Rewards} />
      <Drawer.Screen name="CarouselCards" component={CarouselCards} />
      {/* <Drawer.Screen name="Downloads" component={Downloads} /> */}
    </Drawer.Navigator>
  );
}
{
  /* ---------------------------------------DRAWER STACK SCREENS --------------------------------

const DrawerStack = createStackNavigator();
{
  function DrawerStackNav() {
    return (
      <DrawerStack.Navigator>
        <DrawerStack.Screen
          name="PersonalDetails"
          component={PersonalDetails}
        />
      </DrawerStack.Navigator>
    );
  }
}
*/
}
{
  /* --------------------------------------------------------COURSES STACK---------------------------------------------------- */
}

const CoursesStack = createStackNavigator();

function CoursesStackScreens(props) {
  const [userData, setUserData] = React.useState([]);
  const getUser = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${store.getToken}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL =
      "https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

    fetch(`${apiURL}/users/${store.getUid}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setUserData(result);
      })
      .catch(error => console.log("error", error));
  };

  React.useEffect(() => {
    getUser();
  }, []);
  return (
    <CoursesStack.Navigator>
      <CoursesStack.Screen
        name="TopTab"
        component={CoursesTopTabNav}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                color: "#434b56",
                position: "relative",
                right: 20,
                marginBottom: 8,
              }}>
              Courses
            </Text>
          ),
          headerLeft: () => (
            <View
              style={{
                width: "90%",
                paddingLeft: 10,
                backgroundColor: "transparent",
              }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.navigation.goBack()}>
                <Ionicons
                  name="chevron-back-outline"
                  size={35}
                  color="#434b56"
                  style={{position: "relative", right: 10, marginBottom: 8}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                alignItems: "flex-end",
                justifyContent: "center",
                width: "10%",
              }}>
              <TouchableOpacity activeOpacity={0.5}>
                <Avatar.Image
                  source={{uri: userData.profile_pic_url}}
                  size={35}
                  style={{position: "relative", right: 20, bottom: 5}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {height: 89},
        }}
      />
    </CoursesStack.Navigator>
  );
}

{
  /* -------------------------------------------------------COURSES TOP TAB---------------------------------------------------- */
}

const CoursesTopTab = createMaterialTopTabNavigator();

function CoursesTopTabNav() {
  return (
    <CoursesTopTab.Navigator
      tabBarOptions={{
        activeTintColor: "#1c2172",
        inactiveTintColor: "#C5C8CA",
        labelStyle: {fontSize: 12, fontWeight: "700"},
      }}>
      <CoursesTopTab.Screen
        name="Masters"
        component={Masters}
        options={{
          tabBarLabel: "Paid",
        }}
      />
      <CoursesTopTab.Screen
        name="PG-Program"
        component={PGProgram}
        options={{tabBarLabel: "Free"}}
      />
      <CoursesTopTab.Screen name="Certification" component={Certification} />
    </CoursesTopTab.Navigator>
  );
}

{
  /* --------------------------------------------------------BOOKS STACK---------------------------------------------------- */
}

const BooksStack = createStackNavigator();

function BooksStackScreens(props) {
  const [userData, setUserData] = React.useState([]);
  const getUser = async () => {
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${store.getToken}`,
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const apiURL =
      "https://us-central1-shellcode1-78f01.cloudfunctions.net/api";

    fetch(`${apiURL}/users/${store.getUid}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setUserData(result);
      })
      .catch(error => console.log("error", error));
  };

  React.useEffect(() => {
    getUser();
  }, []);
  return (
    <BooksStack.Navigator>
      <BooksStack.Screen
        name="TopTab"
        component={BooksTopTabNav}
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                color: "#434b56",
                position: "relative",
                right: 20,
                marginBottom: 8,
              }}>
              Books
            </Text>
          ),
          headerLeft: () => (
            <View
              style={{
                width: "90%",
                paddingLeft: 10,
                backgroundColor: "transparent",
              }}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => props.navigation.goBack()}>
                <Ionicons
                  name="chevron-back-outline"
                  size={35}
                  color="#434b56"
                  style={{position: "relative", right: 10, marginBottom: 8}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                alignItems: "flex-end",
                justifyContent: "center",
                width: "10%",
              }}>
              <TouchableOpacity activeOpacity={0.5}>
                <Avatar.Image
                  source={{uri: userData.profile_pic_url}}
                  size={35}
                  style={{position: "relative", right: 20, bottom: 5}}
                />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {height: 89},
        }}
      />
    </BooksStack.Navigator>
  );
}

{
  /* -------------------------------------------------------BOOKS TOP TAB---------------------------------------------------- */
}

const BooksTopTab = createMaterialTopTabNavigator();

function BooksTopTabNav() {
  return (
    <BooksTopTab.Navigator
      tabBarOptions={{
        activeTintColor: "#1c2172",
        inactiveTintColor: "#C5C8CA",
        labelStyle: {fontSize: 12, fontWeight: "700"},
      }}>
      <BooksTopTab.Screen
        name="Novels"
        component={NewBooksList}
        options={{
          tabBarLabel: "New Books",
        }}
      />
      <BooksTopTab.Screen
        name="OldBooksList"
        component={OldBooksList}
        options={{
          tabBarLabel: "Old Books",
        }}
      />
      <BooksTopTab.Screen
        name="Writing"
        component={EbooksList}
        options={{
          tabBarLabel: "Ebooks",
        }}
      />
    </BooksTopTab.Navigator>
  );
}

{
  /* --------------------------------------------------------CHECKOUT sTACK---------------------------------------------------- */
}
const Checkout = createStackNavigator();

function CheckOutScreens() {
  return (
    <Checkout.Navigator initialRouteName="CheckOut">
      <Checkout.Screen
        name="CheckOut"
        component={CheckOut}
        options={{
          headerShown: false,
        }}
      />
      <Checkout.Screen
        name="CheckOut2"
        component={CheckOut2}
        options={{
          headerShown: false,
        }}
      />
      <Checkout.Screen
        name="CheckOut3"
        component={CheckOut3}
        options={{
          headerShown: false,
        }}
      />
      <Checkout.Screen
        name="Summary"
        component={Summary}
        options={{
          headerShown: false,
        }}
      />
    </Checkout.Navigator>
  );
}
