db.client.find()

db.client.insertMany([{"Pers_ID": "5", "Surname": "Deleteme", "First_Name": "Urs", "City": "Zurich", "Cars":[{"Model": "Smart", "Year": "1999", "Value": "2000"}]},
{"Pers_ID": "6", "Surname": "Deleteme", "First_Name": "Gaston", "City": "Paris", "Cars":[{"Model": "Renault", "Year": "1998", "Value": "2000"}, {"Model":"Renault", "Year": "2001", "Value": "7000"}]},
{"Pers_ID": "7", "Surname": "Deletem", "First_Name": "Fabrizio", "City": "Rome", "Cars":[{"Model": "Ferrari", "Year": "2005", "Value": "150000"}]}])

db.client.updateOne()

classic_cars> db.client.updateOne({"Pers_ID": "1"}, {$set:{"Model": "Skoda", "Year": "2013", "Value": "50000"}})

db.client.updateMany({"Surname": "^\b"}, {$set:{"City": "Odense"}})

db.client.deleteMany({"Surname": "Deletem"})

db.orders.aggregate( [
    // Stage 1: Filter pizza order documents by pizza size
    {
       $match: { size: "medium" }
    },
    // Stage 2: Group remaining documents by pizza name and calculate total quantity
    {
       $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
    }
 ] )