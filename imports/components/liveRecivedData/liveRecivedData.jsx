import React from "react";

export const LiveRecivedData = props => {
  console.log(props.measurements);
  return (
    <div>
      {props.measurements[props.match.params.id].text}
      <br />
    </div>
  );
};
