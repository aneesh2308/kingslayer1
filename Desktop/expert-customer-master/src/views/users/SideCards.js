import React from "react";
import {
  CListGroupItem,
} from "@coreui/react";



function SideCards({ name, amount, status, date, stars, stuff }) {


  return (
    <>
      <CListGroupItem href="#">
        <h5 className="d-flex w-100 justify-content-between">{name} <small>{date}</small></h5>
      <div>
          <h6>
            {amount}
          </h6>
          <h6>{status}  </h6>
            <h6>{stars}  </h6>
            
          {stuff}
        </div>
        </CListGroupItem>
      </>
      )


}

export default SideCards;
