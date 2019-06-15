import React from "react";

export const renderAdditionalMessage = usage_count => {
  if (usage_count) {
    return (
      <div className="additional-message">
        Your company is already running {usage_count} instance(s) of this
        service.
      </div>
    );
  }
};

export const renderFileExtensionThumbnail = fileExtension => {
  const allowedFileExtensions = ["jpg", "pdf", "doc", "xls"];
  if (allowedFileExtensions.indexOf(fileExtension) > -1) {
    return (
      <span
        className={`file-extension-icon fiv-viv fiv-icon-${fileExtension}`}
      />
    );
  } else {
    return null;
  }
};
