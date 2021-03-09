import 'package:application2/screens/home.dart';
import 'package:flutter/material.dart';
import 'package:date_time_picker/date_time_picker.dart';
class Save extends StatefulWidget {
  @override
  _SaveState createState() => _SaveState();
}

class _SaveState extends State<Save> {
  final priceController = TextEditingController();
  final dateController = TextEditingController();
  final invoiceController = TextEditingController();
  final paymentController = TextEditingController();
  List<String> keys = [
    'Cash',
    'Cheque',
    'Card',
    'EBanking',
  ];
  var _currentItemSelected= 'Cash';
  @override
  void initState(){
    priceController.text ="";
    dateController.text ="";
    invoiceController.text ="";
    paymentController.text ="";
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar:AppBar(
        titleSpacing:2.0,
          title:Text('Save GRN',style:TextStyle(fontWeight: FontWeight.bold,color: Colors.white),),
        backgroundColor: Colors.cyan,
      ),
      body: SingleChildScrollView(
        child: Container(
          child:SingleChildScrollView(
            scrollDirection:Axis.horizontal,
            child: Container(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      SizedBox(width: 8.0),
                      (MediaQuery.of(context).size.width <= 540.00)?Text(' Tax Rate     Taxable Amt.    CGST     SGST     Total Tax',style:TextStyle(
                        decoration:TextDecoration.underline,
                        decorationThickness:2.0,
                        height: 2.0,
                      )):(MediaQuery.of(context).size.width <= 1020.00)?Row(
                        children: [
                          Text(' '),
                          Text('     Tax Rate          Taxable Amt.            CGST              SGST          Total Tax     ',style:TextStyle(
                            decoration:TextDecoration.underline,
                            decorationThickness:2.0,
                            height: 2.0,
                          )),
                        ],
                      ):Row(
                        children: [
                          Text(' '),
                          Text('                              Tax Rate                                   Taxable Amt.                                     CGST                                       SGST                                    Total Tax                                ',style:TextStyle(
                            decoration:TextDecoration.underline,
                            decorationThickness:2.0,
                            height: 2.0,
                          )),
                        ],
                      ),
                    ],
                  ),
                  Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      (MediaQuery.of(context).size.width <= 540.00)?Text('       12                481.60           28.90      28.90       57.79'):(MediaQuery.of(context).size.width <= 1020.00)?Text('           12                       481.60                  28.90              28.90              57.79'):Text('                                       12                                             481.60                                        28.90                                       28.90                                       57.79'),
                      (MediaQuery.of(context).size.width <= 540.00)?Container(
                        padding: EdgeInsets.only(
                          bottom: 4, // space between underline and text
                        ),
                        decoration: BoxDecoration(
                            border: Border(bottom: BorderSide(
                              color: Colors.black,  // Text colour here
                              width: 2.0, // Underline width
                            ))
                        ),
                        child: Text(
                          "       18              2118.60        190.67    190.67     381.35        ",
                          style: TextStyle(
                              height: 1.6, // Text colour here
                          ),
                        ),
                      ):(MediaQuery.of(context).size.width <= 1020.00)?Row(
                     children: [
                     Text('   '),
                     Container(
                       padding: EdgeInsets.only(
                         bottom: 4, // space between underline and text
                       ),
                       decoration: BoxDecoration(
                           border: Border(bottom: BorderSide(
                             color: Colors.black,  // Text colour here
                             width: 2.0, // Underline width
                           ))
                       ),
                       child: Text(
                         '        18                     2118.60                190.67           190.67            381.35        ',
                         style: TextStyle(
                           height: 1.6, // Text colour here
                         ),
                       ),
                     ),
                     ],
                    ):Row(
                        children: [
                          Text('   '),
                          Container(
                            padding: EdgeInsets.only(
                              bottom: 4, // space between underline and text
                            ),
                            decoration: BoxDecoration(
                                border: Border(bottom: BorderSide(
                                  color: Colors.black,  // Text colour here
                                  width: 2.0, // Underline width
                                ))
                            ),
                            child: Text(
                              '                                    18                                           2118.60                                      190.67                                     190.67                                     381.35                                  ',
                              style: TextStyle(
                                height: 1.6, // Text colour here
                              ),
                            ),
                          ),
                        ],
                      ),
                      // Text('       18              2118.60        190.67    190.67     381.35        ',
                      // style: TextStyle(
                      //   decoration: TextDecoration.underline,
                      //   height: 1.6 ),
                      //
                      (MediaQuery.of(context).size.width <= 540.00)?Container(
                        padding: EdgeInsets.only(
                          bottom: 4, // space between underline and text
                        ),
                        decoration: BoxDecoration(
                            border: Border(bottom: BorderSide(
                              color: Colors.black,  // Text colour here
                              width: 2.0, // Underline width
                            ))
                        ),
                        child: Text(
                          '      Total           2600.20        219.57    219.57     439.14         ',
                          style: TextStyle(
                            height: 1.6, // Text colour here
                          ),
                        ),
                      ):(MediaQuery.of(context).size.width <= 1020.00)?Row(
                        children: [
                          Text('   '),
                          Container(
                            padding: EdgeInsets.only(
                              bottom: 4, // space between underline and text
                            ),
                            decoration: BoxDecoration(
                                border: Border(bottom: BorderSide(
                                  color: Colors.black,  // Text colour here
                                  width: 2.0, // Underline width
                                ))
                            ),
                            child: Text(
                            '       Total                 2600.20               219.57           219.57            439.14         ',
                            style: TextStyle(
                              height: 1.6, // Text colour here
                            ),
                              ),
                          ),
                        ],
                      ):Row(
                        children: [
                          Text('   '),
                          Container(
                            padding: EdgeInsets.only(
                              bottom: 4, // space between underline and text
                            ),
                            decoration: BoxDecoration(
                                border: Border(bottom: BorderSide(
                                  color: Colors.black,  // Text colour here
                                  width: 2.0, // Underline width
                                ))
                            ),
                            child: Text(
                              '                                   Total                                         2600.20                                      219.57                                    219.57                                    439.14                                   ',
                              style: TextStyle(
                                height: 1.6, // Text colour here
                              ),
                            ),
                          ),
                        ],
                      ),
                      (MediaQuery.of(context).size.width <= 540.00)?SizedBox(height: 8.0):(MediaQuery.of(context).size.width <= 1020.00)?SizedBox(height: 18.0):SizedBox(height: 38.0),
                      (MediaQuery.of(context).size.width <= 540.00)?Container(
                        color:Colors.blue[200],
                        child: Row(
                          children: [
                            SizedBox(width: 10.0),
                            Text(' Total*   :                        ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold,fontSize: 18.0),),
                        Container(
                          height:40.0,
                          width: 165.0,
                          child: Padding(
                              padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                              child: TextFormField(
                                style:TextStyle(height: 2.5),
                                initialValue:'3039.34',
                                enabled: false,
                                decoration: InputDecoration(hintText: "Total",
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
                            SizedBox(width: 10.0,)
                          ],
                        ),
                      ):(MediaQuery.of(context).size.width <= 1020.00)?Container(
                        color:Colors.blue[200],
                        child: Row(
                          children: [
                            SizedBox(width: 30.0),
                            Text(' Total*   :                        ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold,fontSize: 18.0),),
                            SizedBox(
                              width: 130.0,
                            ),
                            Container(
                              height:40.0,
                              width: 290.0,
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                  child: TextFormField(
                                    style:TextStyle(height:2.5),
                                    initialValue:'3039.34',
                                    enabled: false,
                                    decoration: InputDecoration(hintText: "Total",
                                        filled: true,
                                        fillColor: Colors.white,
                                        hintStyle: TextStyle(fontSize: 14.0),
                                        border:OutlineInputBorder(
                                            borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                            borderRadius: BorderRadius.all(Radius.circular(2.0))
                                        )
                                    ),
                                  )),
                            ),
                            SizedBox(width: 20.0,)
                          ],
                        ),
                      ):Container(
                        color:Colors.blue[200],
                        child: Row(
                          children: [
                            SizedBox(width: 130.0),
                            Text(' Total*   :                                                                                       ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold,fontSize: 25.0),),
                            SizedBox(
                              width: 130.0,
                            ),
                            Container(
                              height:80.0,
                              width: 490.0,
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                  child: TextFormField(
                                    style:TextStyle(height:2.5),
                                    initialValue:'3039.34',
                                    enabled: false,
                                    decoration: InputDecoration(hintText: "Total",
                                        filled: true,
                                        fillColor: Colors.white,
                                        hintStyle: TextStyle(fontSize: 14.0),
                                        border:OutlineInputBorder(
                                            borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                            borderRadius: BorderRadius.all(Radius.circular(10.0))
                                        )
                                    ),
                                  )),
                            ),
                            SizedBox(width: 80.0,)
                          ],
                        ),
                      ),
                      (MediaQuery.of(context).size.width <= 540.00)?Container(
                        color:Colors.cyan[100],
                        child: Row(
                          children: [
                            SizedBox(width: 9.0),
                            Text(' Paid Amount*   :          ',style: TextStyle(backgroundColor:Colors.cyan[100],fontWeight:FontWeight.bold,fontSize: 18.0),),
                            Container(
                              height:40.0,
                              width: 165.0,
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                  child: TextFormField(
                                    keyboardType: TextInputType.number,
                                    style:TextStyle(height:1.22,fontSize:15.0),
                                    controller: priceController,
                                    decoration: InputDecoration(
                                        filled: true,
                                        fillColor: Colors.white,
                                        hintStyle: TextStyle(fontSize: 10.0),
                                        border:OutlineInputBorder(
                                            borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                            borderRadius: BorderRadius.all(Radius.circular(5.0))
                                        )
                                    ),
                                  )),
                            ),
                            SizedBox(width: 10.0,)
                          ],
                        ),
                      ):(MediaQuery.of(context).size.width <= 1020.00)?Container(
                        color:Colors.cyan[100],
                        child: Row(
                          children: [
                            SizedBox(width: 9.0),
                            Text('      Paid Amount*   :         ',style: TextStyle(backgroundColor:Colors.cyan[100],fontWeight:FontWeight.bold,fontSize: 18.0),),
                            SizedBox(
                              width: 130.0,
                            ),
                            Container(
                              height:40.0,
                              width: 290.0,
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                  child: TextFormField(
                                    keyboardType: TextInputType.number,
                                    style:TextStyle(height:1.22,fontSize:15.0),
                                    controller: priceController,
                                    decoration: InputDecoration(
                                        filled: true,
                                        fillColor: Colors.white,
                                        hintStyle: TextStyle(fontSize: 10.0),
                                        border:OutlineInputBorder(
                                            borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                            borderRadius: BorderRadius.all(Radius.circular(2.0))
                                        )
                                    ),
                                  )),
                            ),
                            SizedBox(width: 20.0,)
                          ],
                        ),
                      ):Container(
                        color:Colors.cyan[100],
                        child: Row(
                          children: [
                            SizedBox(width: 70.0),
                            Text('      Paid Amount*   :                                                                             ',style: TextStyle(backgroundColor:Colors.cyan[100],fontWeight:FontWeight.bold,fontSize: 25.0),),
                            SizedBox(
                              width: 130.0,
                            ),
                            Container(
                              height:80.0,
                              width: 490.0,
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                  child: TextFormField(
                                    keyboardType: TextInputType.number,
                                    style:TextStyle(height:1.22,fontSize:15.0),
                                    controller: priceController,
                                    decoration: InputDecoration(
                                        filled: true,
                                        fillColor: Colors.white,
                                        hintStyle: TextStyle(fontSize: 10.0),
                                        border:OutlineInputBorder(
                                            borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                            borderRadius: BorderRadius.all(Radius.circular(10.0))
                                        )
                                    ),
                                  )),
                            ),
                            SizedBox(width: 80.0,)
                          ],
                        ),
                      ),
                      (MediaQuery.of(context).size.width <= 540.00)?Container(
                        color:Colors.blue[200],
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                SizedBox(width: 9.0),
                                Text(' Payment Mode*   :      ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold,fontSize: 18.0),),
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
                                SizedBox(width: 10.0,)
                              ],
                            ),
                            (_currentItemSelected == 'Cheque')?Row(
                              children: [
                                SizedBox(width: 9.0),
                                Text(' Cheque Number          ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold,fontSize: 18.0),),
                                Padding(
                                  padding: EdgeInsets.symmetric(vertical: 10.0),
                                  child: Container(
                                    height:45.0,
                                    width: 165.0,
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
                                  )
                                ),
                                SizedBox(width: 10.0,)
                              ],
                            ):Container(),
                          ],
                        ),
                      ):(MediaQuery.of(context).size.width <= 1020.00)?Container(
                        color:Colors.blue[200],
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                SizedBox(width: 9.0),
                                Text('      Payment Mode* :      ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold,fontSize: 18.0),),
                                SizedBox(
                                  width: 140.0,
                                ),
                                Padding(
                                  padding: EdgeInsets.symmetric(vertical: 10.0),
                                  child:Container(
                                    height:40.0,
                                    width: 280.0,
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
                                SizedBox(width: 25.0,)
                              ],
                            ),
                            (_currentItemSelected == 'Cheque')?Row(
                              children: [
                                SizedBox(width: 9.0),
                                Text('     Cheque Number:         ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold,fontSize: 18.0),),
                                SizedBox(
                                  width: 130.0,
                                ),
                                Padding(
                                    padding: EdgeInsets.symmetric(vertical: 10.0),
                                    child: Container(
                                      height:35.0,
                                      width: 290.0,
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
                                    )
                                ),
                                SizedBox(width: 10.0,)
                              ],
                            ):Container(),
                          ],
                        ),
                      ):Container(
                        color:Colors.blue[200],
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                SizedBox(width: 69.0),
                                Text('      Payment Mode* :                                                                          ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold,fontSize: 25.0),),
                                SizedBox(
                                  width: 140.0,
                                ),
                                Padding(
                                  padding: EdgeInsets.symmetric(vertical: 10.0),
                                  child:Container(
                                    height:60.0,
                                    width: 490.0,
                                    decoration:BoxDecoration(
                                      borderRadius:BorderRadius.circular(10.0),
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
                                SizedBox(width: 80.0,)
                              ],
                            ),
                            (_currentItemSelected == 'Cheque')?Row(
                              children: [
                                SizedBox(width: 75.0),
                                Text('     Cheque Number :                                                                           ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold,fontSize: 25.0),),
                                SizedBox(
                                  width: 130.0,
                                ),
                                Padding(
                                    padding: EdgeInsets.symmetric(vertical: 10.0),
                                    child: Container(
                                      height:80.0,
                                      width: 490.0,
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
                                                    borderRadius: BorderRadius.all(Radius.circular(10.0))
                                                )
                                            ),
                                          )),
                                    )
                                ),
                                SizedBox(width: 80.0,)
                              ],
                            ):Container(),
                          ],
                        ),
                      ),
                      (MediaQuery.of(context).size.width <= 540.00)?Container(
                        color:Colors.cyan[100],
                        child: Row(
                          children: [
                            SizedBox(width: 9.0),
                            Text(' Invoice No*   :             ',style: TextStyle(backgroundColor:Colors.cyan[100],fontWeight:FontWeight.bold,fontSize: 18.0),),
                            Container(
                              height:40.0,
                              width: 165.0,
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                  child: TextFormField(
                                    style:TextStyle(height:1.22,fontSize:15.0),
                                    controller: invoiceController,
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
                            SizedBox(width: 13.0,)
                          ],
                        ),
                      ):(MediaQuery.of(context).size.width <= 1020.00)?Container(
                        color:Colors.cyan[100],
                        child: Row(
                          children: [
                            SizedBox(width: 9.0),
                            Text('      Invoice No*   :             ',style: TextStyle(backgroundColor:Colors.cyan[100],fontWeight:FontWeight.bold,fontSize: 18.0),),
                            SizedBox(
                              width: 130.0,
                            ),
                            Container(
                              height:40.0,
                              width: 290.0,
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                  child: TextFormField(
                                    style:TextStyle(height:1.22,fontSize:15.0),
                                    controller: invoiceController,
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
                            SizedBox(width: 23.0,)
                          ],
                        ),
                      ):Container(
                        color:Colors.cyan[100],
                        child: Row(
                          children: [
                            SizedBox(width: 80.0),
                            Text('      Invoice No*   :                                                                               ',style: TextStyle(backgroundColor:Colors.cyan[100],fontWeight:FontWeight.bold,fontSize: 25.0),),
                            SizedBox(
                              width: 130.0,
                            ),
                            Container(
                              height:80.0,
                              width: 490.0,
                              child: Padding(
                                  padding: EdgeInsets.only(left: 1.0, right: 1.00,top:10.0,bottom:10.0),
                                  child: TextFormField(
                                    style:TextStyle(height:1.22,fontSize:15.0),
                                    controller: invoiceController,
                                    decoration: InputDecoration(
                                        filled: true,
                                        fillColor: Colors.white,
                                        hintStyle: TextStyle(fontSize: 14.0),
                                        border:OutlineInputBorder(
                                            borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                            borderRadius: BorderRadius.all(Radius.circular(10.0))
                                        )
                                    ),
                                  )),
                            ),
                            SizedBox(width: 83.0,)
                          ],
                        ),
                      ),
                      (MediaQuery.of(context).size.width <= 540.00)?Container(
                        color:Colors.blue[200],
                        child: Row(
                          children: [
                            SizedBox(width: 9.0),
                            Text(' Invoice Date*  :           ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold,fontSize: 18.0),),
                            Padding(
                              padding: EdgeInsets.symmetric(vertical: 10.0),
                              child: SizedBox(
                                height:20.0,
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
                                controller: dateController,
                                //initialValue: _initialValue,
                                firstDate: DateTime(2000),
                                lastDate: DateTime(2100),
                                icon: Icon(Icons.event),
                                onChanged:(val){},
                                onSaved: (val){},
                                  ),
                              ),
                      ),
                            SizedBox(width:13.0,)
                              ],
                        ),
                      ):(MediaQuery.of(context).size.width <= 1020.00)?Container(
                        color:Colors.blue[200],
                        child: Row(
                          children: [
                            SizedBox(width: 9.0),
                            Text('      Invoice Date*  :           ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold,fontSize: 18.0),),
                            SizedBox(width:130.0),
                            Padding(
                              padding: EdgeInsets.symmetric(vertical: 10.0),
                              child: SizedBox(
                                height:20.0,
                                width: 290.0,
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
                                  controller: dateController,
                                  //initialValue: _initialValue,
                                  firstDate: DateTime(2000),
                                  lastDate: DateTime(2100),
                                  icon: Icon(Icons.event),
                                  onChanged:(val){},
                                  onSaved: (val){},
                                ),
                              ),
                            ),
                            SizedBox(width:23.0,)
                          ],
                        ),
                      ):Container(
                        color:Colors.blue[200],
                        child: Row(
                          children: [
                            SizedBox(width:70.0),
                            Text('       Invoice Date*  :                                                                              ',style: TextStyle(backgroundColor:Colors.blue[200],fontWeight:FontWeight.bold,fontSize: 25.0),),
                            SizedBox(width:130.0),
                            Padding(
                              padding: EdgeInsets.symmetric(vertical: 10.0),
                              child: SizedBox(
                                height:60.0,
                                width: 490.0,
                                child: DateTimePicker(
                                  decoration: InputDecoration(
                                      filled: true,
                                      fillColor: Colors.white,
                                      hintStyle: TextStyle(fontSize: 14.0),
                                      border:OutlineInputBorder(
                                          borderSide:BorderSide(color: Colors.black,width: 1.0,style:BorderStyle.solid ),
                                          borderRadius: BorderRadius.all(Radius.circular(10.0))
                                      )
                                  ),
                                  type: DateTimePickerType.date,
                                  dateMask: 'dd/MM/yyyy',
                                  controller: dateController,
                                  //initialValue: _initialValue,
                                  firstDate: DateTime(2000),
                                  lastDate: DateTime(2100),
                                  icon: Icon(Icons.event,color:Colors.grey),
                                  onChanged:(val){},
                                  onSaved: (val){},
                                ),
                              ),
                            ),
                            SizedBox(width:80.0,)
                          ],
                        ),
                      ),
                      (MediaQuery.of(context).size.width <= 1020.00)?Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children:[
                          (MediaQuery.of(context).size.width <= 540.00)?SizedBox(width: 230):SizedBox(width: 520.0),
                          SizedBox(
                        width: 110.0,
                        child: FlatButton(
                          color: Colors.blue,
                          onPressed:(){
                            Navigator.push(context,MaterialPageRoute(builder: (context) =>MyApp()));
                          },
                          child:Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              SizedBox(width: 4.0),
                              Icon(Icons.thumb_up,color:Colors.white,),
                              Text('  SAVE ',
                              style:TextStyle(
                                color: Colors.white,
                                height:1.7
                              ),
                              )
                            ],
                          ),
                        ),
                    ),]
                      ):
                      Column(
                        children: [
                          SizedBox(height: 160.0),
                          Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children:[
                                (MediaQuery.of(context).size.width <= 540.00)?SizedBox(width: 230):(MediaQuery.of(context).size.width <= 1020.00)?SizedBox(width: 520.0):SizedBox(width: 1420.0),
                                SizedBox(
                                  width: 110.0,
                                  child: FlatButton(
                                    color: Colors.blue,
                                    onPressed:(){
                                      Navigator.push(context,MaterialPageRoute(builder: (context) =>MyApp()));
                                    },
                                    child:Row(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        SizedBox(width: 4.0),
                                        Icon(Icons.thumb_up,color:Colors.white,),
                                        Text('  SAVE ',
                                          style:TextStyle(
                                              color: Colors.white,
                                              height:1.7
                                          ),
                                        )
                                      ],
                                    ),
                                  ),
                                ),]
                          ),
                        ],
                      ),

                    ],
                  ),
                ],
              ),
            ),
          ),
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
