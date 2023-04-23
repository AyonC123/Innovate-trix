import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function AdminEmailCard({ data }) {
	const [Open, setOpen] = useState(false);
	return (
		<>
			{data.map((item) => (
				<div key={item._id} className="text-secondary">
					<div className="flex text-center items-center justify-between border-t-2 border-tertiary py-2">
						<h1>{item.name}</h1>
						<h1>{item.email}</h1>
						<h1>{item.subject}</h1>
					</div>
					<h1 className="font-bold">Description</h1>
					<p>{item.message}</p>
				</div>
			))}
		</>
	);
}
