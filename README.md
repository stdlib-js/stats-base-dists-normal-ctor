<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Normal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Normal distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import Normal from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-ctor@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-dists-normal-ctor/tags). For example,

```javascript
import Normal from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-ctor@v0.2.1-deno/mod.js';
```

#### Normal( \[mu, sigma] )

Returns a [normal][normal-distribution] distribution object.

```javascript
var normal = new Normal();

var mu = normal.mean;
// returns 0.0
```

By default, `mu = 0.0` and `sigma = 1.0`. To create a distribution having a different `mu` (mean parameter) and `sigma` (standard deviation), provide the corresponding arguments.

```javascript
var normal = new Normal( 2.0, 4.0 );

var mu = normal.mean;
// returns 2.0
```

* * *

## normal

A [normal][normal-distribution] distribution object has the following properties and methods...

### Writable Properties

#### normal.mu

Mean parameter of the distribution.

```javascript
var normal = new Normal();

var mu = normal.mu;
// returns 0.0

normal.mu = 3.0;

mu = normal.mu;
// returns 3.0
```

#### normal.sigma

Standard deviation of the distribution. `sigma` **must** be a positive number.

```javascript
var normal = new Normal( 2.0, 4.0 );

var sigma = normal.sigma;
// returns 4.0

normal.sigma = 3.0;

sigma = normal.sigma;
// returns 3.0
```

* * *

### Computed Properties

#### Normal.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var normal = new Normal( 4.0, 12.0 );

var entropy = normal.entropy;
// returns ~3.904
```

#### Normal.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var normal = new Normal( 4.0, 12.0 );

var kurtosis = normal.kurtosis;
// returns 0.0
```

#### Normal.prototype.mean

Returns the [expected value][expected-value].

```javascript
var normal = new Normal( 4.0, 12.0 );

var mu = normal.mean;
// returns 4.0
```

#### Normal.prototype.median

Returns the [median][median].

```javascript
var normal = new Normal( 4.0, 12.0 );

var median = normal.median;
// returns 4.0
```

#### Normal.prototype.mode

Returns the [mode][mode].

```javascript
var normal = new Normal( 4.0, 12.0 );

var mode = normal.mode;
// returns 4.0
```

#### Normal.prototype.skewness

Returns the [skewness][skewness].

```javascript
var normal = new Normal( 4.0, 12.0 );

var skewness = normal.skewness;
// returns 0.0
```

#### Normal.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var normal = new Normal( 4.0, 12.0 );

var s = normal.stdev;
// returns 12.0
```

#### Normal.prototype.variance

Returns the [variance][variance].

```javascript
var normal = new Normal( 4.0, 12.0 );

var s2 = normal.variance;
// returns 144.0
```

* * *

### Methods

#### Normal.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var normal = new Normal( 2.0, 4.0 );

var y = normal.cdf( 0.5 );
// returns ~0.354
```

#### Normal.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var normal = new Normal( 2.0, 4.0 );

var y = normal.logcdf( 0.5 );
// returns ~-1.039
```

#### Normal.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var normal = new Normal( 2.0, 4.0 );

var y = normal.logpdf( 2.0 );
// returns ~-2.305
```

#### Normal.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var normal = new Normal( 2.0, 4.0 );

var y = normal.mgf( 0.2 );
// returns ~2.054
```

#### Normal.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var normal = new Normal( 2.0, 4.0 );

var y = normal.pdf( 2.0 );
// returns ~0.1
```

#### Normal.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var normal = new Normal( 2.0, 4.0 );

var y = normal.quantile( 0.5 );
// returns 2.0

y = normal.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import Normal from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-normal-ctor@deno/mod.js';

var normal = new Normal( 2.0, 4.0 );

var mean = normal.mean;
// returns 2.0

var median = normal.median;
// returns 2.0

var s2 = normal.variance;
// returns 16.0

var y = normal.cdf( 0.8 );
// returns ~0.382
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-normal-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-normal-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-normal-ctor/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-normal-ctor/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-normal-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-normal-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-normal-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-normal-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-normal-ctor/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-normal-ctor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-normal-ctor/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-normal-ctor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-normal-ctor/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-normal-ctor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-normal-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-normal-ctor/main/LICENSE

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
