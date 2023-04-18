import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
	let [Name, ChangeName] = useState("");
	let [Pass, ChangePass] = useState("");
	return (
		<>
			<div className="p-4 p-sm-5 text-center flex flex-col gap-5 items-center">
				<h5 className="mb-5 fw-light fs-5">Sign In</h5>
				<input type="text" name="" id="" className="p-2 rounded-md w-80" />
				<input type="text" name="" id="" className="p-2 rounded-md w-80" />
				<button>Login</button>
			</div>
		</>
	);
}
