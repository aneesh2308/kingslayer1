import 'package:application2/screens/GNR.dart';
import 'package:application2/screens/billing.dart';
import 'package:application2/screens/billing1.dart';
import 'package:application2/screens/home.dart';
import 'package:application2/screens/submission.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

void main() {
  debugDefaultTargetPlatformOverride = TargetPlatform.fuchsia;
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    initialRoute: 'billing',
    routes: {
      '/': (ctx) => MyApp(),
      'GRN': (ctx) => GRN(),
      'save': (ctx) => Save(),
      'billing':(ctx) => Billing1(),
    },
  ),
  );
}
