import React from 'react';
import './Counter.less';

const AddToCartBar: React.FC = () => {
  return (
    <div className="Counter">
      <div className="Counter--minus control-btn">-</div>
      <input className="Counter--input" type="number" min="0" />
      <div className="Counter--plus control-btn">+</div>
    </div>
  );
};

export default AddToCartBar;
