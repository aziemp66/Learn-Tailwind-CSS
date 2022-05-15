function App() {
	return (
		<div>
			<h1 className="text-4xl text-center">Belajar Tailwind</h1>

			<section className="mb-10">
				<h2>Spacing</h2>
				<div className="ml-8 ">Margin</div>
				<div className="py-9">Padding</div>
			</section>

			<section className="mb-10">
				<h2>Sizing</h2>
				<div className="w-32 h-32 mx-auto text-center ">Kotak 1</div>
				<div className="max-w-xs min-h-screen">Kotak 2</div>
			</section>
		</div>
	);
}

export default App;
