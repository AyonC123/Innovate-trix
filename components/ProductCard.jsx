import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ data }) {
	return (
		<>
			<div className="flex flex-wrap justify-evenly gap-5">
				{data.map((item) => (
					<div
						key={item._id}
						className="flex flex-col p-5 py-6 shadow-lg rounded-lg"
					>
						<Link href={`/shop/${item._id}`}>
							<Image
								src={item.image}
								alt="product image"
								height={257}
								width={229}
								className="rounded-lg pb-2"
							/>
						</Link>
						<div className="flex justify-between">
							<h1 className="text-xs">{item.title}</h1>
							<h1 className="text-xs">₹ {item.price}</h1>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
