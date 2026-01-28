import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-screen-xl mx-auto p-8 text-center">
      <div className="flex justify-center gap-0">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl leading-tight">Vite + React</h1>
      <div className="p-8">
        <button
          onClick={() => setCount(count => count + 1)}
          className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium bg-[#1a1a1a] cursor-pointer transition-colors duration-250 hover:border-[#646cff] focus:outline-none focus-visible:outline focus-visible:outline-4 focus-visible:outline-[-webkit-focus-ring-color] dark:bg-[#1a1a1a] light:bg-[#f9f9f9]"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
