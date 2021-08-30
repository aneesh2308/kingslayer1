import {
  CButton,
  CCol,
  CInput,
  CListGroup,
  CListGroupItem,
  CRow,
  CSpinner,
} from "@coreui/react";
import axios from "axios";
import React from "react";
import { ChatFeed, Message } from "react-chat-ui";
import profile from "../assets/images/thumb-3.jpg";
import { id } from "../config";
import { TheExpertSidebar, TheFooter, TheHeader } from "../containers/index";

class ChatBox extends React.Component {
  state = {
    load_msg_wait: false,
    title: "",
    newMessage: "",
    sendTo: "",
    wait: true,
    list: null,
    showList: "",
    messages: [
      /*new Message({
        id: 1,
        message: "I'm the recipient! (The person you're talking to)",
      }), // Gray bubble
      new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble*/
    ],
    searchText: "",
    //...
  };
  componentDidMount() {
    console.log(this.props);
    this.setState({ wait: true });
    let config = {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTk5OTM3NjQyMjciLCJpYXQiOjE2MDc2ODg3NTR9.IksBKfo1Yl7yDQTxRzugiDntaE7o5TJSwlvgdM2ed7A",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    axios
      .get("http://35.223.86.66:3000/api/v1/expert/chat?userId=" + id, config) //to fetch left side list
      .then((res) => {
        console.log(res);
        if (res.data.conversationList) {
          this.setState({ list: res.data.conversationList }, () => {
            this.setState({ showList: this.state.list });
            console.log(this.state.list);
          });
        } else {
          this.setState({ list: [] });
          this.setState({ showList: [] });
        }

        this.setState({ wait: false });
        let userId = sessionStorage.getItem("expchat");
        this.setState({ sendTo: userId });
        // console.log(`http://35.223.86.66:3000/api/v1/expert/chat/privatemessages?fromId=${id}toId=${userId}`)
        axios
          .get(
            `http://35.223.86.66:3000/api/v1/expert/chat/privatemessages?fromId=${id}&toId=${userId}`,
            config
          )
          .then((res) => {
            console.log(res);
            let data = {
              fromId: id,
              toId: userId,
            };
            if (res.data.conversationId === undefined) {
              console.log("in new sending value  " + data);
              axios
                .post(
                  "http://35.223.86.66:3000/api/v1/expert/chat/new",
                  data,
                  config
                )
                .then((res) => {
                  console.log(res);
                  this.setState({ list: [] });
                  /*this.fetch_message(userId)
                                    axios.get("http://35.223.86.66:3000/api/v1/expert/chat?userId="+id,config)
                                          .then((res)=>{
                                            if(res.data.conversationList){
                                              this.setState({list : res.data.conversationList},()=>{console.log(this.state.list)})
                                            }else{
                                              this.setState({list : []})
                                            }
                                          })*/
                });
            } else {
              console.log("in not new");
              if (res.data.messages === "no messages") {
                this.setState({ messages: [] });
              } else {
                let msgarr = [];
                res.data.messages.map((data) => {
                  let temp;
                  if (data.author.kind === "expert") {
                    temp = new Message({ id: 0, message: data.body });
                  } else {
                    temp = new Message({ id: 1, message: data.body });
                  }
                  msgarr.push(temp);
                });
                this.setState({ messages: msgarr.reverse() });
              }
            }
          })
          .catch((err) => {
            console.log("went wrong");
            console.log(err);
          });
      })
      .catch((err) => {
        console.log("went wrong");
        console.log(err.body);
      });
  }
  sendNewMsg = () => {
    let config = {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTk5OTM3NjQyMjciLCJpYXQiOjE2MDc2ODg3NTR9.IksBKfo1Yl7yDQTxRzugiDntaE7o5TJSwlvgdM2ed7A",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    let data = {
      privateMessageInput: this.state.newMessage,
      fromAuthor: "expert",
      fromId: id,
      toId: sessionStorage.getItem("expchat"),
    };
    console.log(data);
    axios
      .post("http://35.223.86.66:3000/api/v1/expert/chat/reply", data, config)
      .then((res) => {
        console.log(res);
        this.fetch_message(this.state.sendTo);
      });
  };
  getMsg = (e) => {
    this.setState({ newMessage: e.target.value });
  };
  fetch_message = (data) => {
    this.setState({ load_msg_wait: true });
    console.log(data);
    let config = {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiI5MTk5OTM3NjQyMjciLCJpYXQiOjE2MDc2ODg3NTR9.IksBKfo1Yl7yDQTxRzugiDntaE7o5TJSwlvgdM2ed7A",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    axios
      .get(
        `http://35.223.86.66:3000/api/v1/expert/chat/privatemessages?fromId=${id}&toId=${sessionStorage.getItem(
          "expchat"
        )}`,
        config
      )
      .then((res) => {
        console.log(res);
        let msgarr = [];
        if (res.data.messages !== "no messages") {
          res.data.messages.map((data) => {
            let temp;
            if (data.author.kind === "expert") {
              temp = new Message({ id: 0, message: data.body });
            } else {
              temp = new Message({ id: 1, message: data.body });
            }
            msgarr.push(temp);
          });
          this.setState({ messages: msgarr.reverse() });
        } else {
          this.setState({ messages: [] });
        }
        this.setState({ load_msg_wait: false });
      });
  };
  handleClick = (data) => {
    console.log(data);
    this.fetch_message(data);
  };
  searchHandler = (e) => {
    console.log(e.target.value);
    this.searchList(e.target.value);
  };
  searchList = (data) => {
    var search = this.state.list.filter((obj) => {
      let str = obj.participants.toUserName;
      let str1 = obj.participants.fromUserName;
      return str.includes(data) || str1.includes(data);
    });
    this.setState({ showList: search });
  };
  render() {
    let page;
    if (this.state.wait) {
      page = (
        <CRow style={{ height: "700px" }}>
          <CCol
            className="col-md-1 col-sm-12 mx-auto"
            style={{ paddingTop: "300px" }}
          >
            <CSpinner
              color="bg-main"
              style={{ width: "4rem", height: "4rem", paddingTop: "40%" }}
            />
          </CCol>
        </CRow>
      );
    } else {
      let list, chat;
      list = this.state.showList.map((data) => {
        return (
          <CListGroupItem
            className="list-item"
            onClick={() => {
              // first save this id to sendTo state
              this.setState({ title: data.participants.toUserName });
              sessionStorage.setItem("expchat", data.participants.toId);
              this.handleClick(data.participants.toId);
            }}
          >
            <CRow>
              <CCol md={4}>
                <img alt="expert_img" src={profile} className="logo-chat" />
              </CCol>
              <CCol md={8}>
                <h5>{data.participants.toUserName}</h5>
                <p>Message from xxx</p>
              </CCol>
            </CRow>
            <div className="separator">
              <hr />
            </div>
          </CListGroupItem>
        );
      });
      if (this.state.load_msg_wait) {
        chat = (
          <CRow style={{ height: "700px" }}>
            <CCol
              className="col-md-1 col-sm-12 mx-auto"
              style={{ paddingTop: "300px" }}
            >
              <CSpinner
                color="bg-main"
                style={{ width: "4rem", height: "4rem", paddingTop: "40%" }}
              />
            </CCol>
          </CRow>
        );
      } else {
        chat = (
          <div>
            <ChatFeed
              messages={this.state.messages} // Array: list of message objects
              isTyping={this.state.is_typing} // Boolean: is the recipient typing
              hasInputField={false} // Boolean: use our input, or use your own
              showSenderName // show the name of the user who sent the message
              bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
              // JSON: Custom bubble styles
              bubbleStyles={{
                text: {
                  fontSize: 12,
                },
                chatbubble: {
                  borderRadius: 30,
                  padding: 10,
                },
              }}
            />
          </div>
        );
      }
      page = (
        <div className="c-app c-default-layout">
          <TheExpertSidebar />
          <div className="c-wrapper">
            <TheHeader />
            <div className="c-body mt-6">
              <div>
                <div className="row m-4">
                  <div className="col-5 bg-white mr-1">
                    <h1 className="mb-2 p-2 text-center">List</h1>
                    <CInput
                      className="mb-4 mt-3 border"
                      placeholder="Type something..."
                      onChange={(e) => {
                        this.searchHandler(e);
                      }}
                    ></CInput>
                    <CListGroup>{list}</CListGroup>
                  </div>
                  <div className="col-6 chat-box">
                    <h1 className="mb-2 p-2 text-center">{this.state.title}</h1>
                    <hr />
                    {chat}
                  </div>
                  <div className="row">
                    <div className="col-5"></div>
                    <div className="col-6">
                      <div className="row d-flex justify-content-end">
                        <div className="col-11">
                          <CInput
                            type="text"
                            placeholder="type something.."
                            onChange={(e) => {
                              this.getMsg(e);
                            }}
                          ></CInput>
                        </div>
                        <div className="col-1 p">
                          <CButton onClick={this.sendNewMsg}>send</CButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TheFooter />
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>{page}</div>
      </div>
    );
  }
}

export default ChatBox;
