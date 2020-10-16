# BrisaJS

BrisaJS is a small and lightweight javascript library for smooth scroll animations and effects, such as fade in.

## Table of contents

[Getting started](#getting-started)
[Prerequisities](#prerequisities)
[Documentation](#documentation)
[Built with](#built-with)
[Browser support](#browser-support)
[Copyright and license](#copyright-and-license)
[TODOs](#todos)

### Prerequisities

Npm/yarn

## Getting started

Let's begin by getting BrisaJS in your project by installing it via a packet manager

`npm install brisajs`

or

`yarn install brisajs`

Then import brisa in your js:

`import * as brisa from 'brisajs/src/js/main.js';`

This will import both the javascript and the styles to make BrisaJS work in your project.

### Documentation

[WIP]

Once you've added BrisaJS to your project, you can start enabling it with:

`brisa.start();`

You need to add the BrisaJS' related CSS classes to your elements to animate them.

Fade related classes: `fade-in, fade-out, fade-left, fade-right`

Animation timing related classes: `anim-slow-1, anim-slow-2, anim-slow-3, anim-slow-4`

**Example: **

`<div class="fade-in">I'll fade in</div>`
`<div class="fade-left anim-slow-2">I'll fade from left a bit slower</div>`

## Built with

[WIP] Webpack, babel, etc

## Copyright and license

Code copyright 2020 Andrea Morosi. WIP

## Browser support

BrisaJS focuses mostly on the latest versions of Chrome, Firefox, Edge and Safari.

## TODOs

[ ] license

[ ] better README, with some docs

[ ] docs/demo page

[ ] better options handling

[ ] allow customization of some parameters such as transform values

[ ] more effects

[ ] scss-in-js instead of scss?