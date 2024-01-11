db.restaurants.insertMany([
    {
        "name": "Pizzeria Paula",
        "address": {
            "zipcode": "5000",
            "city": "Odense",
            "street": "Kongensgade 342"
        },
        "cuisine": "Italian",
        "pricerange": {
            "min": 100,
            "max": 400
        },
        "capacity": 55,
        "phone": "34345345",
        "email": "pizza@pizzeriapaula.dk",
        "website": "www.pizzeriapaula.dk",
        "inspection": [
            {
                "date": ISODate("2019-12-28T00:00:00Z"),
                "score": 3,
                "inspectedby": "John Smith"
            }
        ]
    },
    {
        "name": "Bar Fredo",
        "address": {
            "zipcode": "5000",
            "city": "Odense",
            "street": "Vindegade 99"
        },
        "cuisine": "Italian",
        "pricerange": {
            "min": 50,
            "max": 300
        },
        "capacity": 105,
        "phone": "22990045",
        "email": "fredo@barfredo.dk",
        "website": "www.pizzeriapaula.dk",
        "inspection": [
            {
                "date": ISODate("2019-10-26T00:00:00Z"),
                "score": 3,
                "inspectedby": "John Smith"
            }
        ]
    },
    {
        "name": "Grill & Flames",
        "address": {
            "zipcode": "9000",
            "city": "Aalborg",
            "street": "Vestergade 2"
        },
        "cuisine": "American",
        "pricerange": {
            "min": 90,
            "max": 600
        },
        "capacity": 200,
        "phone": "99110066",
        "email": "info@grillflames.dk",
        "website": "www.grillflames.dk",
        "inspection": [
            {
                "date": ISODate("2018-12-01T00:00:00Z"),
                "score": 4,
                "inspectedby": "Lars Larsen"
            },
            {
                "date": ISODate("2018-12-24T00:00:00Z"),
                "score": 4,
                "inspectedby": "Morten Gaard"
            }
        ]
    },
    {
        "name": "Bar 99",
        "address": {
            "zipcode": "6000",
            "city": "Svendborg",
            "street": "Vestergade 99"
        },
        "cuisine": "American",
        "pricerange": {
            "min": 100,
            "max": 800
        },
        "capacity": 150,
        "phone": "22661088",
        "email": "info@bar99.dk",
        "inspection": [
            {
                "date": ISODate("2018-12-01T00:00:00Z"),
                "score": 2,
                "inspectedby": "Lars Larsen"
            },
            {
                "date": ISODate("2019-11-01T00:00:00Z"),
                "score": 4,
                "inspectedby": "Lars Larsen"
            }
        ]
    },
    {
        "name": "Spis",
        "address": {
            "zipcode": "6000",
            "city": "Svendborg",
            "street": "Vestergade 99"
        },
        "cuisine": "Danish",
        "pricerange": {
            "min": 100,
            "max": 800
        },
        "capacity": 150,
        "phone": "22661088",
        "email": "info@spis.dk",
        "website": "www.spis.dk",
        "inspection": [
            {
                "date": ISODate("2018-05-11T00:00:00Z"),
                "score": 5,
                "inspectedby": "Morten Gaard"
            },
            {
                "date": ISODate("2019-11-01T00:00:00Z"),
                "score": 4,
                "inspectedby": "Lars Larsen"
            }
        ]
    },
    {
        "name": "Nybo Kro",
        "address": {
            "zipcode": "3000",
            "city": "Nyborg",
            "street": "Slotsgade 10"
        },
        "cuisine": "Danish",
        "pricerange": {
            "min": 200,
            "max": 1000
        },
        "capacity": 150,
        "phone": "99000113",
        "email": "info@nybokro.dk",
        "website": "www.nybokro.dk",
        "inspection": [
            {
                "date": ISODate("2018-03-19T00:00:00Z"),
                "score": 4,
                "inspectedby": "Morten Olsen"
            },
            {
                "date": ISODate("2019-11-21T00:00:00Z"),
                "score": 2,
                "inspectedby": "Morten Larsen"
            }
        ]
    },
    {
        "name": "Munkebo Kro",
        "address": {
            "zipcode": "3000",
            "city": "Nyborg",
            "street": "Slotsgade 10"
        },
        "cuisine": "Danish",
        "pricerange": {
            "min": 200,
            "max": 870
        },
        "capacity": 45,
        "phone": "10104989",
        "email": "info@munkebokro.dk",
        "website": "www.munkebokro.dk",
        "inspection": [
            {
                "date": ISODate("2019-11-21T00:00:00Z"),
                "score": 3,
                "inspectedby": "John Smith"
            }
        ]
    },
    {
        "name": "Italia",
        "address": {
            "zipcode": "1500",
            "city": "Vejle",
            "street": "Vindegade 105"
        },
        "cuisine": "Italian",
        "pricerange": {
            "min": 70,
            "max": 470
        },
        "capacity": 155,
        "phone": "982683648",
        "email": "info@restaurant-italia.dk",
        "website": "www.restaurant-italia.dk",
        "inspection": [
            {
                "date": ISODate("2018-10-18T00:00:00Z"),
                "score": 3,
                "inspectedby": "Adam Ansger"
            },
            {
                "date": ISODate("2018-05-18T00:00:00Z"),
                "score": 5,
                "inspectedby": "Adam Ansger"
            }
        ]
    }
])