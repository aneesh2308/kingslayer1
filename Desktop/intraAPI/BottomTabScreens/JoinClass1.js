import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';
function JoinClass(props) {
  makeid=(length)=>{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
  }
  useEffect(() => {
    setTimeout(() => {
      const url = `https://meet.jit.si/${makeid(6)}`;
      const userInfo = {
        displayName: 'Aneesh',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      console.log(url);
      JitsiMeet.call(url, userInfo);
      /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
      /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
    }, 1000);
  }, [])
  // call = () => {
  //   setTimeout(() => {
  //     const url = 'https://meet.jit.si/class';
  //     const userInfo = {
  //       displayName: 'Aneesh',
  //       email: 'user@example.com',
  //       avatar: 'https:/gravatar.com/avatar/abc123',
  //     };
  //     JitsiMeet.call(url, userInfo);
  //     /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
  //     /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
  //   }, 1000);
  // }
  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  });
  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    props.navigation.navigate("MyClasses");
    console.log("going back",nativeEvent);
    console.log(nativeEvent)
  }
  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log(nativeEvent)
  }
  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log(nativeEvent)
  }
  return (
    <JitsiMeetView
      onConferenceTerminated={e => onConferenceTerminated(e)}
      onConferenceJoined={e => onConferenceJoined(e)}
      onConferenceWillJoin={e => onConferenceWillJoin(e)}
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}
    />
  )
}
export default JoinClass;
