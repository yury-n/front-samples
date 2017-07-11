import React from "react";
import { withRouter } from "react-router";
import { HLayout, HLayoutItem } from "react-flexbox-layout";

import SimpleLeftBar from "components/Dashboard/LeftBar/";
import StudentSpotLight from "components/SpotLight/Student";

const Dashboard = props => {
  let spotlight;
  let selectedStudentid;
  if (props.match.params && props.match.params.studentId) {
    selectedStudentid = props.match.params.studentId;
    const spotlightedStudent = props.students.find(
      student => student._id == selectedStudentid
    );
    spotlight = <StudentSpotLight student={spotlightedStudent} />;
  }
  return (
    <HLayout width="100%" gutter={7}>
      <HLayoutItem flexGrow={1}>
        <SimpleLeftBar students={props.students} />
      </HLayoutItem>
      <HLayoutItem flexGrow={1}>
        {selectedStudentid &&
          <div style={spotLightContainerStyle}>
            {spotlight}
          </div>
        }
      </HLayoutItem>
    </HLayout>
  );
};

export default withRouter(Dashboard);

const spotLightContainerStyle = {
  paddingTop: "105px",
  boxSizing: "border-box",
  height: "400px",
  width: "460px",
  marginLeft: "auto",
  backgroundImage: "linear-gradient(288deg, rgb(235, 244, 244) 50%, rgb(251, 253, 253) 45%, rgb(255, 255, 255) 85%, rgb(255, 255, 255) 100%)",
};
