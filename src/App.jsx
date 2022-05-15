function App() {
	return (
		<div>
			<h1 className="text-8xl font-bold text-center my-10">
				Mari Belajas Tailwind CSS
			</h1>

			<section className="mb-10 bg-indigo-200">
				<h2 className="text-3xl text-center">Spacing</h2>
				<div className="ml-8 bg-red-200">Margin</div>
				<div className="py-9 bg-red-200">Padding</div>
			</section>

			<section className="mb-10 bg-green-200">
				<h2 className="text-3xl text-center">Sizing</h2>
				<div className="w-32 h-32 mx-auto text-center bg-yellow-200">
					Kotak 1
				</div>
				<div className="max-w-xs max-h-md bg-yellow-200">Kotak 2</div>
			</section>

			<section className="mb-96 font-inter font-normal max-w-3xl mx-auto">
				<h2 className="mb-4 text-4xl font-bold">
					Belajar Mengenai Typography pada TailwindCSS
				</h2>
				<div className="mb-4 text-lg text-gray-500">
					By{" "}
					<a
						href=""
						className="text-gray-700 font-semibold underline"
					>
						Azie Melza Pratama
					</a>
					, 8 Maret 2022
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
