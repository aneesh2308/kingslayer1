import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_typeahead/flutter_typeahead.dart';
import 'data.dart';

class Billing extends StatefulWidget {
  @override
  _BillingState createState() => _BillingState();
}

class _BillingState extends State<Billing> {
  final nameController = TextEditingController();
  final nameController1 = TextEditingController();
  final paymentController = TextEditingController();
  final PaytmController = TextEditingController();
  final PhonePeController = TextEditingController();
  final SodexoController = TextEditingController();
  final GooglePayController = TextEditingController();
  final deleteController = TextEditingController();
  final ReceiveController = TextEditingController();
  final ReturnController = TextEditingController();
  bool value_1 = true;
  bool value_2 = true;
  bool value_3 = true;
  bool value_4 = true;
  String _selectedCity;
  String _selectedPhone;
  List<String> keys = [
    'Cash',
    'Paytm',
    'PhonePe',
    'Sodexo',
    'GooglePay',
  ];
  var _currentItemSelected= 'Cash';
  @override
  void initState() {
    paymentController.text ="";
    PaytmController.text ="";
    PhonePeController.text ="";
    SodexoController.text ="";
    GooglePayController.text ="";
    ReceiveController.text ="";
    ReturnController.text ="";
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        titleSpacing: 2.0,
        title:Row(
          children: [
            Text('Billing',
            style: TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.bold,
            ),
            ),
            SizedBox(width:60.0),
            Expanded(
              child:TypeAheadFormField(
                textFieldConfiguration: TextFieldConfiguration(
                  decoration: InputDecoration(labelText: 'Distribution Name/ Mobile Number',labelStyle:TextStyle(fontSize:13)),
                  controller: this.nameController,
                ),
                suggestionsCallback: (pattern) {
                  return (() {
                    if(nameController.text.length == 3){
                      return CitiesService.getSuggestions(pattern);}
                    else{return null;}
                  })();
                },
                itemBuilder: (context, suggestion) {
                  return ListTile(
                    title: Text(suggestion),
                  );
                },
                transitionBuilder: (context, suggestionsBox, controller) {
                  return suggestionsBox;
                },
                onSuggestionSelected: (suggestion) {
                  this.nameController.text = suggestion;
                },
                validator: (value) =>
                value.isEmpty ? 'Please select a Distribution Name' : null,
                onSaved: (value) => this._selectedCity = value,
              ),
            ),
          ],
        ),
        backgroundColor: Colors.cyan,
      ),
      body:Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(height:3.0),
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Card(
                    margin: EdgeInsets.all(0.0),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Icon(Icons.shopping_bag,color:Colors.cyan[600]),
                            Text('Shopping Cart',
                            style:TextStyle(
                              fontWeight: FontWeight.bold,
                              color:Colors.cyan[600],
                            ),
                            ),
                            SizedBox(width:40.0),
                            Text('Item/Stock : 0 / 0',
                              style:TextStyle(
                              fontWeight: FontWeight.bold,
                              ),
                            ),
                          ],
                        ),
                        Text('                                  QTY                                     MRP                                     SP                                    TOTAL                                 ',style: TextStyle(backgroundColor:Colors.cyan,color:Colors.white,fontWeight:FontWeight.bold))
                      ],
                    ),
                  ),
                  SizedBox(width:5.0),
                  Card(
                    margin: EdgeInsets.all(0.0),
                    child:Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Icon(Icons.call,color:Colors.cyan[600]),
                            Text('User Number',
                              style:TextStyle(
                                color:Colors.cyan[600],
                              ),
                            ),
                            SizedBox(width:10.0),
                            FlatButton(
                              color: Colors.green[700],
                              child:Text('  SKIP NUMBER  ',
                                style:TextStyle(
                                    color:Colors.white,
                                    fontSize:10.0
                                ),
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height:8.0),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Padding(
                              padding: const EdgeInsets.all(3.0),
                              child: Icon(Icons.phone_android),
                            ),
                            SizedBox(
                              height:400,
                              width:400,
                              child:TypeAheadFormField(
                                textFieldConfiguration: TextFieldConfiguration(
                                  decoration: InputDecoration(labelText: 'Distribution Name/ Mobile Number',labelStyle:TextStyle(fontSize:13)),
                                  controller: this.nameController1,
                                ),
                                suggestionsCallback: (pattern) {
                                  return (() {
                                    if(nameController1.text.length == 3){
                                      return PhoneServices.getSuggestions(pattern);}
                                    else{return null;}
                                  })();
                                },
                                itemBuilder: (context, suggestion) {
                                  return ListTile(
                                    title: Text(suggestion),
                                  );
                                },
                                transitionBuilder: (context, suggestionsBox, controller) {
                                  return suggestionsBox;
                                },
                                onSuggestionSelected: (suggestion) {
                                  this.nameController1.text = suggestion;
                                },
                                validator: (value) =>
                                value.isEmpty ? 'Search by Mobile' : null,
                                onSaved: (value) => this._selectedPhone = value,
                              ),
                            ),
                            SizedBox(width:2.0),
                            FlatButton(
                              color: Colors.green[700],
                              child:Text('   VERIFY   ',
                                style:TextStyle(
                                    color:Colors.white,
                                    fontSize:10.0
                                ),
                              ),
                             ),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Text('OR'),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Padding(
                              padding: const EdgeInsets.all(3.0),
                              child: Icon(Icons.person),
                            ),
                            SizedBox(
                              height:400,
                              width:400,
                              child:TypeAheadFormField(
                                textFieldConfiguration: TextFieldConfiguration(
                                  decoration: InputDecoration(labelText: 'Distribution Name/ Mobile Number',labelStyle:TextStyle(fontSize:13)),
                                  controller: this.nameController1,
                                ),
                                suggestionsCallback: (pattern) {
                                  return (() {
                                    if(nameController1.text.length == 3){
                                      return PhoneServices.getSuggestions(pattern);}
                                    else{return null;}
                                  })();
                                },
                                itemBuilder: (context, suggestion) {
                                  return ListTile(
                                    title: Text(suggestion),
                                  );
                                },
                                transitionBuilder: (context, suggestionsBox, controller) {
                                  return suggestionsBox;
                                },
                                onSuggestionSelected: (suggestion) {
                                  this.nameController1.text = suggestion;
                                },
                                validator: (value) =>
                                value.isEmpty ? 'Search by Mobile' : null,
                                onSaved: (value) => this._selectedPhone = value,
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height:5.0),
                        Text('Sub Total                                            ₹ 00.00',
                        style: TextStyle(
                          decoration:TextDecoration.underline,
                          decorationStyle: TextDecorationStyle.dashed,
                        ),
                        ),
                        Row(
                          children: [
                            Text('Instant Discount    ',
                              style: TextStyle(
                                decoration:TextDecoration.underline,
                                decorationStyle: TextDecorationStyle.dashed,
                              ),
                            ),
                            Column(
                              children: [
                                IconButton(
                                  icon:Icon(Icons.create,
                                    color:Colors.white,
                                  ),
                                ),
                                Text('               ',
                                  style: TextStyle(
                                    decoration:TextDecoration.underline,
                                    decorationStyle: TextDecorationStyle.dashed,
                                  ),
                                ),
                              ],
                            ),
                            Text('          ₹ 00.00',
                              style: TextStyle(
                                decoration:TextDecoration.underline,
                                decorationStyle: TextDecorationStyle.dashed,
                              ),
                            ),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Grand Total                 ',
                              style: TextStyle(
                                decoration:TextDecoration.underline,
                                decorationStyle: TextDecorationStyle.dashed,
                                fontWeight: FontWeight.bold
                              ),
                            ),
                          ],
                        ),
                        Text('                         ₹ 00.00',
                        style:TextStyle(
                            color:Colors.red,
                            decoration:TextDecoration.underline,
                            decorationStyle: TextDecorationStyle.dashed,
                            fontWeight: FontWeight.bold
                        ),
                        ),
                        SizedBox(height:30.0),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            InkWell(
                              onTap:(){

                              },
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Icon(Icons.add,
                                    color:Colors.black,
                                  ),
                                  SizedBox(height:3.0),
                                  Text('Add Product'),
                                ],
                              ),
                            ),
                            SizedBox(
                              width: 30.0,
                            ),
                            InkWell(
                              onTap:(){

                              },
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Icon(Icons.close,
                                    color:Colors.black,
                                  ),
                                  SizedBox(height:3.0),
                                  Text('Clear Bill'),
                                ],
                              ),
                            ),
                          ],
                        )
                      ],
                    ),
                  ),
                  SizedBox(width:5.0),
                  Card(
                    margin: EdgeInsets.all(0.0),
                    child:Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Icon(Icons.payment,color:Colors.cyan[600]),
                            Text('Payment',
                              style:TextStyle(
                                color:Colors.cyan[600],
                                fontWeight: FontWeight.bold
                              ),
                            ),
                          ],
                        ),
                        SizedBox(height:5.0),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Due Amount',
                              style:TextStyle(
                                  fontWeight: FontWeight.bold
                              ),
                            ),
                            Text('₹ 0.00',
                              style:TextStyle(
                                color:Colors.red[600],
                                fontWeight: FontWeight.bold
                              ),
                            ),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Padding(
                              padding: EdgeInsets.symmetric(vertical: 10.0),
                              child:Container(
                                height:40.0,
                                width: 165.0,
                                decoration:BoxDecoration(
                                  borderRadius:BorderRadius.circular(5.0),
                                  color: Colors.white,
                                ),
                                child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                  child: DropdownButtonHideUnderline(
                                    child: DropdownButton<String>(
                                      items: keys.map((String dropDownStringItem) {
                                        return DropdownMenuItem<String>(
                                          value: dropDownStringItem,
                                          child: Text(dropDownStringItem.toString(),style: TextStyle(fontWeight: FontWeight.bold),),
                                        );
                                      }).toList(),
                                      onChanged: (String newValueSelected) {
                                        // Your code to execute, when a menu item is selected from drop down
                                        _onDropDownItemSelected(newValueSelected);
                                        // print(productProvider.);
                                      },
                                      dropdownColor: Colors.white,
                                      value:_currentItemSelected,
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            SizedBox(width:10.0),
                            Expanded(
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                  child: TextFormField(
                                    keyboardType: TextInputType.number,
                                    style:TextStyle(height:1.22,fontSize:15.0),
                                    controller: paymentController,
                                    decoration: InputDecoration(
                                        filled: true,
                                        fillColor: Colors.white,
                                        hintStyle: TextStyle(fontSize: 14.0),
                                        border:OutlineInputBorder(
                                            borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                            borderRadius: BorderRadius.all(Radius.circular(5.0))
                                        )
                                    ),
                                  )),
                            ),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Paytm',
                            style:TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 20.0,
                            ),
                            ),
                            SizedBox(width:10.0),
                            Padding(
                                padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                child: TextFormField(
                                  keyboardType: TextInputType.number,
                                  style:TextStyle(height:1.22,fontSize:15.0),
                                  controller: PaytmController,
                                  decoration: InputDecoration(
                                      filled: true,
                                      fillColor: Colors.white,
                                      hintStyle: TextStyle(fontSize: 14.0),
                                      border:OutlineInputBorder(
                                          borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                          borderRadius: BorderRadius.all(Radius.circular(5.0))
                                      )
                                  ),
                                )),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('PhonePe',
                            style:TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 20.0,
                            ),
                            ),
                            SizedBox(width:10.0),
                            Padding(
                                padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                child: TextFormField(
                                  keyboardType: TextInputType.number,
                                  style:TextStyle(height:1.22,fontSize:15.0),
                                  controller: PhonePeController,
                                  decoration: InputDecoration(
                                      filled: true,
                                      fillColor: Colors.white,
                                      hintStyle: TextStyle(fontSize: 14.0),
                                      border:OutlineInputBorder(
                                          borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                          borderRadius: BorderRadius.all(Radius.circular(5.0))
                                      )
                                  ),
                                )),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Sodexo',
                            style:TextStyle(
                              fontWeight: FontWeight.bold,
                              fontSize: 20.0,
                            ),
                            ),
                            SizedBox(width:10.0),
                            Padding(
                                padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                child: TextFormField(
                                  keyboardType: TextInputType.number,
                                  style:TextStyle(height:1.22,fontSize:15.0),
                                  controller:SodexoController,
                                  decoration: InputDecoration(
                                      filled: true,
                                      fillColor: Colors.white,
                                      hintStyle: TextStyle(fontSize: 14.0),
                                      border:OutlineInputBorder(
                                          borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                          borderRadius: BorderRadius.all(Radius.circular(5.0))
                                      )
                                  ),
                                )),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('GooglePay',
                              style:TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 20.0,
                              ),
                            ),
                            SizedBox(width:10.0),
                            Padding(
                                padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                child: TextFormField(
                                  keyboardType: TextInputType.number,
                                  style:TextStyle(height:1.22,fontSize:15.0),
                                  controller:GooglePayController,
                                  decoration: InputDecoration(
                                      filled: true,
                                      fillColor: Colors.white,
                                      hintStyle: TextStyle(fontSize: 14.0),
                                      border:OutlineInputBorder(
                                          borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                          borderRadius: BorderRadius.all(Radius.circular(5.0))
                                      )
                                  ),
                                )),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(width:5.0),
                            Radio(
                              value: true,
                              groupValue: value_1,
                              onChanged: (value){
                                setState(() {
                                  (() {
                                    if(value_1==true){
                                      return value_1=false;}
                                    else{return value_1=true;}
                                  })();
                                });
                              },
                              activeColor: Colors.blue,
                              toggleable:true,
                            ),
                            SizedBox(width:2.0),
                            Text('Credit'),
                            SizedBox(width:30.0),
                            Radio(
                              value: true,
                              groupValue: value_1,
                              onChanged: (value){
                                setState(() {
                                  (() {
                                    if(value_1==true){
                                      return value_1=false;}
                                    else{return value_1=true;}
                                  })();
                                });
                              },
                              activeColor: Colors.blue,
                              toggleable:true,
                            ),
                            SizedBox(width:2.0),
                            Text('Pending'),
                            SizedBox(width:30.0),
                          ],
                        ),
                        Container(
                          margin:EdgeInsets.all(20.0),
                          decoration:BoxDecoration(
                            border:Border.all(width:2.0)
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('Calculator',
                              style: TextStyle(
                                color:Colors.cyan[600],
                                fontWeight: FontWeight.bold,
                              ),
                              ),
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text('Receive',
                                    style:TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 20.0,
                                    ),
                                  ),
                                  SizedBox(width:10.0),
                                  SizedBox(
                                    height: 40,
                                    width: 100,
                                    child: TextFormField(
                                      keyboardType: TextInputType.number,
                                      style:TextStyle(height:1.22,fontSize:15.0),
                                      controller:ReceiveController,
                                      decoration: InputDecoration(
                                          filled: true,
                                          fillColor: Colors.white,
                                          hintStyle: TextStyle(fontSize: 14.0),
                                          border:OutlineInputBorder(
                                              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                              borderRadius: BorderRadius.all(Radius.circular(5.0))
                                          )
                                      ),
                                    ),
                                  ),
                                  SizedBox(width:20.0),
                                  Text('Return',
                                    style:TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 20.0,
                                    ),
                                  ),
                                  SizedBox(width:10.0),
                                  SizedBox(
                                    height: 40,
                                    width: 100,
                                    child: TextFormField(
                                      keyboardType: TextInputType.number,
                                      style:TextStyle(height:1.22,fontSize:15.0),
                                      controller:ReturnController,
                                      decoration: InputDecoration(
                                          filled: true,
                                          fillColor: Colors.white,
                                          hintStyle: TextStyle(fontSize: 14.0),
                                          border:OutlineInputBorder(
                                              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                              borderRadius: BorderRadius.all(Radius.circular(5.0))
                                          )
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                        SizedBox(height:20.0),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                           SizedBox(
                             width:30.0,
                           ),
                           Column(
                             mainAxisAlignment: MainAxisAlignment.center,
                             crossAxisAlignment: CrossAxisAlignment.center,
                             children: [
                               Icon(Icons.print_disabled),
                               Text('No Receipt',style: TextStyle(fontWeight: FontWeight.bold),)
                             ],
                           ),
                           SizedBox(
                             width:20.0,
                           ),
                           Column(
                             mainAxisAlignment: MainAxisAlignment.center,
                             crossAxisAlignment: CrossAxisAlignment.center,
                             children: [
                               Icon(Icons.print),
                               Text('Receipt',style: TextStyle(fontWeight: FontWeight.bold),)
                             ],
                           ),
                           SizedBox(
                             width:30.0,
                           ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
  void _onDropDownItemSelected(String newValueSelected) {
    setState(() {
      this._currentItemSelected= newValueSelected;
    });
  }
}
