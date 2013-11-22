
if (typeof cirandas_theme === 'undefined') cirandas_theme = {};

cirandas_theme.load_small_header = function () {
  jQuery('#cirandas-top-bar').append(jQuery('#user').get(0).outerHTML);
  jQuery('#cirandas-top-bar #tb-middle').prepend(jQuery('#navigation').get(0).outerHTML);

  jQuery('#tb-search input').focusout(function () {
    if (this.value == '')
    jQuery('#tb-search').toggle();
  });
  jQuery('#header-search').click(function () {
    jQuery('#tb-search').css('left', jQuery(this).position().left).toggle();
    jQuery('#tb-search input').focus();
  });
};

cirandas_theme.change_title_position = function() {
  var title;

  title = jQuery('#content h1.page-title');
  // check if page-title was statically added
  if (title.length > 0)
    return;

  if (!cirandas_theme.title_name)
    title = jQuery('#content h1').first();
  else {
    // remove any previous added
    jQuery('#content h1.page-title').remove();

    if (!cirandas_theme.is_enterprise)
      title = jQuery('<h1>'+cirandas_theme.title_name+'</h1>');
    else {
      title = jQuery('<h1>'+cirandas_theme.title_name+'</h1>')
        .append("<span class='solidarity-economy'>Empreendimento de Economia Solidária</span>");

      jQuery('.article-body-enterprise-homepage').siblings('div').find('h1.title').remove();
    }
  }

  title.addClass('page-title').prependTo('#content');

  if (jQuery('.no-boxes').length > 0) title.addClass('no-boxes');
};

cirandas_theme.load_footer = function () {
  // Hide profile footer if empty
  jQuery('#profile-footer:empty').hide();

  // Add space between login button and signup link (RT#20190)
  jQuery('.login-block .login-box .button-bar input').after("<br/>");

  // Hide trigger link 'My enterprises'
  jQuery('#manage-enterprises .simplemenu-trigger').remove();
  jQuery('#manage-enterprises ul').removeClass('simplemenu-submenu');
  jQuery('#manage-enterprises ul li').removeClass('simplemenu-item');
};

cirandas_theme.load_header = function() {
  var menus = '#category1, #category2, #category3';

  // Split categories top menu in two
  jQuery('#cat_menu ul').makeacolumnlists({ cols : 2, colWidth : 127, equalHeight : true, startN : 1 });

  jQuery(menus).click(function() {
    jQuery(this).siblings(menus).removeClass('category-menu-clicked');
    jQuery('.li_container:visible').hide('slide', { 'direction' : 'up' }, 'slow');
    jQuery(this).toggleClass('category-menu-clicked');
    jQuery(this).find('.li_container:hidden').show('slide', { 'direction' : 'up' }, 'slow');
    jQuery('#cat_menu').css('-moz-border-radius-bottomleft', '3px');
    if (jQuery(this).hasClass('category-menu-clicked') && jQuery(this).attr('id') == 'category1')
    jQuery('#cat_menu').css('-moz-border-radius-bottomleft', '0');
  });

  jQuery('body').click(function() {
    jQuery('.li_container:visible').hide('slide', { 'direction' : 'up' }, 'slow');
    jQuery('#cat_menu').css('-moz-border-radius-bottomleft', '3px');
    jQuery(menus).removeClass('category-menu-clicked');
  });
  jQuery(menus).click(function(e) { e.stopPropagation(); });
};

cirandas_theme.alignMenuItems = function (ul) {
  var totEltWidth = 0;
  var menuWidth = ul[0].offsetWidth;
  var availableWidth = 0;
  var space = 0;

  var elts = ul.find(jQuery('li'));
  elts.each(function(inx, elt) {
    // reset paddding to 0 to get correct offsetwidth
    jQuery(elt).css('padding-left', '0px');
    jQuery(elt).css('padding-right', '0px');

    totEltWidth += elt.offsetWidth;
  });
  availableWidth = menuWidth - totEltWidth;
  space = availableWidth/(elts.length-1);

  elts.each(function(inx, elt) {
    if (inx != elts.size()-1)
    jQuery(elt).css('padding-right', space + 'px');
  });
};

cirandas_theme.load_navigation = function () {
  var navigation = this.small_header ? jQuery('#cirandas-top-bar #navigation') : jQuery('#navigation');

  if (this.calculate_spacing)
    this.alignMenuItems(navigation.find('ul'));

  // Adjust navigation submenu trigger width
  var contents = parseInt(navigation.find('#submenu-contents').first().width());
  navigation.find('#submenu-contents-trigger').first().width(contents - 2);
  jQuery('head').append('<style type="text/css">#navigation-contents .menu-submenu, #navigation-contents .menu-submenu li {width: ' + contents + 'px;}</style>');

  var comm = parseInt(navigation.find('#submenu-communities').first().width());
  navigation.find('#submenu-communities-trigger').first().width(comm - 2);
  jQuery('head').append('<style type="text/css">#navigation-communities .menu-submenu, #navigation-communities .menu-submenu li {width: ' + comm + 'px;}</style>');

  var people = parseInt(navigation.find('#submenu-people').first().width());
  navigation.find('#submenu-people-trigger').first().width(people - 2);
  jQuery('head').append('<style type="text/css">#navigation-people .menu-submenu, #navigation-people .menu-submenu li {width: ' + people + 'px;}</style>');

  navigation.find('#submenu-contents-trigger, #submenu-communities-trigger, #submenu-people-trigger').show();
};

