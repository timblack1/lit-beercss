# Purpose

Want to use [Beer CSS](https://www.beercss.com/) in your LitElement components? This package provides a base class that includes Beer CSS styles, making it easy to create beautiful components with minimal effort.

# Installation

To install this package, run

```bash
npm install lit-beercss
```

# Usage

To use the Beer CSS styles in your LitElement components, you can extend the `BeerElement` class provided by this package. Here's an example:

```javascript
import { LitElement } from 'lit-beercss';

// Use the LitElement class like normal to create your own components with Beer CSS styles.
class MyComponent extends LitElement {
  // Your component code here
}
```

# Demo

To see a demo of this package in action, run the following command:

```bash
npm run start
```

# Limitation

`src/lit-beercss.js` contains the following line:

```javascript
import beerCssStyles from "../node_modules/beercss/dist/cdn/beer.min.css" with { type: "css" };
```

Without this change, a build tool is needed to interpret the bare import as a CSS import. With this change, no build tool is needed in Chrome and Edge in version 93. Support in Firefox and Safari is not yet available. Implementation progress can be tracked at the Gecko bug and WebKit bug, respectively.

https://bugzilla.mozilla.org/show_bug.cgi?id=1720570 https://bugs.webkit.org/show_bug.cgi?id=227967

See https://fullystacked.net/import-attributes/ and https://web.dev/articles/css-module-scripts for more detailed explanations.