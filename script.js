$(document).ready(function () {
  $("#title").focus();     // Now works because #title exists
  autosize($("#text"));    // autosize from CDN plugin
});
