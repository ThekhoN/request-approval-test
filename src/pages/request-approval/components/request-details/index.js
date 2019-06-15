import React from "react";
import "./style.css";
import { getPluralStringForValue, getFileNameFromFileUrl } from "../../utils";
import TextWithEllipsis from "../../../../components/text-with-ellipsis";
import { renderAdditionalMessage, renderFileExtensionThumbnail } from "./utils";

const RequestDetails = ({ details }) => {
  const {
    first_name,
    last_name,
    profile_picture,
    cost,
    renewal_frequency_in_months,
    expense_account,
    files,
    description,
    usage_count
  } = details;

  const fullName = last_name ? first_name + " " + last_name : first_name;
  return (
    <div className="request-details">
      <div className="request-details__main">
        <div className="flex requested-by__row row">
          <div className="label requested-by__label">Requested by</div>
          <div className="flex flex-vertical-align">
            <div className="profile-picture">
              <img src={profile_picture} alt={fullName} />
            </div>
            <div className="name value">
              <TextWithEllipsis content={fullName} />
            </div>
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
            <div className="annual-cost value">${cost * 12}</div>
          </div>
        </div>
        <div className="flex expense-account_row row">
          <div className="label expense-account__label">Expense Account</div>
          <div className="expense-account value">{expense_account}</div>
        </div>
        <div className=" file_row row">
          <div className="label file__label">File</div>
          <div className="file value">
            {files.map((file, index) => {
              const fileName = getFileNameFromFileUrl(file);
              const fileExtension = fileName.slice(
                fileName.lastIndexOf(".") + 1
              );

              return (
                <a key={index} href={file} download title={fileName}>
                  {renderFileExtensionThumbnail(fileExtension)}
                  {fileName}
                </a>
              );
            })}
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
