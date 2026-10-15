/*
  solid header background once the home page hero is scrolled past.
*/

{
  const onScroll = () => {
    const header = document.querySelector("header[data-big]");
    if (!header) return;
    header.toggleAttribute("data-scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("load", onScroll);
}
