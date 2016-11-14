$(document).ready(function() {
  console.log("3.14");

  $("#addButton").on("click", function() {
    console.log("addition");
    $.ajax({
      type: "POST",
      url: "/calculate" + calculate.type,
      success: function(data) {
        appendToDom(data);
      }
    })
  });

  $("#subtractButton").on("click", function() {
    console.log("subtract");
    $.ajax({
      type: "POST",
      url: "/calculate" + calculate.type,
      success: function(data) {
        appendToDom(data);
      }
    })
  });

  $("#multiplyButton").on("click", function() {
    console.log("multiply");
    $.ajax({
      type: "POST",
      url: "/calculate" + calculate.type,
      success: function(data) {
        appendToDom(data);
      }
    })
  });

  $("#divideButton").on("click", function() {
    console.log("divide");
    $.ajax({
      type: "POST",
      url: "/calculate" + calculate.type,
      success: function(data) {
        appendToDom(data);
      }
    })
  });

});

function appendToDom(solutions) {
  for (var i = 0; i < solutions.length; i++) {
    $("#calcContainer").append("<div class='number'></div>");
    var $el = $("#calcContainer").children().last();
    $el.append("<p>" + solutions[i] + "</p>");

  }
}
