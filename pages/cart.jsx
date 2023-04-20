import React from "react";
import { useSession } from "next-auth/react";

export default function Cart() {
	const { data: session } = useSession();
	return <div>Cart</div>;
}
