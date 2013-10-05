
(function(window) {

    // global namespace 'escapist', plus alias 'secure'
    var escapist = window.escapist = {};
    window.secure = window.escapist;


    escapist.html = function($str, $default) {
        if ($str == null || $str.length == 0) {
            $str = ($default == null ? '' : $default);
        }

        $out = '';
        $len = $str.length;

        // Allow: a-z A-Z 0-9 SPACE , .
        // Allow (dec): 97-122 65-90 48-57 32 44 46

        for ($cnt = 0; $cnt < $len; $cnt++) {
            $c = $str.charCodeAt($cnt);
            if ( ($c >= 97 && $c <= 122) ||
                ($c >= 65 && $c <= 90 ) ||
                ($c >= 48 && $c <= 57 ) ||
                $c == 32 || $c == 44 || $c == 46 ) {
                $out += $str.charAt($cnt);
            }
            else {
                $out += '&#' + $c + ';';
            }
        }

        return $out;
    };

    // legacy Reform API
    escapist.HtmlEncode = escapist.html;


    escapist.attr = function($str, $default) {
        if ($str == null || $str.length == 0) {
            $str = ($default == null ? '' : $default);
        }

        $out = '';
        $len = $str.length;

        // Allow: a-z A-Z 0-9
        // Allow (dec): 97-122 65-90 48-57

        for ($cnt = 0; $cnt < $len; $cnt++) {
            $c = $str.charCodeAt($cnt);
            if ( ($c >= 97 && $c <= 122) ||
                ($c >= 65 && $c <= 90 ) ||
                ($c >= 48 && $c <= 57 ) ) {

                $out += $str.charAt($cnt);
            }
            else {
                $out += '&#' + $c + ';';
            }
        }

        return $out;
    };

    // legacy Reform API
    escapist.HtmlAttributeEncode = escapist.attr;

})(window);
