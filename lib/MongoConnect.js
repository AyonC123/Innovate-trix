import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const opt = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
};

const client = new MongoClient(uri, opt);
const clientPromise = client.connect();

export default clientPromise;
