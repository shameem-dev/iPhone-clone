import Hero from "./Components/Hero"
import Highlights from "./Components/Highlights"
import NavBar from "./Components/NavBar"

const App = () => {
  return (
    <main className="bg-black">
      <NavBar/>
      <Hero/>
      <Highlights/>
    </main>
  )
}

export default App
