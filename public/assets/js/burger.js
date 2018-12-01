
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");
    var eatenStatus = $(this).data("devouered");

    var isDevoured = {
      devoured: eatenStatus
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: isDevoured
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#submit-burger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#new-burger").val().trim()
    };
        //clear the html entry before reload
$("#new-burger").val("")
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );

  });
}
);
