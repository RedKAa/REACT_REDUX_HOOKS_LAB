export const addNewHobby = (payload) => {
  return {
    type: "ADD_NEW_HOBBY",
    payload: payload,
  };
};

export const setActiveHobby = (payload) => {
  return {
    type: "SET_ACTIVE_HOBBY",
    payload: payload,
  };
};
