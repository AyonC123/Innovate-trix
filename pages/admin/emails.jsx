import AdminEmailCard from "@/components/AdminEmailCard";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export async function getServerSideProps(context) {
	const hostname = context.req.headers.host;
	let res = await fetch(`http://${hostname}/api/emails`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	let emails = await res.json();
	return {
		props: { emails },
	};
}

export default function Emails({ emails }) {
	const [Search, setSearch] = useState("");
	const data = emails.filter((item) => {
		return item.name.toLowerCase().includes(Search.toLowerCase()) == true;
	});

	return (
		<>
			<div
				className="grid justify-between"
				style={{ gridTemplateColumns: "30px 1fr" }}
			>
				<Sidebar />
				<div className="flex flex-col px-10 gap-5">
					<div className="flex justify-between">
						<form onSubmit={(e) => e.preventDefault()}>
							<input
								type="text"
								name="search"
								value={Search}
								onChange={(e) => setSearch(e.target.value)}
								className="rounded-lg p-2 outline-none"
								placeholder="Search"
							/>
						</form>
					</div>
					<div className="flex justify-between text-secondary font-bold">
						<h1>Name</h1>
						<h1>Email</h1>
						<h1>Subject</h1>
					</div>
					<AdminEmailCard data={data} />
				</div>
			</div>
		</>
	);
}
