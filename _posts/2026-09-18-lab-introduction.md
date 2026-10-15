---
title: Introducing IMCRL
title_zh: 智能机电与控制实验室介绍
image: images/news/2026-09-18-lab-intro-cover.jpg
description_en: An overview of IMCRL's five research directions — embodied human–robot interaction, dexterous manipulation, wearable exoskeletons, intelligent electromagnetic sensing, and magnetic touch.
description_zh: 实验室研究方向介绍：具身智能人机交互、灵巧操作、可穿戴外骨骼、智能电磁感知与磁触觉。
excerpt_separator: ""
last_modified_at: 2026-09-18
tags:
  - lab
---

{% capture en %}
The Intelligent Mechatronics and Control Research Laboratory (IMCRL) is part of the Advanced Electronic Manufacturing Center in the School of Mechanical Science and Engineering at Huazhong University of Science and Technology. Led by Professor Min Li, the lab has more than twenty faculty members and students working on intelligent robots and advanced mechatronic systems.

### 01 Embodied Human–Robot Interaction

We have built an integrated perception–cognition–generation–execution framework that fuses vision and audition and coordinates facial expression, speech, lip motion, and body movement in real time. The team developed a fifth-generation highly biomimetic humanoid head, now deployed on platforms such as the Jingchu robot, and continues to advance continuous emotion modeling, speech-driven lip generation, and multimodal motion generation.

### 02 Dexterous Manipulation

We co-design dexterous hardware, data collection, and multimodal models. Our high-DoF dexterous hand supports multi-finger coordination, fine grasping, and contact sensing. The embodiment-agnostic DexViTac system aligns vision, fingertip touch, and hand motion for efficient human data collection, and our force–tactile VLA models let robots detect slip, jamming, and changes in contact force for insertion, assembly, wiping, and object collection.

### 03 Wearable Exoskeletons

We study lower-limb rehabilitation robots through biomechanical modeling, multimodal motion sensing, personalized assistance generation, and prototype validation. Two devices — a unilateral sit-to-stand exoskeleton for hemiplegic patients and a personalized hip exoskeleton for older adults and load-carrying users — reduce joint loads and muscle activation in human experiments.

### 04 Intelligent Electromagnetic Sensing

For lithium-battery manufacturing, photovoltaic processing, and metal inspection, we study how electromagnetic signals can be acquired, interpreted, and inverted in industrial environments: mixer wall-contact warning, diamond-wire monitoring, resistance-weld nugget evaluation, and eddy-current defect reconstruction with regularized models and physics-informed FV-PINN methods.

### 05 Magnetic Touch

We develop arrayed magnetic tactile sensing for dexterous hands, biomimetic fingertips, and curved contact surfaces. Co-designed magnet sources, three-axis Hall arrays, and soft structures enable stable six-axis force estimation and reconstruction of 3D force distributions across the contact area.
{% endcapture %}

{% capture zh %}
智能机电与控制实验室（IMCRL）隶属于华中科技大学机械科学与工程学院先进电子制造研究中心，由李敏教授领衔，现有师生二十余人，面向智能机器人与先进机电系统开展前沿研究。

### 01 具身智能人机交互

构建覆盖“感知—认知—生成—执行”的一体化交互框架，实现视觉、听觉等多模态信息融合，以及表情、语音、口型和肢体动作的协同生成与实时控制。团队自主研发第五代高仿生人形机器人智慧头部，已应用于“荆楚”机器人等平台，并持续突破连续情感建模、语音驱动口型生成、多模态动作生成等关键技术。

### 02 灵巧操作

推进灵巧操作系统、数据采集与多模态智能模型的协同创新。自主设计高自由度灵巧手，具备多指协同、精细抓取和接触感知能力；研发无本体化、以人为中心的 DexViTac 数采系统，实现视觉、指尖触觉与手部运动信息的时空对齐；进一步构建力触融合 VLA，使机器人能够识别滑移、卡滞及接触力变化，完成插入、装配、擦拭和物体收集等任务。

### 03 可穿戴外骨骼

搭建“人体生物力学建模—多模态运动感知—个性化助力生成—实体样机验证”一体化研发体系，研发面向偏瘫患者的单侧坐立辅助外骨骼，以及适配高龄、负重人群的髋关节个性化助行外骨骼。人体对照实验表明，两套设备可显著降低关节内力与肌肉激活程度。

### 04 智能电磁感知

面向锂电制造、光伏加工和金属构件检测中的在线感知需求，研究电磁信号在复杂工业环境下的获取、解析与反演，涵盖双行星搅拌设备划壁预警、金刚线运行状态监测、电阻焊熔深与熔宽评估、涡流缺陷物理场重构等方向，并发展了模型正则化重构与 FV-PINN 方法。

### 05 磁触觉

面向灵巧手、仿生指尖和复杂曲面接触，构建基于磁源—霍尔阵列协同设计的多维力感知方案，已实现整体六维力的稳定解算，并由整体力与力矩反演接触区域内的三维力分布。
{% endcapture %}

{% include lang-block.html en=en zh=zh %}

{% include section.html %}

{% capture research_text %}{% include lang.html en="Explore our research" zh="了解研究方向" %}{% endcapture %}
{% capture wechat_text %}{% include lang.html en="Read on WeChat" zh="阅读公众号原文" %}{% endcapture %}
{% include button.html link="research" text=research_text icon="fa-solid fa-arrow-right" flip=true %}
{% include button.html link="https://mp.weixin.qq.com/s/qC4LsFmPwYjeHGmSU2dTtA" text=wechat_text icon="fa-brands fa-weixin" %}
