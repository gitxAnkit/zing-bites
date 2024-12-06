import mongoose from "mongoose";
console.log("Mongo: ", process.env.MONGO_URI);

export const connectDB = () => {

    mongoose.connect(process.env.MONGO_URI)
        .then((data) => {
            console.log(`MongoDB connected with server ${data.connection.host}`);
            console.log("GCI: ", process.env.GOOGLE_CLIENT_ID);
        })
        .catch((err) => {
            console.log(err);
        })

}

