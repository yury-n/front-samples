import React from "react";

import NavBar from "components/NavBar";
import Dashboard from "components/Dashboard";

const artists = [
  { _id: "1", firstName: "Annie", lastName: "Walker" },
  { _id: "2", firstName: "Lynda", lastName: "Dubovich" },
  { _id: "3", firstName: "Jessica", lastName: "Gonsalez" },
  { _id: "4", firstName: "Kate", lastName: "Banksy" }
];

export default props => {
  return (
    <div>
      <NavBar />
      <Dashboard artists={artists} />
    </div>
  );
};
