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
				<div className="max-w-xs max-h-md">Kotak 2</div>
			</section>

			<section className="mb-96 font-inter font-normal max-w-3xl mx-auto">
				<h2 className="mb-4 text-4xl font-bold">
					Belajar Mengenai Typography pada TailwindCSS
				</h2>
				<div className="mb-4 text-lg">
					By Azie Melza Pratama, 8 Maret 2022
				</div>
				<p className="mb-4 text-2xl">
					Lorem ipsum dolor, sit amet{" "}
					<a href="#" className="underline text-blue-600">
						consectetur
					</a>{" "}
					adipisicing elit. Deserunt dolorum neque exercitationem
					alias reprehenderit tempore voluptas blanditiis illo culpa
					minima iste veniam officia velit porro, doloremque optio
					expedita! Asperiores porro ad nihil obcaecati minus
					accusantium, assumenda, eaque esse accusamus sint quae,
					harum a rerum odit necessitatibus quia commodi consequatur
					tempore?
				</p>
				<blockquote className="mb-4 italic font-thin text-xl">
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Explicabo ipsum omnis, voluptatem error nam, excepturi iure
					aut nihil amet, cumque asperiores ea reprehenderit rerum
					neque. Labore deleniti quam iste enim!"
				</blockquote>
				<p className="mb-4 text-2xl">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Sint maxime soluta deleniti in nostrum quos officiis quam ea
					sed, dolore deserunt facilis facere laborum. Neque,
					dignissimos ad aspernatur dolor debitis distinctio illo
					magni cupiditate molestias molestiae accusantium. Odit,
					consequatur velit.{" "}
				</p>
			</section>
		</div>
	);
}

export default App;
