import React from "react";
import CustomRoundedCheckbox from "../../../../components/custom-rounded-checkbox";
import { getHeaderContent, getActivityLastUpdateContent } from "./utils";
import "./style.css";

const ApprovalList = ({ data, type }) => {
  return (
    <div className="approval-list">
      <h3>{getHeaderContent(type)}</h3>
      <ul className={`approval-list__wrapper ${type}`}>
        {data.map((item, index) => {
          const fullName = item.approver.last_name
            ? item.approver.first_name + " " + item.approver.first_name
            : item.approver.first_name;
          const email = item.approver.email ? `(${item.approver.email})` : "";
          return (
            <li className="approvals-row flex flex-vertical-align" key={index}>
              <div className="profile-picture">
                <img src={item.approver.profile_picture} alt={fullName} />
              </div>
              <div className="name-email-activity__wrapper">
                <div className="flex">
                  <div className="name">{fullName} </div>
                  <div className="email">{email}</div>
                </div>
                <div className="activity-last-update">
                  {getActivityLastUpdateContent(type, item.last_updated_date)}
                </div>
              </div>
              <div className="flex is-approved-status">
                <CustomRoundedCheckbox
                  isReadonly
                  isChecked={type === "approved" ? true : false}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Approvals = ({ approvers }) => {
  const approved = approvers.filter(item => item.status === "accepted");
  const nonApproved = approvers.filter(item => item.status !== "accepted");
  if (approvers.length) {
    return (
      <div className="approvals">
        {approved.length && <ApprovalList data={approved} type="approved" />}
        {nonApproved.length && (
          <ApprovalList data={nonApproved} type="non-approved" />
        )}
      </div>
    );
  }
};

export default Approvals;
