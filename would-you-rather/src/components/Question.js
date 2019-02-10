import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
import { Link, withRouter } from "react-router-dom";

class Question extends Component {
  render() {
    const { question } = this.props;
    if (!question) {
      return <p>This question doesn't exist</p>;
    }
    const { id, name, avatar, optionOne, optionTwo } = question;
    return (
      <div className="question">
        <div className="questionHeader">{name} asks:</div>
        <div className="flexbox">
          <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
          <div className="questionWrapper">
            {this.props.questionDisplay(question)}
            <div />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(
  { authedUser, users, questions },
  { id, questionDisplay }
) {
  const question = questions[id];

  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null,
    questionDisplay
  };
}

export default withRouter(connect(mapStateToProps)(Question));
