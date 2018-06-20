import { combineReducers } from "redux";
import { GET_SKILLS, GET_SKILL } from "../actions/actions";
import { reducer as formReducer } from "redux-form";

const INITIAL_STATE = {
  skills: [],
  skill: {}
};

function skillReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SKILLS:
      return { ...state, skills: action.payload };
    case GET_SKILL:
      return { skill: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  skillReducer,
  form: formReducer
});

export default rootReducer;
