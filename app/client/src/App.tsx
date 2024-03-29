import { useState } from 'react'
import { css } from 'cssed'
import ReactLogo from './assets/react.svg?react'
import './App.css'


export default function App() {
	const [count, setCount] = useState(0)

	return (
		<div className={`app ${styles} bg-cover bg-center bg-blue-500 w-screen h-screen`}>
			<button>Spin Up A Project</button>

			<div className="mx-auto my-16 p-8 bg-black bg-opacity-75 rounded-lg">
				<div>
					<a href="https://vitejs.dev" target="_blank">
						<img src="/vite.svg" className="logo vite" />
					</a>
					<a href="https://react.dev" target="_blank">
						<ReactLogo className="logo react" />
					</a>
				</div>

				<h1>
					<span className="vite">Vite</span> +
					<span className="react"> React</span> +
					<span> cssed</span>
				</h1>


				<div className="card">
					<button onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.jsx</code> and save to test HMR
					</p>
				</div>
				<p className="read-the-docs">
					Click on the Vite and React logos to learn more
				</p>
			</div>
		</div>
	)
}

let {styles} = css`
	:local(.styles) {

		color: white;
		background-image: url('/images/spinupOrchestra.png');

		h1 {
			font-weight: bold;
		}

		.vite {
			color: #ad4bfe;
		}

		.react {
			color: #00d9ff;
		}

		span {
			color: #daf788;
		}

		p {
			color: #19a8ff;
		}

		.logo-container {
			display: flex; /* Enable flexbox */
			//flex-direction: column; /* Stack logos and titles vertically */
			align-items: center; /* Center items horizontally */
			flex-direction: row; /* Arrange items horizontally */
			justify-content: space-between; /* Distribute space between items */
		}

		.logo {
			width: 30px; /* Adjust the width as needed */
			margin-bottom: 5px; /* Add space between logo and title */
		}

		/* Media query for smaller screens */
		@media (max-width: 768px) {
			.logo-container {
				flex-direction: row; /* Arrange logos and titles horizontally */
				justify-content: space-around; /* Distribute space evenly */
			}
		}

	}
`

