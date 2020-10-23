import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:kingslayer3/service/authservice.dart';
import 'package:flutter/services.dart';
class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final formKey = new GlobalKey<FormState>();
  List<String> _currencies = [
    'Employee',
    'Owner',
  ];
  List<String> _times = [
    '  +91',
    '  +12',
    '  +31',
    '  +52',
    '  +85',
    ' +101',
  ];
  var _currentItemSelected1='Employee';
  var _currentItemSelected='  +91';
  String phoneNo, verificationId, smsCode;
  bool value_3=true;
  bool value_4=false;
  bool value_5=false;
  bool codeSent = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[800],
      appBar: AppBar(
          title:Text("The Phone Authentication App"),
          centerTitle:true,
          titleSpacing: 2,
        ),
      body: Form(
          key: formKey,
          child: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                SizedBox(height:60.0),
                Container(
                  constraints: BoxConstraints.expand(
                    width: 60.0,
                    height: 50.0,
                  ),
                  decoration:BoxDecoration(
                    color:Colors.black,
                  ),
                  child:Image.network('https://lh3.googleusercontent.com/OFt6DNaNxNbAgWvLp-fIcTfLUBCER5MpwTGhjUz2vkgqHwgEbrtJdd51foeUyh9bVw',
                    fit:BoxFit.cover,
                  ),
                ),
                SizedBox(height:10.0),
                Container(
                  decoration:BoxDecoration(
                    borderRadius:BorderRadius.circular(10.0),
                    color: Colors.grey[600],
                  ),
                  child: DropdownButtonHideUnderline(
                    child: DropdownButton<String>(
                      items: _currencies.map((String dropDownStringItem) {
                        return DropdownMenuItem<String>(
                          value: dropDownStringItem,
                          child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.white),),
                        );
                      }).toList(),

                      onChanged: (String newValueSelected1) {
                        // Your code to execute, when a menu item is selected from drop down
                        _onDropDownItemSelected1(newValueSelected1);
                      },
                      dropdownColor: Colors.grey[600],
                      value:_currentItemSelected1,
                    ),
                  ),
                ),
                SizedBox(height:10.0),
                Row(
                  children: [
                    SizedBox(width: 18.0,),
                    Expanded(
                      flex: 1,
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          decoration:BoxDecoration(
                            borderRadius:BorderRadius.circular(10.0),
                            color: Colors.grey[600],
                          ),
                          child: DropdownButtonHideUnderline(
                            child: DropdownButton<String>(
                              items: _times.map((String dropDownStringItem) {
                                return DropdownMenuItem<String>(
                                  value: dropDownStringItem,
                                  child: Text(" "+dropDownStringItem.toString(),style: TextStyle(color: Colors.white),),
                                );
                              }).toList(),
                              onChanged: (String newValueSelected) {
                                // Your code to execute, when a menu item is selected from drop down
                                _onDropDownItemSelected(newValueSelected);
                              },
                              dropdownColor: Colors.grey[600],
                              value:_currentItemSelected,
                            ),
                          ),
                        ),
                      ),
                    ),
                    Expanded(
                      flex: 3,
                      child: Padding(
                          padding: EdgeInsets.only(left:1.0, right: 25.0),
                          child: TextFormField(
                              inputFormatters: [
                                LengthLimitingTextInputFormatter(10),
                              ],
                              keyboardType: TextInputType.phone,
                              decoration: InputDecoration(hintText: "   Enter Phone Number",
                                  hintStyle: TextStyle(
                                      color: Colors.white
                                  ),
                                  filled: true,
                                  fillColor: Colors.grey[600],
                                  border:OutlineInputBorder(
                                      borderSide:BorderSide(color: Colors.black,width: 10.0,style:BorderStyle.solid ),
                                      borderRadius: BorderRadius.all(Radius.circular(10.0))
                                  )
                              ),
                              onChanged: (val) {
                                setState(() {
                                  this.phoneNo = val;
                                });
                              },
                                ),
                      ),
                    ),
                  ],
                ),
                SizedBox(height:10.0),
                Padding(
                    padding: EdgeInsets.only(left: 25.0, right: 25.0),
                    child: TextFormField(
                      decoration: InputDecoration(hintText: "   Enter password",
                          hintStyle: TextStyle(
                              color: Colors.white
                          ),
                          filled: true,
                          fillColor: Colors.grey[600],
                          border:OutlineInputBorder(
                              borderSide:BorderSide(color: Colors.black,width: 10.0,style:BorderStyle.solid ),
                              borderRadius: BorderRadius.all(Radius.circular(50.0))
                          )
                      ),
                      onChanged: (val) {
                        setState(() {
                          this.phoneNo = val;
                        });
                      },
                    )
                ),
                SizedBox(height:10.0),
                codeSent ? Padding(
                    padding: EdgeInsets.only(left: 25.0, right: 25.0),
                    child: TextFormField(
                      keyboardType: TextInputType.phone,
                      decoration: InputDecoration(hintText: "   Enter OTP",
                          hintStyle: TextStyle(
                              color: Colors.white
                          ),
                          filled: true,
                          fillColor: Colors.grey[600],
                          border:OutlineInputBorder(
                              borderSide:BorderSide(color: Colors.black,width: 10.0,style:BorderStyle.solid ),
                              borderRadius: BorderRadius.all(Radius.circular(50.0))
                          )
                      ),
                      onChanged: (val) {
                        setState(() {
                          this.smsCode = val;
                        });
                      },
                    )) : Container(),
                Padding(
                    padding: EdgeInsets.only(left: 25.0, right: 25.0),
                    child: RaisedButton(
                        child: Center(child: codeSent ? Text('Login'):Text('Verify')),
                        onPressed: () {
                          codeSent ? AuthService().signInWithOTP(smsCode, verificationId):verifyPhone(phoneNo);
                        },
                        elevation:7.0,
                        color: Colors.lightBlueAccent,
                        textColor: Colors.black,
                        ))
              ],
            ),
          )),
    );
  }

  Future<void> verifyPhone(phoneNo) async {
    final PhoneVerificationCompleted verified = (AuthCredential authResult) {
      AuthService().signIn(authResult);
    };

    final PhoneVerificationFailed verificationfailed =
        (FirebaseAuthException authException) {
      print('${authException.message}');
    };

    final PhoneCodeSent smsSent = (String verId, [int forceResend]) {
      this.verificationId = verId;
      setState(() {
        this.codeSent = true;
      });
    };

    final PhoneCodeAutoRetrievalTimeout autoTimeout = (String verId) {
      this.verificationId = verId;
    };

    await FirebaseAuth.instance.verifyPhoneNumber(
        phoneNumber: phoneNo,
        timeout: const Duration(seconds: 5),
        verificationCompleted: verified,
        verificationFailed: verificationfailed,
        codeSent: smsSent,
        codeAutoRetrievalTimeout: autoTimeout);
  }
  void _onDropDownItemSelected1(String newValueSelected1) {
    setState(() {
      this._currentItemSelected1 = newValueSelected1;
    });
  }
  void _onDropDownItemSelected(String newValueSelected) {
    setState(() {
      this._currentItemSelected = newValueSelected;
    });
  }
}

