import React, { useEffect, useState } from "react";
import { dataContext } from "../../contexts/dataContext";

const Activity = ({ title, timeframe }) => {
  const { currentTime } = React.useContext(dataContext);
  const [periode, setPeriode] = useState("day");

  useEffect(() => {
    if (currentTime === "daily") {
      setPeriode("day");
    } else if (currentTime === "weekly") {
      setPeriode("week");
    } else {
      setPeriode("month");
    }
  }, [currentTime]);
  return (
    <div
      className="container"
      content-type={"activity"}
      content-theme={title.toLowerCase()}
    >
      <div className="theme">
        <img src="../../images/icon-work.svg" alt="" />
      </div>
      <div className="time-spent">
        
          <p>{title}</p>
          <p>{timeframe.current}hrs</p>
        
          <img
            src="../../images/icon-ellipsis.svg"
            alt=""
            content-type={"activity"}
          />
          <p>
            Last {periode} - {timeframe.previous}hrs
          </p>
       
      </div>
    </div>
  );
};

export default Activity;
