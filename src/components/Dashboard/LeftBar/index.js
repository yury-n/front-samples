import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { HLayout, HLayoutItem, VLayout, VLayoutItem } from 'react-flexbox-layout';

import { fullName } from 'utils/name';
import { getStudentAvatar } from 'utils/studentAvatar';

class DashboardLeftBar extends React.Component {

  static propTypes = {
    students: PropTypes.array.isRequired,
  };

  render() {

    const students = this.props.students;
    return (
      <div>
        <h3 style={titleStyle}>Students</h3>
        {students.map(this._renderStudent)}
      </div>
    )
  }

  _renderStudent(student) {
    const label = "";
    return (
      <NavLink
        key={student._id}
        to={`/students/${student._id}`}
        style={entryStyle}
        activeStyle={selectedEntryStyle}
      >
        <HLayout key={student._id} height="100%" alignItems="middle" gutter={7}>
          <div
            style={{
              ...studentAvatarStyle,
              backgroundImage: `url(${getStudentAvatar(student)})`,
            }}
          />
          <HLayoutItem flexGrow style={studentNameStyle}>
            <span>{fullName(student)}</span>
          </HLayoutItem>
          <span>{label}</span>
        </HLayout>
      </NavLink>
    );
  }
}

const BORDER = '1px solid #e3e9e8';

const titleStyle = {
  fontWeight: "normal",
  fontSize: "17px",
  marginLeft: "1.1rem",
  color: "#8d8d8d",
};

const entryStyle = {
  borderBottom: BORDER,
  padding: "0.3rem 0.5rem",
  height: "4rem",
  fontSize: "1.1rem",
  display: "block",
  backgroundColor: "white",
  textDecoration: "none",
  color: "black",
};

const selectedEntryStyle = {
  backgroundColor: "#f6fafb",
  backgroundImage: "linear-gradient(108deg, rgb(235, 244, 244) 50%, rgb(251, 253, 253) 45%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)",
  cursor: "default",
};

const studentNameStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const studentAvatarStyle = {
  height: "3rem",
  width: "3rem",
  margin: "0 0.6rem",
  borderRadius: "50%",
  backgroundSize: "cover",
};

export default DashboardLeftBar;
