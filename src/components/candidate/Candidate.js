import React from "react";
import api from "../../api.json";
import Question from "../questions/Question";

export default function Candidate(props) {
  const { goBack } = props;
  let response = api.applications.filter((application) => props.candidate.applicationId === application.id);
  response = response[0];

  return (
    <div>
      <h1 className="cursor" onClick={goBack} style={{ color: "red" }}>
        Back
      </h1>
      <h1>Details of {props.candidate.name}</h1>

      {response ? response.videos.map((video) => <Question id={response.id} src={video} />) : <h3>Candidate does not have an application.</h3>}
    </div>
  );
}
