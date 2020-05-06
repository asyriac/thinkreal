import React from "react";
import api from "../../api.json";

export default function Question(props) {
  let questions = api.questions;
  let question = null;
  for (const q of questions) {
    if (props.src.questionId === q.id) question = q;
  }

  console.log(question);
  return (
    <div>
      <h3>{question.question}</h3>
      <video width="320" height="240" controls>
        <source src={props.src.src} type="video/mp4" />
      </video>

      <input type="textbox" placeholder="Add comments" />
    </div>
  );
}
