const Widget = require("./Widget");

$(function () {
  let countA = 0;
  let countB = 0;
  let countC = 0;

  let that;
  $("#btn").on("click", () => {
    const target = $("#element").find(":selected").text();
    const parent = $("#parent").find(":selected").text();
    switch (target) {
      case "markup A":
        const widget = new Widget(`#${parent}`, "./markups/markupA.html");
        that = widget;
        console.log(widget);
        widget.init(countA);
        console.log(widget.instanceId);
        countA++;
        break;
      case "markup B":
        const widget2 = new Widget(`#${parent}`, "./markups/markupB.html");
        that = widget2;
        widget2.init(countB);
        countB++;
        break;
      case "markup C":
        const widget3 = new Widget(`#${parent}`, "./markups/markupC.html");
        that = widget3;
        widget3.init(countC);
        countC++;
        break;
      default:
        break;
    }
  });
  $("#destroy").on("click", function () {
    const doc = $("[destroy=true]");
    for (tag of doc) {
      console.log(that.instanceId);
      that.destroy(tag);
    }
  });
});
//

//

if (typeof window !== "undefined") {
  console.log("browser ready");
} else {
  const fs = require("fs");
  console.log("This is running in Node.js!");
  fs.writeFileSync("output.txt", "Hello from Node.js!");
}
