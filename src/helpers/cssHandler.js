const cssHandler = (file) => {
  if (file.substring(0, 1) === "a") {
    return "a-widget";
  }
  if (file.substring(0, 1) === "b") {
    return "b-widget";
  }
  if (file.substring(0, 1) === "c") {
    return "c-widget";
  }
};

module.exports = cssHandler;
