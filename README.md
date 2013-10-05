# escapist.js

Escapist is a small JavaScript library that gives **strong protection from cross-site
scripting (XSS)** by aggressively escaping untrusted data for display in HTML.

Escapist is essentially a fork of the excellent
[Reform](https://www.owasp.org/index.php/Category:OWASP_Encoding_Project)
library's JavaScript implementation from [OWASP](https://www.owasp.org),
written by Michael Eddington.

The bulk of the escapist code is Reform's. Escapist provides some small updates
as well as a simpler, namespaced API around the tried-and-true Reform code.
**The core Reform logic has not been modified.**

(I first wrote this code a few years ago as a simple wrapper around Reform, and am recreating
the code now, starting from a clean copy of Reform.js v.0.12, so the code pedigree is clear &
escapist's changes can be reviewed commit by commit in this new git project.)

## Usage

You can use escapist in JavaScript code or templates. Its functions return properly escaped data for inclusion in html:

```
<p> <%= secure.html(untrustedData) %> </p>
```

There are different functions for the different contexts that need escaped data (HTML, HTML attributes, and URL query parameters).

## API

Escapist provides a simple API with clear semantics. It uses a `secure` global namespace with these functions:

* `secure.html( untrustedText )` : escape for inclusion of the string `untrustedText` in HTML elements.
* `secure.attr( untrustedText )` : escape for inclusion in a quoted HTML attribute.
* `secure.urlParm( untrustedText )` : escape a value for use in an URL query parameter.


## License

MIT License.

Escapist is MIT licensed, and it includes modified code from Reform, which is also uses the MIT license. See the [license file](LICENSE.txt) for the gory details.

