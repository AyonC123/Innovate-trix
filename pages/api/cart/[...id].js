import clientPromise from "@/lib/MongoConnect";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
	const { id } = req.query;
	const client = await clientPromise;
	const db = client.db("innovate@trix");
	switch (req.method) {
		case "GET":
			const user = await db.collection("users").findOne({ username: id[0] });
			if (user === null) {
				res.json([]);
			}
			const cart = user["cart"];
			const products = [];
			for (let i = 0; i < cart.length; i++) {
				const product = await db
					.collection("products")
					.findOne({ _id: new ObjectId(cart[i]) });
				products.push(product);
			}
			res.json(products);
			break;
		case "DELETE":
			const getUser = await db.collection("users").findOne({ username: id[0] });

			const items = getUser["cart"];
			const newItems = items.filter((item) => {
				return item !== id[1];
			});

			const remove = await db.collection("users").updateOne(
				{ username: id[0] },
				{
					$set: {
						cart: newItems,
					},
				}
			);

			res.json(remove);
			break;
	}
}
