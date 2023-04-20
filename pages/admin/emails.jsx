import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Emails() {
	return (
		<>
			<div
				className="grid justify-between"
				style={{ gridTemplateColumns: "30px 1fr" }}
			>
				<Sidebar />
				<div className="flex flex-col px-10">Email</div>
			</div>
		</>
	);
}
