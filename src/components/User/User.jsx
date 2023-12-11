import React from "react";
import "./User.css";

import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const User = ({ eid, name, dob, experience, dept, salary, address }) => {
  return (
    <div className="user">
      <div className="user__container">
        <div className="user__container-actions">
          <IoEyeOutline className="user__container-actions-eyeIcon" />
          <MdOutlineModeEdit className="user__container-actions-editIcon" />
          <MdDelete className="user__container-actions-deleteIcon" />
        </div>
        <div className="user__container-name">
          <div className="user__container-name-cover">
            <h2 className="user__container-name-title">{name}</h2>
          </div>
        </div>
        <div className="user__container-eid">
          <div className="user__container-eid-cover">
            <h2 className="user__container-eid-title">{eid}</h2>
          </div>
        </div>
        <div className="user__container-dept">
          <div className="user__container-dept-cover">
            <h2 className="user__container-dept-title">{dept}</h2>
          </div>
        </div>
        <div className="user__container-salary">
          <div className="user__container-salary-cover">
            <h2 className="user__container-salary-title">{salary}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
