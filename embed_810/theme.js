jQuery(function ($) {
  if (cirandas_theme.small_header)
    cirandas_theme.load_small_header();
  else
    cirandas_theme.load_header();

  cirandas_theme.load_navigation();

  cirandas_theme.load_footer();
  
  jQuery('#tb-middle').html('Loja de Economia Solidária');
});
