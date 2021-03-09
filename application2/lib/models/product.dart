class Product{
  final String productId;
  final String productName;
  final String category;
  final double purchasePrise;
  final double margin;
  final double MRP;
  final double SP;
  final int quantity;
  final double discount;
  final double HSN;
  final double GST;
  final double CESS;
  final int alertQuantity;

  Product({this.productId,this.productName,this.category,this.purchasePrise,this.margin,this.MRP,this.SP,this.quantity,this.discount,this.HSN,this.GST,this.CESS,this.alertQuantity});

  Map<String,dynamic> toMap(){
    return {
      'productId' : productId,
      'productName' : productName,
      'category' : category,
      'purchasePrise' : purchasePrise,
      'margin' : margin,
      'MRP' : MRP,
      'SP' : SP,
      'quantity' : quantity,
      'discount' : discount,
      'HSN' : HSN,
      'GST' : GST,
      'CESS' : CESS,
      'alertQuantity' : alertQuantity,
    };
  }

  Product.fromFirestore(Map<String, dynamic> firestore)
      : productId = firestore['productId'],
        productName = firestore['productName'],
        category = firestore['category'],
        purchasePrise = firestore['purchasePrise'],
        margin = firestore['margin'],
        MRP = firestore['MRP'],
        SP = firestore['SP'],
        quantity = firestore['quantity'],
        discount = firestore['discount'],
        HSN = firestore['HSN'],
        GST = firestore['GST'],
        CESS = firestore['CESS'],
        alertQuantity = firestore['alertQuantity'];
}
