export const api = ext => `http://localhost:8080/${ext}`;

//
// ─── ACTION TYPES ───────────────────────────────────────────────────────────────
//

export const GET_SKILLS = "GET_SKILLS";
export const GET_SKILL = "GET_SKILL";

//
// ─── ACTION CREATORS ────────────────────────────────────────────────────────────
//

export function addSkill(data) {
  return dispatch => {
    fetch("skills", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
}

export function getSkills() {
  return dispatch => {
    fetch("skills")
      .then(res => res.json())
      .then(payload => {
        dispatch({ type: GET_SKILLS, payload });
      });
  };
}

export function getSkill(id) {
  return dispatch => {
    fetch(`${id}`)
      .then(res => res.json())
      .then(payload => {
        dispatch({ type: GET_SKILL, payload });
      });
  };
}
