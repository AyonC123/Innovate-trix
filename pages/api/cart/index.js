import clientPromise from "@/lib/MongoConnect";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("innovate@trix");
	switch (req.method) {
		case "POST":
			let bodyObject = JSON.parse(req.body);
			let user = await db
				.collection("users")
				.findOne({ username: bodyObject["username"] });

			if (user === null) {
				user = await db.collection("users").insertOne({
					username: bodyObject["username"],
					cart: [bodyObject["item"]],
				});
			} else {
				user = await db.collection("users").updateOne(
					{ username: bodyObject["username"] },
					{
						$push: {
							cart: bodyObject["item"],
						},
					}
				);
			}
			res.json(user);
			break;
	}
}
