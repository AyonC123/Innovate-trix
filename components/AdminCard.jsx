import Link from "next/link";
import React from "react";

export default function AdminCard({ data }) {
	return (
		<>
			{data.map((item) => (
				<div
					key={item._id}
					className="flex text-center items-center justify-between border-t-2 border-secondary text-secondary py-1"
				>
					<Link href={`/admin/${item._id}`}>{item.title}</Link>
					<div>$ {item.price}</div>
				</div>
			))}
		</>
	);
}
