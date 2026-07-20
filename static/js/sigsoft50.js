(function () {
  function makeButton(label, direction) {
    var button = document.createElement("button");
    button.className = "sigsoft50-carousel-button";
    button.type = "button";
    button.setAttribute("aria-label", label);
    button.innerHTML = direction === "previous" ? "&larr;" : "&rarr;";
    return button;
  }

  function initCarousel(track, index) {
    if (!window.jQuery || !window.jQuery.fn.carousel) {
      return;
    }

    var frames = Array.prototype.slice.call(track.children);
    if (!frames.length) {
      return;
    }

    var carouselId = "sigsoft50-carousel-" + (index + 1);
    var inner = document.createElement("div");
    var controls = document.createElement("div");
    var previous = makeButton("Previous frame", "previous");
    var next = makeButton("Next frame", "next");
    var counter = document.createElement("span");

    track.id = carouselId;
    track.classList.add("carousel", "slide", "sigsoft50-bootstrap-carousel");
    track.setAttribute("data-interval", "false");
    track.setAttribute("data-ride", "false");

    inner.className = "carousel-inner";
    inner.setAttribute("role", "listbox");
    controls.className = "sigsoft50-carousel-controls";
    counter.className = "sigsoft50-carousel-counter";

    frames.forEach(function (frame, frameIndex) {
      var item = document.createElement("div");
      item.className = frameIndex === 0 ? "item active" : "item";
      item.appendChild(frame);
      inner.appendChild(item);
    });

    track.appendChild(inner);
    controls.appendChild(previous);
    controls.appendChild(counter);
    controls.appendChild(next);

    var carousel = window.jQuery(track);

    function updateCounter() {
      var active = inner.querySelector(".item.active");
      var activeIndex = Array.prototype.indexOf.call(inner.children, active);
      var caption = active.querySelector("figcaption, .sigsoft50-story-video-caption");

      counter.textContent = "Frame " + (activeIndex + 1) + " of " + frames.length;
      if (caption && controls.parentNode !== caption) {
        caption.appendChild(controls);
      }
    }

    previous.addEventListener("click", function () {
      carousel.carousel("prev");
    });

    next.addEventListener("click", function () {
      carousel.carousel("next");
    });

    carousel.on("slid.bs.carousel", updateCounter);
    carousel.carousel({
      interval: false,
      keyboard: true,
      pause: true,
      wrap: true
    });
    updateCounter();
  }

  document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.forEach.call(
      document.querySelectorAll(".sigsoft50-frame-grid"),
      initCarousel
    );
  });
}());
