import connectMongo from "@/lib/connectMongo.js";
import User from "@/models/UserModel.js";

export default async function getRole(req, res) {
    try {
      const {email} = req.body;

    console.log("Connecting To Mongo")
    // connect to db
    await connectMongo();

    console.log("Connected To Mongo")

    console.log("Creating Document")
    const user = await User.create({name, email})
    console.log("Created Document")


    return res.json({test: user})

    } catch (error) {
      console.error(error);
      return res.status(400).json({status: "Fail", message: "Duplicate record"})
    }
}