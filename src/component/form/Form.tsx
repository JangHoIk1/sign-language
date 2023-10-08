import React from 'react';


const Form: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      {title}
      {/* Form 내용 */}
    </div>
  );
}

export default Form;