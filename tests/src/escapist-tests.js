/*
    Escapist.js tests

    Some of these tests are based on the original Reform javascript tests
*/

//------------------------------
// escape.html() tests

module('Escapist.js html()', {});

test( "html() doesn't escape 'safe' HTML chars", function() {
    var src = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321 ,.',
        result = escapist.html(src);

    equal(result, src);
});

test( "html() escapes 'big 6' evil chars, plus slash & backslash", function() {
    var src = '<>&\'"/\\',
        expected = '&#60;&#62;&#38;&#39;&#34;&#47;&#92;',
        result = escapist.html(src);

    equal(result, expected);
});

test( "html() escapes all punctuation except space, comma & period", function() {
    var src = '`~!@#$%^&*()_+=-{}|\\][:;\'/?><"',
        expected = '&#96;&#126;&#33;&#64;&#35;&#36;&#37;&#94;&#38;&#42;&#40;&#41;&#95;&#43;&#61;&#45;&#123;&#125;&#124;&#92;&#93;&#91;&#58;&#59;&#39;&#47;&#63;&#62;&#60;&#34;',
        result = escapist.html(src);

    equal(result, expected);
});

test( "html() escapes all control chars, 0-31", function() {
    var src = '',
        expected = '',
        result;

    for (var i = 0; i <= 31; i++) {
        src += String.fromCharCode(i);
        expected += '&#' + i + ';';
    }

    result = escapist.html(src);
    equal(result, expected);
});

test( "html() escapes all unicode chars, 127 - 0xFFFF", function() {
    var src = '',
        expected = '',
        result, low, high,
        breakpoints = [127, 10000, 20000, 30000, 40000, 50000, 60000, 0xFFFF];

    for (var point = 0; point < breakpoints.length - 1; point++) {
        low = breakpoints[point];
        high = breakpoints[point + 1];
        console.log('range = ' + low + ' - ' + high);

        for (var i = low; i <= high; i++) {
            src += String.fromCharCode(i);
            expected += '&#' + i + ';';
        }

        result = escapist.html(src);
       equal(result, expected);
    }
});


//------------------------------
// escape.attr() tests

module('Escapist.js attr()', {});

test( "attr() doesn't escape 'safe' HTML chars", function() {
    var src = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321',
        result = escapist.attr(src);

    equal(result, src);
});

test( "attr() escapes 'big 6' evil chars, plus slash & backslash", function() {
    var src = '<>&\'"/\\',
        expected = '&#60;&#62;&#38;&#39;&#34;&#47;&#92;',
        result = escapist.attr(src);

    equal(result, expected);
});

test( "attr() escapes all punctuation except space, comma & period", function() {
    var src = ' ,.`~!@#$%^&*()_+=-{}|\\][:;\'/?><"',
        expected = '&#32;&#44;&#46;&#96;&#126;&#33;&#64;&#35;&#36;&#37;&#94;&#38;&#42;&#40;&#41;&#95;&#43;&#61;&#45;&#123;&#125;&#124;&#92;&#93;&#91;&#58;&#59;&#39;&#47;&#63;&#62;&#60;&#34;',
        result = escapist.attr(src);

    equal(result, expected);
});

test( "attr() escapes all control chars, 0-31", function() {
    var src = '',
        expected = '',
        result;

    for (var i = 0; i <= 31; i++) {
        src += String.fromCharCode(i);
        expected += '&#' + i + ';';
    }

    result = escapist.attr(src);
    equal(result, expected);
});

test( "attr() escapes all unicode chars, 127 - 0xFFFF", function() {
    var src = '',
        expected = '',
        result, low, high,
        breakpoints = [127, 10000, 20000, 30000, 40000, 50000, 60000, 0xFFFF];

    for (var point = 0; point < breakpoints.length - 1; point++) {
        low = breakpoints[point];
        high = breakpoints[point + 1];
        console.log('range = ' + low + ' - ' + high);

        for (var i = low; i <= high; i++) {
            src += String.fromCharCode(i);
            expected += '&#' + i + ';';
        }

        result = escapist.attr(src);
        equal(result, expected);
    }
});

