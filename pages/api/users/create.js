import connectMongo from "@/lib/connectMongo.js";
import User from "@/models/UserModel.js";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addUser(req, res) {
    const {method} = req;

    if (method === "POST") {
        try {
            const {email, name, role} = req.body;

            // connect to db
            await connectMongo();

            const test = await User.create({name, email, role});

            return res.json({test});

        } catch (error) {
            console.error(error);
            return res.status(400).json({status: "Fail", message: "Duplicate record"});
        }
    }

    return res.status(418).json({message: `${method} not yet implemented`});
}