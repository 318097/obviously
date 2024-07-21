import {
  CircleStackIcon,
  PlusCircleIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import Logo from "./assets/images/logo.png";
import Profile from "./assets/images/profile.png";
import {
  BookOpenIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const MENU_ITEMS = [
    {
      label: "Explore",
      value: "/explore",
      icon: <ViewColumnsIcon className="size-4" />,
    },
    {
      label: "Definitions",
      value: "/definition",
      icon: <BookOpenIcon className="size-4" />,
    },
    {
      label: "Settings",
      value: "/settings",
      icon: <Cog6ToothIcon className="size-4" />,
    },
    {
      label: "Help",
      value: "/help",
      icon: <QuestionMarkCircleIcon className="size-4" />,
    },
  ];
  const PREDICTIONS = [
    {
      label: "MoM user churn for Q3",
      icon: <CircleStackIcon className="size-4" />,
    },
    {
      label: "Merch sales for Jan",
      icon: <CircleStackIcon className="size-4" />,
    },
    {
      label: "State-wise donor prediction",
      icon: <CircleStackIcon className="size-4" />,
    },
  ];
  const DATASETS = [
    {
      label: "Twitch data",
      icon: <CircleStackIcon className="size-4" />,
    },
    {
      label: "SLOBS user data",
      icon: <CircleStackIcon className="size-4" />,
    },
    {
      label: "External CSV file",
      icon: <TableCellsIcon className="size-4" />,
    },
  ];
  return (
    <div className={`bg-gray-100 p-6 w-72`}>
      <Header />
      <UserCard name="Monica Greenleaf" company="Microsoft Inc." />
      <ListItems data={MENU_ITEMS} />
      <hr className="bg-slate-200 w-100 h-px my-4" />
      <ListItems data={PREDICTIONS} title="My Predictions" showMore />
      <hr className="bg-slate-200 w-100 h-px my-4" />
      <ListItems data={DATASETS} title="My Datasets" showMore />
    </div>
  );
};

const ListItems = ({ data, title, showMore = false }) => {
  return (
    <div className={`text-sm`}>
      {!!title && <Title label={title} />}
      <div className={`flex gap-2 flex-col`}>
        {data.map((item) => {
          return (
            <div className={"flex p-1 gap-2 items-center"}>
              <div className={"shrink-0"}>{item.icon}</div>
              <div className="">{item.label}</div>
            </div>
          );
        })}
      </div>
      {showMore && (
        <div className={"p-1 font-bold text-gray-400 mt-2 text-xs"}>
          Show all
        </div>
      )}
    </div>
  );
};

const Title = ({ label }) => {
  return (
    <div className={`flex justify-between items-center mb-4`}>
      <div className={``}>{label}</div>
      <div className={``}>
        <PlusCircleIcon className="size-4" />
      </div>
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
    <div className={`flex items-center gap-2 py-4 px-3 bg-gray-200 my-4`}>
      <div className={`w-8 h-8 overflow-hidden rounded`}>
        <img src={Profile} alt="" />
      </div>
      <div className={`text-xs`}>
        <div className={""}>{name}</div>
        <div className={"text-gray-600 italic"}>{company}</div>
      </div>
    </div>
  );
};

export default Sidebar;
