import Link from "next/link";
import React from "react";

export default function AdminCard({ data }) {
	return (
		<>
			{data.map((item) => (
				<div
					key={item.id}
					className="flex text-center items-center justify-between border-t-2 border-gray-500 py-1"
				>
					<Link href={`/admin/${item._id}`}>{item.title}</Link>
					<div>$ {item.price}</div>
				</div>
			))}
		</>
	);
}
