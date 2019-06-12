import React from "react";
import AirbaseLogo from "../../components/airbase-logo";
import SecurityMesage from "./components/security-message";
import { data } from "../../services/fixtures/request-approval";
import RequestHeader from "./components/request-header";
import RequestDetails from "./components/request-details";
import Approvals from "./components/approvals";
import Actions from "./components/actions";
import "./style.css";

const RequestApproval = ({ data }) => {
  const {
    service,
    requested_by,
    cost,
    renewal_frequency_in_months,
    spend_limit,
    expense_account,
    files,
    description,
    approvers,
    id
  } = data;

  const details = {
    email: requested_by.email,
    first_name: requested_by.first_name,
    last_name: requested_by.last_name,
    profile_picture: requested_by.profile_picture,
    cost,
    renewal_frequency_in_months,
    spend_limit,
    expense_account,
    files,
    description,
    usage_count: service.usage_count
  };

  return (
    <div className="request-approval">
      <AirbaseLogo />
      <SecurityMesage />
      <div className="request-approval__main">
        <RequestHeader
          name={service.name}
          logoUrl={service.logo}
          id={data.id}
        />
        <div className="request-approval__grid-wrapper">
          <RequestDetails details={details} />
          <Approvals approvers={approvers} />
          <Actions
            handleApprove={() => console.log("Approve service ID: ", id)}
            handleDeny={() => console.log("Deny service ID: ", id)}
          />
        </div>
      </div>
    </div>
  );
};

RequestApproval.defaultProps = {
  data: data
};

export default RequestApproval;
