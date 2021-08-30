import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Video from "react-native-video"

export default class Player extends Component {
    render() {
        console.log("title",this.props.route.params.item.title)
        console.log("video_url",this.props.route.params.item.video_url)
        return (
            <View style={{ flex:1,justifyContent:"center" }}>
                <Text style={{ marginVertical:15,textAlign:"center",fontSize:16,fontStyle:"normal",fontWeight:"bold" }}> {this.props.route.params.item.title} </Text>
                <Video resizeMode="stretch" fullscreenAutorotate={true} fullscreen={true} source={{ uri: this.props.route.params.item.video_url }} style={{ alignSelf: 'center',width: "100%", height: 250 }} controls={true} />
            </View>
        )
    }
}
