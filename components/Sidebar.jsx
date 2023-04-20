import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
	return (
		<div className="flex flex-col border-r-2 border-black">
			<Link href="/admin" className="hover:border-r-2 border-black">
				<FontAwesomeIcon icon={faHouse} />
			</Link>
			<Link href="/admin/emails" className="hover:border-r-2 border-black">
				<FontAwesomeIcon icon={faNewspaper} />
			</Link>
		</div>
	);
}
