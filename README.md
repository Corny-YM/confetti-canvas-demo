## Demo

[catdad.github.io/canvas-confetti](https://catdad.github.io/canvas-confetti/)

## Install

You can install this module as a component from NPM:

```bash
npm install --save canvas-confetti
npm install --save @types/canvas-confetti
```

You can then `require('canvas-confetti');` to use it in your project build. _Note: this is a client component, and will not run in Node. You will need to build your project with something like [webpack](https://github.com/webpack/webpack) in order to use this._

### `Simple Example`

As an example, here's how you might do a triangle confetti:

```javascript
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

confetti({
  angle: randomInRange(55, 125),
  spread: randomInRange(50, 70),
  particleCount: randomInRange(50, 100),
  origin: { y: 0.6 },
});
```

#### `options`

The `confetti` parameter is a single optional `options` object, which has the following properties:

- `particleCount` _Integer (default: 50)_: The number of confetti to launch. More is always fun... but be cool, there's a lot of math involved.
- `angle` _Number (default: 90)_: The angle in which to launch the confetti, in degrees. 90 is straight up.
- `spread` _Number (default: 45)_: How far off center the confetti can go, in degrees. 45 means the confetti will launch at the defined `angle` plus or minus 22.5 degrees.
- `startVelocity` _Number (default: 45)_: How fast the confetti will start going, in pixels.
- `decay` _Number (default: 0.9)_: How quickly the confetti will lose speed. Keep this number between 0 and 1, otherwise the confetti will gain speed. Better yet, just never change it.
- `gravity` _Number (default: 1)_: How quickly the particles are pulled down. 1 is full gravity, 0.5 is half gravity, etc., but there are no limits. You can even make particles go up if you'd like.
- `drift` _Number (default: 0)_: How much to the side the confetti will drift. The default is 0, meaning that they will fall straight down. Use a negative number for left and positive number for right.
- `flat` _Boolean (default: false)_: Optionally turns off the tilt and wobble that three dimensional confetti would have in the real world. Yeah, they look a little sad, but y'all asked for them, so don't blame me.
- `ticks` _Number (default: 200)_: How many times the confetti will move. This is abstract... but play with it if the confetti disappear too quickly for you.
- `origin` _Object_: Where to start firing confetti from. Feel free to launch off-screen if you'd like.
  - `origin.x` _Number (default: 0.5)_: The `x` position on the page, with `0` being the left edge and `1` being the right edge.
  - `origin.y` _Number (default: 0.5)_: The `y` position on the page, with `0` being the top edge and `1` being the bottom edge.
- `colors` _Array&lt;String&gt;_: An array of color strings, in the HEX format... you know, like `#bada55`.
- `shapes` _Array&lt;String|Shape&gt;_: An array of shapes for the confetti. There are 3 built-in values of `square`, `circle`, and `star`. The default is to use both squares and circles in an even mix. To use a single shape, you can provide just one shape in the array, such as `['star']`. You can also change the mix by providing a value such as `['circle', 'circle', 'square']` to use two third circles and one third squares. You can also create your own shapes using the [`confetti.shapeFromPath`](#confettishapefrompath-path-matrix---shape) or [`confetti.shapeFromText`](#confettishapefromtext-text-scalar-color-fontfamily---shape) helper methods.
- `scalar` _Number (default: 1)_: Scale factor for each confetti particle. Use decimals to make the confetti smaller. Go on, try teeny tiny confetti, they are adorable!
- `zIndex` _Integer (default: 100)_: The confetti should be on top, after all. But if you have a crazy high page, you can set it even higher.
- `disableForReducedMotion` _Boolean (default: false)_: Disables confetti entirely for users that [prefer reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion). The `confetti()` promise will resolve immediately in this case.
