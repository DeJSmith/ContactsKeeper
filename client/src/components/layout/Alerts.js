import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.type}`}>
      <i className='fas fa-info-cricle' /> {alert.msg}
    </div>
  ));
};

export default Alerts;
