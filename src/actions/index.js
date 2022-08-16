export const number = (num) => {
  return { type: "NUMBER", payload: num };
};

export const largenumber = (num) => {
  return { type: "LARGE_NUMBER", payload: num };
};
export const secondNumberAction = (num) => {
  return { type: "SECOND_NUMBER", payload: num };
};
