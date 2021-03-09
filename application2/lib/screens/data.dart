import 'dart:math';

class BackendService {
  static Future<List> getSuggestions(String query) async {
    await Future.delayed(Duration(seconds: 1));

    return List.generate(3, (index) {
      return {'name': query + index.toString(), 'price': Random().nextInt(100)};
    });
  }
}

class BackendService1 {
  static Future<List> getSuggestions(String query) async {
    await Future.delayed(Duration(seconds: 1));

    return List.generate(3, (index) {
      return {'name': query + index.toString(), 'price': Random().nextInt(100)};
    });
  }
}

class CitiesService {
  static final List<String> cities = [
    'S K Enterprises',
    'Head and Shoulder',
    'Lays',
    'Kurkure',
    'Coco Cola',
    'Sprite',
    'Mountain Dew',
    'Fanta',
    'Pepsi',
    'Bingo',
    'Haldiram',
    'Cadbury',
    'Nestle',
  ];

  static List<String> getSuggestions(String query) {
    List<String> matches = List();
    matches.addAll(cities);

    matches.retainWhere((s) => s.toLowerCase().contains(query.toLowerCase()));
    return matches;
  }
}

class PhoneServices {
  static final List<String> phones = [
    '1234567890',
    '0123456789',
    '1023456789',
    '1203456789',
    '1230456789',
    '1234056789',
    '1234506789',
    '1234560789',
    '1234567089',
    '1234567809',
    '1234567890',
    '0213456789',
    '0132456789',
  ];

  static List<String> getSuggestions(String query) {
    List<String> matches = List();
    matches.addAll(phones);

    matches.retainWhere((s) => s.toLowerCase().contains(query.toLowerCase()));
    return matches;
  }
}

class NameServices {
  static final List<String> phones = [
    'Ram',
    'Sham',
    'Vinod',
    'Binod',
    'Ryan',
    'Myan',
    'Train',
    'Brain',
    'Grain',
    'Brian',
    'Om',
    'Tester',
    'Zester',
  ];

  static List<String> getSuggestions(String query) {
    List<String> matches = List();
    matches.addAll(phones);

    matches.retainWhere((s) => s.toLowerCase().contains(query.toLowerCase()));
    return matches;
  }
}