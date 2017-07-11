import React from "react";

import { fullName } from "utils/name";
import { getStudentAvatar } from "utils/studentAvatar";

import SpotLight from "..";

export default props =>
  <SpotLight
    imgUrl={getStudentAvatar(props.student)}
    label={fullName(props.student)}
  />;
