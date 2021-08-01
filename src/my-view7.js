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

class MyView7 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>
      <div class="card">
        <h1>End-User License Agreement (EULA)</h1>
        <h2>EULA of <span class="app_name">Apps and Softwares by MELVINHGF.NET : Your Online Solutions Provider</span></h2>

<p>This End-User License Agreement ("EULA") is a legal agreement between you and <span class="company_name">MELVINHGF.NET: Your Online Solutions Provider</span>.</p>

<p>This EULA agreement governs your acquisition and use of every softwares and apps ("Software") directly from <span class="company_name">MELVINHGF.NET: Your Online Solutions Provider</span> or indirectly through a <span class="company_name">MELVINHGF.NET: Your Online Solutions Provider</span> authorized reseller or distributor (a "Reseller"). </p>

<p>Please read this EULA agreement carefully before completing the installation process and using the <span class="app_name">MELVINHGF.NET : Your Online Solutions Provider's</span> apps and software. It provides a license to use <span class="app_name">MELVINHGF.NET : Your Online Solutions Provider's</span> apps and softwares and contains warranty information and liability disclaimers.</p>

<p>If you register for a free trial of the <span class="app_name">MELVINHGF.NET : Your Online Solutions Provider's</span> apps and softwares, this EULA agreement will also govern that trial. By clicking "accept" or installing and/or using the Software, you are confirming your acceptance of the Software and agreeing to become bound by the terms of this EULA agreement.</p>

<p>If you are entering into this EULA agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these terms and conditions. If you do not have such authority or if you do not agree with the terms and conditions of this EULA agreement, do not install or use the Software, and you must not accept this EULA agreement.</p>

<p>This EULA agreement shall apply only to the Software supplied by <span class="company_name">MELVINHGF.NET: Your Online Solutions Provider</span> herewith regardless of whether other apps and software are referred to or described herein. The terms also apply to any <span class="company_name">MELVINHGF.NET: Your Online Solutions Provider</span> updates, supplements, Internet-based services, and support services for the Software, unless other terms accompany those items on delivery. If so, those terms apply.</p>

<h2>License Grant</h2>

<p><span class="company_name">MELVINHGF.NET: Your Online Solutions Provider</span> hereby grants you a personal, non-transferable, non-exclusive licence to use the <span class="app_name">MELVINHGF.NET : Your Online Solutions Provider's</span> apps and softwares on your devices in accordance with the terms of this EULA agreement.</p>

<p>You are permitted to load the Software (for example a PC, laptop, mobile or tablet) under your control. You are responsible for ensuring your device meets the minimum requirements of the apps and softwares of <span class="app_name">MELVINHGF.NET : Your Online Solutions Provider</span>.</p>

<p>You are not permitted to:</p>

<ul>
<li>Edit, alter, modify, adapt, translate or otherwise change the whole or any part of the Software nor permit the whole or any part of the Software to be combined with or become incorporated in any other software, nor decompile, disassemble or reverse engineer the Software or attempt to do any such things</li>
<li>Reproduce, copy, distribute, resell or otherwise use the Software for any commercial purpose</li>
<li>Allow any third party to use the Software on behalf of or for the benefit of any third party</li>
<li>Use the Software in any way which breaches any applicable local, national or international law</li>
<li>use the Software for any purpose that <span class="company_name">MELVINHGF.NET: Your Online Solutions Provider</span> considers is a breach of this EULA agreement</li>
</ul>

<h2>Intellectual Property and Ownership</h2>

<p><span class="company_name">MELVINHGF.NET: Your Online Solutions Provider</span> shall at all times retain ownership of the Software as originally downloaded by you and all subsequent downloads of the Software by you. The Software (and the copyright, and other intellectual property rights of whatever nature in the Software, including any modifications made thereto) are and shall remain the property of <span class="company_name">MELVINHGF.NET: Your Online Solutions Provider</span>.</p>

<p><span class="company_name">MELVINHGF.NET: Your Online Solutions Provider</span> reserves the right to grant licences to use the Software to third parties.</p>

<h2>Termination</h2>

<p>This EULA agreement is effective from the date you first use the Software and shall continue until terminated. You may terminate it at any time upon written notice to <span class="company_name">MELVINHGF.NET: Your Online Solutions Provider</span>.</p>

<p>It will also terminate immediately if you fail to comply with any term of this EULA agreement. Upon such termination, the licenses granted by this EULA agreement will immediately terminate and you agree to stop all access and use of the Software. The provisions that by their nature continue and survive will survive any termination of this EULA agreement.</p>

<h2>Governing Law</h2>

<p>This EULA agreement, and any dispute arising out of or in connection with this EULA agreement, shall be governed by and construed in accordance with the laws of <span class="country">Singapore</span>.</p>
<p>This document was last updated on August 1, 2021.</p>
      </div>
    `;
  }
}

window.customElements.define('my-view7', MyView7);
