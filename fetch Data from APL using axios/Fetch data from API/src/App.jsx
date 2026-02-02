import { useState, useEffect } from "react"
import axios from "axios"

function App() {
  const [fact, setFact] = useState("")
  const [loading, setLoading] = useState(false)

  const getFact = async () => {
    setLoading(true)
    const res = await axios.get("https://catfact.ninja/fact")
    setFact(res.data.fact)
    setLoading(false)
  }

  useEffect(() => {
    getFact()
  }, [])

  return (
    <div className="min-h-screen w-100 flex flex-col items-center justify-center bg-gray-400 p-4">
      <h1 className="text-3xl font-bold mb-6">🐱 Cat Fact</h1>

      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg mb-6">
        <p className="text-gray-700 text-base leading-relaxed">
          {loading ? "Loading..." : fact}
        </p>
      </div>

      <button
        onClick={getFact}
        disabled={loading}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium 
                   hover:bg-indigo-700 transition disabled:opacity-50"
      >
        Get New Fact
      </button>
    </div>
  )
}

export default App
