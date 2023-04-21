import clientPromise from "@/lib/MongoConnect";

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("innovate@trix");
	switch (req.method) {
		case "POST":
			let bodyObject = JSON.parse(req.body);
			console.log(req.body);
			let product = await db.collection("products").insertOne(bodyObject);
			res.json(product);
			break;
		case "GET":
			const allProducts = await db.collection("products").find({}).toArray();
			res.json(allProducts);
	}
}
