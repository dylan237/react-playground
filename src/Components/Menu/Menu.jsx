import { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledMenu } from "./style";

// TODO:需對應第一層路由渲染二層路由
export function Menu() {
  const history = useHistory();
  const [currentPath, setPath] = useState(
    history.location.pathname.split("/")[1]
  );

  const setting = [
    {
      name: "Playground A",
      path: "playgroundA",
    },
    {
      name: "Playground B",
      path: "playgroundB",
    },
  ];

  const handleClick = (path) => {
    setPath(path);
    history.push(path);
  };

  return (
    <StyledMenu className="side-menu" selectedKeys={[currentPath]}>
      {setting.map((set) => (
        <StyledMenu.Item onClick={() => handleClick(set.path)} key={set.path}>
          {set.name}
        </StyledMenu.Item>
      ))}
    </StyledMenu>
  );
}
