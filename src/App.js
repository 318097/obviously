// import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="container h-screen flex gap-2 items-stretch">
      <Sidebar />
      <main className={`flex-grow`}></main>
    </div>
  );
}

export default App;
