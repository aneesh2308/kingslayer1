import 'package:application2/screens/GNR.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Futtkr',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      // drawer: Container(
      //   child: MultiLevelDrawer(
      //     backgroundColor: Colors.white,
      //     rippleColor: Colors.white,
      //     subMenuBackgroundColor: Colors.grey.shade100,
      //     divisionColor: Colors.grey,
      //     header: Container(
      //       height: size.height * 0.3,
      //       child: Center(
      //           child: SingleChildScrollView(
      //             child: Column(
      //               mainAxisAlignment: MainAxisAlignment.center,
      //               children: <Widget>[
      //                 CircleAvatar(
      //                   backgroundImage: NetworkImage("https://www.marshall.edu/cam/files/unknown.gif"),
      //                   radius: 40.0,
      //                 ),
      //                 SizedBox( height: 10 ),
      //                 Text("GautumPTl")
      //               ],
      //             ),
      //           )),
      //     ),
      //     children: [
      //       MLMenuItem(
      //           leading: SizedBox(width: 5.0,),
      //           trailing: Icon(Icons.arrow_right),
      //           content: Text(
      //             "Online Ordering",
      //           ),
      //           subMenuItems: [
      //             MLSubmenu(
      //                 onClick: () {
      //                   Navigator.of(context).pop();
      //                 },
      //                 submenuContent: Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.transfer_within_a_station),SizedBox(width: 5.0),Text("Order Settlement"),],)),
      //             MLSubmenu(onClick: () {}, submenuContent: Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.fiber_manual_record),SizedBox(width: 5.0),Text("Order Settlement"),],)),
      //             MLSubmenu(onClick: () {}, submenuContent: Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.rate_review),SizedBox(width: 5.0),Text("Review"),],)),
      //           ],
      //           onClick: () {}),
      //       MLMenuItem(
      //           leading: SizedBox(width: 5.0,),
      //           trailing: Icon(Icons.arrow_right),
      //           content: Text("Inventory Management"),
      //           onClick: () {},
      //           subMenuItems: [
      //             MLSubmenu(onClick: () {}, submenuContent: Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.file_upload),SizedBox(width: 5.0),Text("Upload Project"),],)),
      //             MLSubmenu(onClick: ()=>{Navigator.push(context,MaterialPageRoute(builder: (context) =>GRN()))}, submenuContent: Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.create),SizedBox(width: 5.0),Text("Create GRN"),],)),
      //             MLSubmenu(onClick: () {}, submenuContent: Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.create),SizedBox(width: 5.0),Text("Create PRN"),],)),
      //             MLSubmenu(onClick: () {}, submenuContent: Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.history),SizedBox(width: 5.0),Text("GRN History"),],)),
      //             MLSubmenu(onClick: () {}, submenuContent: Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.person),SizedBox(width: 5.0),Text("Distribution List"),],))
      //           ]),
      //       MLMenuItem(
      //           leading: SizedBox(width: 5.0,),
      //         trailing: Icon(Icons.arrow_right),
      //         content: Text("Products"),
      //         onClick: () {},
      //           subMenuItems: [MLSubmenu(onClick: () {}, submenuContent: Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.create),SizedBox(width: 5.0),Text("Product Info"),],)),
      //             MLSubmenu(onClick: () {}, submenuContent: Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.create),SizedBox(width: 5.0),Text("Radical Products"),],)),
      //           ]
      //       ),
      //       MLMenuItem(
      //           leading: SizedBox(width: 5.0,),
      //           trailing: Icon(Icons.arrow_right),
      //           content: Text("Reports"),
      //           subMenuItems: [
      //             MLSubmenu(onClick: () {}, submenuContent:Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.history),SizedBox(width: 5.0),Text("Order History"),],)),
      //             MLSubmenu(onClick: () {}, submenuContent:Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.equalizer),SizedBox(width: 5.0),Text("Settlement Report"),],)),
      //             MLSubmenu(onClick: () {}, submenuContent:Row(mainAxisAlignment:MainAxisAlignment.start,children: [Icon(Icons.equalizer),SizedBox(width: 5.0),Text("Sales Report"),],)),
      //           ],
      //           onClick: () {}),
      //     ],
      //   ),
      // ),
      drawer: Container(
        width: size.width * 0.50,
        child: Drawer(
          child:ListView(
            padding: EdgeInsets.zero,
            children: <Widget>[
              DrawerHeader(
                child: Container(
                  height: size.height * 0.30,
                  child: Center(
              child: SingleChildScrollView(
                    child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              CircleAvatar(
                  backgroundImage: NetworkImage("https://www.marshall.edu/cam/files/unknown.gif"),
                  radius: 40.0,
              ),
              SizedBox( height: 10 ),
              Text("GautumPTl")
            ],
          ),
        )),
                ),
                decoration: BoxDecoration(
                  color: Colors.grey[200],
                ),
              ),
              ExpansionTile(
                title: Text("Online Ordering"),
                trailing: Icon(Icons.arrow_right),
                children: <Widget>[
                  Row(mainAxisAlignment:MainAxisAlignment.start,children: [SizedBox(width: 10.0),Icon(Icons.fiber_manual_record),SizedBox(width: 5.0),Text("Order Settlement"),],),
                  Row(mainAxisAlignment:MainAxisAlignment.start,children: [SizedBox(width: 10.0),Icon(Icons.rate_review),SizedBox(width: 5.0),Text("Review"),],),
                ],
              ),
              ExpansionTile(
                title: Text("Inventory Management"),
                trailing: Icon(Icons.arrow_right),
                children: <Widget>[
                  Row(mainAxisAlignment:MainAxisAlignment.start,children: [SizedBox(width: 10.0),Icon(Icons.file_upload),SizedBox(width: 5.0),Text("Upload Project"),],),
                  InkWell(onTap: (){Navigator.push(context,MaterialPageRoute(builder: (context) =>GRN()));}, child: Row(mainAxisAlignment:MainAxisAlignment.start,children: [SizedBox(width: 10.0),Icon(Icons.create),SizedBox(width: 5.0),Text("Create GRN"),],)),
                  Row(mainAxisAlignment:MainAxisAlignment.start,children: [SizedBox(width: 10.0),Icon(Icons.create),SizedBox(width: 5.0),Text("Create PRN"),],),
                  Row(mainAxisAlignment:MainAxisAlignment.start,children: [SizedBox(width: 10.0),Icon(Icons.history),SizedBox(width: 5.0),Text("GRN History"),],),
                  Row(mainAxisAlignment:MainAxisAlignment.start,children: [SizedBox(width: 10.0),Icon(Icons.person),SizedBox(width: 5.0),Text("Distribution List"),],)
                ],
              ),
              ExpansionTile(
                title: Text("Products"),
                trailing: Icon(Icons.arrow_right),
                children: <Widget>[
                  Row(mainAxisAlignment:MainAxisAlignment.start,children: [SizedBox(width: 10.0),Icon(Icons.create),SizedBox(width: 5.0),Text("Product Info"),],),
                  Row(mainAxisAlignment:MainAxisAlignment.start,children: [SizedBox(width: 10.0),Icon(Icons.create),SizedBox(width: 5.0),Text("Radical Products"),],),
                ],
              ),
              ExpansionTile(
                title: Text("Reports"),
                trailing: Icon(Icons.arrow_right),
                children: <Widget>[
                  Row(mainAxisAlignment:MainAxisAlignment.start,children: [SizedBox(width: 10.0),Icon(Icons.history),SizedBox(width: 5.0),Text("Order History"),],),
                  Row(mainAxisAlignment:MainAxisAlignment.start,children: [SizedBox(width: 10.0),Icon(Icons.equalizer),SizedBox(width: 5.0),Text("Settlement Report"),],),
                  Row(mainAxisAlignment:MainAxisAlignment.start,children: [SizedBox(width: 10.0),Icon(Icons.equalizer),SizedBox(width: 5.0),Text("Sales Report"),],),
                ],
              ),
            ],
          )
        ),
      ),
      drawerEnableOpenDragGesture: true,
      appBar: AppBar(
        backgroundColor: Colors.cyan,
        iconTheme: IconThemeData(color: Colors.white),
        title: Text(
          "Billing",
          style: TextStyle(color: Colors.white),
        ),
      ),
      body: SingleChildScrollView(
        scrollDirection: Axis.horizontal,
        child: Container(

            decoration: BoxDecoration(
                gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter,
                colors: [
                Colors.cyan,
                Colors.white,
                ]),
            ),
            child: Center(
              child: (MediaQuery.of(context).size.width <= 1020.00)?Container(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Padding(
                      padding:EdgeInsets.all(0.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                  color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                  style: TextStyle(
                                    color: Colors.cyan,
                                    fontWeight:FontWeight.bold
                                  ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                              style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                    color: Colors.white,
                                                    backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding:EdgeInsets.all(2.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding:EdgeInsets.all(2.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                                SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding:EdgeInsets.all(2.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ):Container(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Padding(
                      padding:EdgeInsets.all(0.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding:EdgeInsets.all(2.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding:EdgeInsets.all(2.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding:EdgeInsets.all(2.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding:EdgeInsets.all(2.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding:EdgeInsets.all(2.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding:EdgeInsets.all(2.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding:EdgeInsets.all(2.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding:EdgeInsets.all(2.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding:EdgeInsets.all(2.0),
                      child: Card(
                        child: SingleChildScrollView(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Row(
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  SizedBox(width:3.0 ),
                                  Icon(Icons.shopping_cart,
                                    color:Colors.cyan,
                                  ),
                                  SizedBox(width:3.0 ),
                                  Text('Shopping Cart',
                                    style: TextStyle(
                                        color: Colors.cyan,
                                        fontWeight:FontWeight.bold
                                    ),
                                  )
                                ],
                              ),
                              Text(' QTY    MRP    SP    TOTAL ',
                                style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),
                              ),
                              SizedBox(height: 400),
                              Card(
                                margin: EdgeInsets.all(0.0),
                                color: Colors.cyan[600],
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.start,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children:[
                                    Column(
                                      mainAxisAlignment: MainAxisAlignment.start,
                                      crossAxisAlignment: CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              //Text('  Products   Total  ',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold,height:3.0,decoration: TextDecoration.underline,decorationThickness:2.0),),
                                              Container(
                                                padding: EdgeInsets.only(
                                                  bottom: 4, // space between underline and text
                                                ),
                                                decoration: BoxDecoration(
                                                    border: Border(bottom: BorderSide(
                                                      color: Colors.white,  // Text colour here
                                                      width: 2.0, // Underline width
                                                    ))
                                                ),

                                                child: Text(
                                                  "  Products    Total     ",
                                                  style: TextStyle(
                                                      color: Colors.white,
                                                      backgroundColor: Colors.cyan[600]// Text colour here
                                                  ),
                                                ),
                                              )
                                            ]
                                        ),
                                        Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:35.0),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:45.0 ),
                                              Column(
                                                children: [
                                                  SizedBox(height: 10.0),
                                                  Text('0',style: TextStyle(backgroundColor:Colors.cyan[600],color:Colors.white,fontWeight:FontWeight.bold),),
                                                ],
                                              ),
                                              SizedBox(width:30.0 ),
                                            ]
                                        ),
                                      ],
                                    ),
                                    Card(
                                      elevation: 0.0,
                                      margin:EdgeInsets.all(0.0),
                                      color: Colors.cyan[900],
                                      child: Column(
                                        mainAxisAlignment: MainAxisAlignment.start,
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Row(
                                            mainAxisAlignment: MainAxisAlignment.start,
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              SizedBox(width:7.0),
                                              Icon(Icons.remove_red_eye,color: Colors.white),
                                            ],
                                          ),
                                          Text(' View',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                          Text('Detail',style: TextStyle(backgroundColor:Colors.cyan[900],color:Colors.white,fontWeight:FontWeight.bold),),
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            )),
      ),
    );
  }
}

