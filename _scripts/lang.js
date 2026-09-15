{
  const STORAGE_KEY = "imcrl-lang";

  const normalize = (lang) => (lang === "zh" ? "zh" : "en");

  const apply = (lang) => {
    lang = normalize(lang);
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll("[data-lang-set]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        button.dataset.langSet === lang ? "true" : "false"
      );
    });

    document.querySelectorAll("[data-tooltip-en]").forEach((element) => {
      const text =
        lang === "zh"
          ? element.dataset.tooltipZh || element.dataset.tooltipEn
          : element.dataset.tooltipEn;
      element.dataset.tooltip = text;
      if (element._tippy) element._tippy.setContent(text);
    });

    document.querySelectorAll("[data-placeholder-en]").forEach((element) => {
      element.placeholder =
        lang === "zh"
          ? element.dataset.placeholderZh
          : element.dataset.placeholderEn;
    });

    const titleEn = document.documentElement.dataset.titleEn;
    const titleZh = document.documentElement.dataset.titleZh;
    if (titleEn) document.title = lang === "zh" && titleZh ? titleZh : titleEn;

    window.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
  };

  window.setImcrlLang = apply;

  const boot = () =>
    apply(document.documentElement.dataset.lang || localStorage.getItem(STORAGE_KEY) || "en");

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang-set]");
    if (!button) return;
    apply(button.dataset.langSet);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
}
