import bg from "./Assets/1.jpg";

function App() {
	return (
		<div>
			<h1 className="text-8xl font-bold text-center my-10">
				Mari Belajas{" "}
				<span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
					Tailwind CSS
				</span>
			</h1>

			<section className="mb-10 bg-gradient-to-br from-indigo-200  via-red-400 to-yellow-300">
				<h2 className="text-3xl text-center">Spacing</h2>
				<div className="ml-8 ">Margin</div>
				<div className="py-9 ">Padding</div>
			</section>

			<section className="mb-10 bg-green-200">
				<h2 className="text-3xl text-center">Sizing</h2>
				<div className="w-32 h-32 mx-auto text-center bg-kopi">
					Kotak 1
				</div>
				<div className="max-w-xs max-h-md bg-wpu">Kotak 2</div>
			</section>

			<section className="mb-10 font-inter font-normal max-w-3xl mx-auto">
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

			<div
				className="max-w-xl h-96 bg-slate-500 mx-auto mt-[42px] mb-14 bg-fixed overflow-y-scroll"
				style={{
					backgroundImage: `url(https://source.unsplash.com/1000x600?frontend)`,
				}}
			>
				<p className="p-5 text-gray-100 text-2xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quos perspiciatis dolores dolor dignissimos. Maiores rem,
					at, placeat accusamus reprehenderit, autem nobis ipsum animi
					adipisci officia dolorum est! Non possimus dolorem ab at,
					officiis hic error deleniti voluptatum reprehenderit esse
					provident, aliquam corporis quis laudantium sunt velit quae.
					Autem fuga perferendis ea. Inventore non porro obcaecati at
					et unde illo ipsum fugiat earum minima voluptatibus enim
					dolores tempora eveniet modi pariatur eum eos, ipsa magni ex
					necessitatibus quos placeat reiciendis! Corrupti quos
					provident modi amet laborum iusto dolorum quis impedit,
					ipsum reprehenderit possimus ut, at aspernatur expedita
					ullam, fugiat laudantium repellendus cumque. Tempore
					aspernatur et porro delectus vel doloribus nemo. Debitis,
					similique ipsam. Culpa fugiat, corrupti laborum quis
					voluptatem quidem quibusdam veniam voluptate ipsum ea non
					excepturi impedit, doloremque beatae praesentium esse iure
					accusantium nam natus. Impedit soluta reprehenderit ex odit
					cupiditate recusandae delectus ullam nihil. Facilis,
					eligendi ullam quam tempora suscipit qui alias debitis, at
					reiciendis dolores corporis recusandae sit beatae
					praesentium? Quia odio harum voluptates. Dolore hic vel
					nulla nesciunt aut iste, rerum, eos dolorem tenetur quos
					perferendis adipisci labore unde eius at et? Ad, molestias.
					Deserunt accusamus, rem, natus, eius molestiae nemo fugit
					doloremque eos ut minus doloribus.
				</p>
			</div>

			<div
				className="max-w-xl h-96 bg-slate-500 mx-auto mt-[42px] mb-14 bg-scroll overflow-y-scroll"
				style={{
					backgroundImage: `url(https://source.unsplash.com/1000x600?frontend)`,
				}}
			>
				<p className="p-5 text-gray-50 text-2xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quos perspiciatis dolores dolor dignissimos. Maiores rem,
					at, placeat accusamus reprehenderit, autem nobis ipsum animi
					adipisci officia dolorum est! Non possimus dolorem ab at,
					officiis hic error deleniti voluptatum reprehenderit esse
					provident, aliquam corporis quis laudantium sunt velit quae.
					Autem fuga perferendis ea. Inventore non porro obcaecati at
					et unde illo ipsum fugiat earum minima voluptatibus enim
					dolores tempora eveniet modi pariatur eum eos, ipsa magni ex
					necessitatibus quos placeat reiciendis! Corrupti quos
					provident modi amet laborum iusto dolorum quis impedit,
					ipsum reprehenderit possimus ut, at aspernatur expedita
					ullam, fugiat laudantium repellendus cumque. Tempore
					aspernatur et porro delectus vel doloribus nemo. Debitis,
					similique ipsam. Culpa fugiat, corrupti laborum quis
					voluptatem quidem quibusdam veniam voluptate ipsum ea non
					excepturi impedit, doloremque beatae praesentium esse iure
					accusantium nam natus. Impedit soluta reprehenderit ex odit
					cupiditate recusandae delectus ullam nihil. Facilis,
					eligendi ullam quam tempora suscipit qui alias debitis, at
					reiciendis dolores corporis recusandae sit beatae
					praesentium? Quia odio harum voluptates. Dolore hic vel
					nulla nesciunt aut iste, rerum, eos dolorem tenetur quos
					perferendis adipisci labore unde eius at et? Ad, molestias.
					Deserunt accusamus, rem, natus, eius molestiae nemo fugit
					doloremque eos ut minus doloribus.
				</p>
			</div>

			<div
				className="my-32 max-w-xl mx-auto h-96 bg-slate-300 bg-contain bg-no-repeat bg-center rounded-2xl shadow-xl shadow-teal-500 border-4 border-blue-600 overflow-hidden"
				style={{
					backgroundImage: `url(./src/assets/1.jpg)`,
				}}
			>
				<div className="h-full w-full bg-cyan-300 mix-blend-multiply"></div>
			</div>
		</div>
	);
}

export default App;
