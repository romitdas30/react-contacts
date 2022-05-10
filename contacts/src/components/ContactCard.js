import React from "react";
import user from "../images/user.png";
import { FaTrashAlt } from "react-icons/fa";

const ContactCard = (props) => {
  const { name, email, mobile } = props.individualcontact;
  return (
    <>
      <div className="container">
        <div className="d-flex ">
          <img
            className="rounded-circle"
            src={user}
            alt=""
            style={{ width: "67px " , height: "67px;" }}
          />
          <div className="mx-3">
            <h6 className="mb-0">{name}</h6>
            <small>{email}</small>
            <div>{mobile}</div>
          </div>
        </div>
      </div>
      <div>
        <FaTrashAlt style={{ color: "red", fontSize: "25px" }} />
      </div>
    </>
  );
};

export default ContactCard;
