import clientPromise from "@/lib/MongoConnect";

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("innovate@trix");
	switch (req.method) {
		case "POST":
			let bodyObject = JSON.parse(req.body);
			let product = await db.collection("emails").insertOne(bodyObject);
			res.json(product);
			break;
		case "GET":
			const allProducts = await db.collection("emails").find({}).toArray();
			res.json(allProducts);
			break;
	}
}
