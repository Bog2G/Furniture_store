import "./App.css";
import Header from "./components/Layout/Header";
import Furniture from "./components/Furniture/Furniture";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Furniture />
      </main>
    </>
  );
}

export default App;
