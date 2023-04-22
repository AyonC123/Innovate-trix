import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data }) {
	return (
		<>
			<div className="flex flex-wrap justify-evenly">
				{data.map((item) => (
					<div key={item._id} className="flex flex-col">
						<Image
							src={item.image}
							alt="product image"
							height={297}
							width={269}
							className="rounded-lg pb-2"
						/>
						<div className="flex justify-between">
							<Link href={`/shop/${item._id}`}>
								<h1 className="text-xs">{item.title}</h1>
							</Link>
							<h1 className="text-xs">₹ {item.price}</h1>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
