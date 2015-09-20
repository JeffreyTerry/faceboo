function getRandomImagePath() {
    paths = [
        'http://sodwee.com/blog/wp-content/uploads/2015/04/Beware-of-house-prices-th-023.jpg',
        'http://static2.hypable.com/wp-content/uploads/2014/05/Screen-Shot-2014-05-09-at-11.54.23-AM.png',
        'https://upload.wikimedia.org/wikipedia/en/8/8a/American_Horror_Story_Asylum_DVD.jpg'
    ];
    return paths[Math.floor(Math.random() * paths.length)];
}

$(function(){
    setTimeout(function() {
        domHasChanged();
    }, 1000);
    // setTimeout(function() {
    //     $(document).arrive('.img', function() {
    //         var $newElem = $(this);
    //         console.log($newElem.attr('src'));
    //         if(!$newElem.hasClass('faceboo-ghostly-image')) {
    //             console.log('here');
    //             domHasChanged($newElem);
    //         }
    //     });
    // }, 0);
});

function ghostifyImage($item) {
    $item.css('-webkit-filter', 'sepia(80%) grayscale(20%)');
    var topPositionOffset;
    if($item.css('position') === 'absolute') {
        topPositionOffset = 0;
    } else {
        topPositionOffset = $item.height();
    }
    var wrapperHtml = '<div style="position: relative; height=0px; width=0px;"></div>';
    var ghostHtml = '<img class="faceboo-ghostly-image" src="' + getRandomImagePath() + '"' +
                    'height=' + $item.height() + ' width=' + $item.width() + ' style="height=' + $item.height() +
                    'px; width=' + $item.width() + 'px; position: absolute; top: -' +
                    (topPositionOffset + ($item.outerHeight() - $item.height()) / 2) +
                    'px; opacity: 0.7; left: ' + ($item.outerWidth() / 2 - $item.width() / 2) +
                    'px; right: ' + ($item.outerWidth() / 2 - $item.width() / 2) +
                    'px; bottom: -' + ($item.outerHeight() / 2 - $item.height() / 2) + 'px;">';
    var $wrapper = $item.after(wrapperHtml);
    var $next = $wrapper.next().append(ghostHtml);
    // $next[0].style.cssText = document.defaultView.getComputedStyle(item, '').cssText;
}

function domHasChanged(jqueryImageElement){
    if(jqueryImageElement) {
        ghostifyImage(jqueryImageElement);
    }

    $('img').each(function(i, item) {
        var $item = $(item);
        ghostifyImage($item);
    });
}

