import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SuccessPopup({ successOpen }) {
  return (
    <div className={`success ${successOpen && `success-open`}`}>
      <FontAwesomeIcon icon={faCircleCheck} />
      <span>Item added to cart</span>
    </div>
  );
}
