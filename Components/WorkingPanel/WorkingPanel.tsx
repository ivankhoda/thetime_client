import React, { PropsWithChildren } from "react";
import "./WorkingPanel.style.scss";

interface WorkingPanelProps {
  children: any;
}
export const WorkingPanel: React.FC<PropsWithChildren<WorkingPanelProps>> = ({ children }) => {
  // const [data, setData] = useState();
  // useEffect(() => {
  //   const fetchsample = async () => {
  //     const result = await fetch("http://localhost:3000/wallet", {
  //       method: "GET",
  //       credentials: "same-origin",
  //       headers: { "Content-Type": "application/json" },
  //     });

  //     setData(await result.json());
  //   };
  //   fetchsample();
  // }, []);

  return <div className="WorkingPanel">{children}</div>;
};
