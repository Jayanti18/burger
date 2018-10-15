// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function () {

  
// ************************
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devourIt").on("click", function() {
   
    var id = $(this).attr("data-id");
    var orderBurger = $(this).data("orderBurger");

    var newOderBurgerState = {
      devoured: 1
      // id:id
      // var newBurger = {
        // name: $("#bu").val().trim(),
        // devoured: true
    };

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newOderBurgerState
    
    }).then(
      function() {
        console.log("devoured", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
// });
