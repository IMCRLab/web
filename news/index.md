---
title: News
title_zh: 新闻
nav:
  order: 3
  tooltip: Lab news and updates
  tooltip_en: Lab news and updates
  tooltip_zh: 新闻与动态
redirect_from:
  - /blog
---

# {% include icon.html icon="fa-regular fa-newspaper" %}{% include lang.html en="News" zh="新闻" %}

{% capture en %}
News, talks, and updates from IMCRL.
{% endcapture %}
{% capture zh %}
实验室新闻、报告与动态。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}

{% include section.html %}

{% include search-box.html %}

{% include tags.html tags=site.tags %}

{% include search-info.html %}

{% include list.html data="posts" component="post-excerpt" %}
