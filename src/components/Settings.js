import { Card, Icon } from "../ui";
import RenderUI from "../RenderUI";
import { EXISTING_USERS } from "../data";

const Settings = (props) => {
  const ITEMS = [
    {
      type: "card",
      label: "Name",
      value: "Monica Greenleaf",
    },
    {
      type: "card",
      label: "Company",
      value: "Microsoft, Inc.",
    },
    {
      type: "card",
      label: "Email",
      value: "monica.greenleaf@microsoft.com",
    },
    {
      type: "card",
      label: "Current password",
      value: "* * ** * ** * * * ** * ** * *",
    },
    {
      type: "card",
      label: "New password",
      value: "* * ** *** *** *** ** **",
    },
    {
      type: "card",
      label: "Repeat password",
      value: "* * ** *** *** *** ** **",
    },
    {
      type: "card",
      label: "Card number",
      value: "1234-5678-9101-1121",
    },
    {
      type: "card",
      label: "Expiration",
      value: "10/22",
    },
    {
      type: "container",
      className: "grid grid-cols-2 gap-4",
      components: [
        {
          label: "CVV",
          value: "240",
        },
        {
          label: "ZIP",
          value: "01002",
        },
      ],
    },
    {
      type: "card",
      label: "Membership",
      value: "Switch to another plan or cancel membership.",
      children: (
        <div className="">
          <div className="mb-2 mt-4">Current plan</div>
          <Card
            label={"Premium"}
            value={"Supports 10M rows of data + 5 free user seats"}
            right={"$799 /mo"}
            variant="full"
          />
          <div className="mb-2 mt-4">Other plan</div>
          <Card
            label={"Basic"}
            value={"Supports 500K rows of data + 1 free user seat"}
            right={"$299 /mo"}
            variant="full"
            className={"mb-3"}
          />
          <Card
            label={"Standard"}
            value={"Supports 5M rows of data + 3 free user seats"}
            right={"$499 /mo"}
            variant="full"
            className={"mb-3"}
          />
          <div className={"text-xs"}>
            To cancel membership email us at{" "}
            <span className="text-blue-500 underline">info@obviously.ai.</span>
          </div>
        </div>
      ),
    },
    {
      type: "card",
      label: "User seats",
      className: "col-span-2",
      value: "Invite another user from your company to Obviously AI.",
      children: (
        <div className="h-full flex flex-col">
          <div className={"grow"}>
            <div className={"flex gap-4"}>
              <Card
                label={"Name"}
                value={"Dwayne “The Rock” Johnson"}
                className={"grow basis-44"}
              />
              <Card
                label={"Email"}
                value={"dwayne.the.rock.johnson@microsoft.com"}
                className={"grow basis-44"}
              />
              <div
                className={"card size-[79px] flex items-center justify-center"}
              >
                <Icon name="plus" className="size-8" />
              </div>
            </div>

            <div className="mb-2 mt-4">Existing users</div>
            <div className={"flex gap-4 flex-wrap"}>
              {EXISTING_USERS.map((item) => {
                const adminDisabledClasses = item.disabled?.includes("admin")
                  ? `text-gray-300 hover:cursor-not-allowed`
                  : "";
                const removeDisabledClasses = item.disabled?.includes("remove")
                  ? `text-gray-300 hover:cursor-not-allowed`
                  : "";
                return (
                  <Card
                    {...item}
                    right={
                      <div className="flex gap-1.5 items-center">
                        <div
                          className={
                            "flex flex-col gap-0.6 items-center justify-center"
                          }
                        >
                          <Icon
                            name="user"
                            className={`text-green-600 ${adminDisabledClasses}`}
                          />
                          <span
                            className={`text-[8px] text-green-600 ${adminDisabledClasses}`}
                          >
                            Admin
                          </span>
                        </div>
                        <div
                          className={
                            "flex flex-col gap-0.6 items-center justify-center"
                          }
                        >
                          <Icon
                            name="x"
                            className={`text-red-600 ${removeDisabledClasses}`}
                          />
                          <span
                            className={`text-[8px] text-red-600 ${removeDisabledClasses}`}
                          >
                            Remove
                          </span>
                        </div>
                      </div>
                    }
                    variant="full"
                    className={"basis-5/12"}
                  />
                );
              })}
            </div>
          </div>

          <div className={"text-xs mt-3"}>
            You have 1 of 5 free seats left. Your card will be charged $10 /mo
            for each additional user thereon.
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="py-4 px-8 mt-40">
      <h2 className={"text-4xl font-bold mb-2 text-gray-700"}>
        All your <br /> settings in one palce.
      </h2>
      <div className={"mb-4"}>Manage account details, billing and users.</div>
      <div className={"grid grid-cols-3 gap-4"}>
        <RenderUI uiConfig={ITEMS} />
      </div>

      <button className="mt-4 p-6 w-full bg-blue-500 rounded text-white">
        Update all settings
      </button>
    </div>
  );
};

export default Settings;
