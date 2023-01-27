import connectMongo from "@/lib/connectMongo.js";
import User from "@/models/UserModel.js"

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addUser(req, res) {
    try {
      const {email, name, role} = req.body;

    console.log("Connecting To Mongo")
    // connect to db
    await connectMongo();

    console.log("Connected To Mongo")

    console.log("Creating Document")
    const test = await User.create({name, email})
    console.log("Created Document")


    return res.json({test})

    } catch (error) {
      console.error(error);
      return res.status(400).json({status: "Fail", message: "Duplicate record"})
    }
}