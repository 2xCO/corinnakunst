document.addEventListener( "DOMContentLoaded", function() {
  // it's a div, that holds your news
  // it holds ul with news in li elements
  var div = document.getElementById( "scroll-container" );
  div.addEventListener( "scroll", function() {
    var max_scroll = this.scrollHeight - this.clientHeight;
    var current_scroll = this.scrollTop;
    var bottom = 100;
    if ( current_scroll + bottom >= max_scroll ) {
      var ul = document.getElementsByTagName( "ul" )[ 0 ];
      var current = parseInt( ul.dataset.current, 10 );
      var li = document.getElementsByTagName( "li" )[ current ];
      var new_li = li.cloneNode( true );
      ul.appendChild( new_li );
      ul.dataset.current = current + 1;
    }
  } );
} );