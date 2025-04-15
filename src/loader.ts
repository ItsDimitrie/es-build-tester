document.addEventListener("DOMContentLoaded", function () {
  (function (document, scriptTag, scriptId) {
    const firstScript = document.getElementsByTagName(scriptTag)[0];
    if (document.getElementById(scriptId)) return;

    const scriptElement = document.createElement(scriptTag);
    scriptElement.id = scriptId;
    scriptElement.src =
      "https://itsdimitrie.github.io/table.one-widget-test/embed.js";

    firstScript.parentNode?.insertBefore(scriptElement, firstScript);
  })(document, "script", "reservationWidgetScript");
});
