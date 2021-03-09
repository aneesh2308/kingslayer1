import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_typeahead/flutter_typeahead.dart';
import 'data.dart';

class Billing1 extends StatefulWidget {
  @override
  _Billing1State createState() => _Billing1State();
}

class _Billing1State extends State<Billing1> {
  final nameController = TextEditingController();
  final nameController1 = TextEditingController();
  final numberController = TextEditingController();
  final paymentController = TextEditingController();
  final PaytmController = TextEditingController();
  final PhonePeController = TextEditingController();
  final SodexoController = TextEditingController();
  final GooglePayController = TextEditingController();
  final deleteController = TextEditingController();
  final ReceiveController = TextEditingController();
  final ReturnController = TextEditingController();
  String _selectedPhone;
  String _selectedName;
  String _selectedCity;
  bool value_1 = false;
  bool value_2 = false;
  bool verified = false;
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
      appBar:AppBar(
        titleSpacing: 2.0,
        title:(MediaQuery.of(context).size.width <= 1020.00)?SingleChildScrollView(
          scrollDirection:Axis.horizontal,
          child: Row(
            children: [
              Text('Billing',
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(width:480.0),
              SizedBox(
                height:40,
                width:520,
                child:TypeAheadFormField(
                  textFieldConfiguration: TextFieldConfiguration(
                    decoration: InputDecoration(filled: true,fillColor: Colors.white,labelText: 'Product Name/ Last 5 Digits of Barcode',labelStyle:TextStyle(fontSize:13),prefixIcon:Icon(Icons.search),border:OutlineInputBorder(
                        borderSide:BorderSide(color: Colors.black,width: 2.0,style:BorderStyle.solid),
                        borderRadius: BorderRadius.all(Radius.circular(8.0))
                    )),
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
        ):SingleChildScrollView(
          scrollDirection:Axis.horizontal,
          child: Row(
            children: [
              Text('Billing',
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(width:930.0),
              SizedBox(
                height:40,
                width:520,
                child:TypeAheadFormField(
                  textFieldConfiguration: TextFieldConfiguration(
                    decoration: InputDecoration(filled: true,fillColor: Colors.white,labelText: 'Product Name/ Last 5 Digits of Barcode',labelStyle:TextStyle(fontSize:13),prefixIcon:Icon(Icons.search),border:OutlineInputBorder(
                        borderSide:BorderSide(color: Colors.black,width: 2.0,style:BorderStyle.solid),
                        borderRadius: BorderRadius.all(Radius.circular(8.0))
                    )),
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
        ),
        backgroundColor: Colors.cyan,
      ),
      body: SingleChildScrollView(
        child: Container(
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
                      SizedBox(width:3.0),
                      SingleChildScrollView(
                        child: Card(
                          margin: EdgeInsets.all(8.0),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0),
                                  Icon(Icons.shopping_bag,color:Colors.cyan[600]),
                                  SizedBox(width:3.0),
                                  Text('Shopping Cart',
                                    style:TextStyle(
                                      fontWeight: FontWeight.bold,
                                      color:Colors.cyan[600],
                                    ),
                                  ),
                                  SizedBox(width:300.0),
                                  Text('Item/Stock : 0 / 0',
                                    style:TextStyle(
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                ],
                              ),
                              Text('                    QTY                         MRP                         SP                       TOTAL                     ',style: TextStyle(backgroundColor:Colors.cyan,color:Colors.white,fontWeight:FontWeight.bold)),
                              SizedBox(
                                height: 680.0,
                              ),
                            ],
                          ),
                        ),
                      ),
                      Card(
                        margin: EdgeInsets.symmetric(vertical:8.0,horizontal:2.0),
                        child:Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            SizedBox(height:4.0),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:8.0),
                                Column(
                                  children: [
                                    SizedBox(height:10.0),
                                    Icon(Icons.call,color:Colors.cyan[600]),
                                  ],
                                ),
                                SizedBox(width:8.0),
                                Column(
                                  children: [
                                    SizedBox(height:10.0),
                                    Text('User Number',
                                      style:TextStyle(
                                        color:Colors.cyan[600],
                                      ),
                                    ),
                                  ],
                                ),
                                SizedBox(width:225.0),
                                FlatButton(
                                  onPressed: (){},
                                  color:Colors.teal[400],
                                  child:Text('  SKIP NUMBER  ',
                                    style:TextStyle(
                                        color:Colors.white,
                                        fontSize:10.0
                                    ),
                                  ),
                                ),
                                SizedBox(width:5.0),
                              ],
                            ),
                            SizedBox(height:2.0),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:5.0),
                                Column(
                                  children: [
                                    SizedBox(height:12.0),
                                    Icon(Icons.phone_android),
                                  ],
                                ),
                                SizedBox(width:8.0),
                                Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(height:4.0),
                                    SizedBox(
                                      height:40,
                                      width:280,
                                      child:TypeAheadFormField(
                                        textFieldConfiguration: TextFieldConfiguration(
                                          decoration: InputDecoration(labelText: 'Search by Mobile',labelStyle:TextStyle(fontSize:13),border:OutlineInputBorder(
                                              borderSide:BorderSide(color: Colors.black,width: 2.0,style:BorderStyle.solid),
                                              borderRadius: BorderRadius.all(Radius.circular(5.0))
                                          )),
                                          controller: this.numberController,
                                        ),
                                        suggestionsCallback: (pattern) {
                                          return (() {
                                            if(numberController.text.length == 3){
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
                                          this.numberController.text = suggestion;
                                        },
                                        validator: (value) =>
                                        value.isEmpty ? 'Search by Mobile' : null,
                                        onSaved: (value) => this._selectedPhone = value,
                                      ),
                                    ),
                                  ],
                                ),
                                SizedBox(width:30.0),
                                    FlatButton(
                                      onPressed: (){},
                                      color: Colors.teal[400],
                                      child:Text('        VERIFY        ',
                                        style:TextStyle(
                                            color:Colors.white,
                                            fontSize:10.0
                                        ),
                                      ),
                                    ),
                                SizedBox(width:5.0),
                              ],
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:200.0),
                                Text('OR',
                                style:TextStyle(
                                  fontWeight: FontWeight.bold,
                                ),
                                ),
                              ],
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:5.0),
                                Column(
                                  children: [
                                    SizedBox(height:12.0),
                                    Icon(Icons.person),
                                  ],
                                ),
                                SizedBox(width:8.0),
                                SizedBox(
                                  height:40,
                                  width:280,
                                  child:TypeAheadFormField(
                                    textFieldConfiguration: TextFieldConfiguration(
                                      decoration: InputDecoration(labelText: 'Search by Name',labelStyle:TextStyle(fontSize:13),border:OutlineInputBorder(
                                          borderSide:BorderSide(color: Colors.black,width: 2.0,style:BorderStyle.solid),
                                          borderRadius: BorderRadius.all(Radius.circular(5.0))
                                      ),),
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
                                    value.isEmpty ? 'Search by Name' : null,
                                    onSaved: (value) => this._selectedName = value,
                                  ),
                                ),
                              ],
                            ),
                            SizedBox(height:20.0),
                            // Row(
                            //   mainAxisAlignment: MainAxisAlignment.start,
                            //   crossAxisAlignment: CrossAxisAlignment.start,
                            //   children: [
                            //     SizedBox(width:10.0),
                            //     Container(
                            //       margin:EdgeInsets.symmetric(horizontal:2.0),
                            //       decoration:BoxDecoration(
                            //           border:Border.all(width:1.0,color:Colors.grey)
                            //       ),
                            //       child: Column(
                            //         mainAxisAlignment: MainAxisAlignment.start,
                            //         crossAxisAlignment: CrossAxisAlignment.start,
                            //         children: [
                            //           Row(
                            //             mainAxisAlignment: MainAxisAlignment.start,
                            //             crossAxisAlignment: CrossAxisAlignment.start,
                            //             children: [
                            //               SizedBox(width:53.0),
                            //               Column(
                            //                 mainAxisAlignment: MainAxisAlignment.center,
                            //                 crossAxisAlignment: CrossAxisAlignment.center,
                            //                 children: [
                            //                   Text('Total',style:TextStyle(fontWeight: FontWeight.bold,fontSize:20.0)),
                            //                   Text('₹225497.34',style:TextStyle(fontWeight: FontWeight.bold,fontSize:15.0,color:Colors.black54))
                            //                 ],
                            //               ),
                            //               SizedBox(width:40.0),
                            //               Column(
                            //                 mainAxisAlignment: MainAxisAlignment.center,
                            //                 crossAxisAlignment: CrossAxisAlignment.center,
                            //                 children: [
                            //                   Text('Average',style:TextStyle(fontWeight: FontWeight.bold,fontSize:20.0)),
                            //                   Text('1193.11',style:TextStyle(fontWeight: FontWeight.bold,fontSize:15.0,color:Colors.grey))
                            //                 ],
                            //               ),
                            //               SizedBox(width:40.0),
                            //               Column(
                            //                 mainAxisAlignment: MainAxisAlignment.center,
                            //                 crossAxisAlignment: CrossAxisAlignment.center,
                            //                 children: [
                            //                   Text('Visits',style:TextStyle(fontWeight: FontWeight.bold,fontSize:20.0)),
                            //                   Text('189',style:TextStyle(fontWeight: FontWeight.bold,fontSize:15.0,color:Colors.grey))
                            //                 ],
                            //               ),
                            //               SizedBox(width:90.0),
                            //             ],
                            //           ),
                            //           Row(
                            //             mainAxisAlignment: MainAxisAlignment.center,
                            //             crossAxisAlignment: CrossAxisAlignment.center,
                            //             children: [
                            //               SizedBox(width:100.0),
                            //               Column(
                            //                 mainAxisAlignment: MainAxisAlignment.center,
                            //                 crossAxisAlignment: CrossAxisAlignment.center,
                            //                 children: [
                            //                   Text('First Visit',style:TextStyle(fontWeight: FontWeight.bold,fontSize:20.0)),
                            //                   Text('2018-01-02',style:TextStyle(fontWeight: FontWeight.bold,fontSize:15.0,color:Colors.grey))
                            //                 ],
                            //               ),
                            //               SizedBox(width:40.0),
                            //               Column(
                            //                 mainAxisAlignment: MainAxisAlignment.center,
                            //                 crossAxisAlignment: CrossAxisAlignment.center,
                            //                 children: [
                            //                   Text('Last Visit',style:TextStyle(fontWeight: FontWeight.bold,fontSize:20.0)),
                            //                   Text('2020-10-16',style:TextStyle(fontWeight: FontWeight.bold,fontSize:15.0,color:Colors.grey))
                            //                 ],
                            //               ),
                            //             ],
                            //           )
                            //         ],
                            //       ),
                            //     ),
                            //   ],
                            // ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:7.0),
                                Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Text(' Sub Total                                                                                        ₹ 00.00 ',
                                      ),
                                      Text('                                                                                                                    ',
                                        style: TextStyle(
                                          decoration:TextDecoration.underline,
                                          decorationStyle: TextDecorationStyle.dashed,
                                          decorationThickness: 2.0,
                                          decorationColor:Colors.grey
                                        ),),
                                    ]
                                ),
                              ],
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(
                                  width: 5.0,
                                ),
                                Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Row(
                                      mainAxisSize: MainAxisSize.min,
                                      children: [
                                        Text(' Instant Discount           '),
                                        Column(
                                          children: [
                                            ButtonTheme(
                                              padding:EdgeInsets.all(0.0),
                                              minWidth: 8.0,
                                              height: 10.0,
                                              child: MaterialButton(
                                                onPressed: (){},
                                                color:Colors.cyan,
                                                padding: EdgeInsets.all(4.0),
                                                minWidth: 0,
                                                child:Icon(Icons.create,color:Colors.white,
                                                  size:15.0,
                                                ),
                                              ),
                                            ),

                                          ],
                                        ),
                                        Text('                                                     ₹ 00.00'),
                                      ],
                                    ),
                                    Text('                                                                                                                    ',
                                      style: TextStyle(
                                          decoration:TextDecoration.underline,
                                          decorationStyle: TextDecorationStyle.dashed,
                                          decorationThickness: 2.0,
                                          decorationColor:Colors.grey
                                      ),),
                                  ],
                                ),
                              ],
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:5.0),
                                Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(height:5.0),
                                    Row(
                                      children: [
                                        Text(' Grand Total',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.black)),
                                        SizedBox(width:310.0),
                                        Text(' ₹ 00.00    ',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red))
                                      ],
                                    ),
                                    Text('                                                                                                                    ',
                                      style: TextStyle(
                                          decoration:TextDecoration.underline,
                                          decorationStyle: TextDecorationStyle.dashed,
                                          decorationThickness: 2.0,
                                          decorationColor:Colors.grey
                                      ),),
                                  ],
                                ),
                              ],
                            ),
                            SizedBox(height:348.0),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:100.0),
                                InkWell(
                                  onTap:(){

                                  },
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    crossAxisAlignment: CrossAxisAlignment.center,
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
                                  width: 120.0,
                                ),
                                InkWell(
                                  onTap:_showDialog,
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    crossAxisAlignment: CrossAxisAlignment.center,
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
                      Card(
                        margin:EdgeInsets.symmetric(vertical:8.0,horizontal:4.0),
                        child:Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(height:5.0),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:5.0),
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
                                SizedBox(width:5.0),
                                Text('Due Amount : ',
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
                                SizedBox(width:335.0),
                              ],
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:5.0),
                                Padding(
                                  padding: EdgeInsets.symmetric(vertical: 10.0),
                                  child:Container(
                                    height:40.0,
                                    width:165.0,
                                    decoration:BoxDecoration(
                                      borderRadius:BorderRadius.circular(5.0),
                                      color: Colors.white,
                                      border:Border.all(color:Colors.black),
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
                                Column(
                                  children: [
                                    SizedBox(height:10),
                                    SizedBox(
                                      height:40,
                                      width:280,
                                      child: TextFormField(
                                        keyboardType: TextInputType.number,
                                        style:TextStyle(height:1.22,fontSize:15.0),
                                        controller: paymentController,
                                        decoration: InputDecoration(
                                            filled: true,
                                            fillColor: Colors.cyan[100],
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
                            SizedBox(height:15.0),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:5.0),
                                Text('Paytm',
                                  style:TextStyle(
                                    fontSize: 20.0,
                                  ),
                                ),
                                SizedBox(width:120.0),
                                SizedBox(
                                  height:40,
                                  width:280,
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
                                  ),
                                ),
                              ],
                            ),
                            SizedBox(height:15.0),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:5.0),
                                Text('PhonePe',
                                  style:TextStyle(
                                    fontSize: 20.0,
                                  ),
                                ),
                                SizedBox(width:98.0),
                                SizedBox(
                                  height:40,
                                  width:280,
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
                                  ),
                                ),
                              ],
                            ),
                            SizedBox(height:15.0),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:5.0),
                                Text('Sodexo',
                                  style:TextStyle(
                                    fontSize: 20.0,
                                  ),
                                ),
                                SizedBox(width:110.0),
                                SizedBox(
                                  height:40,
                                  width:280,
                                  child: TextFormField(
                                    keyboardType: TextInputType.number,
                                    style:TextStyle(height:1.22,fontSize:15.0),
                                    controller: SodexoController,
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
                            SizedBox(height:15.0),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:5.0),
                                Text('GooglePay',
                                  style:TextStyle(
                                    fontSize: 20.0,
                                  ),
                                ),
                                SizedBox(width:82.0),
                                SizedBox(
                                  height:40,
                                  width:280,
                                  child: TextFormField(
                                    keyboardType: TextInputType.number,
                                    style:TextStyle(height:1.22,fontSize:15.0),
                                    controller: GooglePayController,
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
                            SizedBox(height:12.0),
                            Container(
                              padding: EdgeInsets.only(
                                bottom: 2, // space between underline and text
                              ),
                              decoration: BoxDecoration(
                                  border: Border(top:BorderSide(
                                    color: Colors.black,  // Text colour here
                                    width: 2.0, // Underline width
                                  ) ,bottom: BorderSide(
                                    color: Colors.black,  // Text colour here
                                    width: 2.0, // Underline width
                                  ))
                              ),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:100.0),
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
                                  Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      SizedBox(height:15.0),
                                      Text('Credit'),
                                    ],
                                  ),
                                  SizedBox(width:90.0),
                                  Radio(
                                    value: true,
                                    groupValue: value_2,
                                    onChanged: (value){
                                      setState(() {
                                        (() {
                                          if(value_2==true){
                                            return value_2=false;}
                                          else{return value_2=true;}
                                        })();
                                      });
                                    },
                                    activeColor: Colors.blue,
                                    toggleable:true,
                                  ),
                                  SizedBox(width:2.0),
                                  Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      SizedBox(height:15.0),
                                      Text('Pending'),
                                    ],
                                  ),
                                  SizedBox(width:100.0),
                                ],
                              ),
                            ),
                            SizedBox(height:10.0),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:10.0),
                                Container(
                                  margin:EdgeInsets.symmetric(horizontal:2.0),
                                  decoration:BoxDecoration(
                                      border:Border.all(width:1.0,color:Colors.grey)
                                  ),
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      SizedBox(width:10.0),
                                      Column(
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
                                            crossAxisAlignment: CrossAxisAlignment.center,
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
                                              SizedBox(width:80.0),
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
                                          SizedBox(height:10.0),
                                        ],
                                      ),
                                      SizedBox(width:10.0),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                            SizedBox(height:180.0),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: [
                                SizedBox(
                                  width:100.0,
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
                                  width:150.0,
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
                            SizedBox(height:30.0),
                          ],
                        )
                      ),
                    ]
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
  _showDialog() async {
    await showDialog<String>(
      context: context,
      child:new AlertDialog(
        content: new Row(
          children: <Widget>[
            new Expanded(
              child: new TextField(
                controller:deleteController,
                autofocus: true,
                decoration: new InputDecoration(
                    labelText: 'Enter "Clear" to Confirm the Clearing of Bill', hintText: 'eg. Clear'),
              ),
            )
          ],
        ),
        actions: <Widget>[
          new FlatButton(
              child: const Text('Clear'),
              color: Colors.red,
              onPressed: ()
              {
                setState(() {
                  (() {
                    if(deleteController.text=="Clear"||deleteController.text=="clear"||deleteController.text=="CLEAR"){
                      return Navigator.pop(context);
                    }
                    else{return null;}
                  })();
                });
              })
        ],
      ),
    );
  }
  void _onDropDownItemSelected(String newValueSelected) {
    setState(() {
      this._currentItemSelected= newValueSelected;
    });
  }
}
