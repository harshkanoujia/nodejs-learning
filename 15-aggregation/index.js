const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/user')
    .then(() => console.log('mongoDb connected...'))
    .catch((err => console.error('Error in connecting to the database', err)))

const userSchema = new mongoose.Schema({
    username: { type: String, min: 3, max: 20, required: true },
    email: { type: String, unique: true, min: 6, required: true },
    password: { type: String, trim: true },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    Date: { type: Date, default: Date.now },
    token: { type: String }
})

const User = mongoose.model('User', userSchema)



async function getUser() {
    return await User.aggregate([
        {
            $match: {
                username: "arun"
            }
        },
        {
            $sort: {
                username: 1
            }
        },
        {
            $limit: 2
        },
        {
            $skip: 5
        },
        {
            $project: {
                _id: 0,
                username: 1,
                email: 1,
            }
        }
    ]);
}


async function run() {
    const users = await getUser();
    console.log(users);
}

// run();

/*
//DB Querires
db.datas.aggregate([{ $project: { "task": 1 } }])
db.datas.aggregate([{ $group: { _id: "$task" }, }])
db.datas.aggregate([{ $project: { "task": 1 } }, { $limit: 5 }])
db.datas.aggregate([{ $sort: { taskId: -1 } }, { $project: { "task": 1, "task": 1 } }, { $limit: 5 }])
*/