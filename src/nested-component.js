import { LitElement, html, css } from "./lit-beercss";

class NestedComponent extends LitElement {
  render() {
    return html`
      <div class="field label border">
        <input type="text" />
        <label>Nested component input</label>
      </div>
    `;
  }
}

customElements.define("nested-component", NestedComponent);
