import { useState } from "react";

export async function getServerSideProps(context) {
	const hostname = context.req.headers.host;
	return {
		props: {
			hostname,
		},
	};
}

export default function Contact({ hostname }) {
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Subject, setSubject] = useState("");
	const [Message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		let res = await fetch(`http://${hostname}/api/emails`, {
			method: "POST",
			body: JSON.stringify({
				name: Name,
				email: Email,
				subject: Subject,
				message: Message,
			}),
		});
		res = await res.json();

		setName("");
		setEmail("");
		setSubject("");
		setSubject("");
	};

	return (
		<>
			<div className="flex justify-center flex-col text-center items-center gap-16">
				<h1 className="text-primary font-bold text-5xl">Contact</h1>
				<div className="flex basis-auto justify-center gap-16 flex-wrap">
					<div className="rounded-lg shadow-lg p-5 px-8 text-start w-60">
						<h1 className="font-semibold text-secondary text-xl pb-2">
							Email Id
						</h1>
						<p className="text-sm text-grey">Lorem@gmail.com</p>
						<p className="text-sm text-grey">Ipsum@gmail.com</p>
					</div>
					<div className="rounded-lg shadow-lg p-5 px-8 text-start w-60">
						<h1 className="font-semibold text-secondary text-xl pb-2">
							Phone Number
						</h1>
						<p className="text-sm text-grey">+91 9343234863</p>
						<p className="text-sm text-grey">+91 2838928583</p>
					</div>
					<div className="rounded-lg shadow-lg p-5 px-8 text-start w-60">
						<h1 className="font-semibold text-secondary text-xl pb-2">
							Location
						</h1>
						<p className="text-sm text-grey">
							123 Avenue Xyz Place lorem ipsum dolor sit amet
						</p>
					</div>
				</div>
				<h1 className="font-semibold text-secondary text-3xl">
					Have a query? Write a message
				</h1>
				<form
					onSubmit={handleSubmit}
					className="flex basis-auto flex-col justify-evenly gap-16 items-center"
				>
					<div>
						<input
							type="text"
							name="Name"
							placeholder="Name"
							value={Name}
							onChange={(e) => setName(e.target.value)}
							className="p-2 rounded-lg outline-none m-5"
							required={true}
						/>
						<input
							type="text"
							name="email"
							placeholder="Email"
							value={Email}
							onChange={(e) => setEmail(e.target.value)}
							className="p-2 rounded-lg outline-none m-5"
							required={true}
						/>
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							value={Subject}
							onChange={(e) => setSubject(e.target.value)}
							className="p-2 rounded-lg outline-none m-5"
							required={true}
						/>
					</div>
					<textarea
						name="description"
						rows="5"
						cols="87"
						placeholder="Description"
						className="p-2 rounded-lg outline-none resize-none"
						value={Message}
						onChange={(e) => setMessage(e.target.value)}
						required={true}
					/>
					<button
						type="submit"
						className="bg-primary text-white p-2 rounded-lg px-10"
					>
						Submit
					</button>
				</form>
			</div>
		</>
	);
}
