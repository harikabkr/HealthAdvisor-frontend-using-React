export const convertBreak = (text) => {
  if (!text) {
    return ""; // don't want `undefined` printing into page
  }
  // if it's something other than string, return it as is
  if (typeof text !== "string") {
    return text;
  } else {
    return text.replace(/\n/g, "<br />");
  }
};
