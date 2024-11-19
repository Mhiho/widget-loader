const cssHandler = require("./cssHandler.js");

const appendElement = (parent, widget, count) => {
  const element = $("<div>", {
    click: (e) => {
      e.stopPropagation();
      element.attr("destroy") === "false"
        ? element.attr("destroy", true).addClass("alertClass")
        : element.attr("destroy", false).removeClass("alertClass");
    },
  })
    .attr("id", `${widget}-${count}`)
    .attr("widget", `${widget}-${count}`)
    .attr("destroy", false)
    .text(`${widget}-${count}`)
    .addClass(cssHandler(widget));
  const thisElement = element;

  const option = $("<option>", {
    value: `${widget}-${count}`,
    text: `${widget}-${count}`,
  }).appendTo($("#parent"));
  const thisOption = option;

  element.appendTo($(parent)).append(
    $("<button>", {
      click: () => {
        $($(thisOption)).remove;
        $($(thisElement)).remove;
      },
    })
      .attr("id", `${widget}-delete`)
      .text("-")
  );
};

function initWidget(parent, tagsParsed, count) {
  for (const tag of tagsParsed) {
    let widget = $($(tag)).attr("widget");
    appendElement(parent, widget, count);
  }
}
module.exports = initWidget;
