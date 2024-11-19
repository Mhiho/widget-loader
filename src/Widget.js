const initWidget = require("./helpers/appendHandler");

class Widget {
  static count = 0;
  constructor(parent, target) {
    (this.parent = parent), (this.target = target);
    this.instanceId = ++Widget.count;
  }

  init = async (count) => {
    const file = await import(`${this.target}`, {
      with: { type: "html" },
    });
    const fileParsed = $(file.default).find("[widget]");
    const tagsParsed = Object.values(fileParsed).splice(
      0,
      Object.values(fileParsed).length - 2
    );

    initWidget(this.parent, tagsParsed, count);
  };
  destroy = (tag) => {
    $($(tag)).remove();
  };
}
module.exports = Widget;
