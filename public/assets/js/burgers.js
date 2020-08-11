$(function() {
    $(".devour-btn").on("click", function(event) { 
        var id = `${this.id}`
        $.ajax("/api/burgers/"+ id , {
          type: "PUT",
        }).then(
          function() {
            location.reload();
          }
        );
      });  
})

$(".add-btn").on("click", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger-name").val().trim()
    };
    console.log(newBurger)

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });