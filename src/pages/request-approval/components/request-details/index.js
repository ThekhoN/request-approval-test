import React from "react";
import "./style.css";
import { getPluralStringForValue, getFileNameFromFileUrl } from "../../utils";

const renderAdditionalMessage = usage_count => {
  if (usage_count) {
    return (
      <div className="additional-message">
        Your company is already running {usage_count} instances of this service.
      </div>
    );
  }
};

const RequestDetails = ({ details }) => {
  const {
    first_name,
    last_name,
    profile_picture,
    cost,
    renewal_frequency_in_months,
    spend_limit,
    expense_account,
    files,
    description,
    usage_count
  } = details;

  const fullName = last_name ? first_name + " " + first_name : first_name;
  return (
    <div className="request-details">
      <div className="request-details__main">
        <div className="flex requested-by__row row">
          <div className="label requested-by__label">Requested by</div>
          <div className="flex flex-vertical-align">
            <div className="profile-picture">
              <img src={profile_picture} alt={fullName} />
            </div>
            <div className="full-name value">{fullName}</div>
          </div>
        </div>
        <div className="flex cost__row row">
          <div className="label cost__label">Cost</div>
          <div className="cost value">${cost}</div>
        </div>
        <div className="renewal-annual-cost__row row">
          <div className="renewal__row flex">
            <div className="label renewal__label">Renewal</div>
            <div className="renewal value">
              {renewal_frequency_in_months}{" "}
              {getPluralStringForValue("month", renewal_frequency_in_months)}
            </div>
          </div>
          <div className="annual-cost__row flex">
            <div className="label annual-cost__label">Annual Cost</div>
            <div className="annual-cost value">${spend_limit}</div>
          </div>
        </div>
        <div className="flex expense-account_row row">
          <div className="label expense-account__label">Expense Account</div>
          <div className="expense-account value">{expense_account}</div>
        </div>
        <div className=" file_row row">
          <div className="label file__label">File</div>
          <div className="file value">
            {files.map((file, index) => (
              <a key={index} href={file} download>
                <img src={file} alt="file" />
                {getFileNameFromFileUrl(file)}
              </a>
            ))}
          </div>
        </div>
        <div className="flex description_row row">
          <div className="label description__label">Description</div>
          <div className="file value">{description}</div>
        </div>
      </div>
      {renderAdditionalMessage(usage_count)}
    </div>
  );
};

export default RequestDetails;
