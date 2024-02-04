
import React from 'react';


const GradientBackground = ({ children }) => {
  return <div className="gradient-background bg-gradient-to-tr from-green-200 via-green-200 to-green-200">{children}</div>;
};

export default GradientBackground;
