(function () {
  const divContainer = document.querySelector(".widget-data");

  const config = {
    dataRestaurant: divContainer
      ? divContainer.getAttribute("restoId") || ""
      : "",
    color: divContainer ? divContainer.getAttribute("color") || "" : "",
  };

  let iframe = document.getElementById("reservation-widget-iframe");

  if (!iframe) {
    let restaurantId = config.dataRestaurant;
    let color = config.color;
    console.log(restaurantId);

    iframe = document.createElement("iframe");
    iframe.src = ` https://itsdimitrie.github.io/table.one-widget-test?restaurantId=${restaurantId}&color=${color}`;
    iframe.id = "reservation-widget-iframe";
    iframe.style.all = "initial";
    iframe.style.position = "fixed";
    iframe.style.bottom = "1px";
    iframe.style.right = "1px";

    if (divContainer) {
      divContainer.appendChild(iframe);
    } else {
      document.body.appendChild(iframe);
    }
  }

  window.addEventListener("message", (event) => {
    if (event.data.type === "resizeWidget") {
      iframe.style.width = event.data.width;
      iframe.style.height = event.data.height;
    }
  });
})();
