import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function Admin() {
	return (
		<>
			<div
				className="grid justify-between"
				style={{ gridTemplateColumns: "30px 1fr" }}
			>
				<Sidebar />
				<div className="flex flex-col px-10">
					<div>
						<Link
							href="admin/create"
							className="p-2 rounded text-white bg-blue-500"
						>
							Create
						</Link>
					</div>
					<div></div>
				</div>
			</div>
		</>
	);
}
