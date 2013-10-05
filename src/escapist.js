
(function(window){

    // global namespace 'escapist', plus alias 'secure'
    var escapist = window.escapist = {};
    window.secure = window.escapist;


    escapist.html = function($str, $default) {
        if($str == null || $str.length == 0)
        {
            $str = ($default == null ? '' : $default);
        }

        $out = '';
        $len = $str.length;

        // Allow: a-z A-Z 0-9 SPACE , .
        // Allow (dec): 97-122 65-90 48-57 32 44 46

        for($cnt = 0; $cnt < $len; $cnt++)
        {
            $c = $str.charCodeAt($cnt);
            if( ($c >= 97 && $c <= 122) ||
                ($c >= 65 && $c <= 90 ) ||
                ($c >= 48 && $c <= 57 ) ||
                $c == 32 || $c == 44 || $c == 46 )
            {
                $out += $str.charAt($cnt);
            }
            else
            {
                $out += '&#' + $c + ';';
            }
        }

        return $out;
    };

    // legacy Reform API
    escapist.HtmlEncode = escapist.html;


    escapist.attr = function($str, $default) {
        if($str == null || $str.length == 0)
        {
            $str = ($default == null ? '' : $default);
        }

        $out = '';
        $len = $str.length;

        // Allow: a-z A-Z 0-9
        // Allow (dec): 97-122 65-90 48-57

        for($cnt = 0; $cnt < $len; $cnt++)
        {
            $c = $str.charCodeAt($cnt);
            if( ($c >= 97 && $c <= 122) ||
                ($c >= 65 && $c <= 90 ) ||
                ($c >= 48 && $c <= 57 ) )
            {
                $out += $str.charAt($cnt);
            }
            else
            {
                $out += '&#' + $c + ';';
            }
        }

        return $out;
    };

    // legacy Reform API
    escapist.HtmlAttributeEncode = escapist.attr;


    var hD="0123456789ABCDEF";
    function d2h(d) {
        var h = hD.substr(d&15,1);
        while(d>15)
        {
            d>>=4;
            h=hD.substr(d&15,1)+h;
        }

        return h;
    };

    escapist.JsString = function($str, $default) {
        if($str == null || $str.length == 0)
        {
            $str = ($default == null ? '' : $default);

            if($str == null || $str.length == 0)
            {
                return '\'\'';
            }
        }

        $out = '\'';
        $len = $str.length;

        // Allow: a-z A-Z 0-9 SPACE , .
        // Allow (dec): 97-122 65-90 48-57 32 44 46

        for($cnt = 0; $cnt < $len; $cnt++)
        {
            $c = $str.charCodeAt($cnt);
            if( ($c >= 97 && $c <= 122) ||
                ($c >= 65 && $c <= 90 ) ||
                ($c >= 48 && $c <= 57 ) ||
                $c == 32 || $c == 44 || $c == 46 )
            {
                $out += $str.charAt($cnt);
            }
            else if( $c <= 127 )
            {
                $hex = d2h($c);
                if( $hex.length < 2 )
                {
                    '0' + $hex;
                }

                $out += '\\x' + $hex;
            }
            else
            {
                $hex = d2h($c);
                while( $hex.length < 4 )
                {
                    $hex = '0' + $hex;
                }

                $out += '\\u' + $hex;
            }
        }

        return $out + '\'';
    };

})(window);
