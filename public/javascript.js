

$(document).ready(function(){
   const newBurgerName = $("button").click(function(){
        const burgerText =$(".burgerText").val()




    const burgerInput = {
        name: burgerText,
      
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: name
      }).then(
        function() {
          console.log("created new burger name");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });


    });

  




