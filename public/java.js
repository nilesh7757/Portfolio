import React from 'react';

const JavaIcon = () => {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Main cup shape */}
      <rect x="25" y="30" width="50" height="60" rx="5" ry="5" fill="#007396" />
      {/* The handle */}
      <path d="M 75 40 C 80 45, 80 75, 75 80" stroke="#007396" strokeWidth="5" fill="transparent" />
      {/* Steam lines */}
      <path d="M 40 25 C 45 20, 50 20, 55 25" stroke="#f89820" strokeWidth="3" fill="transparent" />
      <path d="M 45 15 C 50 10, 55 10, 60 15" stroke="#f89820" strokeWidth="3" fill="transparent" />
    </svg>
  );
};

export default JavaIcon;
