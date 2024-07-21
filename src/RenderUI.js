const Card = ({
  variant = "default",
  className,
  label,
  value,
  right,
  children,
}) => {
  return variant === "default" ? (
    <div className={`card ${className}`}>
      <div className="flex items-center">
        <div className={"flex flex-col gap-2 content-between"}>
          <div className={"font-bold text-lg"}>{label}</div>
          <div className={"text-sm"}>{value}</div>
        </div>
      </div>
      <div className="grow">{children}</div>
    </div>
  ) : (
    <div className={`card-full ${className}`}>
      <div className={"flex flex-col gap-1 content-between"}>
        <div className={"font-bold text-md"}>{label}</div>
        <div className={"text-xs"}>{value}</div>
      </div>
      {right && <div className={"shrink-0 text-sm"}>{right}</div>}
    </div>
  );
};

const RenderUI = ({ uiConfig }) => {
  return uiConfig
    .filter(({ visible = true }) => visible)
    .map((props) => {
      const { type = "card", className, component, label, components } = props;

      switch (type) {
        case "title":
          return <h4>{label}</h4>;
        case "card":
          return <Card {...props} />;
        case "container":
          return (
            <div className={className}>
              <RenderUI uiConfig={components} />
            </div>
          );
        case "text":
          return <div className="text">{label}</div>;
        default:
          return component;
      }
    });
};

export default RenderUI;
export { Card };
