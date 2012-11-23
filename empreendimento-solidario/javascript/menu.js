jQuery(function($) {

  // categories menu
  $('#category1, #category2, #category3').each(function() {
    $(this).contents().first().wrap('<a href="#" class="linkSubMenu"/>').wrap('<span/>');
  });
  $('#category1, #category2, #category3').mouseover(function() {
    $(this).find('.linkSubMenu').addClass('menu-opened');
    $(this).find('ul').show();
  });
  $('#category1, #category2, #category3').mouseout(function() {
    $(this).find('ul').hide();
    $(this).find('.linkSubMenu').removeClass('menu-opened');
  });

  // user menu
  $('#user_menu').mouseover(function() {
    $('#user_menu_ul').show();
  });
  $('#user_menu').mouseout(function() {
    $('#user_menu_ul').hide();
  });

  // assets menu
  $('#assets_menu_ul').mouseover(function() {
    $(this).height(115);
  });
  $('#assets_menu_ul').mouseout(function() {
    $(this).height(56);
  });


});
