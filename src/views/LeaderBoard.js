import React from "react";
import { connect } from "react-redux";
import LeaderBox from "../components/LeaderBox";
import { Redirect } from "react-router-dom";

const LeaderBoard = (props) => {

  const { isAuth, usersIds } = props;
  let i = 1;

  return isAuth ? (
    <div className="container">
      <div className="col-md-6 mx-auto my-auto">
        {usersIds.map((user) => (
          <LeaderBox key={user} id={user} index={i++} />
        ))}
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    isAuth: authedUser !== null,
    usersIds:
      users &&
      Object.keys(users).sort(
        (a, b) =>
          users[b].questions.length +
          Object.keys(users[b].answers).length -
          (users[a].questions.length + Object.keys(users[a].answers).length)
      ),
  };
};

export default connect(mapStateToProps)(LeaderBoard);
