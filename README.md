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

Without this change, a build tool is needed to interpret the bare import as a CSS import. With this change, no build tool is needed in Chrome, Edge, and Firefox. Support in Safari is not yet available. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import/with#browser_compatibility
 and https://web.dev/articles/css-module-scripts for more information on this feature.

Implementation progress can be tracked at the [WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=227967).