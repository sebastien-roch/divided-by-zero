---
title: Apply a slight shadow when container is scrolled
description: Scrolling shadows is a subtle effect used by Google in its material design.
date: 2019-03-09
tags:
  - UX
  - Javascript
layout: layouts/post.njk
---
This little effect is part of the all the little details that make your page more pleasant and intutitive for your users.
The goal is to add a slight shadow at the top of the scrolled container, but only when the container has been scrolled to the bottom. It hints the user that more content has scrolled underneath.

Here is a demo:
<p class="codepen" data-height="464" data-theme-id="0" data-default-tab="result" data-user="sebastien-roch" data-slug-hash="bZPdXb" style="height: 464px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Top-shadow on scrolled container">
  <span>See the Pen <a href="https://codepen.io/sebastien-roch/pen/bZPdXb/">
  Top-shadow on scrolled container</a> by Sébastien Roch (<a href="https://codepen.io/sebastien-roch">@sebastien-roch</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
  
There are also pure CSS version of this effect like the one from the great Lea Verou (http://lea.verou.me/2012/04/background-attachment-local/), but the CSS is _slightly_ more complicated!
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwODk1MjcyODMsNzQ1OTcxODk1LDEzNT
Y0MDQzOTldfQ==
-->