// PURPOSE: This file is a wrapper around the LitElement and BeerCSS libraries, and lets you use
// BeerCSS stylesheets in your LitElement components.

// This file handles the following issues you will find if you try to use Beer CSS in a standard
// LitElement component:

// 1. BeerCSS tries to import CSS assuming we're using a build system (but we're not), and
// 2. BeerCSS doesn't pierce the shadow DOM

// To handle those issues, this file extends the LitElement base class and loads the BeerCSS
// stylesheet into the current component's shadow DOM

// DEPENDENCIES:  To use this file as a standalone file, make sure you run
// `npm install lit beercss material-dynamic-colors --save`

// INSTALLATION: Import this file in your component file, and extend the LitElement class from this
// file instead of the one from 'lit'.

import { LitElement as LitElementBase, html, css } from "lit";
import { supportsAdoptingStyleSheets } from 'lit';

// NOTE:  Without this next line, a build tool is needed to interpret the bare import as a CSS import.
// With this line, no build tool is needed in Chrome and Edge in version 93. Support in Firefox
// and Safari is not yet available. Implementation progress can be tracked at the Gecko bug and
// WebKit bug, respectively.

// https://bugzilla.mozilla.org/show_bug.cgi?id=1720570 https://bugs.webkit.org/show_bug.cgi?id=227967

// See https://fullystacked.net/import-attributes/ and https://web.dev/articles/css-module-scripts for more detailed explanations.

// Customized from ../node_modules/beercss/index.js
import beerCssStyles from "../node_modules/beercss/dist/cdn/beer.min.css" with { type: "css" };
document.adoptedStyleSheets = [beerCssStyles];
import "material-dynamic-colors";
import { ui } from "beercss/dist/cdn/beer.min.js";

class LitElement extends LitElementBase {
  connectedCallback() {
    super.connectedCallback();
    if (supportsAdoptingStyleSheets) {
      this.shadowRoot.adoptedStyleSheets = [beerCssStyles];
    } else {
      const style = document.createElement('style');
      style.textContent = beerCssStyles.cssText;
      this.shadowRoot.appendChild(style);
    }
  }
}

export {
  // From BeerCSS
  ui as default,
  ui,
  // From lit
  LitElement,
  html,
  css
};
