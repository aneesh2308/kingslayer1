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
import { adminAuthToken } from "../config";
import { TheExpertSidebar, TheFooter, TheHeader } from "../containers/index";

class ChatBox extends React.Component {
  state = {
    loadChat: false,
    newMessage: "",
    sendTo: "",
    wait: true,
    list: null,
    messages: [
      /*new Message({
        id: 1,
        message: "I'm the recipient! (The person you're talking to)",
      }), // Gray bubble
      new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble*/
    ],
    expname: "",
    //...
  };
  componentDidMount() {
    let id = sessionStorage.getItem("userId");
    this.setState({ wait: true });
    let config = {
      headers: {
        Authorization: adminAuthToken,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    axios
      .get("http://35.223.86.66:3000/api/v1/user/chat?userId=" + id, config) //to fetch left side list
      .then((res) => {
        if (res.data.conversationList) {
          this.setState({ list: res.data.conversationList }, () => {
            console.log(this.state.list);
            this.setState({ wait: false });
          });
        } else {
          this.setState({ list: [] });
          this.setState({ wait: false });
        }
      });
  }
  sendNewMsg = () => {
    let id = sessionStorage.getItem("userId");
    let config = {
      headers: {
        Authorization: adminAuthToken,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    let data = {
      privateMessageInput: this.state.newMessage,
      fromAuthor: "user",
      fromId: id,
      toId: this.state.sendTo,
    };
    axios
      .post("http://35.223.86.66:3000/api/v1/user/chat/reply", data, config)
      .then((res) => {
        console.log(res, this.state.sendTo);
        this.fetch_message(this.state.sendTo);
        //this.handleClick(this.state.sendTo)
      });
  };
  getMsg = (e) => {
    this.setState({ newMessage: e.target.value });
  };
  fetch_message = (data) => {
    let id = sessionStorage.getItem("userId");

    console.log(data);
    let config = {
      headers: {
        Authorization: adminAuthToken,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    this.setState({ loadChat: true });
    axios
      .get(
        `http://35.223.86.66:3000/api/v1/user/chat/privatemessages?fromId=${id}&toId=${data}`,
        config
      )
      .then((res) => {
        console.log(res);
        let msgarr = [];
        if (res.data.messages.length !== 0) {
          res.data.messages.map((data) => {
            let temp;
            if (data.author.kind === "expert") {
              temp = new Message({ id: 1, message: data.body });
            } else {
              temp = new Message({ id: 0, message: data.body });
            }
            msgarr.push(temp);
          });
          this.setState({ messages: msgarr.reverse() });
          this.setState({ loadChat: false });
        }
      });
  };
  handleClick = (data) => {
    this.fetch_message(data);
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
      let list, chatWindow;
      let userName = sessionStorage.getItem("userName");
      list = this.state.list.map((data) => {
        return (
          <CListGroupItem
            className="list-item"
            onClick={() => {
              if (userName !== data.participants.fromUserName) {
                this.setState({ expname: data.participants.fromUserName });
              } else {
                this.setState({ expname: data.participants.toUserName });
              }
              let id = sessionStorage.getItem("userId");
              if (data.participants.fromId !== id) {
                this.setState({ sendTo: data.participants.fromId }, () => {
                  console.log(this.state.sendTo);
                });

                this.handleClick(data.participants.fromId);
              } else {
                this.setState({ sendTo: data.participants.toId }, () => {
                  console.log(this.state.sendTo);
                });
                this.handleClick(data.participants.toId);
              }
            }}
          >
            <CRow>
              <CCol md={4}>
                <img alt="expert_img" src={profile} className="logo-chat" />
              </CCol>
              <CCol md={8}>
                <h5>
                  {userName !== data.participants.fromUserName
                    ? data.participants.fromUserName
                    : data.participants.toUserName}
                </h5>
                <p>Message from xxx</p>
              </CCol>
            </CRow>
            <div className="separator">
              <hr />
            </div>
          </CListGroupItem>
        );
      });
      if (this.state.loadChat) {
        chatWindow = (
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
        chatWindow = (
          <div>
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
          </div>
        );
      }
      page = (
        <div className="c-app c-default-layout">
          <TheExpertSidebar />
          <div className="c-wrapper">
            <TheHeader />
            <div className="c-body mt-6">
              <div className="container">
                <div className="row">
                  <div className="col-5 bg-white mr-1">
                    <h1 className="mb-2 p-2 text-center">List</h1>
                    <CInput
                      className="mb-4 mt-3 border"
                      placeholder="Type something..."
                    ></CInput>
                    <CListGroup>{list}</CListGroup>
                  </div>
                  <div className="col-6 chat-box">
                    <h1 className="mb-2 p-2 text-center">
                      {this.state.expname}
                    </h1>
                    <hr />

                    {chatWindow}
                  </div>
                  <div className="row">
                    <div className="col-5"></div>
                    <div className="col-6">
                      <div className="row d-flex justify-content-end">
                        <div className="col-11">
                          <CInput
                            type="text"
                            defaultValue="type something.."
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
