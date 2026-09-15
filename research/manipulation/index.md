---
title: Manipulation
title_zh: 操作
---

# {% include icon.html icon="fa-solid fa-hand" %}{% include lang.html en="Manipulation" zh="操作" %}

{% capture en %}
To meet the demand for fine, general-purpose robot manipulation in complex environments, the team continues to jointly advance dexterous hardware, data collection, and multimodal intelligent models.
{% endcapture %}
{% capture zh %}
面向复杂环境下的精细化、通用化机器人操作需求，团队持续推进灵巧操作系统、数据采集与多模态智能模型的协同创新。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}

{%
  include figure.html
  image="images/research/manipulation.jpg"
  caption_en="Dexterous hand, bimanual platform, and DexViTac multimodal data collection"
  caption_zh="灵巧手、双臂平台与 DexViTac 多模态操作数据采集"
%}

{% capture en %}
On the hardware side, we designed a high-degree-of-freedom dexterous hand with coordinated multi-finger motion, fine grasping, and contact sensing, able to grasp and manipulate objects of different shapes and materials. For perception and decision-making, we built a perception–action framework that fuses multi-view vision, spatial memory, tactile feedback, and motion generation. Active sensing and dynamic multimodal fusion improve performance under occlusion and in unstructured scenes.

To address the shortage of high-quality manipulation data, we developed DexViTac, a body-agnostic, human-centered capture system that time-aligns vision, fingertip touch, and hand motion, supporting efficient collection and cross-platform retargeting. Building on this, we constructed a visuo-lingual-tactile VLA model that jointly represents vision, language, force, and touch, enabling the robot to detect slip, jamming, and contact-force changes and to complete more stable insertion, assembly, wiping, and object-collection tasks for manufacturing and everyday service.
{% endcapture %}
{% capture zh %}
在硬件方面，自主设计了高自由度灵巧手，具备多指协同、精细抓取和接触感知能力，能够适应不同形状、材质物体的抓取与富接触操作。在感知与决策方面，建立融合多视角视觉、空间记忆、触觉反馈和动作生成的感知—操作一体化框架，通过主动感知与多模态信息动态融合，提高机器人在遮挡及非结构化环境中的操作能力。

针对高质量操作数据不足的问题，研发了无本体化、以人为中心的 DexViTac 数采系统，实现视觉、指尖触觉与手部运动信息的时空对齐，支持灵活高效的数据采集及跨平台重定向复用。在此基础上，进一步构建力触融合 VLA，联合建模视觉、语言、力觉和触觉信息，使机器人能够识别滑移、卡滞及接触力变化，完成更加稳定、安全的插入、装配、擦拭和物体收集等任务，为工业制造与生活服务场景中的灵巧操作应用提供技术支撑。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}

{% include section.html %}

{% capture content %}
{% include figure.html image="images/research/manipulation-hand.jpg" caption_en="High-DoF dexterous hand" caption_zh="高自由度灵巧手" %}
{% include figure.html image="images/research/manipulation-robot.jpg" caption_en="Bimanual manipulation platform" caption_zh="双臂操作平台" %}
{% include figure.html image="images/research/manipulation-platform.jpg" caption_en="Desktop dual-arm experimental system" caption_zh="桌面双臂实验系统" %}
{% include figure.html image="images/research/manipulation-tasks.jpg" caption_en="DexViTac tasks and multimodal data" caption_zh="DexViTac 操作任务与多模态数据" %}
{% endcapture %}

{% include grid.html content=content %}
