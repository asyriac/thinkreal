import React from "react";

export default function Candidate(props) {
  const { details, viewCandidate } = props;

  const onClick = () => {
    viewCandidate(details);
  };
  return (
    <div>
      <h3 onClick={onClick} className="cursor">
        {details.name}
      </h3>
    </div>
  );
}
