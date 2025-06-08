MongoDB queries using Mongoose: in Node.js with example of MongoDB shell

1. Find Documents

Mongoose:
Model.find({ field: value }).exec();

MongoDB Shell:
db.collection.find({ field: value });


2. Find One Document

Mongoose:
Model.findOne({ field: value }).exec();

MongoDB Shell:
db.collection.findOne({ field: value });


3. Find by ID
Mongoose:
Model.findById(id).exec();

MongoDB Shell:
db.collection.find({ _id: ObjectId("id") });


4. Insert Documents
Mongoose:
Model.create({ field1: value1, field2: value2 });

MongoDB Shell:
db.collection.insertOne({ field1: value1, field2: value2 });


5. Update Documents

~Update One Document
Mongoose:
Model.updateOne({ field: value }, { $set: { fieldToUpdate: newValue } }).exec();

MongoDB Shell:
db.collection.updateOne({ field: value }, { $set: { fieldToUpdate: newValue } });

~Update Multiple Documents
Mongoose:
Model.updateMany({ field: value }, { $set: { fieldToUpdate: newValue } }).exec();

MongoDB Shell:
db.collection.updateMany({ field: value }, { $set: { fieldToUpdate: newValue } });


6. Replace Document

Mongoose:
Model.replaceOne({ field: value }, { field1: newValue1, field2: newValue2 }).exec();

MongoDB Shell:
db.collection.replaceOne({ field: value }, { field1: newValue1, field2: newValue2 });


7. Delete Documents

~Delete One
Mongoose:
Model.deleteOne({ field: value }).exec();

MongoDB Shell:
db.collection.deleteOne({ field: value });

~Delete Many
Mongoose
Model.deleteMany({ field: value }).exec();

MongoDB Shell:
db.collection.deleteMany({ field: value });


8. Aggregation

Mongoose:
Model.aggregate([{ $match: { field: value } }, { $group: { _id: "$groupField", total: { $sum: "$amount" } } }]).exec();

MongoDB Shell:
db.collection.aggregate([{ $match: { field: value } }, { $group: { _id: "$groupField", total: { $sum: "$amount" } } }]);


9. Counting Documents

Mongoose:
Model.countDocuments({ field: value }).exec();

MongoDB Shell:
db.collection.countDocuments({ field: value });


10. Sorting and Limiting

Mongoose:
Model.find({}).sort({ field: 1 }).limit(10).exec();

MongoDB Shell:
db.collection.find({}).sort({ field: 1 }).limit(10);


11. Pagination
Mongoose:
Model.find({}).skip(10).limit(5).exec();

MongoDB Shell:
db.collection.find({}).skip(10).limit(5);


12. Populate (Reference Another Collection)
This is specific to Mongoose:.

Mongoose:
Model.find({}).populate("fieldToPopulate").exec();