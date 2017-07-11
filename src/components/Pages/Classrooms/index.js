import React from 'react';

import NavBar from 'components/NavBar';

const classrooms = [
  { _id: "1", name: "React basics" },
  { _id: "2", name: "Higher Order Components" },
  { _id: "3", name: "Composition in React" },
  { _id: "4", name: "State management" }
];

export default (props) => (
  <div>
    <NavBar />
  </div>
);