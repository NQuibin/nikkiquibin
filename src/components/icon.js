import React from 'react';
import ReactTooltip from 'react-tooltip';

const icons = {
  apache: require('@/assets/apache.svg'),
  aws: require('@/assets/aws.svg'),
  codeigniter: require('@/assets/codeigniter.svg'),
  flask: require('@/assets/flask.svg'),
  gcp: require('@/assets/gcp.svg'),
  java: require('@/assets/java.svg'),
  msOffice: require('@/assets/ms-office.svg'),
  mysql: require('@/assets/mysql.svg'),
  postgres: require('@/assets/postgres.svg'),
  python: require('@/assets/python.svg'),
  reactjs: require('@/assets/reactjs.svg'),
  vba: require('@/assets/vba.svg'),
  vue: require('@/assets/vue.svg'),
};

const Icon = ({ icon, tooltip, className }) => {
  const IconAsset = icons[icon];
  return (
    <>
      <span data-tip={tooltip}>
        <IconAsset className={className} />
        <ReactTooltip effect="solid" place="bottom" />
      </span>
    </>
  );
};

export default Icon;
