---
title: Interaction
title_zh: 交互
---

# {% include icon.html icon="fa-solid fa-handshake" %}{% include lang.html en="Interaction" zh="交互" %}

{% capture en %}
A robot face should move with the conversation, not wait for a sentence to end and then switch a single emotion label. EmoManifold reads a continuous affective signal from a language model's hidden states as each token is generated, and drives facial expression in real time.
{% endcapture %}
{% capture zh %}
机器人的表情应当跟着对话走，而不是等整句话说完再切换一个情绪标签。EmoManifold 在模型逐词生成时，从内部隐状态读取连续的情感变化，并实时驱动面部表情。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}

<iframe class="emo-frame" src="{{ '/emomanifold/index.html?embed=1' | relative_url }}" title="EmoManifold"></iframe>

{% include section.html %}

{% capture en %}
The team independently developed a fifth-generation highly biomimetic humanoid robotic head with rich sensing and high-fidelity affective expression. It has been deployed on platforms such as the Jingchu robot. To support natural interaction, we continue to advance key technologies including continuous emotion modeling, speech-driven lip generation, and multimodal motion generation, enabling more natural, fluent, and emotionally expressive communication.

These results have been demonstrated in intelligent guiding, education, and media interviews, showing strong interaction quality and application potential.
{% endcapture %}
{% capture zh %}
团队自主研发了第五代高仿生人形机器人智慧头部，具备丰富的感知能力和高保真情感表达能力，并已成功应用于荆楚机器人等平台。围绕自然交互需求，实验室持续突破连续情感建模、语音驱动口型生成、多模态动作生成等关键技术，使机器人能够实现更加自然、流畅、富有情感的人机交流。

相关成果已在智能导览、教育教学、媒体采访等多个场景完成示范应用，展现出良好的交互体验与应用潜力。
{% endcapture %}
{% include lang-block.html en=en zh=zh %}

<figure class="lab-video">
  <video src="{{ 'images/research/interaction-follow.mp4' | relative_url }}" poster="{{ 'images/research/interaction-head.jpg' | relative_url }}" controls muted playsinline loop></video>
  <figcaption>{% include lang.html en="Expression following on the biomimetic head" zh="仿生头部的表情跟随" %}</figcaption>
</figure>

<div class="lab-split">
  <figure class="lab-still">
    <img src="{{ 'images/research/interaction-head.jpg' | relative_url }}" alt="Biomimetic humanoid head">
    <figcaption>{% include lang.html en="Fifth-generation biomimetic humanoid head" zh="第五代高仿生人形机器人智慧头部" %}</figcaption>
  </figure>
  <figure class="lab-video">
    <video src="{{ 'images/research/interaction-lips.mp4' | relative_url }}" controls muted playsinline loop></video>
    <figcaption>{% include lang.html en="Speech-driven lip motion" zh="语音驱动的口型" %}</figcaption>
  </figure>
</div>
