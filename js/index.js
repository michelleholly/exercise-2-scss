var $menuTrigger = $('[data-ic-class="button-trigger"]'),
    $menuOverlay = $('[data-ic-class="overlay"]'),
    $menuItem = $('.menu-item'),
    activeClass = 'active';

$menuTrigger.click(function(){
  $menuTrigger.toggleClass(activeClass);
  $menuOverlay.fadeToggle(400).toggleClass(activeClass);
});
$menuItem.click(function(){
  $menuTrigger.toggleClass(activeClass);
  $menuOverlay.fadeToggle(400).toggleClass(activeClass);
});