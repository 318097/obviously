import { BellIcon } from "@heroicons/react/24/outline";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Settings from "./components/Settings";
import AddDatabase from "./components/AddDatabase";
import bg1 from "./assets/images/group.svg";
import bg2 from "./assets/images/group2.svg";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="containerx h-screen flex gap-2 items-stretch">
      <Sidebar pathname={pathname} />
      <main
        className={`flex-grow overflow-auto bg-right-top bg-no-repeat bg-[length:900px]`}
        style={{
          backgroundImage: `url(${pathname === "/add-dataset" ? bg2 : bg1})`,
        }}
      >
        <header className="p-6 flex justify-end items-center gap-4 sticky top-0">
          <BellIcon className="size-5" />
          <div className={"text-sm font-semibold text-gray-800"}>Upgrade</div>
          <div className={"text-sm font-semibold text-gray-800"}>Sign out</div>
        </header>
        <Switch>
          <Route path="/settings" component={Settings} />
          <Route path="/add-dataset" component={AddDatabase} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
