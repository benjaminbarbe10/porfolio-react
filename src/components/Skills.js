import React, { Component } from "react";
import { getSkills } from "../actions/actions";
import { connect } from "react-redux";

class Skills extends Component {
  componentDidMount() {
    this.props.getSkills();
  }

  render() {
    const { skills = [] } = this.props;

    return (
      <div className="PageContent">
        <h1>Skills</h1>
        {skills.map(skill => (
          <li key={skill._id}>
            {skill.name} {skill.surname}
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  skills: state.skillReducer.skills
});

export default connect(
  mapStateToProps,
  { getSkills }
)(Skills);
