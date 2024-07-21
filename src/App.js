// import logo from "./logo.svg";
import { BellIcon } from "@heroicons/react/24/outline";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="containerx h-screen flex gap-2 items-stretch">
      <Sidebar />
      <main className={`flex-grow overflow-auto`}>
        <header className="p-4 flex justify-end items-center gap-4 sticky top-0">
          <BellIcon className="size-4" />
          <div className={""}>Upgrade</div>
          <div className={""}>Sign out</div>
        </header>
        <Settings />
      </main>
    </div>
  );
}

export default App;
