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
				<div className="logo-container">
					<a href="https://turbo.build/repo" target="_blank" >
						<img src="/turborepo.svg" className="logo turbo" />
					</a>
					<a href="https://vitejs.dev" target="_blank" >
						<img src="/vite.svg" className="logo vite" />
					</a>
					<a href="https://react.dev" target="_blank">
						<ReactLogo className="logo react" />
					</a>
				</div>

				<h1>
					<span className="turbo">TURBOREPO</span> +
					<span className="vite"> Vite</span> +
					<span className="react"> React</span>
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
			font-size: 3em;
		}

		h1 .turbo {
			color: #101010;
			font-size: 0.6em;
			text-shadow: 0 0 30px rgba(255, 255, 255, 1);
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
			display: flex;
			align-items: center;
			flex-direction: row;
			justify-content: center;
		}

		.logo {
			height: 150px;
			width: auto;
			margin-bottom: 5px;
			padding: 1.5em 2em;
			will-change: filter;
			transition: filter 300ms;
		}

		.logo:hover {
			filter: drop-shadow(0 0 2em #646cffaa);
		}

		.logo.turbo {
			padding-left: 100px;
			filter: drop-shadow(0 0 50px rgba(255, 255, 255, 1));
		}

		.logo.turbo:hover {
			filter: drop-shadow(0 0 30px rgba(255, 255, 255, 1));
		}

		.logo.react:hover {
			filter: drop-shadow(0 0 2em #61dafbaa);
		}

		@keyframes logo-spin {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		@media (prefers-reduced-motion: no-preference) {
			a:nth-of-type(3) .logo {
				animation: logo-spin infinite 20s linear;
			}
		}

		.card {
			padding: 2em;
		}

		.read-the-docs {
			color: #888;
		}
	}
`

