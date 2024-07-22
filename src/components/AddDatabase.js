import RenderUI from "../RenderUI";
import { CircleStackIcon } from "@heroicons/react/24/outline";

const AddDataset = (props) => {
  const ITEMS = [
    {
      type: "card",
      label: "Display name",
      value: "monica.greenleaf@microsoft.com",
    },
    {
      type: "card",
      label: "Description",
      value: "Monica Greenleaf",
      className: "col-span-2",
    },
    {
      type: "card",
      label: "Host",
      value: "Monica Greenleaf",
      className: "col-span-2",
    },
    {
      type: "card",
      label: "Port",
      value: "2322",
    },
    {
      type: "card",
      label: "Username",
      value: "Monica Greenleaf",
    },
    {
      type: "card",
      label: "Password",
      value: "* * ** *** *** *** ** **",
    },
    {
      type: "card",
      label: "Database",
      value: "1234-5678-9101-1121",
    },
  ];
  return (
    <div className="py-4 px-8 mt-40">
      <h2 className={"text-4xl font-bold mb-2 text-gray-700"}>
        Add datasets <br /> to your Obviously account.
      </h2>
      <div className={"mb-4"}>
        Add dataset for making predictions. We don’t and will never store your
        data.
      </div>
      <div className={""}>
        <div className={"mb-2 text-lg"}>Upload a file</div>
        <div className={"flex gap-4 items-center"}>
          <button className="p-6 bg-blue-500 rounded text-white w-96">
            Upload a CSV
          </button>
        </div>
      </div>
      <div className={"my-10 "}>
        <div className={"flex items-center text-gray-300"}>
          <hr className="grow" />
          <span className="px-2">OR</span>
          <hr className="grow-[3]" />
        </div>
      </div>
      <div className={""}>
        <div className={"mb-2 text-lg"}>Connect a database</div>
        <div className={"mb-4 italic text-sm"}>
          In order to ensure Obviously AI has access to your database, please
          whitelist our IP address{" "}
          <span className="text-green-500 not-italic font-bold">
            104.198.187.43
          </span>{" "}
          on your database firewall.
        </div>
        <div className={"flex gap-4 items-center"}>
          <Button label={"MySQL"} />
          <Button label={"PostgreSQL"} highlighted={true} />
        </div>
      </div>
      <div className={"grid grid-cols-3 gap-4 mt-6"}>
        <RenderUI uiConfig={ITEMS} />
      </div>

      <button className="mt-4 p-6 w-full bg-blue-500 rounded text-white">
        Add this database
      </button>
    </div>
  );
};

const Button = ({ highlighted, label }) => {
  const highlightedClasses = highlighted
    ? "bg-green-500 text-white"
    : "shadow-slate-200 shadow-md border-slate-100 border";
  return (
    <button
      className={`${highlightedClasses} size-40 p-6 rounded flex flex-col items-center gap-2`}
    >
      <CircleStackIcon className="size-18" />
      <span>{label}</span>
    </button>
  );
};

export default AddDataset;
