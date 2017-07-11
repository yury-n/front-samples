const initialState = {};

const addEvent = () => {

};

const actions = {
  ADD_EVENT: addEvent,
};

export default (state = initialState, action) => {
  if (actions[action.type]) {
    return actions[action.type](state, action.payload);
  }

  return state;
}
