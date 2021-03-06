# Escapist.js

Escapist is a small JavaScript library that gives strong protection from cross-site
scripting (XSS) by aggressively escaping untrusted data for display in HTML.

Escapist is essentially a fork of the
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

You can use escapist in JavaScript code or HTML templates. Add the built file
from `dist/escapist.js` to your project, include it in your HTML via a
`<script>` tag, and then call the escapist API as needed. Its functions
return properly escaped text for inclusion in HTML:

```
<p> <%= escapist.html( untrustedText ) %> </p>
```

Or you can use the `secure` alias for `escapist`:

```
<p> <%= secure.html( untrustedText ) %> </p>
```

There are different functions for the different client-side contexts in which
untrusted data has to be escaped (HTML & HTML attributes for now; URL query
parameters coming soon).

## API

Escapist provides a simple API with clear semantics. It uses a `secure` global
namespace (and `escapist`, too) with these functions:

* `secure.html( untrustedText )` : escape for inclusion of the string variable `untrustedText` in HTML elements.
* `secure.attr( untrustedText )` : escape for inclusion in a quoted HTML attribute.


## Install Source & Build

Check out the source, install node.js with `npm` package manager, then install
`grunt-cli` globally:

```
npm install -g grunt-cli
```

Then `cd` to the escapist directory and `npm install` to install the
escapist.js dependencies.

To build, run `grunt` to create the full `dist/escapist.js` distribution file.

## Tests

Escape.js uses qunit for unit tests. To run the tests, first run a simple test
server so you can load the tests/index.html file in a browser:

```
node tests/testserver.js
```

Then point your browser to http://localhost:8080/tests/ to run the tests & view the test results.

## License

MIT License.

Escapist is MIT licensed. It includes modified code from Reform, which is also
uses the MIT license. See the [license file](LICENSE.txt) for details.

