import connectMongo from "@/lib/connectMongo.js";
import User from "@/models/UserModel.js";

export default async function getRole(req, res) {
    try {
        const {email} = req.body;

        // connect to db
        await connectMongo();
        const user = await User.findOne({email: email});

        if (!user) return res.status(403).json({status: "fail", message: "Nice Try..."});

        if (user.role === "admin") {
            return res.status(200).json({user});
        }

        if (user.role === "user") {
            return res.status(200).json({user: user.name})
        }

    } catch (error) {
        console.error(error);
        return res.status(400).json({status: "Fail", message: "Duplicate record"});
    }
}