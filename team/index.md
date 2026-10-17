---
title: Team
title_zh: 团队
nav:
  order: 2
  tooltip: About our team
  tooltip_en: About our team
  tooltip_zh: 团队介绍
---

# {% include icon.html icon="fa-solid fa-users" %}{% include lang.html en="Team" zh="团队" %}

{% capture en %}
IMCRL is led by Professor Min Li and currently has more than twenty faculty members and students.
{% endcapture %}
{% capture zh %}
实验室由李敏教授领衔，现有师生二十余人。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-handshake" %}{% include lang.html en="Interaction" zh="交互" %}

{% assign people = site.members | where: "group", "interaction" | sort: "order" %}
{% for person in people %}
  {% include portrait.html lookup=person.slug %}
{% endfor %}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-hand" %}{% include lang.html en="Manipulation" zh="操作" %}

{% assign people = site.members | where: "group", "manipulation" | sort: "order" %}
{% for person in people %}
  {% include portrait.html lookup=person.slug %}
{% endfor %}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-bolt" %}{% include lang.html en="Electromagnetics" zh="电磁" %}

{% assign people = site.members | where: "group", "electromagnetics" | sort: "order" %}
{% for person in people %}
  {% include portrait.html lookup=person.slug %}
{% endfor %}

{% include section.html %}

## {% include icon.html icon="fa-solid fa-layer-group" %}{% include lang.html en="Others" zh="其他" %}

{% assign people = site.members | where: "group", "others" | sort: "order" %}
{% for person in people %}
  {% include portrait.html lookup=person.slug %}
{% endfor %}
