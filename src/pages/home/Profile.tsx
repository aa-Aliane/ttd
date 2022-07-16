import React, { useState, useReducer } from "react";
import { dataContext } from "../../contexts/dataContext";

export const stateReducer = (state, action) => {
  switch (action.type) {
    case "click":
      return state.map((s, i) => {
        if (i == action.payload) {
          return "active";
        }
        return "inactive";
      });

    default:
      return state;
  }
};

const Profile = () => {
  const { setCurrentTime } = React.useContext(dataContext);
  const [state, stateDispatch] = useReducer(stateReducer, [
    "inactive",
    "active",
    "inactive",
  ]);

  return (
    <div className="container" content-type="profile">
      <div className="profile">
        <img src="../../images/image-jeremy.png" alt="" />
        <div className="name">
          <p>report for</p>
          <p>Jeremy Robinson</p>
        </div>
      </div>
      <ul className="frequence">
        <li
          state-type={state[0]}
          onClick={() => {
            setCurrentTime("daily");
            stateDispatch({
              type: "click",
              payload: 0,
            });
          }}
        >
          daily
        </li>
        <li
          state-type={state[1]}
          onClick={() => {
            setCurrentTime("weekly");
            stateDispatch({
              type: "click",
              payload: 1,
            });
          }}
        >
          weekly
        </li>
        <li
          state-type={state[2]}
          onClick={() => {
            setCurrentTime("monthly");
            stateDispatch({
              type: "click",
              payload: 2,
            });
          }}
        >
          mountly
        </li>
      </ul>
    </div>
  );
};

export default Profile;
