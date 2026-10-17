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

{% assign pi = site.members | where_exp: "member", "member.slug == 'li-min'" | first %}

<div class="advisor">
  <div>
    <p class="advisor-kicker">{% include lang.html en="Principal Investigator" zh="实验室负责人" %}</p>
    <h2 class="advisor-name"><a href="{{ pi.url | relative_url }}">{% include lang.html en="Min Li" zh="李敏" %}</a></h2>
    <p class="advisor-role">{% include lang.html en="Professor, School of Mechanical Science and Engineering" zh="机械科学与工程学院教授" %}</p>
    <p class="advisor-meta"><a href="mailto:min.li@hust.edu.cn">min.li@hust.edu.cn</a><br>{% include lang.html en="East Building C508, Advanced Manufacturing Building" zh="先进制造大楼东楼 C508" %}</p>
    <p class="advisor-meta"><a href="https://mse.hust.edu.cn/info/1142/14315.htm">{% include lang.html en="Faculty page" zh="学院教师主页" %}</a></p>
  </div>
  <div class="advisor-bio">
{% capture en %}
Min Li is a professor in the School of Mechanical Science and Engineering at Huazhong University of Science and Technology. He received a B.S. in mechanical design and automation in 2008 and an M.S. in mechatronics in 2011 from HUST, and a Ph.D. in mechanical engineering from Georgia Tech in 2017. From 2018 to 2023 he was an assistant professor, then an associate professor, in the Department of Mechanical Engineering at Minnesota State University.

His research covers intelligent electromagnetic sensing and actuation, and robot perception and control. The work follows two lines, intelligent actuation and flexible sensing, and includes biomimetic joint drives, multimodal tactile arrays, multi-finger dexterous hands, and a biomimetic head. Applications include humanoid interaction, dexterous manipulation, and wearable exoskeletons. In 2022 he was selected for a national overseas high-level youth talent program and as a Huazhong Outstanding Scholar (distinguished appointment).
{% endcapture %}
{% capture zh %}
李敏，华中科技大学机械科学与工程学院教授。2008年6月、2011年6月于华中科技大学分获机械设计及其自动化学士学位与机械电子硕士学位，2017年12月于美国佐治亚理工学院机械工程系获博士学位。2018年8月至2023年7月在明尼苏达州立大学机械学院任助理教授、副教授。

研究方向为智能电磁传感与驱动、机器人感知与控制，沿智能驱动与柔性传感两条主线展开，涉及仿生关节驱动、多模态触觉阵列、多指灵巧手与仿生头部，并应用于人形机器人交互、灵巧操作与人体可穿戴外骨骼。2022年入选国家级海外高层次青年人才、华中卓越学者（特聘岗）。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}
  </div>
</div>

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
