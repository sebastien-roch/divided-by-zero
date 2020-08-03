---
title: Find out if content overflows its parent element
description: Find out if content overflows its parent element.
date: 2019-02-13
image: /img/overflowing-1.jpg
tags:
    - javascript
    - html
layout: layouts/post.njk
---

I wanted to find out if my field label is "ellipsized" (i.e. cut followed by three dots) by CSS when getting too long for its container. If it is cut, I wanted to display the full text when hovering it to see the full content instantly . Setting the `title` will give you the native tooltip from the browser for free, but you need to hover the text for around 1 second, which can be annoying in some cases.

Basically we need to know if the width required by the content is greater than the width of its container. This is expressed by this code:

```js
if (element.scrollWidth > element.offsetWidth) {
    element.className.add("content-overflows");
    element.setAttribute("text", element.textContent);
}
```

Note that the element must be displayed as `block` or `inline-block`, or its `scrollWidth` will just equal 0.

With this you can then react on the fact in CSS:

```css
.content-overflows:hover {
    position: relative;
    overflow: visible;
}

/* add a pseudo element covering the existing text and showing the whole text */
.content-overflows:hover:after {
    content: attr(title);
    position: absolute;
    top: -5px;
    left: -5px;
    padding: 5px;
    background-color: white;
}
```

Here is a working example:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="sebastien-roch" data-slug-hash="NJeqQY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="[blog] does text overflows its container?">
  <span>See the Pen <a href="https://codepen.io/sebastien-roch/pen/NJeqQY/">
  [blog] does text overflows its container?</a> by Sébastien Roch (<a href="https://codepen.io/sebastien-roch">@sebastien-roch</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
