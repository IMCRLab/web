---
---

{% include section.html size="full" dark="true" %}

<div class="hero">
<div class="hero-inner">
<div class="hero-copy">
<div class="hero-affiliation">
<img src="{{ "images/hust-logo.png" | relative_url }}" alt="Huazhong University of Science and Technology">
<span>{% include lang.html en="Huazhong University of Science and Technology" zh="华中科技大学" %}<br>{% include lang.html en="School of Mechanical Science and Engineering" zh="机械科学与工程学院" %}</span>
</div>
<h1 class="hero-title">{% include lang.html en="Intelligent Mechatronics and Control Research Laboratory" zh="智能机电与控制实验室" %}</h1>
<p class="hero-lead">{% include lang.html en="We build intelligent robots and advanced mechatronic systems that perceive, understand, and act — from emotionally expressive humanoids to dexterous hands and wearable exoskeletons." zh="我们研究能够感知、理解与行动的智能机器人与先进机电系统——从富有情感的仿人机器人，到灵巧手与可穿戴外骨骼。" %}</p>
<div class="hero-actions">
<a class="button" href="{{ "research" | relative_url }}">{% include lang.html en="Explore research" zh="了解研究" %}<i class="icon fa-solid fa-arrow-right"></i></a>
<a class="button" data-style="outline" href="{{ "contact" | relative_url }}">{% include lang.html en="Join us" zh="加入我们" %}</a>
</div>
</div>
<div class="hero-mosaic" aria-hidden="true">
<img src="{{ "images/research/interaction-face.jpg" | relative_url }}" alt="" loading="eager">
<img src="{{ "images/research/manipulation-hand.jpg" | relative_url }}" alt="" loading="eager">
<img src="{{ "images/research/electromagnetics.jpg" | relative_url }}" alt="" loading="eager">
<img src="{{ "images/research/others-device.jpg" | relative_url }}" alt="" loading="eager">
</div>
</div>
<div class="hero-stats">
<div><strong>4</strong><span>{% include lang.html en="Research directions" zh="研究方向" %}</span></div>
<div><strong>20+</strong><span>{% include lang.html en="Faculty &amp; students" zh="师生成员" %}</span></div>
<div><strong>HUST</strong><span>{% include lang.html en="Wuhan, China" zh="中国 · 武汉" %}</span></div>
</div>
</div>

{% include section.html %}

<div class="about">
<div>
<p class="eyebrow">{% include lang.html en="About" zh="关于我们" %}</p>
<h2>{% include lang.html en="Robots that work with people" zh="让机器人更懂人、更好地协作" %}</h2>
</div>
<div class="about-text">
{% capture en %}
The Intelligent Mechatronics and Control Research Laboratory (IMCRL) is part of the Advanced Electronic Manufacturing Center in the School of Mechanical Science and Engineering at Huazhong University of Science and Technology. Led by Professor Min Li, the laboratory currently has more than twenty faculty members and students.

We address the needs of intelligent robots and advanced mechatronic systems through research on embodied human–robot interaction, dexterous manipulation, intelligent electromagnetic sensing, magnetic tactile perception, and wearable exoskeletons, with the goal of advancing both scientific innovation and industrial application.
{% endcapture %}
{% capture zh %}
智能机电与控制实验室（IMCRL）隶属于华中科技大学机械科学与工程学院先进电子制造研究中心，由李敏教授领衔，现有师生二十余人。

实验室面向智能机器人与先进机电系统的发展需求，围绕具身智能人机交互、灵巧操作、智能电磁感知、磁触觉和可穿戴外骨骼等方向开展前沿研究，致力于推动智能机电技术的创新发展与产业应用。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}
</div>
</div>

{% include section.html %}

<div class="section-head">
<div>
<p class="eyebrow">{% include lang.html en="Research" zh="研究" %}</p>
<h2>{% include lang.html en="Research Directions" zh="研究方向" %}</h2>
</div>
<p>{% include lang.html en="Four connected directions spanning perception, control, and physical interaction." zh="四个相互关联的方向，覆盖感知、控制与物理交互。" %}</p>
</div>

{% include list.html data="directions" component="card" %}

{% include section.html %}

<div class="section-head">
<div>
<p class="eyebrow">{% include lang.html en="News" zh="新闻" %}</p>
<h2>{% include lang.html en="Latest News" zh="最新动态" %}</h2>
</div>
{% include button.html link="news" text="All news" icon="fa-solid fa-arrow-right" flip=true style="bare" %}
</div>

{% for post in site.posts limit: 3 %}
  {% include post-excerpt.html lookup=post.slug %}
{% endfor %}

{% include section.html %}

{% capture team_title %}{% include lang.html en="Meet the Team" zh="团队成员" %}{% endcapture %}

{% capture text %}
<div class="lang-en">
<p>Led by Professor Min Li, IMCRL brings together more than twenty faculty members and students working across mechanics, control, sensing, and AI.</p>
{% include button.html link="team" text="Meet the team" icon="fa-solid fa-arrow-right" flip=true %}
</div>
<div class="lang-zh">
<p>实验室由李敏教授领衔，现有师生二十余人，研究覆盖机械、控制、传感与人工智能等领域。</p>
{% include button.html link="team" text="了解团队" icon="fa-solid fa-arrow-right" flip=true %}
</div>
{% endcapture %}

{%
  include feature.html
  image="images/research/interaction.jpg"
  link="team"
  title=team_title
  text=text
%}

{% include section.html dark="true" %}

<div class="cta">
<div>
<p class="eyebrow">{% include lang.html en="Opportunities" zh="招生与合作" %}</p>
<h2>{% include lang.html en="Interested in joining or collaborating?" zh="欢迎加入或开展合作" %}</h2>
<p>{% include lang.html en="We welcome prospective students and partners in research and industry." zh="欢迎有志于智能机器人研究的同学，以及科研与产业合作伙伴联系我们。" %}</p>
</div>
<a class="button" href="{{ "contact" | relative_url }}">{% include lang.html en="Get in touch" zh="联系我们" %}<i class="icon fa-solid fa-arrow-right"></i></a>
</div>
