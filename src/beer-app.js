import { LitElement, html, css } from "./lit-beercss";
import "./nested-component.js";

class BeerApp extends LitElement {
  render() {
    return html`
      <div class="field label border">
        <input type="text" />
        <label>Main component input</label>
      </div>
      <nested-component></nested-component>
    `;
  }
}

customElements.define("beer-app", BeerApp);
