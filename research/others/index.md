---
title: Others
title_zh: 其他
---

# {% include icon.html icon="fa-solid fa-layer-group" %}{% include lang.html en="Wearable Exoskeletons" zh="可穿戴外骨骼" %}

{% capture en %}
We study lower-limb human–robot rehabilitation systems through an integrated pipeline of musculoskeletal modeling, multimodal motion sensing, personalized assistance generation, and hardware validation. The work covers sit-to-stand rehabilitation after stroke and overground walking for older adults, yielding two distinct exoskeleton solutions.
{% endcapture %}
{% capture zh %}
实验室围绕下肢人机共融康复机器人开展系统性研究，搭建人体生物力学建模 — 多模态运动感知 — 个性化助力生成 — 实体样机验证一体化研发体系，同时覆盖脑卒中坐立康复、老年平地行走两大核心场景，形成两类差异化外骨骼成套技术方案。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}

{%
  include figure.html
  image="images/research/others.jpg"
  caption_en="Lower-limb exoskeleton prototypes, musculoskeletal simulation, and human experiments"
  caption_zh="下肢外骨骼样机、生物力学仿真与人体实验"
%}

{% capture en %}
The team has developed two wearable devices: a unilateral sit-to-stand assistance exoskeleton for hemiparetic patients, and a personalized hip-assistance walking exoskeleton for older adults and load-carrying users. Both prototypes emphasize lightweight wearability and compliant human–robot coordination, and are intended for hospital rehabilitation, home care, and outdoor load carriage.

Key technologies include real-time force and motion sensing at magnetically instrumented joints, and offline simulation for personalized assistance. The devices adapt to each user’s gait and share lower-limb effort. Human comparison studies show reduced joint loading and muscle activation. Related papers have appeared in international robotics journals. The work offers a lightweight, low-cost design and control path for wearable rehabilitation robots, with applications in healthcare and specialized equipment.
{% endcapture %}
{% capture zh %}
团队先后研发两款下肢穿戴设备：一是面向偏瘫患者的单侧坐立辅助外骨骼，二是适配高龄、负重人群的髋关节个性化助行外骨骼，两套样机均兼顾轻量化穿戴与人机柔顺协同，适配医院康复、居家养老、户外负重多元需求。

围绕下肢康复核心痛点，实验室重点突破两类核心技术：磁传感关节实时力位感知、仿真离线个性化助力优化。让外骨骼贴合每个人的行走习惯，自然分担下肢运动负荷，系列人体对照实验表明，两套设备可显著降低受试者关节内力与肌肉激活程度，相关成果已整理成学术论文发表在国际知名机器人期刊，为穿戴式康复机器人提供轻量化、低成本全套设计与控制方案，在民生医疗、特种装备领域具备广阔应用前景。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}

{% include section.html %}

{% capture content %}
{% include figure.html image="images/research/others-device.jpg" caption_en="Personalized hip-assistance walking exoskeleton" caption_zh="髋关节个性化助行外骨骼" %}
{% include figure.html image="images/research/others-gait.jpg" caption_en="Treadmill human experiment" caption_zh="跑台人体实验" %}
{% endcapture %}

{% include grid.html content=content %}
