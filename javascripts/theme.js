

cirandas_theme = {

  load_small_header: function () {
    jQuery('#user').appendTo('#cirandas-top-bar');
    jQuery('#navigation').prependTo('#tb-middle');

    jQuery('#tb-search input').focusout(function () {
      if (this.value == '')
      jQuery('#tb-search').toggle();
    });
    jQuery('#header-search').click(function () {
      jQuery('#tb-search').css('left', jQuery(this).position().left).toggle();
      jQuery('#tb-search input').focus();
    });
  },

  load_footer: function (is_enterprise, title_name) {
    // Hide profile footer if empty
    jQuery('#profile-footer:empty').hide();

    // Change title position
    if (!title_name)
      title = jQuery('#content h1').first();
    else if (!is_enterprise)
      title = jQuery('<h1>'+title_name+'</h1>');
    else {
      title = jQuery('<span>Empreendimento de Economia Solidária</span><h1>'+title_name+'</h1>');
      jQuery('.article-body-enterprise-homepage').siblings('div').find('h1.title').remove();
    }

    title.addClass('page-title').prependTo('#content');
    if (jQuery('.no-boxes').length > 0) title.addClass('no-boxes');

    // Add space between login button and signup link (RT#20190)
    jQuery('.login-block .login-box .button-bar input').after("<br/>");

    // Hide trigger link 'My enterprises'
    jQuery('#manage-enterprises .simplemenu-trigger').remove();
    jQuery('#manage-enterprises ul').removeClass('simplemenu-submenu');
    jQuery('#manage-enterprises ul li').removeClass('simplemenu-item');
  },

  load_header: function() {
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
  },

  alignMenuItems: function (ul) {
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
  },

  load_navigation: function (calculate_spacing) {
    if (calculate_spacing)
      cirandas_theme.alignMenuItems(jQuery('#navigation ul'));

    // Adjust navigation submenu trigger width
    var contents = parseInt(jQuery('#submenu-contents').first().width());
    jQuery('#submenu-contents-trigger').first().width(contents - 2);
    jQuery('head').append('<style type="text/css">#navigation-contents .menu-submenu, #navigation-contents .menu-submenu li {width: ' + contents + 'px;}</style>');

    var comm = parseInt(jQuery('#submenu-communities').first().width());
    jQuery('#submenu-communities-trigger').first().width(comm - 2);
    jQuery('head').append('<style type="text/css">#navigation-communities .menu-submenu, #navigation-communities .menu-submenu li {width: ' + comm + 'px;}</style>');

    var people = parseInt(jQuery('#submenu-people').first().width());
    jQuery('#submenu-people-trigger').first().width(people - 2);
    jQuery('head').append('<style type="text/css">#navigation-people .menu-submenu, #navigation-people .menu-submenu li {width: ' + people + 'px;}</style>');

    jQuery('#submenu-contents-trigger, #submenu-communities-trigger, #submenu-people-trigger').show();
  },

};

