export default function Footer() {
	return (
		<>
			<footer className="flex justify-center p-10 item-center">
				&copy;{new Date().getFullYear()} -{" "}
				{(new Date().getFullYear() + 1) % 100}, All rights reserved
			</footer>
		</>
	);
}
