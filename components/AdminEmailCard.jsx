import Link from "next/link";
import React, { useState } from "react";

export default function AdminEmailCard({ data }) {
	return (
		<>
			{data.map((item) => (
				<div key={item._id} className="text-secondary text-xs sm:text-base">
					<div className="flex flex-col sm:flex-row text-center items-center justify-between border-t-2 border-secondary py-2">
						<h1>Name: {item.name}</h1>
						<h1>Email: {item.email}</h1>
						<h1>Subject: {item.subject}</h1>
						<h1 className="sm:hidden">Message: {item.message}</h1>
					</div>
					<h1 className="hidden sm:block font-bold">Description</h1>
					<p className="hidden sm:block">{item.message}</p>
				</div>
			))}
		</>
	);
}
