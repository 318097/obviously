import { BellIcon } from "@heroicons/react/24/outline";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Settings from "./components/Settings";
import AddDatabase from "./components/AddDatabase";
import bg from "./assets/images/group2.svg";

function App() {
  return (
    <div className="containerx h-screen flex gap-2 items-stretch">
      <Sidebar />
      <main
        className={`flex-grow overflow-auto bg-right-top bg-no-repeat bg-[length:900px]`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <header className="p-6 flex justify-end items-center gap-4 sticky top-0">
          <BellIcon className="size-5" />
          <div className={"text-sm"}>Upgrade</div>
          <div className={"text-sm"}>Sign out</div>
        </header>
        {/* <Settings /> */}
        <AddDatabase />
      </main>
    </div>
  );
}

export default App;
