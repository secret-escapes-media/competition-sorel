// insert sticky enter button onto page

// create elements
var container = document.createElement('div'),
    link      = document.createElement('a');

// set data & attributes
container.className = 'sticky-enter';
link.id             = 'tracking-cta-comp-footer';
link.href           = '#competition';
link.className      = 'btn btn--cyan';
link.innerHTML      = 'Enter Now';

// add link to container
container.appendChild(link);

// add to page
$('body').append(container);

// Show and hide enter button based on page scroll position
function enterbar(){
  var st = $(document).scrollTop();
  var page = $('#page').offset().top;
  var competition = ($('#competition').offset().top)-5;

  if( (st > page) && (st < competition) ){
    $('.sticky-enter').addClass('is-stuck');
  }else{
    $('.sticky-enter').removeClass('is-stuck');
  }
}

// run function on scroll and page load
$(document).ready(function(){ enterbar(); });
$(document).scroll(function(){ enterbar(); });