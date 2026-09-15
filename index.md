---
---

# IMCRL

{% include lang.html en="Intelligent Mechatronics and Control Research Laboratory" zh="智能机电与控制实验室" %}

{% capture en %}
The Intelligent Mechatronics and Control Research Laboratory (IMCRL) is part of the Advanced Electronic Manufacturing Center in the School of Mechanical Science and Engineering at Huazhong University of Science and Technology. Led by Professor Min Li, the laboratory currently has more than twenty faculty members and students. We address the needs of intelligent robots and advanced mechatronic systems through research on embodied human–robot interaction, dexterous manipulation, intelligent electromagnetic sensing, magnetic tactile perception, and wearable exoskeletons, with the goal of advancing both scientific innovation and industrial application.
{% endcapture %}
{% capture zh %}
智能机电与控制实验室（IMCRL）隶属于华中科技大学机械科学与工程学院先进电子制造研究中心，由李敏教授领衔，现有师生二十余人。实验室面向智能机器人与先进机电系统的发展需求，围绕具身智能人机交互、灵巧操作、智能电磁感知、磁触觉和可穿戴外骨骼等方向开展前沿研究，致力于推动智能机电技术的创新发展与产业应用。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}

{% include section.html %}

## {% include lang.html en="Research Directions" zh="研究方向" %}

{% include list.html data="directions" component="card" %}

{% include section.html %}

{% capture team_title %}{% include lang.html en="Team" zh="团队" %}{% endcapture %}

{% capture text %}
<div class="lang-en">
Led by Professor Min Li, IMCRL currently has more than twenty members.

{% include button.html link="team" text="Meet the team" icon="fa-solid fa-arrow-right" flip=true style="bare" %}
</div>
<div class="lang-zh">
由李敏教授领衔，现有师生二十余人。

{% include button.html link="team" text="了解团队" icon="fa-solid fa-arrow-right" flip=true style="bare" %}
</div>
{% endcapture %}

{%
  include feature.html
  image="images/research/interaction.jpg"
  link="team"
  title=team_title
  text=text
%}
