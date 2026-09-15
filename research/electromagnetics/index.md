---
title: Electromagnetics
title_zh: 电磁
---

# {% include icon.html icon="fa-solid fa-bolt" %}{% include lang.html en="Electromagnetics" zh="电磁" %}

{% capture en %}
The laboratory studies intelligent electromagnetic sensing and magnetic tactile perception, including inspection, sensing, and arrayed multidimensional force estimation, to support robot contact sensing and measurement in advanced mechatronic systems.
{% endcapture %}
{% capture zh %}
面向智能电磁感知与磁触觉，实验室开展检测、传感与阵列化多维力感知研究，为机器人接触感知和先进机电系统测量提供技术支撑。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}

{%
  include figure.html
  image="images/research/electromagnetics.jpg"
  caption_en="Electromagnetic and magnetic tactile experimental platform"
  caption_zh="电磁与磁触觉实验平台"
%}

{% include section.html %}

## {% include lang.html en="Arrayed Multidimensional Magnetic Tactile Sensing" zh="阵列化多维磁触觉感知" %}

{% capture en %}
To meet the need for high-precision tactile sensing in robots, we study arrayed magnetic tactile methods for dexterous hands, biomimetic fingertips, and contact on complex surfaces. The approach combines magnetic sources and Hall-sensor arrays to estimate multidimensional force. By jointly optimizing crossed-polarity magnets, triaxial Hall arrays, and compliant elastic structures, we capture contact-induced field changes with high sensitivity and map those responses to force through physical modeling and decoupling. We currently obtain stable six-axis wrench estimates and further recover the three-dimensional force distribution over the contact patch, providing contact location, magnitude, and direction.

For curved fingertips and multi-point contact, we further study multi-module array layout, surface reconstruction, curved-surface mapping, and multi-region fusion, moving from discrete sensing units toward a continuous tactile surface. Physics priors, structural constraints, and neural calibration compensate for nonlinearity, axis coupling, unit-to-unit variation, and manufacturing error. Ongoing work includes multi-point calibration, surface densification, contact-patch reconstruction, and multimodal tactile fusion. These results can supply high-resolution, multidimensional tactile information for dexterous grasping, contact-state recognition, slip detection, fine manipulation, and embodied interaction, with potential in biomimetic robots, intelligent manufacturing, and human–robot collaboration.
{% endcapture %}
{% capture zh %}
实验室围绕机器人高精度触觉感知需求开展阵列化磁感触技术研究，面向灵巧手、仿生指尖和复杂曲面接触等应用场景，构建了基于磁源—霍尔阵列协同设计的多维力感知方案。团队通过交叉极性磁源、三轴霍尔传感阵列及柔性弹性结构的协同优化，实现接触过程中磁场变化的高灵敏采集，并建立了由磁场响应到多维力信息的物理建模与解耦方法。目前已实现整体六维力的稳定解算，并进一步由整体力与力矩信息反演阵列化接触区域内的三维力分布，为机器人获取接触位置、受力大小和受力方向等信息提供了重要技术支撑。

围绕曲面指尖和多点接触感知需求，实验室进一步开展多模组阵列布局、感触面重构、曲面映射与多区域融合研究，逐步形成由离散感触单元向连续触觉表面的感知与可视化方法。团队结合物理先验、结构约束和神经网络标定，对传感器非线性、轴间耦合、个体差异及制造误差进行补偿，并持续推进多点标定、曲面增密、接触斑重构及多模态触觉融合等关键技术。相关成果可为灵巧抓取、接触状态识别、滑移检测、精细操作及具身智能交互提供高分辨率、多维度的触觉信息，具备在仿生机器人、智能制造和人机协作等领域的应用潜力。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}

{% include section.html %}

{% capture content %}
{% include figure.html image="images/research/electromagnetics-ndt.jpg" caption_en="Electromagnetic inspection system" caption_zh="电磁检测系统" %}
{% include figure.html image="images/research/electromagnetics-weld.jpg" caption_en="Weld inspection" caption_zh="焊缝电磁检测" %}
{% endcapture %}

{% include grid.html content=content %}
