function myFunction() {
    $(document).ready(function() {
        $('#btn').on('click', function(event) {
            event.preventDefault();
            var tukhoa = $('#box-search').val().toLowerCase();
            $('.row').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(tukhoa) > -1);
            });
        });
    });
}