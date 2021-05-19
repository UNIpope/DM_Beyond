import React from "react";
import "./data.css";

import ActionSize1 from "../actionssize1";
import ActionSize2 from "../actionssize2";

function Retdata(props) {
  const lengthact = Object.keys(props).length;
  
  if (lengthact >= 5) {
    return <div>
        <ActionSize2 />
        
      </div>
  }
  return <ActionSize1 />
}

class Actionsdata extends React.Component {
  render() {
    const listdata = this.props
    return (
      <div className="actionsdata-container">
        <Retdata {... listdata}/>
      </div>
    );
  }
}
export default Actionsdata;
