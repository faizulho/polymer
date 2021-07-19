/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">2</div>
        <h1>Cookie Consent</h1>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
        <p>
         <!-- Cookie Consent by https://www.TermsFeed.com -->
<script type="text/javascript" src="//www.termsfeed.com/public/cookie-consent/4.0.0/cookie-consent.js" charset="UTF-8"></script>
<script type="text/javascript" charset="UTF-8">
document.addEventListener('DOMContentLoaded', function () {
cookieconsent.run({"notice_banner_type":"headline","consent_type":"express","palette":"light","language":"en","page_load_consent_levels":["strictly-necessary"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false,"website_name":"MELVINHGF.NET: Your Online Solutions Provider","website_privacy_policy_url":"https://www.termsfeed.com/live/dfff3e93-4e85-4b8d-9aa4-e6658c9b1c5d"});
});
</script>

<noscript>Cookie Consent by <a href="https://www.TermsFeed.com/" rel="nofollow noopener">TermsFeed</a></noscript>
<!-- End Cookie Consent -->
        </p>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
