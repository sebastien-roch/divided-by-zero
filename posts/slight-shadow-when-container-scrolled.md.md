---
title: Apply a slight shadow when container is scrolled like Gmail
description: Find out if content overflows its parent element.
date: 2019-02-13
tags:
  - UX
  - Javascript
layout: layouts/post.njk
---
This little effect is part of the all the little details that make your page more pleasant and intutitive for your users.
The goal is to add a slight shadow at the top of the scrolled container, but only when the container has been scrolled to the bottom.

Here is a demo:
<p class="codepen" data-height="464" data-theme-id="0" data-default-tab="result" data-user="sebastien-roch" data-slug-hash="bZPdXb" style="height: 464px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Top-shadow on scrolled container">
  <span>See the Pen <a href="https://codepen.io/sebastien-roch/pen/bZPdXb/">
  Top-shadow on scrolled container</a> by Sébastien Roch (<a href="https://codepen.io/sebastien-roch">@sebastien-roch</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

We want to achieve this  

Let's say you have a `div` with `overflow: auto`, so that if the content overflows the div, scrollbars appear.
Applying a slight shadow at the top of the div hints the user that there is more content available.    
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTM1NjQwNDM5OV19
-->