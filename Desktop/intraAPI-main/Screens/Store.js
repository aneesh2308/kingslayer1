import {observable, action, computed, makeObservable} from "mobx";

class Store {
  token = "";
  uid = "";
  data = {};
  constructor() {
    makeObservable(this, {
      token: observable,
      setToken: action,
      getToken: computed,
      uid: observable,
      setUid: action,
      getUid: computed,
      data: observable,
      setData: action,
      getData: computed,
    });
  }

  setToken(token) {
    console.log("In store : " + token);
    this.token = token;
  }

  setData(data) {
    console.log("In store : " + data);
    this.data = data;
  }

  setUid(uid) {
    console.log("In store : " + uid);
    this.uid = uid;
  }

  get getToken() {
    return this.token;
  }

  get getData() {
    return this.data;
  }

  get getUid() {
    return this.uid;
  }
}

export default new Store();
