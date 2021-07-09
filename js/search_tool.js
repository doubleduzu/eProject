
    function myFunction() {
         $(document).ready(function() {
               $('#box-search').on('keyup', function(event) {
                   event.preventDefault();
                  /* Act on the event */
                  var tukhoa = $(this).val().toLowerCase();
                  $('.card').filter(function() {
                  $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa) > -1);
                });
            });
        });
    }
 