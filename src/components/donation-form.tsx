"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    QGIV?: {
      Embed?: {
        initializeEmbeds?: () => void;
      };
    };
  }
}

/**
 * Live embed from the Squarespace code block on
 * https://www.punchworx.org/get-involved (captured from the rendered DOM).
 * The public snippet is Qgiv embed 92107. That form then talks to
 * Bloomerang payments at 1pay.crm.bloomerang.co. There is no separate
 * Bloomerang widget id in the page.
 *
 * <div class="qgiv-embed-container" data-qgiv-embed="true" data-embed-id="92107"
 *   data-embed="https://secure.qgiv.com/for/punchworx/embed/92107/" data-width="630"></div>
 * <script src="https://secure.qgiv.com/resources/core/js/embed.js" id="qgiv-embedjs"></script>
 */
export function DonationForm() {
  useEffect(() => {
    const boot = () => {
      window.QGIV?.Embed?.initializeEmbeds?.();
    };
    const existing = document.getElementById("qgiv-embedjs");
    if (existing) {
      boot();
      return;
    }
    const script = document.createElement("script");
    script.id = "qgiv-embedjs";
    script.src = "https://secure.qgiv.com/resources/core/js/embed.js";
    script.async = true;
    script.onload = () => boot();
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="qgiv-embed-container"
      data-qgiv-embed="true"
      data-embed-id="92107"
      data-embed="https://secure.qgiv.com/for/punchworx/embed/92107/"
      data-width="630"
    />
  );
}
