(function($){
    $(function() {
        $('html[lang=en]').each(function() {
            var aviso = $("<div id='msg-bug-traducao' class='atention' style='width: 400px; position: absolute; right: 50px; z-index: 10000;'><p><strong>Atenção:</strong>: infelizmente estamos com um problema no Cirandas, e algumas vezes o texto aparece em inglês. Para resolver isso, <a href='javascript:history.go(0)'>clique aqui</a> ou simplesmente faça o recarregamento do site no seu navegador.</p><div class='button-bar'><a class='button with-text icon-close' href='#' onclick='jQuery(\"#msg-bug-traducao\").hide(); return false;'>Fechar</a></div></div>");
            aviso.prependTo('#content');
        });
    });
})(jQuery);
