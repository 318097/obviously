import { Card } from "./ui";

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
