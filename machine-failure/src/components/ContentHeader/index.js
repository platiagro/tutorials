import React from "react";

import { PageHeader } from "antd";

import "./style.scss";

const ContentHeader = ({
  title,
  onTitleDoubleClick,
  subTitle,
  onBack,
  breadcrumbs,
}) => {
  const componentTitle = onTitleDoubleClick ? (
    <span onDoubleClick={onTitleDoubleClick}>{title}</span>
  ) : (
    title
  );

  const routes = breadcrumbs;

  return (
    <PageHeader
      className="contentHeader"
      title={componentTitle}
      subTitle={subTitle}
      onBack={onBack}
      breadcrumb={{ routes }}
    />
  );
};

export default ContentHeader;
