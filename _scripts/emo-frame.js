window.addEventListener("message", (event) => {
  const data = event.data;
  if (!data || data.source !== "emomanifold" || typeof data.height !== "number") return;
  document.querySelectorAll("iframe.emo-frame").forEach((frame) => {
    if (frame.contentWindow !== event.source) return;
    const height = Math.min(Math.max(data.height, 280), 920);
    frame.style.height = height + "px";
  });
});
