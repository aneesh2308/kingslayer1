import 'package:application2/screens/submission.dart';
import 'package:flutter/cupertino.dart';
import'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'data.dart';
import 'package:flutter_typeahead/flutter_typeahead.dart';
import 'package:date_time_picker/date_time_picker.dart';

class GRN extends StatefulWidget {
  @override
  _GRNState createState() => _GRNState();
}

class _GRNState extends State<GRN> {
  final nameController = TextEditingController();
  final deleteController = TextEditingController();
  String _selectedCity;
  List<String> keys = [
    'Clothes',
    'Sports',
    'testCategory',
    'Fruit & Vegetable',
    'Miscellaneous',
    'Maggi',
    'mobiles',
    'spices',
    'None',
  ];
  List<int> keys1 = [0,5,12,18,28];
  bool value = true;
  var _currentItemSelected = 'None';
  var _currentItemSelected1 = 18;
  @override
  void initState(){
    nameController.text ="";
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        titleSpacing: 2.0,
        title:Text('  Create GNR'),
        backgroundColor: Colors.cyan,
      ),
      body: SingleChildScrollView(
        child: Container(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SizedBox(width: 10.0,),
                Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SizedBox(height: 10,),
                    (MediaQuery.of(context).size.width <= 540.00)?Text(' Name   :                        ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold),):(MediaQuery.of(context).size.width <= 1020.00)?Text(' Name   :                                                  ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold),):Text(' Name   :                                                                              ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold),),
                    (MediaQuery.of(context).size.width <= 540.00)?Text(' Mobile :                        ',style: TextStyle(backgroundColor:Colors.cyan[100],fontWeight:FontWeight.bold),):(MediaQuery.of(context).size.width <= 1020.00)?Text(' Mobile :                                                  ',style: TextStyle(backgroundColor:Colors.cyan[100],fontWeight:FontWeight.bold),):Text(' Mobile :                                                                              ',style: TextStyle(backgroundColor:Colors.cyan[100],fontWeight:FontWeight.bold),),
                    (MediaQuery.of(context).size.width <= 540.00)?Text(' GSTIN  :                        ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold),):(MediaQuery.of(context).size.width <= 1020.00)?Text(' GSTIN   :                                                 ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold),):Text(' GSTIN   :                                                                             ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold),),
                  ],
                ),
                  SizedBox(width:5.0),
                  Column(
                    children: [
                      SizedBox(height: 27.0,),
                      Icon(Icons.search),
                    ],
                  ),
                  // Expanded(
                  //   flex: 1,
                  //   child: TextField(
                  //     controller: nameController,
                  //     decoration: InputDecoration(hintText: 'Distribution Name/ Mobile Number'),
                  //     onChanged: (value) {},
                  //     autofocus: true,
                  //   ),
                  // ),
                  Expanded(
                    flex: 1,
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
                  Column(
                    children: [
                      SizedBox(height: 12.0),
                      ButtonTheme(
                        minWidth: 8.0,
                        height: 10.0,
                        child: MaterialButton(
                          onPressed: (){},
                          color:Colors.cyan,
                          padding: EdgeInsets.all(4.0),
                          minWidth: 0,
                          child:Icon(Icons.person_add,color:Colors.white),
                        ),
                      ),
                    ],
                  ),
              ],
            ),
            SizedBox(height: 10.0),
            (MediaQuery.of(context).size.width <= 540.00)?SingleChildScrollView(scrollDirection:Axis.horizontal,child: Text('   QTY   HSN No   GST    MRP   SP   PP  TAXABLE   TOTAL ',style: TextStyle(backgroundColor:Colors.cyan,color:Colors.white,fontWeight:FontWeight.bold))):(MediaQuery.of(context).size.width <= 1020.00)?SingleChildScrollView(scrollDirection: Axis.horizontal,child: Text('           QTY            HSN No            GST            MRP            SP             PP             TAXABLE             TOTAL          ',style: TextStyle(backgroundColor:Colors.cyan,color:Colors.white,fontWeight:FontWeight.bold))):SingleChildScrollView(scrollDirection: Axis.horizontal,child: Text('                                  QTY                                     HSN No                                     GST                                     MRP                                     SP                                    PP                                      TAXABLE                                      TOTAL                                 ',style: TextStyle(backgroundColor:Colors.cyan,color:Colors.white,fontWeight:FontWeight.bold))),
            //Text('           QTY            HSN No            GST            MRP            SP             PP             TAXABLE             TOTAL          ',style: TextStyle(backgroundColor:Colors.cyan,color:Colors.white,fontWeight:FontWeight.bold)),
              (MediaQuery.of(context).size.width <= 1020.00)?SizedBox(height: 400):SizedBox(height: 575),
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SizedBox(width:5),
                  Column(
                    mainAxisAlignment:MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      SizedBox(height:15.0),
                      Text('Total : ₹500'),
                    ],
                  ),
                  (MediaQuery.of(context).size.width <= 540.00)?SizedBox(width:47):(MediaQuery.of(context).size.width <= 1020.00)?SizedBox(width:323):SizedBox(width:1210),
                  MaterialButton(
                    onPressed:_showDialog1,
                    color:Colors.blue,
                    padding: EdgeInsets.all(0),
                    minWidth: 0,
                    child:Text('New Product',style:TextStyle(color:Colors.white),),
                  ),
                  SizedBox(width:5),
                  MaterialButton(
                    onPressed:_showDialog,
                    color:Colors.blue,
                    padding: EdgeInsets.all(0),
                    minWidth: 0,
                    child:Text('Reset Supplier',style:TextStyle(color:Colors.white),),
                  ),
                  SizedBox(width:5),
                  MaterialButton(
                    onPressed: (){
                      Navigator.push(context,MaterialPageRoute(builder: (context) =>Save()));
                    },
                    color:Colors.blue,
                    padding: EdgeInsets.all(0),
                    minWidth: 0,
                    child:Text('Next ->',style:TextStyle(color:Colors.white),),
                  ),
                ],
              ),
            ),
            ]
          ),
        ),
      ),
    );
  }
  _showDialog() async {
    await showDialog<String>(
      context: context,
        builder: (BuildContext context) {
        return  (MediaQuery.of(context).size.width <= 540.00)?AlertDialog(
          content: StatefulBuilder(
              builder: (BuildContext context, StateSetter setState) {
                return new Row(
                  children: <Widget>[
                    new Expanded(
                      child: new TextField(
                        controller: deleteController,
                        autofocus: true,
                        decoration: new InputDecoration(
                            labelText: 'Enter "Reset" to Confirm Reset',
                            hintText: 'eg. Reset'),
                      ),
                    )
                  ],
                );
              }
          ),
          actions: [
            SizedBox(width: 140.0),
            FlatButton(
                child: const Text('Reset', style: TextStyle(
                    color: Colors.white)),
                color: Colors.red,
                onPressed: () {
                  Navigator.pop(context);
                }
            )
          ],
        ):SingleChildScrollView(
          child: AlertDialog(
              content: StatefulBuilder(
              builder: (BuildContext context, StateSetter setState) {
                return new Row(
                  children: <Widget>[
                    new Expanded(
                      child: new TextField(
                        controller: deleteController,
                        autofocus: true,
                        decoration: new InputDecoration(
                            labelText: 'Enter "Reset" to Confirm Reset',
                            hintText: 'eg. Reset'),
                      ),
                    )
                  ],
                );
              }
              ),
            actions: [
              SizedBox(width: 140.0),
              FlatButton(
                  child: const Text('Reset', style: TextStyle(
                      color: Colors.white)),
                  color: Colors.red,
                  onPressed: () {
                    Navigator.pop(context);
                  }
              )
            ],
            ),
        );
        },
    );
  }

  _showDialog1() async {
    await showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          content: StatefulBuilder(
            builder: (BuildContext context, StateSetter setState) {
              return (MediaQuery.of(context).size.width <= 540.00)?SingleChildScrollView(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Container(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(width:103),
                          Text('Add Product',style:TextStyle(color:Colors.white,fontWeight:FontWeight.bold)),
                          SizedBox(width:73),
                          Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              SizedBox(height:3.0),
                              InkWell(
                                  onTap: (){
                                    Navigator.pop(context);
                                  },
                                  child: Icon(Icons.close,color:Colors.white,size:13.0)),
                            ],
                          ),
                        ],
                      ),
                      color: Colors.cyan,
                    ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(width:10.0),
                          Column(
                            children: [
                              SizedBox(height:13.0),
                              Text('Barcode',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                            ],
                          ),
                          SizedBox(width:40.0),
                          Container(
                            height:45.0,
                            width: 165.0,
                            child: Padding(
                                padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                child: TextFormField(
                                  style:TextStyle(fontSize:15.0),
                                  decoration: InputDecoration(
                                      filled: true,
                                      fillColor: Colors.blue[100],
                                      hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                      border:OutlineInputBorder(
                                          borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                          borderRadius: BorderRadius.all(Radius.circular(5.0))
                                      )
                                  ),
                                )),
                          )
                        ] ,
                      ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(width:4.0),
                        Column(
                          children: [
                            SizedBox(height:13.0),
                            Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                          ],
                        ),
                        Column(
                          children: [
                            SizedBox(height:13.0),
                            Text('Product Name',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                          ],
                        ),
                        Container(
                          height:45.0,
                          width: 165.0,
                          child: Padding(
                              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                              child: TextFormField(
                                style:TextStyle(fontSize:15.0),
                                decoration: InputDecoration(
                                    filled: true,
                                    fillColor: Colors.blue[100],
                                    hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                    border:OutlineInputBorder(
                                        borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                        borderRadius: BorderRadius.all(Radius.circular(5.0))
                                    )
                                ),
                              )),
                        )
                      ] ,
                    ),
                    SizedBox(height:10.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(width:3.9),
                        Column(
                          children: [
                            SizedBox(height:6.0),
                            Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                          ],
                        ),
                        Column(
                          children: [
                            SizedBox(height:6.0),
                            Text('Category',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                          ],
                        ),
                        SizedBox(width:36.0),
                        Container(
                          height:30.0,
                          width: 165.0,
                          decoration:BoxDecoration(
                            borderRadius:BorderRadius.all(Radius.circular(5.0)),
                            border:Border.all(color: Colors.black),
                            color: Colors.white,
                          ),
                          child: Padding(
                            padding: EdgeInsets.only(left: 1.0, right: 1.00,top:2.0,bottom:2.0),
                            child: DropdownButtonHideUnderline(
                              child: DropdownButton<String>(
                                items: keys.map((String dropDownStringItem) {
                                  return DropdownMenuItem<String>(
                                    value: dropDownStringItem,
                                    child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.black,height:1.0),),
                                  );
                                }).toList(),
                                onChanged: (String newValueSelected) {
                                  // Your code to execute, when a menu item is selected from drop down
                                  _onDropDownItemSelected(newValueSelected);
                                  // print(productProvider.);
                                  setState(() {
                                    (() {
                                      if(value == true){
                                        return value = false;}
                                      else{return value = true;}
                                    })();
                                  });
                                },
                                dropdownColor: Colors.white,
                                value:_currentItemSelected,
                              ),
                            ),
                          ),
                        ),
                      ] ,
                    ),
                    SizedBox(height:10.0),
                    Container(
                      decoration: BoxDecoration(
                          border: Border(bottom: BorderSide(
                            color: Colors.black,  // Text colour here
                            width: 2.0, // Underline width
                          ))
                      ),
                    ),
                    Padding(
                      padding: EdgeInsets.all(3.0),
                      child: Container(
                          decoration: BoxDecoration(
                            borderRadius:BorderRadius.all(Radius.circular(5.0)),
                            border:Border.all(color: Colors.black),
                          ),
                        child:Column(
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:3.0),
                                Expanded(
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      SizedBox(height: 13.0),
                                      Row(
                                        children: [
                                          Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                                          Text('Purchase Price',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                        ],
                                      ),
                                      Container(
                                        height:45.0,
                                        width: 165.0,
                                        child: Padding(
                                            padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                            child: TextFormField(
                                              style:TextStyle(fontSize:15.0),
                                              decoration: InputDecoration(
                                                  filled: true,
                                                  fillColor: Colors.blue[100],
                                                  hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                  border:OutlineInputBorder(
                                                      borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                      borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                  )
                                              ),
                                            )),
                                      )
                                    ] ,
                                  ),
                                ),
                                SizedBox(width:16.29),
                                Expanded(child: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(height: 10.0),
                                    Row(
                                      children: [
                                        Text('   *',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                                        Text('MRP',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                      ],
                                    ),
                                    SizedBox(height: 3.0),
                                    Container(
                                      height:45.0,
                                      width: 165.0,
                                      child: Padding(
                                          padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                          child: TextFormField(
                                            style:TextStyle(fontSize:15.0),
                                            decoration: InputDecoration(
                                                filled: true,
                                                fillColor: Colors.blue[100],
                                                hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                border:OutlineInputBorder(
                                                    borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                    borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                )
                                            ),
                                          )),
                                    )
                                  ] ,
                                )
                                ),
                                SizedBox(width:5.0),
                              ],
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:3.0),
                                Expanded(
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      SizedBox(height: 13.0),
                                      Row(
                                        children: [
                                          Text('  Margin',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                        ],
                                      ),
                                      Container(
                                        height:45.0,
                                        width: 165.0,
                                        child: Padding(
                                            padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                            child: TextFormField(
                                              style:TextStyle(fontSize:15.0),
                                              decoration: InputDecoration(
                                                  hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                  border:OutlineInputBorder(
                                                      borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                      borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                  )
                                              ),
                                            )),
                                      )
                                    ] ,
                                  ),
                                ),
                                Column(
                                  children: [
                                    SizedBox(height:43),
                                    Text('Or'),
                                  ],
                                ),
                                Expanded(child: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(height: 10.0),
                                    SizedBox(height: 19.0),
                                    Container(
                                      height:45.0,
                                      width: 165.0,
                                      child: Padding(
                                          padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                          child: TextFormField(
                                            style:TextStyle(fontSize:15.0),
                                            decoration: InputDecoration(
                                                hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                border:OutlineInputBorder(
                                                    borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                    borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                )
                                            ),
                                          )),
                                    )
                                  ] ,
                                )
                                ),
                                SizedBox(width:5.0),
                              ],
                            ),
                            SizedBox(height:5.0),
                            Container(
                              decoration: BoxDecoration(
                                  border: Border(bottom: BorderSide(
                                    color: Colors.black,  // Text colour here
                                    width: 1.3, // Underline width
                                  ))
                              ),
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:3.0),
                                Expanded(
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      SizedBox(height: 10.0),
                                      Row(
                                        children: [
                                          Text(' *',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                                          Text('SP',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                        ],
                                      ),
                                      Container(
                                        height:45.0,
                                        width: 165.0,
                                        child: Padding(
                                            padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                            child: TextFormField(
                                              style:TextStyle(fontSize:15.0),
                                              decoration: InputDecoration(
                                                  filled: true,
                                                  fillColor: Colors.blue[100],
                                                  hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                  border:OutlineInputBorder(
                                                      borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                      borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                  )
                                              ),
                                            )),
                                      )
                                    ] ,
                                  ),
                                ),
                                SizedBox(width:16.29),
                                Expanded(child: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(height: 11.0),
                                    Row(
                                      children: [
                                        Text(' Or Discount(%)',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                      ],
                                    ),
                                    SizedBox(height:2.2),
                                    Container(
                                      height:45.0,
                                      width: 165.0,
                                      child: Padding(
                                          padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                          child: TextFormField(
                                            style:TextStyle(fontSize:15.0),
                                            decoration: InputDecoration(
                                                filled: true,
                                                fillColor: Colors.blue[100],
                                                hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                border:OutlineInputBorder(
                                                    borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                    borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                )
                                            ),
                                          )),
                                    )
                                  ] ,
                                )
                                ),
                                SizedBox(width:5.0),
                              ],
                            ),
                            SizedBox(height:5.0),
                            Container(
                              decoration: BoxDecoration(
                                  border: Border(bottom: BorderSide(
                                    color: Colors.black,  // Text colour here
                                    width: 1.3, // Underline width
                                  ))
                              ),
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:3.0),
                                Expanded(
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      SizedBox(height: 13.0),
                                      Row(
                                        children: [
                                          Text('  Profit',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                        ],
                                      ),
                                      Container(
                                        height:45.0,
                                        width: 165.0,
                                        child: Padding(
                                            padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                            child: TextFormField(
                                              style:TextStyle(fontSize:15.0),
                                              decoration: InputDecoration(
                                                  hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                  border:OutlineInputBorder(
                                                      borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                      borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                  )
                                              ),
                                            )),
                                      )
                                    ] ,
                                  ),
                                ),
                                Column(
                                  children: [
                                    SizedBox(height:43),
                                    Text('Or'),
                                  ],
                                ),
                                Expanded(child: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(height: 10.0),
                                    SizedBox(height: 19.0),
                                    Container(
                                      height:45.0,
                                      width: 165.0,
                                      child: Padding(
                                          padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                          child: TextFormField(
                                            style:TextStyle(fontSize:15.0),
                                            decoration: InputDecoration(
                                                hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                border:OutlineInputBorder(
                                                    borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                    borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                )
                                            ),
                                          )),
                                    )
                                  ] ,
                                )
                                ),
                                SizedBox(width:5.0),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ),
                    SizedBox(height:10.0),
                    Container(
                      decoration: BoxDecoration(
                          border: Border(bottom: BorderSide(
                            color: Colors.black,  // Text colour here
                            width: 2.0, // Underline width
                          ))
                      ),
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(width:8.0),
                        Column(
                          children: [
                            SizedBox(height:13.0),
                            Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                          ],
                        ),
                        Column(
                          children: [
                            SizedBox(height:13.0),
                            Text('Quantity',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                          ],
                        ),
                        SizedBox(width:40.0),
                        Container(
                          height:45.0,
                          width: 165.0,
                          child: Padding(
                              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                              child: TextFormField(
                                style:TextStyle(fontSize:15.0),
                                decoration: InputDecoration(
                                    filled: true,
                                    fillColor: Colors.blue[100],
                                    hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                    border:OutlineInputBorder(
                                        borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                        borderRadius: BorderRadius.all(Radius.circular(5.0))
                                    )
                                ),
                              )),
                        )
                      ] ,
                    ),
                    SizedBox(height:5.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(width:13.0),
                        Column(
                          children: [
                            SizedBox(height:13.0),
                            Text('Discount',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                          ],
                        ),
                        SizedBox(width:42.0),
                        Container(
                          height:45.0,
                          width: 165.0,
                          child: Padding(
                              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                              child: TextFormField(
                                style:TextStyle(fontSize:15.0),
                                decoration: InputDecoration(
                                    filled: true,
                                    fillColor: Colors.blue[100],
                                    hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                    border:OutlineInputBorder(
                                        borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                        borderRadius: BorderRadius.all(Radius.circular(5.0))
                                    )
                                ),
                              )),
                        )
                      ] ,
                    ),
                    SizedBox(height:5.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(width:15.0),
                        Column(
                          children: [
                            SizedBox(height:13.0),
                            Text('HSN',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                          ],
                        ),
                        SizedBox(width:67.0),
                        Container(
                          height:45.0,
                          width: 165.0,
                          child: Padding(
                              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                              child: TextFormField(
                                style:TextStyle(fontSize:15.0),
                                decoration: InputDecoration(
                                    filled: true,
                                    fillColor: Colors.blue[100],
                                    hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                    border:OutlineInputBorder(
                                        borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                        borderRadius: BorderRadius.all(Radius.circular(5.0))
                                    )
                                ),
                              )),
                        )
                      ] ,
                    ),
                    SizedBox(height:10.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(width:6.9),
                        Column(
                          children: [
                            SizedBox(height:6.0),
                            Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                          ],
                        ),
                        Column(
                          children: [
                            SizedBox(height:6.0),
                            Text('GST',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                          ],
                        ),
                        SizedBox(width:69.0),
                        Container(
                          height:30.0,
                          width: 165.0,
                          decoration:BoxDecoration(
                            borderRadius:BorderRadius.all(Radius.circular(5.0)),
                            border:Border.all(color: Colors.black),
                            color: Colors.white,
                          ),
                          child: Padding(
                            padding: EdgeInsets.only(left: 1.0, right: 1.00,top:2.0,bottom:2.0),
                            child: DropdownButtonHideUnderline(
                              child: DropdownButton<int>(
                                items: keys1.map((int dropDownStringItem) {
                                  return DropdownMenuItem<int>(
                                    value: dropDownStringItem,
                                    child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.black,height:1.0),),
                                  );
                                }).toList(),
                                onChanged: (int newValueSelected1) {
                                  // Your code to execute, when a menu item is selected from drop down
                                  _onDropDownItemSelected1(newValueSelected1);
                                  // print(productProvider.);
                                  setState(() {
                                    (() {
                                      if(value == true){
                                        return value = false;}
                                      else{return value = true;}
                                    })();
                                  });
                                },
                                dropdownColor: Colors.white,
                                value:_currentItemSelected1,
                              ),
                            ),
                          ),
                        ),
                      ] ,
                    ),
                    SizedBox(height:10.0),
                    Container(
                      decoration: BoxDecoration(
                          border: Border(bottom: BorderSide(
                            color: Colors.black,  // Text colour here
                            width: 2.0, // Underline width
                          ))
                      ),
                    ),
                    SizedBox(height: 10.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(width:15),
                        Column(
                          children: [
                            SizedBox(height:6.0),
                            Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                          ],
                        ),
                        Column(
                          children: [
                            SizedBox(height:6.0),
                            Text('CESS',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                          ],
                        ),
                        SizedBox(width:52.0),
                        Container(
                          height:30.0,
                          width: 165.0,
                          decoration:BoxDecoration(
                            borderRadius:BorderRadius.all(Radius.circular(5.0)),
                            border:Border.all(color: Colors.black),
                            color: Colors.white,
                          ),
                          child: Padding(
                            padding: EdgeInsets.only(left: 1.0, right: 1.00,top:2.0,bottom:2.0),
                            child: DropdownButtonHideUnderline(
                              child: DropdownButton<int>(
                                items: keys1.map((int dropDownStringItem) {
                                  return DropdownMenuItem<int>(
                                    value: dropDownStringItem,
                                    child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.black,height:1.0),),
                                  );
                                }).toList(),
                                onChanged: (int newValueSelected1) {
                                  // Your code to execute, when a menu item is selected from drop down
                                  _onDropDownItemSelected1(newValueSelected1);
                                  // print(productProvider.);
                                  setState(() {
                                    (() {
                                      if(value == true){
                                        return value = false;}
                                      else{return value = true;}
                                    })();
                                  });
                                },
                                dropdownColor: Colors.white,
                                value:_currentItemSelected1,
                              ),
                            ),
                          ),
                        ),
                      ] ,
                    ),
                    SizedBox(height:10.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(width:15.0),
                        Column(
                          children: [
                            SizedBox(height:7.0),
                            Text('EXPIRY TIME',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                          ],
                        ),
                        SizedBox(width:12.0),
                        Container(
                          height:30.0,
                          width: 165.0,
                          child:  DateTimePicker(
                            decoration: InputDecoration(
                                filled: true,
                                fillColor: Colors.white,
                                hintStyle: TextStyle(fontSize: 14.0),
                                border:OutlineInputBorder(
                                    borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                    borderRadius: BorderRadius.all(Radius.circular(5.0))
                                )
                            ),
                            type: DateTimePickerType.date,
                            dateMask: 'dd/MM/yyyy',
                            //initialValue: _initialValue,
                            firstDate: DateTime(2000),
                            lastDate: DateTime(2100),
                            icon: Icon(Icons.event),
                            onChanged:(val){},
                            onSaved: (val){},
                          ),
                        )
                      ] ,
                    ),
                    SizedBox(height:5.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(width:15.0),
                        Column(
                          children: [
                            SizedBox(height:13.0),
                            Text('AlertDialog',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                          ],
                        ),
                        SizedBox(width:26.0),
                        Container(
                          height:45.0,
                          width: 165.0,
                          child: Padding(
                              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                              child: TextFormField(
                                style:TextStyle(fontSize:15.0),
                                decoration: InputDecoration(
                                    filled: true,
                                    fillColor: Colors.blue[100],
                                    hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                    border:OutlineInputBorder(
                                        borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                        borderRadius: BorderRadius.all(Radius.circular(5.0))
                                    )
                                ),
                              )),
                        )
                      ] ,
                    ),
                    Row(
                      children: [
                        SizedBox(width: 120),
                        MaterialButton(
                          onPressed: (){
                            Navigator.pop(context);
                          },
                          color:Colors.blue,
                          padding: EdgeInsets.symmetric(vertical:10,horizontal:5.0),
                          minWidth: 0,
                          child:Text('Save',style:TextStyle(color:Colors.white),),
                        ),
                      ],
                    ),
                    ////////
                  ],
                ),
              ):(MediaQuery.of(context).size.width <= 1020.00)?SingleChildScrollView(
              child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
              Container(
              child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(width:250),
              Text('Add Product',style:TextStyle(color:Colors.white,fontWeight:FontWeight.bold)),
              SizedBox(width:203),
              Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height:3.0),
              InkWell(
              onTap: (){
              Navigator.pop(context);
              },
              child: Icon(Icons.close,color:Colors.white,size:13.0)),
              ],
              ),
              ],
              ),
              color: Colors.cyan,
              ),
              Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(width:10.0),
              Expanded(
              child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 13.0),
              Text('Barcode',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              filled: true,
              fillColor: Colors.blue[100],
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              ),
              ),
              SizedBox(width:10.0),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Row(
              children: [
              Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
              Text('Product',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              ],
              ),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              filled: true,
              fillColor: Colors.blue[100],
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              )
              ),
              SizedBox(width:10.0),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Row(
              children: [
              Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
              Text('Category',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              ],
              ),
              SizedBox(height: 7.0,),
              SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child:Container(
              height:30.0,
              width: 165.0,
              decoration:BoxDecoration(
              borderRadius:BorderRadius.all(Radius.circular(5.0)),
              border:Border.all(color: Colors.black),
              color: Colors.white,
              ),
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:2.0,bottom:2.0),
              child: DropdownButtonHideUnderline(
              child: DropdownButton<String>(
              items: keys.map((String dropDownStringItem) {
              return DropdownMenuItem<String>(
              value: dropDownStringItem,
              child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.black,height:1.0),),
              );
              }).toList(),
              onChanged: (String newValueSelected) {
              // Your code to execute, when a menu item is selected from drop down
              _onDropDownItemSelected(newValueSelected);
              // print(productProvider.);
              setState(() {
              (() {
              if(value == true){
              return value = false;}
              else{return value = true;}
              })();
              });
              },
              dropdownColor: Colors.white,
              value:_currentItemSelected,
              ),
              ),
              ),
              ),
              )
              ] ,
              ),
              ),
              SizedBox(width: 5.0,)
              ],
              ),
              Padding(
              padding: EdgeInsets.all(3.0),
              child: Container(
              decoration: BoxDecoration(
              borderRadius:BorderRadius.all(Radius.circular(5.0)),
              border:Border.all(color: Colors.black),
              ),
              child: Column(
              children: [
              Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(width:5.0),
              Expanded(
              child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 13.0),
              Row(
              children: [
              Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
              Text('Purchase Price',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              ],
              ),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              filled: true,
              fillColor: Colors.blue[100],
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              ),
              ),
              SizedBox(width:17.29),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Row(
              children: [
              Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
              Text('MRP',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              ],
              ),
              SizedBox(height: 3.0),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              filled: true,
              fillColor: Colors.blue[100],
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              )
              ),
              SizedBox(width:5.0),
              Container(
              decoration: BoxDecoration(
              border: Border(right: BorderSide(
              color: Colors.black,  // Text colour here
              width: 2.0, // Underline width
              ))
              ),
              child: Text(
              '',
              style: TextStyle(
              height: 5.0, // Text colour here
              ),
              ),
              ),
              SizedBox(width:5.0),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Row(
              children: [
              Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
              Text('SP',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              ],
              ),
              SizedBox(height: 3.0),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              filled: true,
              fillColor: Colors.blue[100],
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              ),
              ),
              SizedBox(width:5.0),
              Container(
              decoration: BoxDecoration(
              border: Border(right: BorderSide(
              color: Colors.black,  // Text colour here
              width: 2.0, // Underline width
              ))
              ),
              child: Text(
              '',
              style: TextStyle(
              height: 5.0, // Text colour here
              ),
              ),
              ),
              SizedBox(width:5.0),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Text('Profit',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              SizedBox(height: 3.0,),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              ),
              ),
              SizedBox(width: 5.0,)
              ],
              ),
              Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(width:5.0),
              Expanded(
              child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 13.0),
              Text('Margin  ',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              ),
              ),
              Column(
              children: [
              SizedBox(height:40),
              Text('Or'),
              ],
              ),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height:28.0),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              )
              ),
              SizedBox(width:5.0),
              Container(
              decoration: BoxDecoration(
              border: Border(right: BorderSide(
              color: Colors.black,  // Text colour here
              width: 2.0, // Underline width
              ))
              ),
              child: Text(
              '',
              style: TextStyle(
              height: 5.0, // Text colour here
              ),
              ),
              ),
              SizedBox(width:5.0),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Row(
              children: [
              Text('Or Discount(%)',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              ],
              ),
              SizedBox(height: 3.0),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              filled: true,
              fillColor: Colors.blue[100],
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              ),
              ),
              SizedBox(width:5.0),
              Container(
              decoration: BoxDecoration(
              border: Border(right: BorderSide(
              color: Colors.black,  // Text colour here
              width: 2.0, // Underline width
              ))
              ),
              child: Text(
              '',
              style: TextStyle(
              height: 5.0, // Text colour here
              ),
              ),
              ),
              SizedBox(width:5.0),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Text('               Or',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              SizedBox(height: 3.0,),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              ),
              ),
              SizedBox(width: 5.0,)
              ],
              ),
              ],
              ),
              ),
              ),
              Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(width:5.0),
              Expanded(
              child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Row(
              children: [
              Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
              Text('Quantity',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              ],
              ),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              filled: true,
              fillColor: Colors.blue[100],
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              ),
              ),
              SizedBox(width:10),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Text('Discount',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              SizedBox(height: 3.0),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              filled: true,
              fillColor: Colors.blue[100],
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              )
              ),
              SizedBox(width:10.0),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Text('HSN',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              SizedBox(height: 3.0),
              Container(
              height:45.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              filled: true,
              fillColor: Colors.blue[100],
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              ),
              ),
              SizedBox(width:10.0),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Row(
              children: [
              Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
              Text('GST',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              ],
              ),
              SizedBox(height: 7.0,),
              SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child:Container(
              height:30.0,
              width: 125.0,
              decoration:BoxDecoration(
              borderRadius:BorderRadius.all(Radius.circular(5.0)),
              border:Border.all(color: Colors.black),
              color: Colors.white,
              ),
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:2.0,bottom:2.0),
              child: DropdownButtonHideUnderline(
              child: DropdownButton<int>(
              items: keys1.map((int dropDownStringItem) {
              return DropdownMenuItem<int>(
              value: dropDownStringItem,
              child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.black,height:1.0),),
              );
              }).toList(),
              onChanged: (int newValueSelected1) {
              // Your code to execute, when a menu item is selected from drop down
              _onDropDownItemSelected1(newValueSelected1);
              // print(productProvider.);
              setState(() {
              (() {
              if(value == true){
              return value = false;}
              else{return value = true;}
              })();
              });
              },
              dropdownColor: Colors.white,
              value:_currentItemSelected1,
              ),
              ),
              ),
              ),
              )
              ] ,
              ),
              ),
              SizedBox(width: 5.0,)
              ],
              ),
              Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(width:5.0),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Text('CESS',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              SizedBox(height: 13.0,),
              SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child:Container(
              height:25.0,
              width: 165.0,
              decoration:BoxDecoration(
              borderRadius:BorderRadius.all(Radius.circular(5.0)),
              border:Border.all(color: Colors.black),
              color: Colors.white,
              ),
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:2.0,bottom:2.0),
              child: DropdownButtonHideUnderline(
              child: DropdownButton<int>(
              items: keys1.map((int dropDownStringItem) {
              return DropdownMenuItem<int>(
              value: dropDownStringItem,
              child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.black,height:1.0),),
              );
              }).toList(),
              onChanged: (int newValueSelected1) {
              // Your code to execute, when a menu item is selected from drop down
              _onDropDownItemSelected1(newValueSelected1);
              // print(productProvider.);
              setState(() {
              (() {
              if(value == true){
              return value = false;}
              else{return value = true;}
              })();
              });
              },
              dropdownColor: Colors.white,
              value:_currentItemSelected1,
              ),
              ),
              ),
              ),
              )
              ] ,
              ),
              ),
              SizedBox(width:10.0),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Text('EXPIRY TIME',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              SizedBox(height:3.0,),
              Padding(
              padding: EdgeInsets.symmetric(vertical: 10.0),
              child: SizedBox(
              height:25.0,
              width: 165.0,
              child: DateTimePicker(
              decoration: InputDecoration(
              filled: true,
              fillColor: Colors.white,
              hintStyle: TextStyle(fontSize: 14.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              type: DateTimePickerType.date,
              dateMask: 'dd/MM/yyyy',
              //initialValue: _initialValue,
              firstDate: DateTime(2000),
              lastDate: DateTime(2100),
              icon: Icon(Icons.event),
              onChanged:(val){},
              onSaved: (val){},
              ),
              ),
              ),
              ] ,
              ),
              ),
              SizedBox(width:10.0),
              Expanded(child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
              SizedBox(height: 10.0),
              Text('AlertQuantity',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
              SizedBox(height: 3.0),
              Container(
              height:40.0,
              width: 165.0,
              child: Padding(
              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
              child: TextFormField(
              style:TextStyle(fontSize:15.0),
              decoration: InputDecoration(
              filled: true,
              fillColor: Colors.blue[100],
              hintStyle: TextStyle(height:2.5,fontSize:15.0),
              border:OutlineInputBorder(
              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
              borderRadius: BorderRadius.all(Radius.circular(5.0))
              )
              ),
              )),
              )
              ] ,
              ),
              ),
              SizedBox(width: 5.0,)
              ],
              ),
              Row(
              children: [
              SizedBox(width: 250),
              MaterialButton(
              onPressed: (){
              Navigator.pop(context);
              },
              color:Colors.blue,
              padding: EdgeInsets.symmetric(vertical:10,horizontal:5.0),
              minWidth: 0,
              child:Text('Save',style:TextStyle(color:Colors.white),),
              ),
              ],
              ),
              ],
              ),
              ):SingleChildScrollView(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Container(
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(width:330),
                          Text('Add Product',style:TextStyle(color:Colors.white,fontWeight:FontWeight.bold)),
                          SizedBox(width:323),
                          Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              SizedBox(height:3.0),
                              InkWell(
                                  onTap: (){
                                    Navigator.pop(context);
                                  },
                                  child: Icon(Icons.close,color:Colors.white,size:13.0)),
                            ],
                          ),
                        ],
                      ),
                      color: Colors.cyan,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(width:80.0),
                        Expanded(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              SizedBox(height: 13.0),
                              Text('Barcode',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                              Container(
                                height:45.0,
                                width: 165.0,
                                child: Padding(
                                    padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                    child: TextFormField(
                                      style:TextStyle(fontSize:15.0),
                                      decoration: InputDecoration(
                                          filled: true,
                                          fillColor: Colors.blue[100],
                                          hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                          border:OutlineInputBorder(
                                              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                              borderRadius: BorderRadius.all(Radius.circular(5.0))
                                          )
                                      ),
                                    )),
                              )
                            ] ,
                          ),
                        ),
                        SizedBox(width:10.0),
                        Expanded(child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(height: 10.0),
                            Row(
                              children: [
                                Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                                Text('Product',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                              ],
                            ),
                            Container(
                              height:45.0,
                              width: 165.0,
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                  child: TextFormField(
                                    style:TextStyle(fontSize:15.0),
                                    decoration: InputDecoration(
                                        filled: true,
                                        fillColor: Colors.blue[100],
                                        hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                        border:OutlineInputBorder(
                                            borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                            borderRadius: BorderRadius.all(Radius.circular(5.0))
                                        )
                                    ),
                                  )),
                            )
                          ] ,
                        )
                        ),
                        SizedBox(width:10.0),
                        Expanded(child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(height: 10.0),
                            Row(
                              children: [
                                Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                                Text('Category',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                              ],
                            ),
                            SizedBox(height: 7.0,),
                            SingleChildScrollView(
                              scrollDirection: Axis.horizontal,
                              child:Container(
                                height:30.0,
                                width: 165.0,
                                decoration:BoxDecoration(
                                  borderRadius:BorderRadius.all(Radius.circular(5.0)),
                                  border:Border.all(color: Colors.black),
                                  color: Colors.white,
                                ),
                                child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:2.0,bottom:2.0),
                                  child: DropdownButtonHideUnderline(
                                    child: DropdownButton<String>(
                                      items: keys.map((String dropDownStringItem) {
                                        return DropdownMenuItem<String>(
                                          value: dropDownStringItem,
                                          child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.black,height:1.0),),
                                        );
                                      }).toList(),
                                      onChanged: (String newValueSelected) {
                                        // Your code to execute, when a menu item is selected from drop down
                                        _onDropDownItemSelected(newValueSelected);
                                        // print(productProvider.);
                                        setState(() {
                                          (() {
                                            if(value == true){
                                              return value = false;}
                                            else{return value = true;}
                                          })();
                                        });
                                      },
                                      dropdownColor: Colors.white,
                                      value:_currentItemSelected,
                                    ),
                                  ),
                                ),
                              ),
                            )
                          ] ,
                        ),
                        ),
                        SizedBox(width: 5.0,)
                      ],
                    ),
                    Padding(
                      padding: EdgeInsets.all(3.0),
                      child: Container(
                        decoration: BoxDecoration(
                          borderRadius:BorderRadius.all(Radius.circular(5.0)),
                          border:Border.all(color: Colors.black),
                        ),
                        child: Column(
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:5.0),
                                Expanded(
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      SizedBox(height: 13.0),
                                      Row(
                                        children: [
                                          Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                                          Text('Purchase Price',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                        ],
                                      ),
                                      Container(
                                        height:45.0,
                                        width: 165.0,
                                        child: Padding(
                                            padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                            child: TextFormField(
                                              style:TextStyle(fontSize:15.0),
                                              decoration: InputDecoration(
                                                  filled: true,
                                                  fillColor: Colors.blue[100],
                                                  hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                  border:OutlineInputBorder(
                                                      borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                      borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                  )
                                              ),
                                            )),
                                      )
                                    ] ,
                                  ),
                                ),
                                SizedBox(width:17.29),
                                Expanded(child: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(height: 10.0),
                                    Row(
                                      children: [
                                        Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                                        Text('MRP',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                      ],
                                    ),
                                    SizedBox(height: 3.0),
                                    Container(
                                      height:45.0,
                                      width: 165.0,
                                      child: Padding(
                                          padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                          child: TextFormField(
                                            style:TextStyle(fontSize:15.0),
                                            decoration: InputDecoration(
                                                filled: true,
                                                fillColor: Colors.blue[100],
                                                hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                border:OutlineInputBorder(
                                                    borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                    borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                )
                                            ),
                                          )),
                                    )
                                  ] ,
                                )
                                ),
                                SizedBox(width:5.0),
                                Container(
                                  decoration: BoxDecoration(
                                      border: Border(right: BorderSide(
                                        color: Colors.black,  // Text colour here
                                        width: 2.0, // Underline width
                                      ))
                                  ),
                                  child: Text(
                                    '',
                                    style: TextStyle(
                                      height: 5.0, // Text colour here
                                    ),
                                  ),
                                ),
                                SizedBox(width:5.0),
                                Expanded(child: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(height: 10.0),
                                    Row(
                                      children: [
                                        Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                                        Text('SP',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                      ],
                                    ),
                                    SizedBox(height: 3.0),
                                    Container(
                                      height:45.0,
                                      width: 165.0,
                                      child: Padding(
                                          padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                          child: TextFormField(
                                            style:TextStyle(fontSize:15.0),
                                            decoration: InputDecoration(
                                                filled: true,
                                                fillColor: Colors.blue[100],
                                                hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                border:OutlineInputBorder(
                                                    borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                    borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                )
                                            ),
                                          )),
                                    )
                                  ] ,
                                ),
                                ),
                                SizedBox(width:5.0),
                                Container(
                                  decoration: BoxDecoration(
                                      border: Border(right: BorderSide(
                                        color: Colors.black,  // Text colour here
                                        width: 2.0, // Underline width
                                      ))
                                  ),
                                  child: Text(
                                    '',
                                    style: TextStyle(
                                      height: 5.0, // Text colour here
                                    ),
                                  ),
                                ),
                                SizedBox(width:5.0),
                                Expanded(child: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(height: 10.0),
                                    Text('Profit',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                    SizedBox(height: 3.0,),
                                    Container(
                                      height:45.0,
                                      width: 165.0,
                                      child: Padding(
                                          padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                          child: TextFormField(
                                            style:TextStyle(fontSize:15.0),
                                            decoration: InputDecoration(
                                                hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                border:OutlineInputBorder(
                                                    borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                    borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                )
                                            ),
                                          )),
                                    )
                                  ] ,
                                ),
                                ),
                                SizedBox(width: 5.0,)
                              ],
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                SizedBox(width:5.0),
                                Expanded(
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      SizedBox(height: 13.0),
                                      Text('Margin  ',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                      Container(
                                        height:45.0,
                                        width: 165.0,
                                        child: Padding(
                                            padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                            child: TextFormField(
                                              style:TextStyle(fontSize:15.0),
                                              decoration: InputDecoration(
                                                  hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                  border:OutlineInputBorder(
                                                      borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                      borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                  )
                                              ),
                                            )),
                                      )
                                    ] ,
                                  ),
                                ),
                                Column(
                                  children: [
                                    SizedBox(height:40),
                                    Text('Or'),
                                  ],
                                ),
                                Expanded(child: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(height:28.0),
                                    Container(
                                      height:45.0,
                                      width: 165.0,
                                      child: Padding(
                                          padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                          child: TextFormField(
                                            style:TextStyle(fontSize:15.0),
                                            decoration: InputDecoration(
                                                hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                border:OutlineInputBorder(
                                                    borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                    borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                )
                                            ),
                                          )),
                                    )
                                  ] ,
                                )
                                ),
                                SizedBox(width:5.0),
                                Container(
                                  decoration: BoxDecoration(
                                      border: Border(right: BorderSide(
                                        color: Colors.black,  // Text colour here
                                        width: 2.0, // Underline width
                                      ))
                                  ),
                                  child: Text(
                                    '',
                                    style: TextStyle(
                                      height: 5.0, // Text colour here
                                    ),
                                  ),
                                ),
                                SizedBox(width:5.0),
                                Expanded(child: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(height: 10.0),
                                    Row(
                                      children: [
                                        Text('Or Discount(%)',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                      ],
                                    ),
                                    SizedBox(height: 3.0),
                                    Container(
                                      height:45.0,
                                      width: 165.0,
                                      child: Padding(
                                          padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                          child: TextFormField(
                                            style:TextStyle(fontSize:15.0),
                                            decoration: InputDecoration(
                                                filled: true,
                                                fillColor: Colors.blue[100],
                                                hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                border:OutlineInputBorder(
                                                    borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                    borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                )
                                            ),
                                          )),
                                    )
                                  ] ,
                                ),
                                ),
                                SizedBox(width:5.0),
                                Container(
                                  decoration: BoxDecoration(
                                      border: Border(right: BorderSide(
                                        color: Colors.black,  // Text colour here
                                        width: 2.0, // Underline width
                                      ))
                                  ),
                                  child: Text(
                                    '',
                                    style: TextStyle(
                                      height: 5.0, // Text colour here
                                    ),
                                  ),
                                ),
                                SizedBox(width:5.0),
                                Expanded(child: Column(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    SizedBox(height: 10.0),
                                    Text('               Or',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                    SizedBox(height: 3.0,),
                                    Container(
                                      height:45.0,
                                      width: 165.0,
                                      child: Padding(
                                          padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                          child: TextFormField(
                                            style:TextStyle(fontSize:15.0),
                                            decoration: InputDecoration(
                                                hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                                border:OutlineInputBorder(
                                                    borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                                    borderRadius: BorderRadius.all(Radius.circular(5.0))
                                                )
                                            ),
                                          )),
                                    )
                                  ] ,
                                ),
                                ),
                                SizedBox(width: 5.0,)
                              ],
                            ),
                          ],
                        ),
                      ),
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(width:40.0),
                        Expanded(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              SizedBox(height: 10.0),
                              Row(
                                children: [
                                  Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                                  Text('Quantity',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                                ],
                              ),
                              Container(
                                height:45.0,
                                width: 165.0,
                                child: Padding(
                                    padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                    child: TextFormField(
                                      style:TextStyle(fontSize:15.0),
                                      decoration: InputDecoration(
                                          filled: true,
                                          fillColor: Colors.blue[100],
                                          hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                          border:OutlineInputBorder(
                                              borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                              borderRadius: BorderRadius.all(Radius.circular(5.0))
                                          )
                                      ),
                                    )),
                              )
                            ] ,
                          ),
                        ),
                        SizedBox(width:10),
                        Expanded(child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(height: 10.0),
                            Text('Discount',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                            SizedBox(height: 3.0),
                            Container(
                              height:45.0,
                              width: 165.0,
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                  child: TextFormField(
                                    style:TextStyle(fontSize:15.0),
                                    decoration: InputDecoration(
                                        filled: true,
                                        fillColor: Colors.blue[100],
                                        hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                        border:OutlineInputBorder(
                                            borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                            borderRadius: BorderRadius.all(Radius.circular(5.0))
                                        )
                                    ),
                                  )),
                            )
                          ] ,
                        )
                        ),
                        SizedBox(width:10.0),
                        Expanded(child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(height: 10.0),
                            Text('HSN',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                            SizedBox(height: 3.0),
                            Container(
                              height:45.0,
                              width: 165.0,
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                  child: TextFormField(
                                    style:TextStyle(fontSize:15.0),
                                    decoration: InputDecoration(
                                        filled: true,
                                        fillColor: Colors.blue[100],
                                        hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                        border:OutlineInputBorder(
                                            borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                            borderRadius: BorderRadius.all(Radius.circular(5.0))
                                        )
                                    ),
                                  )),
                            )
                          ] ,
                        ),
                        ),
                        SizedBox(width:10.0),
                        Expanded(child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(height: 10.0),
                            Row(
                              children: [
                                Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
                                Text('GST',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                              ],
                            ),
                            SizedBox(height: 7.0,),
                            SingleChildScrollView(
                              scrollDirection: Axis.horizontal,
                              child:Container(
                                height:30.0,
                                width: 125.0,
                                decoration:BoxDecoration(
                                  borderRadius:BorderRadius.all(Radius.circular(5.0)),
                                  border:Border.all(color: Colors.black),
                                  color: Colors.white,
                                ),
                                child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:2.0,bottom:2.0),
                                  child: DropdownButtonHideUnderline(
                                    child: DropdownButton<int>(
                                      items: keys1.map((int dropDownStringItem) {
                                        return DropdownMenuItem<int>(
                                          value: dropDownStringItem,
                                          child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.black,height:1.0),),
                                        );
                                      }).toList(),
                                      onChanged: (int newValueSelected1) {
                                        // Your code to execute, when a menu item is selected from drop down
                                        _onDropDownItemSelected1(newValueSelected1);
                                        // print(productProvider.);
                                        setState(() {
                                          (() {
                                            if(value == true){
                                              return value = false;}
                                            else{return value = true;}
                                          })();
                                        });
                                      },
                                      dropdownColor: Colors.white,
                                      value:_currentItemSelected1,
                                    ),
                                  ),
                                ),
                              ),
                            )
                          ] ,
                        ),
                        ),
                        SizedBox(width: 5.0,)
                      ],
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(width:50.0),
                        Expanded(child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(height: 10.0),
                            Text('CESS',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                            SizedBox(height: 13.0,),
                            SingleChildScrollView(
                              scrollDirection: Axis.horizontal,
                              child:Container(
                                height:25.0,
                                width: 165.0,
                                decoration:BoxDecoration(
                                  borderRadius:BorderRadius.all(Radius.circular(5.0)),
                                  border:Border.all(color: Colors.black),
                                  color: Colors.white,
                                ),
                                child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:2.0,bottom:2.0),
                                  child: DropdownButtonHideUnderline(
                                    child: DropdownButton<int>(
                                      items: keys1.map((int dropDownStringItem) {
                                        return DropdownMenuItem<int>(
                                          value: dropDownStringItem,
                                          child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.black,height:1.0),),
                                        );
                                      }).toList(),
                                      onChanged: (int newValueSelected1) {
                                        // Your code to execute, when a menu item is selected from drop down
                                        _onDropDownItemSelected1(newValueSelected1);
                                        // print(productProvider.);
                                        setState(() {
                                          (() {
                                            if(value == true){
                                              return value = false;}
                                            else{return value = true;}
                                          })();
                                        });
                                      },
                                      dropdownColor: Colors.white,
                                      value:_currentItemSelected1,
                                    ),
                                  ),
                                ),
                              ),
                            )
                          ] ,
                        ),
                        ),
                        SizedBox(width:10.0),
                        Expanded(child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(height: 10.0),
                            Text('EXPIRY TIME',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                            SizedBox(height:3.0,),
                            Padding(
                              padding: EdgeInsets.symmetric(vertical: 10.0),
                              child: SizedBox(
                                height:25.0,
                                width: 165.0,
                                child: DateTimePicker(
                                  decoration: InputDecoration(
                                      filled: true,
                                      fillColor: Colors.white,
                                      hintStyle: TextStyle(fontSize: 14.0),
                                      border:OutlineInputBorder(
                                          borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                          borderRadius: BorderRadius.all(Radius.circular(5.0))
                                      )
                                  ),
                                  type: DateTimePickerType.date,
                                  dateMask: 'dd/MM/yyyy',
                                  //initialValue: _initialValue,
                                  firstDate: DateTime(2000),
                                  lastDate: DateTime(2100),
                                  icon: Icon(Icons.event),
                                  onChanged:(val){},
                                  onSaved: (val){},
                                ),
                              ),
                            ),
                          ] ,
                        ),
                        ),
                        SizedBox(width:10.0),
                        Expanded(child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            SizedBox(height: 10.0),
                            Text('AlertQuantity',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
                            SizedBox(height: 3.0),
                            Container(
                              height:40.0,
                              width: 165.0,
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
                                  child: TextFormField(
                                    style:TextStyle(fontSize:15.0),
                                    decoration: InputDecoration(
                                        filled: true,
                                        fillColor: Colors.blue[100],
                                        hintStyle: TextStyle(height:2.5,fontSize:15.0),
                                        border:OutlineInputBorder(
                                            borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                            borderRadius: BorderRadius.all(Radius.circular(5.0))
                                        )
                                    ),
                                  )),
                            )
                          ] ,
                        ),
                        ),
                        SizedBox(width: 5.0,)
                      ],
                    ),
                    Row(
                      children: [
                        SizedBox(width: 360),
                        MaterialButton(
                          onPressed: (){
                            Navigator.pop(context);
                          },
                          color:Colors.blue,
                          padding: EdgeInsets.symmetric(vertical:10,horizontal:5.0),
                          minWidth: 0,
                          child:Text('Save',style:TextStyle(color:Colors.white),),
                        ),
                      ],
                    ),
                  ],
                ),
              );
            },
          ),
          contentPadding: EdgeInsets.all(0.0),
        );
      },
    );
  }
  // _showDialog2() async {
  //   await showDialog<void>(
  //     context: context,
  //     builder: (BuildContext context) {
  //       return AlertDialog(
  //         content: StatefulBuilder(
  //           builder: (BuildContext context, StateSetter setState) {
  //             return SingleChildScrollView(
  //               child: Column(
  //                 mainAxisAlignment: MainAxisAlignment.start,
  //                 crossAxisAlignment: CrossAxisAlignment.start,
  //                 mainAxisSize: MainAxisSize.min,
  //                 children: [
  //                   Container(
  //                     child: Row(
  //                       mainAxisAlignment: MainAxisAlignment.start,
  //                       crossAxisAlignment: CrossAxisAlignment.start,
  //                       children: [
  //                         SizedBox(width:250),
  //                         Text('Add Product',style:TextStyle(color:Colors.white,fontWeight:FontWeight.bold)),
  //                         SizedBox(width:203),
  //                         Column(
  //                           mainAxisAlignment: MainAxisAlignment.start,
  //                           crossAxisAlignment: CrossAxisAlignment.start,
  //                           children: [
  //                             SizedBox(height:3.0),
  //                             InkWell(
  //                                 onTap: (){
  //                                   Navigator.pop(context);
  //                                 },
  //                                 child: Icon(Icons.close,color:Colors.white,size:13.0)),
  //                           ],
  //                         ),
  //                       ],
  //                     ),
  //                     color: Colors.cyan,
  //                   ),
  //                   Row(
  //                     mainAxisAlignment: MainAxisAlignment.start,
  //                     crossAxisAlignment: CrossAxisAlignment.start,
  //                     children: [
  //                       SizedBox(width:10.0),
  //                       Expanded(
  //                         child: Column(
  //                           mainAxisAlignment: MainAxisAlignment.start,
  //                           crossAxisAlignment: CrossAxisAlignment.start,
  //                           children: [
  //                             SizedBox(height: 13.0),
  //                             Text('Barcode',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                             Container(
  //                               height:45.0,
  //                               width: 165.0,
  //                               child: Padding(
  //                                   padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                   child: TextFormField(
  //                                     style:TextStyle(fontSize:15.0),
  //                                     decoration: InputDecoration(
  //                                         filled: true,
  //                                         fillColor: Colors.blue[100],
  //                                         hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                         border:OutlineInputBorder(
  //                                             borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                             borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                         )
  //                                     ),
  //                                   )),
  //                             )
  //                           ] ,
  //                         ),
  //                       ),
  //                       SizedBox(width:10.0),
  //                       Expanded(child: Column(
  //                         mainAxisAlignment: MainAxisAlignment.start,
  //                         crossAxisAlignment: CrossAxisAlignment.start,
  //                         children: [
  //                           SizedBox(height: 10.0),
  //                           Row(
  //                             children: [
  //                               Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
  //                               Text('Product',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                             ],
  //                           ),
  //                           Container(
  //                             height:45.0,
  //                             width: 165.0,
  //                             child: Padding(
  //                                 padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                 child: TextFormField(
  //                                   style:TextStyle(fontSize:15.0),
  //                                   decoration: InputDecoration(
  //                                       filled: true,
  //                                       fillColor: Colors.blue[100],
  //                                       hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                       border:OutlineInputBorder(
  //                                           borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                           borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                       )
  //                                   ),
  //                                 )),
  //                           )
  //                         ] ,
  //                       )
  //                       ),
  //                       SizedBox(width:10.0),
  //                       Expanded(child: Column(
  //                         mainAxisAlignment: MainAxisAlignment.start,
  //                         crossAxisAlignment: CrossAxisAlignment.start,
  //                         children: [
  //                           SizedBox(height: 10.0),
  //                           Row(
  //                             children: [
  //                               Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
  //                               Text('Category',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                             ],
  //                           ),
  //                           SizedBox(height: 7.0,),
  //                           SingleChildScrollView(
  //                             scrollDirection: Axis.horizontal,
  //                             child:Container(
  //                               height:30.0,
  //                               width: 165.0,
  //                               decoration:BoxDecoration(
  //                                 borderRadius:BorderRadius.all(Radius.circular(5.0)),
  //                                 border:Border.all(color: Colors.black),
  //                                 color: Colors.white,
  //                               ),
  //                               child: Padding(
  //                                 padding: EdgeInsets.only(left: 1.0, right: 1.00,top:2.0,bottom:2.0),
  //                                 child: DropdownButtonHideUnderline(
  //                                   child: DropdownButton<String>(
  //                                     items: keys.map((String dropDownStringItem) {
  //                                       return DropdownMenuItem<String>(
  //                                         value: dropDownStringItem,
  //                                         child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.black,height:1.0),),
  //                                       );
  //                                     }).toList(),
  //                                     onChanged: (String newValueSelected) {
  //                                       // Your code to execute, when a menu item is selected from drop down
  //                                       _onDropDownItemSelected(newValueSelected);
  //                                       // print(productProvider.);
  //                                       setState(() {
  //                                         (() {
  //                                           if(value == true){
  //                                             return value = false;}
  //                                           else{return value = true;}
  //                                         })();
  //                                       });
  //                                     },
  //                                     dropdownColor: Colors.white,
  //                                     value:_currentItemSelected,
  //                                   ),
  //                                 ),
  //                               ),
  //                             ),
  //                           )
  //                         ] ,
  //                       ),
  //                       ),
  //                       SizedBox(width: 5.0,)
  //                     ],
  //                   ),
  //                   Padding(
  //                     padding: EdgeInsets.all(3.0),
  //                     child: Container(
  //                       decoration: BoxDecoration(
  //                         borderRadius:BorderRadius.all(Radius.circular(5.0)),
  //                         border:Border.all(color: Colors.black),
  //                       ),
  //                       child: Column(
  //                         children: [
  //                           Row(
  //                             mainAxisAlignment: MainAxisAlignment.start,
  //                             crossAxisAlignment: CrossAxisAlignment.start,
  //                             children: [
  //                               SizedBox(width:5.0),
  //                               Expanded(
  //                                 child: Column(
  //                                   mainAxisAlignment: MainAxisAlignment.start,
  //                                   crossAxisAlignment: CrossAxisAlignment.start,
  //                                   children: [
  //                                     SizedBox(height: 13.0),
  //                                     Row(
  //                                       children: [
  //                                         Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
  //                                         Text('Purchase Price',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                                       ],
  //                                     ),
  //                                     Container(
  //                                       height:45.0,
  //                                       width: 165.0,
  //                                       child: Padding(
  //                                           padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                           child: TextFormField(
  //                                             style:TextStyle(fontSize:15.0),
  //                                             decoration: InputDecoration(
  //                                                 filled: true,
  //                                                 fillColor: Colors.blue[100],
  //                                                 hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                                 border:OutlineInputBorder(
  //                                                     borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                                     borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                                 )
  //                                             ),
  //                                           )),
  //                                     )
  //                                   ] ,
  //                                 ),
  //                               ),
  //                               SizedBox(width:17.29),
  //                               Expanded(child: Column(
  //                                 mainAxisAlignment: MainAxisAlignment.start,
  //                                 crossAxisAlignment: CrossAxisAlignment.start,
  //                                 children: [
  //                                   SizedBox(height: 10.0),
  //                                   Row(
  //                                     children: [
  //                                       Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
  //                                       Text('MRP',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                                     ],
  //                                   ),
  //                                   SizedBox(height: 3.0),
  //                                   Container(
  //                                     height:45.0,
  //                                     width: 165.0,
  //                                     child: Padding(
  //                                         padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                         child: TextFormField(
  //                                           style:TextStyle(fontSize:15.0),
  //                                           decoration: InputDecoration(
  //                                               filled: true,
  //                                               fillColor: Colors.blue[100],
  //                                               hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                               border:OutlineInputBorder(
  //                                                   borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                                   borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                               )
  //                                           ),
  //                                         )),
  //                                   )
  //                                 ] ,
  //                               )
  //                               ),
  //                               SizedBox(width:5.0),
  //                               Container(
  //                                 decoration: BoxDecoration(
  //                                     border: Border(right: BorderSide(
  //                                       color: Colors.black,  // Text colour here
  //                                       width: 2.0, // Underline width
  //                                     ))
  //                                 ),
  //                                 child: Text(
  //                                   '',
  //                                   style: TextStyle(
  //                                     height: 5.0, // Text colour here
  //                                   ),
  //                                 ),
  //                               ),
  //                               SizedBox(width:5.0),
  //                               Expanded(child: Column(
  //                                 mainAxisAlignment: MainAxisAlignment.start,
  //                                 crossAxisAlignment: CrossAxisAlignment.start,
  //                                 children: [
  //                                   SizedBox(height: 10.0),
  //                                   Row(
  //                                     children: [
  //                                       Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
  //                                       Text('SP',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                                     ],
  //                                   ),
  //                                   SizedBox(height: 3.0),
  //                                   Container(
  //                                     height:45.0,
  //                                     width: 165.0,
  //                                     child: Padding(
  //                                         padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                         child: TextFormField(
  //                                           style:TextStyle(fontSize:15.0),
  //                                           decoration: InputDecoration(
  //                                               filled: true,
  //                                               fillColor: Colors.blue[100],
  //                                               hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                               border:OutlineInputBorder(
  //                                                   borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                                   borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                               )
  //                                           ),
  //                                         )),
  //                                   )
  //                                 ] ,
  //                               ),
  //                               ),
  //                               SizedBox(width:5.0),
  //                               Container(
  //                                 decoration: BoxDecoration(
  //                                     border: Border(right: BorderSide(
  //                                       color: Colors.black,  // Text colour here
  //                                       width: 2.0, // Underline width
  //                                     ))
  //                                 ),
  //                                 child: Text(
  //                                   '',
  //                                   style: TextStyle(
  //                                     height: 5.0, // Text colour here
  //                                   ),
  //                                 ),
  //                               ),
  //                               SizedBox(width:5.0),
  //                               Expanded(child: Column(
  //                                 mainAxisAlignment: MainAxisAlignment.start,
  //                                 crossAxisAlignment: CrossAxisAlignment.start,
  //                                 children: [
  //                                   SizedBox(height: 10.0),
  //                                   Text('Profit',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                                   SizedBox(height: 3.0,),
  //                                   Container(
  //                                     height:45.0,
  //                                     width: 165.0,
  //                                     child: Padding(
  //                                         padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                         child: TextFormField(
  //                                           style:TextStyle(fontSize:15.0),
  //                                           decoration: InputDecoration(
  //                                               hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                               border:OutlineInputBorder(
  //                                                   borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                                   borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                               )
  //                                           ),
  //                                         )),
  //                                   )
  //                                 ] ,
  //                               ),
  //                               ),
  //                               SizedBox(width: 5.0,)
  //                             ],
  //                           ),
  //                           Row(
  //                             mainAxisAlignment: MainAxisAlignment.start,
  //                             crossAxisAlignment: CrossAxisAlignment.start,
  //                             children: [
  //                               SizedBox(width:5.0),
  //                               Expanded(
  //                                 child: Column(
  //                                   mainAxisAlignment: MainAxisAlignment.start,
  //                                   crossAxisAlignment: CrossAxisAlignment.start,
  //                                   children: [
  //                                     SizedBox(height: 13.0),
  //                                     Text('Margin  ',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                                     Container(
  //                                       height:45.0,
  //                                       width: 165.0,
  //                                       child: Padding(
  //                                           padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                           child: TextFormField(
  //                                             style:TextStyle(fontSize:15.0),
  //                                             decoration: InputDecoration(
  //                                                 hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                                 border:OutlineInputBorder(
  //                                                     borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                                     borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                                 )
  //                                             ),
  //                                           )),
  //                                     )
  //                                   ] ,
  //                                 ),
  //                               ),
  //                               Column(
  //                                 children: [
  //                                   SizedBox(height:40),
  //                                   Text('Or'),
  //                                 ],
  //                               ),
  //                               Expanded(child: Column(
  //                                 mainAxisAlignment: MainAxisAlignment.start,
  //                                 crossAxisAlignment: CrossAxisAlignment.start,
  //                                 children: [
  //                                   SizedBox(height:28.0),
  //                                   Container(
  //                                     height:45.0,
  //                                     width: 165.0,
  //                                     child: Padding(
  //                                         padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                         child: TextFormField(
  //                                           style:TextStyle(fontSize:15.0),
  //                                           decoration: InputDecoration(
  //                                               hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                               border:OutlineInputBorder(
  //                                                   borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                                   borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                               )
  //                                           ),
  //                                         )),
  //                                   )
  //                                 ] ,
  //                               )
  //                               ),
  //                               SizedBox(width:5.0),
  //                               Container(
  //                                 decoration: BoxDecoration(
  //                                     border: Border(right: BorderSide(
  //                                       color: Colors.black,  // Text colour here
  //                                       width: 2.0, // Underline width
  //                                     ))
  //                                 ),
  //                                 child: Text(
  //                                   '',
  //                                   style: TextStyle(
  //                                     height: 5.0, // Text colour here
  //                                   ),
  //                                 ),
  //                               ),
  //                               SizedBox(width:5.0),
  //                               Expanded(child: Column(
  //                                 mainAxisAlignment: MainAxisAlignment.start,
  //                                 crossAxisAlignment: CrossAxisAlignment.start,
  //                                 children: [
  //                                   SizedBox(height: 10.0),
  //                                   Row(
  //                                     children: [
  //                                       Text('Or Discount(%)',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                                     ],
  //                                   ),
  //                                   SizedBox(height: 3.0),
  //                                   Container(
  //                                     height:45.0,
  //                                     width: 165.0,
  //                                     child: Padding(
  //                                         padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                         child: TextFormField(
  //                                           style:TextStyle(fontSize:15.0),
  //                                           decoration: InputDecoration(
  //                                               filled: true,
  //                                               fillColor: Colors.blue[100],
  //                                               hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                               border:OutlineInputBorder(
  //                                                   borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                                   borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                               )
  //                                           ),
  //                                         )),
  //                                   )
  //                                 ] ,
  //                               ),
  //                               ),
  //                               SizedBox(width:5.0),
  //                               Container(
  //                                 decoration: BoxDecoration(
  //                                     border: Border(right: BorderSide(
  //                                       color: Colors.black,  // Text colour here
  //                                       width: 2.0, // Underline width
  //                                     ))
  //                                 ),
  //                                 child: Text(
  //                                   '',
  //                                   style: TextStyle(
  //                                     height: 5.0, // Text colour here
  //                                   ),
  //                                 ),
  //                               ),
  //                               SizedBox(width:5.0),
  //                               Expanded(child: Column(
  //                                 mainAxisAlignment: MainAxisAlignment.start,
  //                                 crossAxisAlignment: CrossAxisAlignment.start,
  //                                 children: [
  //                                   SizedBox(height: 10.0),
  //                                   Text('               Or',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                                   SizedBox(height: 3.0,),
  //                                   Container(
  //                                     height:45.0,
  //                                     width: 165.0,
  //                                     child: Padding(
  //                                         padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                         child: TextFormField(
  //                                           style:TextStyle(fontSize:15.0),
  //                                           decoration: InputDecoration(
  //                                               hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                               border:OutlineInputBorder(
  //                                                   borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                                   borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                               )
  //                                           ),
  //                                         )),
  //                                   )
  //                                 ] ,
  //                               ),
  //                               ),
  //                               SizedBox(width: 5.0,)
  //                             ],
  //                           ),
  //                         ],
  //                       ),
  //                     ),
  //                   ),
  //                   Row(
  //                     mainAxisAlignment: MainAxisAlignment.start,
  //                     crossAxisAlignment: CrossAxisAlignment.start,
  //                     children: [
  //                       SizedBox(width:5.0),
  //                       Expanded(
  //                         child: Column(
  //                           mainAxisAlignment: MainAxisAlignment.start,
  //                           crossAxisAlignment: CrossAxisAlignment.start,
  //                           children: [
  //                             SizedBox(height: 10.0),
  //                             Row(
  //                               children: [
  //                                 Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
  //                                 Text('Quantity',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                               ],
  //                             ),
  //                             Container(
  //                               height:45.0,
  //                               width: 165.0,
  //                               child: Padding(
  //                                   padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                   child: TextFormField(
  //                                     style:TextStyle(fontSize:15.0),
  //                                     decoration: InputDecoration(
  //                                         filled: true,
  //                                         fillColor: Colors.blue[100],
  //                                         hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                         border:OutlineInputBorder(
  //                                             borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                             borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                         )
  //                                     ),
  //                                   )),
  //                             )
  //                           ] ,
  //                         ),
  //                       ),
  //                       SizedBox(width:10),
  //                       Expanded(child: Column(
  //                         mainAxisAlignment: MainAxisAlignment.start,
  //                         crossAxisAlignment: CrossAxisAlignment.start,
  //                         children: [
  //                           SizedBox(height: 10.0),
  //                           Text('Discount',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                           SizedBox(height: 3.0),
  //                           Container(
  //                             height:45.0,
  //                             width: 165.0,
  //                             child: Padding(
  //                                 padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                 child: TextFormField(
  //                                   style:TextStyle(fontSize:15.0),
  //                                   decoration: InputDecoration(
  //                                       filled: true,
  //                                       fillColor: Colors.blue[100],
  //                                       hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                       border:OutlineInputBorder(
  //                                           borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                           borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                       )
  //                                   ),
  //                                 )),
  //                           )
  //                         ] ,
  //                       )
  //                       ),
  //                       SizedBox(width:10.0),
  //                       Expanded(child: Column(
  //                         mainAxisAlignment: MainAxisAlignment.start,
  //                         crossAxisAlignment: CrossAxisAlignment.start,
  //                         children: [
  //                           SizedBox(height: 10.0),
  //                           Text('HSN',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                           SizedBox(height: 3.0),
  //                           Container(
  //                             height:45.0,
  //                             width: 165.0,
  //                             child: Padding(
  //                                 padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                 child: TextFormField(
  //                                   style:TextStyle(fontSize:15.0),
  //                                   decoration: InputDecoration(
  //                                       filled: true,
  //                                       fillColor: Colors.blue[100],
  //                                       hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                       border:OutlineInputBorder(
  //                                           borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                           borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                       )
  //                                   ),
  //                                 )),
  //                           )
  //                         ] ,
  //                       ),
  //                       ),
  //                       SizedBox(width:10.0),
  //                       Expanded(child: Column(
  //                         mainAxisAlignment: MainAxisAlignment.start,
  //                         crossAxisAlignment: CrossAxisAlignment.start,
  //                         children: [
  //                           SizedBox(height: 10.0),
  //                           Row(
  //                             children: [
  //                               Text('*',style:TextStyle(fontWeight: FontWeight.bold,color:Colors.red)),
  //                               Text('GST',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                             ],
  //                           ),
  //                           SizedBox(height: 7.0,),
  //                           SingleChildScrollView(
  //                             scrollDirection: Axis.horizontal,
  //                             child:Container(
  //                               height:30.0,
  //                               width: 125.0,
  //                               decoration:BoxDecoration(
  //                                 borderRadius:BorderRadius.all(Radius.circular(5.0)),
  //                                 border:Border.all(color: Colors.black),
  //                                 color: Colors.white,
  //                               ),
  //                               child: Padding(
  //                                 padding: EdgeInsets.only(left: 1.0, right: 1.00,top:2.0,bottom:2.0),
  //                                 child: DropdownButtonHideUnderline(
  //                                   child: DropdownButton<int>(
  //                                     items: keys1.map((int dropDownStringItem) {
  //                                       return DropdownMenuItem<int>(
  //                                         value: dropDownStringItem,
  //                                         child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.black,height:1.0),),
  //                                       );
  //                                     }).toList(),
  //                                     onChanged: (int newValueSelected1) {
  //                                       // Your code to execute, when a menu item is selected from drop down
  //                                       _onDropDownItemSelected1(newValueSelected1);
  //                                       // print(productProvider.);
  //                                       setState(() {
  //                                         (() {
  //                                           if(value == true){
  //                                             return value = false;}
  //                                           else{return value = true;}
  //                                         })();
  //                                       });
  //                                     },
  //                                     dropdownColor: Colors.white,
  //                                     value:_currentItemSelected1,
  //                                   ),
  //                                 ),
  //                               ),
  //                             ),
  //                           )
  //                         ] ,
  //                       ),
  //                       ),
  //                       SizedBox(width: 5.0,)
  //                     ],
  //                   ),
  //                   Row(
  //                     mainAxisAlignment: MainAxisAlignment.start,
  //                     crossAxisAlignment: CrossAxisAlignment.start,
  //                     children: [
  //                       SizedBox(width:5.0),
  //                       Expanded(child: Column(
  //                         mainAxisAlignment: MainAxisAlignment.start,
  //                         crossAxisAlignment: CrossAxisAlignment.start,
  //                         children: [
  //                           SizedBox(height: 10.0),
  //                           Text('CESS',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                           SizedBox(height: 13.0,),
  //                           SingleChildScrollView(
  //                             scrollDirection: Axis.horizontal,
  //                             child:Container(
  //                               height:25.0,
  //                               width: 165.0,
  //                               decoration:BoxDecoration(
  //                                 borderRadius:BorderRadius.all(Radius.circular(5.0)),
  //                                 border:Border.all(color: Colors.black),
  //                                 color: Colors.white,
  //                               ),
  //                               child: Padding(
  //                                 padding: EdgeInsets.only(left: 1.0, right: 1.00,top:2.0,bottom:2.0),
  //                                 child: DropdownButtonHideUnderline(
  //                                   child: DropdownButton<int>(
  //                                     items: keys1.map((int dropDownStringItem) {
  //                                       return DropdownMenuItem<int>(
  //                                         value: dropDownStringItem,
  //                                         child: Text(dropDownStringItem.toString(),style: TextStyle(color: Colors.black,height:1.0),),
  //                                       );
  //                                     }).toList(),
  //                                     onChanged: (int newValueSelected1) {
  //                                       // Your code to execute, when a menu item is selected from drop down
  //                                       _onDropDownItemSelected1(newValueSelected1);
  //                                       // print(productProvider.);
  //                                       setState(() {
  //                                         (() {
  //                                           if(value == true){
  //                                             return value = false;}
  //                                           else{return value = true;}
  //                                         })();
  //                                       });
  //                                     },
  //                                     dropdownColor: Colors.white,
  //                                     value:_currentItemSelected1,
  //                                   ),
  //                                 ),
  //                               ),
  //                             ),
  //                           )
  //                         ] ,
  //                       ),
  //                       ),
  //                       SizedBox(width:10.0),
  //                       Expanded(child: Column(
  //                         mainAxisAlignment: MainAxisAlignment.start,
  //                         crossAxisAlignment: CrossAxisAlignment.start,
  //                         children: [
  //                           SizedBox(height: 10.0),
  //                           Text('EXPIRY TIME',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                           SizedBox(height:3.0,),
  //                           Padding(
  //                             padding: EdgeInsets.symmetric(vertical: 10.0),
  //                             child: SizedBox(
  //                               height:25.0,
  //                               width: 165.0,
  //                               child: DateTimePicker(
  //                                 decoration: InputDecoration(
  //                                     filled: true,
  //                                     fillColor: Colors.white,
  //                                     hintStyle: TextStyle(fontSize: 14.0),
  //                                     border:OutlineInputBorder(
  //                                         borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                         borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                     )
  //                                 ),
  //                                 type: DateTimePickerType.date,
  //                                 dateMask: 'dd/MM/yyyy',
  //                                 //initialValue: _initialValue,
  //                                 firstDate: DateTime(2000),
  //                                 lastDate: DateTime(2100),
  //                                 icon: Icon(Icons.event),
  //                                 onChanged:(val){},
  //                                 onSaved: (val){},
  //                               ),
  //                             ),
  //                           ),
  //                         ] ,
  //                       ),
  //                       ),
  //                       SizedBox(width:10.0),
  //                       Expanded(child: Column(
  //                         mainAxisAlignment: MainAxisAlignment.start,
  //                         crossAxisAlignment: CrossAxisAlignment.start,
  //                         children: [
  //                           SizedBox(height: 10.0),
  //                           Text('AlertQuantity',style:TextStyle(fontWeight: FontWeight.bold,fontSize:14.0)),
  //                           SizedBox(height: 3.0),
  //                           Container(
  //                             height:40.0,
  //                             width: 165.0,
  //                             child: Padding(
  //                                 padding: EdgeInsets.only(left: 1.0, right: 1.00,top:8.0,bottom:8.0),
  //                                 child: TextFormField(
  //                                   style:TextStyle(fontSize:15.0),
  //                                   decoration: InputDecoration(
  //                                       filled: true,
  //                                       fillColor: Colors.blue[100],
  //                                       hintStyle: TextStyle(height:2.5,fontSize:15.0),
  //                                       border:OutlineInputBorder(
  //                                           borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
  //                                           borderRadius: BorderRadius.all(Radius.circular(5.0))
  //                                       )
  //                                   ),
  //                                 )),
  //                           )
  //                         ] ,
  //                       ),
  //                       ),
  //                       SizedBox(width: 5.0,)
  //                     ],
  //                   ),
  //                   Row(
  //                     children: [
  //                       SizedBox(width: 250),
  //                       MaterialButton(
  //                         onPressed: (){
  //                           Navigator.pop(context);
  //                         },
  //                         color:Colors.blue,
  //                         padding: EdgeInsets.symmetric(vertical:10,horizontal:5.0),
  //                         minWidth: 0,
  //                         child:Text('Save',style:TextStyle(color:Colors.white),),
  //                       ),
  //                     ],
  //                   ),
  //                 ],
  //               ),
  //             );
  //           },
  //         ),
  //         contentPadding: EdgeInsets.all(0.0),
  //       );
  //     },
  //   );
  // }
  void _onDropDownItemSelected(String newValueSelected) {
    setState(() {
      this._currentItemSelected= newValueSelected;
    });
  }
  void _onDropDownItemSelected1(int newValueSelected1) {
    setState(() {
      this._currentItemSelected1= newValueSelected1;
    });
  }
  // void getHttp() async {
  //   try {
  //     Response response = await Dio().get("http://www.google.com");
  //     print(response);
  //   } catch (e) {
  //     print(e);
  //   }
  // }
}



