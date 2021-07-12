var $searchToggle = $('.search-toggle');

$searchToggle.on('click', function (e) {
    var $target = $(this);
    var $container = $target.closest('.search-wrapper');
    
    if (!$container.hasClass('active')) {
        $container.addClass('active');
        e.preventDefault();
    } else if ($container.hasClass('active') && $target.closest('.input-holder').length == 0) {
        $container.removeClass('active');
        $container.find('.search-input').val('');
        
    }
});