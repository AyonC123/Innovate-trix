export default function Contact() {
	return (
		<>
			<div className="flex justify-center flex-col text-center items-center gap-16">
				<h1 className="text-primary font-bold text-5xl">Contact</h1>
				<div className="flex justify-evenly gap-16 flex-wrap">
					<div className="rounded-lg shadow-lg p-5 px-14 text-start">
						<h1 className="font-semibold text-secondary text-xl pb-2">
							Our Email Id
						</h1>
						<p className="text-sm text-grey">Lorem@gmail.com</p>
						<p className="text-sm text-grey">Ipsum@gmail.com</p>
					</div>
					<div className="rounded-lg shadow-lg p-5 px-14 text-start">
						<h1 className="font-semibold text-secondary text-xl pb-2">
							Contact
						</h1>
						<p className="text-sm text-grey">+91 9343234863</p>
						<p className="text-sm text-grey">+91 2838928583</p>
					</div>
					<div className="rounded-lg shadow-lg p-5 px-14 text-start basis-60">
						<h1 className="font-semibold text-secondary text-xl pb-2">
							Location
						</h1>
						<p className="text-sm text-grey">
							123 Avenue Xyz Place lorem ipsum dolor sit amet
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
