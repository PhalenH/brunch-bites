import React from 'react';
import { Link } from 'react-router-dom';

const VistedList = ({ profiles, title }) => {
  if (!profiles.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {profiles &&
          profiles.map((profile) => (
            <h1>to fill with data</h1>
          ))}
      </div>
    </div>
  );
};

export default VistedList;
