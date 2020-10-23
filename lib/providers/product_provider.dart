import 'package:kingslayer3/models/approval.dart';
import 'package:kingslayer3/models/product.dart';
import 'package:kingslayer3/services/firestore_service.dart';
import 'package:flutter/material.dart';
import 'package:uuid/uuid.dart';

class ProductProvider with ChangeNotifier {
  final firestoreService = FirestoreService();
  String _name;
  double _price;
  String _productId;
  String _url;
  int _type;
  double _rating;

  var uuid = Uuid();

  //Getters
  String get name => _name;
  double get price => _price;
  String get product => _productId;
  String get url => _url;
  double get rating => _rating;
  int get type => _type;

  //Setters
  changeName(String value) {
    _name = value;
    notifyListeners();
  }

  changePrice(String value) {
    _price = double.parse(value);
    notifyListeners();
  }

  changePhoto(String value) {
    _url = value;
    notifyListeners();
  }

  changeUrl(String value) {
    _url = value;
    notifyListeners();
  }

  changeType(String value) {
    _type = int.parse(value);
    notifyListeners();
  }

  changeProductId(String value){
    _productId = value;
    notifyListeners();
  }

  changeRating(String value) {
    _price = double.parse(value);
    notifyListeners();
  }

  loadValues(Product product){
    _name=product.name;
    _price=product.price;
    _productId=product.productId;
    _url=product.url;
    _type=product.type;
    _rating = product.rating;
  }

  saveProduct() {
    print(_productId);
    if (_productId == null) {
      var newProduct = Product(name: name, price: price,productId: Approved().productId,url:url, rating: rating, type:type);
      firestoreService.saveProduct(newProduct);
    } else {
      //Update
      var updatedProduct =
      Product(name: name, price: _price, productId: _productId,url:_url, rating: _rating, type: _type);
      firestoreService.saveProduct(updatedProduct);
    }
  }

  removeProduct(String productId){
    firestoreService.removeProduct(productId);
  }

}
