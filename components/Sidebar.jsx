import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
	return (
		<div className="flex flex-col gap-2 border-r-2 border-secondary">
			<Link
				href="/admin"
				className="hover:border-r-2 border-secondary text-secondary"
			>
				<FontAwesomeIcon icon={faHouse} />
			</Link>
			<Link
				href="/admin/emails"
				className="hover:border-r-2 border-secondary text-secondary"
			>
				<FontAwesomeIcon icon={faNewspaper} />
			</Link>
		</div>
	);
}
