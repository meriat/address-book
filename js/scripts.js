$(document).ready(function(){
  $("#newContact").click(function(){
    $("form#input").show();
});
  $("form#input").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var number = $("#number").val();
    var email = $("#email").val();
    var address = $("#addres").val();
    var itemCount = ($("[id^='item-']").length + 1);
    var element = $("<p id='item-" + itemCount + "'>" + name + "</p>");
    $("#existingContact").append(element);
    $("p#item-"+itemCount).click(function() {

      $("p#item-"+itemCount).append("<p>"+number+"</p>"+"<p>"+email+"</p>"+"<p>"+address+"</p>");


    });
  });


});
