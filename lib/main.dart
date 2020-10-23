import 'package:kingslayer3/providers/approval_provider.dart';
import 'package:kingslayer3/providers/product_provider.dart';
import 'package:kingslayer3/providers/time_provider.dart';
import 'package:kingslayer3/screen/login.dart';
import 'package:kingslayer3/screen/loginpage.dart';
import 'package:kingslayer3/screen/signuppage.dart';
import 'package:kingslayer3/screens/Approval.dart';
import 'package:kingslayer3/screens/edit_Approval.dart';
import 'package:kingslayer3/screens/edit_product.dart';
import 'package:kingslayer3/screens/edit_time.dart';
import 'package:kingslayer3/screens/products.dart';
import 'package:kingslayer3/screens/times.dart';
import 'package:kingslayer3/service/authservice.dart';
import 'package:kingslayer3/services/firestore_service.dart';
import 'package:flutter/material.dart';
import 'package:kingslayer3/services/firestore_service1.dart';
import 'package:kingslayer3/services/firestore_service3.dart';
import 'package:provider/provider.dart';
import 'package:firebase_core/firebase_core.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    final firestoreService = FirestoreService();
    final firestoreService1 = FirestoreService1();
    final firestoreService3 = FirestoreService3();
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (context) => ProductProvider()),
        StreamProvider(create: (context)=> firestoreService.getProducts()),
        ChangeNotifierProvider(create: (context) => TimeProvider()),
        StreamProvider(create: (context)=> firestoreService1.getTimes()),
        ChangeNotifierProvider(create: (context) => ApprovalProvider()),
        StreamProvider(create: (context)=> firestoreService3.getApprovals()),
      ],
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'NowCare4',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: LoginPage(),
        routes:<String,WidgetBuilder>{
          'landingpage':(BuildContext context)=> MyApp(),
          '/signup':(BuildContext context)=>SignupPage(),
          '/homepage':(context)=>Products(),
          '/login':(context)=>Login(),
          '/auth':(context)=>AuthService().handleAuth(),
          'EditApproval':(context)=>EditApproval(),
          'Approval':(context)=>Approvals(),
          'Edit':(context)=>EditProduct(),
          'EditTime':(context)=>EditTime(),
          'Times':(context)=>Times(),
        },
      ),
    );
  }
}
