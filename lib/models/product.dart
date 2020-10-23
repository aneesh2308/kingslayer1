class Product{
  final String productId;
  final String name;
  final double price;
  final String url;
  final int type;
  final double rating;

  Product({this.productId,this.price, this.name,this.url,this.type,this.rating});

  Map<String,dynamic> toMap(){
    return {
      'productId' : productId,
      'name' : name,
      'price' : price,
      'url' : url,
      'type' : type,
      'rating' : rating,
    };
  }

  Product.fromFirestore(Map<String, dynamic> firestore)
      : productId = firestore['productId'],
        name = firestore['name'],
        price = firestore['price'],
        url = firestore['url'],
        type = firestore['type'],
        rating = firestore['rating'];
}
