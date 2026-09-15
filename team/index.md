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

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}
{% include list.html data="members" component="portrait" filter="role != 'principal-investigator'" %}
