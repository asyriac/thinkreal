import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import api from "./api.json";
import Candidates from "./components/candidates/Candidates";
import Candidate from "./components/candidate/Candidate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      candidates: api.candidates,
      homepage: true,
      candidate: null,
    };
  }

  viewCandidate = (clickedUser) => {
    let clicked = this.state.candidates.filter((c) => c.name === clickedUser.name);
    this.setState({
      homepage: false,
      candidate: clicked[0],
    });
  };

  goBack = () => {
    this.setState({
      homepage: true,
      candidate: null,
    });
  };

  render() {
    const { candidates, homepage, candidate } = this.state;
    return (
      <div className="App">
        {homepage ? (
          <div>
            <h1>Candidate list</h1>
            {candidates.map((candidate) => (
              <Candidates details={candidate} viewCandidate={this.viewCandidate} />
            ))}
          </div>
        ) : (
          <Candidate candidate={candidate} goBack={this.goBack} />
        )}
      </div>
    );
  }
}

export default App;
