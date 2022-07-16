import React from "react";
import Activity from './Activity';
import data from "../../data/data.json";

const Activities = ({time}) => {
  return (
    <>
      {data.map((a)=>{
        return <Activity title={a.title} timeframe={a.timeframes[time]} />
      })}
    </>
  );
};

export default Activities;
