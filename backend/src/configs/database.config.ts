import {connect, ConnectOptions} from 'mongoose';

// let MONGO_URI = 'mongodb+srv://kalyan:Kalyan123*@cluster0.3vdqi4q.mongodb.net/';

// export const dbConnect = () => {
//     connect(process.env.MONGO_URI! as string, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     } as ConnectOptions).then(
//         () => console.log("connect successfully"),
//         (error) => console.log(error)
//     )
// }

const MONGO_URI = 'mongodb+srv://kalyan:Kalyan123*@cluster0.3vdqi4q.mongodb.net/foodmine?retryWrites=true&w=majority'

export const dbConnect = () => {
    connect(MONGO_URI as string).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}