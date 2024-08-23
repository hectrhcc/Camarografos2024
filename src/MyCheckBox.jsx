import React, { useState } from 'react';

function MyCheckbox({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
}

export default MyCheckbox;