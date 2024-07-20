import Logo from "./assets/images/logo.png";
import Profile from "./assets/images/profile.png";

const Sidebar = () => {
  const MENU_ITEMS = [
    {
      label: "Explore",
      value: "/explore",
      icon: "explore",
    },
    {
      label: "Definitions",
      value: "/definition",
      icon: "definition",
    },
    {
      label: "Settings",
      value: "/settings",
      icon: "settings",
    },
    {
      label: "Help",
      value: "/help",
      icon: "help",
    },
  ];
  const PREDICTIONS = [
    {
      label: "MoM user churn for Q3",
    },
    {
      label: "Merch sales for Jan",
      value: "/definition",
    },
    {
      label: "State-wise donor prediction",
      value: "/settings",
    },
  ];
  const DATASETS = [
    {
      label: "Twitch data",
    },
    {
      label: "SLOBS user data",
      value: "/definition",
    },
    {
      label: "External CSV file",
      value: "/settings",
    },
  ];
  return (
    <div className={`bg-gray-200 p-4`}>
      <Header />
      <UserCard name="Monica Greenleaf" company="Microsoft Inc." />
      <div className={``}>
        {MENU_ITEMS.map((item) => {
          return <div className="p-1">{item.label}</div>;
        })}
      </div>
      <hr className="bg-slate-300 w-100 h-0.5 my-2" />
      <div className={``}>
        <Title label="My Predictions" />
        {PREDICTIONS.map((item) => {
          return <div className="mb-2">{item.label}</div>;
        })}
        <div className={"font-bold text-gray-600 text-sm"}>Show all</div>
      </div>
      <hr className="bg-slate-300 w-100 h-0.5 my-2" />
      <div className={``}>
        <Title label="My Datasets" />
        {DATASETS.map((item) => {
          return <div className="mb-2">{item.label}</div>;
        })}
        <div className={"font-bold text-gray-600 text-sm"}>Show all</div>
      </div>
    </div>
  );
};

const Title = ({ label }) => {
  return (
    <div className={`flex justify-between mb-2`}>
      <div className={``}>{label}</div>
      <div className={``}>Plus</div>
    </div>
  );
};

const Header = () => {
  return (
    <div className={`flex justify-between`}>
      <img src={Logo} alt="" className="w-20" />
      <div className={``}>to</div>
    </div>
  );
};

const UserCard = ({ name, company }) => {
  return (
    <div className={`flex justify-between p-2 bg-gray-300 my-4`}>
      <div className={`w-8 h-8 overflow-hidden rounded`}>
        <img src={Profile} alt="" />
      </div>
      <div className={``}>
        <div className={""}>{name}</div>
        <div className={""}>{company}</div>
      </div>
    </div>
  );
};

export default Sidebar;
