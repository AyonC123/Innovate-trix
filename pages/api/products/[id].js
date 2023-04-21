import clientPromise from "@/lib/MongoConnect";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
	const { id } = req.query;
	const client = await clientPromise;
	const db = client.db("innovate@trix");
	switch (req.method) {
		case "GET":
			const product = await db
				.collection("products")
				.findOne({ _id: new ObjectId(id) });
			res.json(product);
			break;
		case "POST":
			let bodyObject = JSON.parse(req.body);
			console.log(req.body);
			let update = await db
				.collection("products")
				.updateOne({ _id: new ObjectId(id) }, { $set: bodyObject }, {});
			res.json(update);
			break;
	}
}
