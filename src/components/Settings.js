import { Card } from "../ui";
import RenderUI from "../RenderUI";

const EXISTING_USERS = [
  {
    label: "Monica Greenleaf",
    value: "monica.greenleaf@microsoft.com",
  },
  {
    label: "John Wick",
    value: "john.wick@microsoft.com",
  },
  {
    label: "Tom Cruise",
    value: "tom.cruise@microsoft.com",
  },
  {
    label: "Emma Stone",
    value: "emma.stone@microsoft.com",
  },
];

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
            variant="fufdll"
          />
          <div className="mb-2 mt-4">Other plan</div>
          <Card
            label={"Basic"}
            value={"Supports 500K rows of data + 1 free user seat"}
            right={"$299 /mo"}
            variant="fufdll"
            className={"mb-3"}
          />
          <Card
            label={"Standard"}
            value={"Supports 5M rows of data + 3 free user seats"}
            right={"$499 /mo"}
            variant="fufdll"
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
            <div className={"flex gap-2"}>
              <Card
                label={"Name"}
                value={"Dwayne “The Rock” Johnson"}
                variant="fufdll"
                className={"grow"}
              />
              <Card
                label={"Email"}
                value={"dwayne.the.rock.johnson@microsoft.com"}
                variant="fufdll"
                className={"grow"}
              />
            </div>

            <div className="mb-2 mt-4">Existing users</div>
            <div className={"flex gap-2 flex-wrap"}>
              {EXISTING_USERS.map((item) => {
                return (
                  <Card
                    {...item}
                    right={"$299 /mo"}
                    variant="fufdll"
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
  // const {} = props
  return (
    <div className="p-4 mt-20">
      <h2 className={"text-5xl font-light mb-2"}>
        All your <br /> settings in one palce.
      </h2>
      <div className={"mb-4"}>Manage account details, billing and users.</div>
      <div className={"grid grid-cols-3 gap-4"}>
        <RenderUI uiConfig={ITEMS} />
      </div>

      <button className="mt-4 p-6 w-full bg-blue-500 rounded-sm text-white">
        Update all settings
      </button>
    </div>
  );
};

export default Settings;
