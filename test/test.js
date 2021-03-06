/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-normal-quantile' );
var cdf = require( '@stdlib/stats-base-dists-normal-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-normal-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-normal-logpdf' );
var mgf = require( '@stdlib/stats-base-dists-normal-mgf' );
var pdf = require( '@stdlib/stats-base-dists-normal-pdf' );
var kurtosis = require( '@stdlib/stats-base-dists-normal-kurtosis' );
var skewness = require( '@stdlib/stats-base-dists-normal-skewness' );
var stdev = require( '@stdlib/stats-base-dists-normal-stdev' );
var variance = require( '@stdlib/stats-base-dists-normal-variance' );
var entropy = require( '@stdlib/stats-base-dists-normal-entropy' );
var median = require( '@stdlib/stats-base-dists-normal-median' );
var mode = require( '@stdlib/stats-base-dists-normal-mode' );
var mean = require( '@stdlib/stats-base-dists-normal-mean' );
var Normal = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Normal, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a `sigma` argument which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Normal( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a `sigma` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Normal( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `mu` and `sigma`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Normal( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var normal = new Normal();
	t.strictEqual( normal instanceof Normal, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var normal = new Normal( 2.0, 4.0 );
	t.strictEqual( normal instanceof Normal, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var normal = Normal();
	t.strictEqual( normal instanceof Normal, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	normal = Normal( 2.0, 4.0 );
	t.strictEqual( normal instanceof Normal, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `mu`', function test( t ) {
	var normal;

	normal = new Normal( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( normal, 'mu' ), true, 'has property' );
	t.strictEqual( normal.mu, 2.0, 'returns expected value' );

	normal.mu = 3.0;
	t.strictEqual( normal.mu, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `mu` to a value which is not a number primitive', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var normal = new Normal();
			normal.mu = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `sigma`', function test( t ) {
	var normal;

	normal = new Normal( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( normal, 'sigma' ), true, 'has property' );
	t.strictEqual( normal.sigma, 4.0, 'returns expected value' );

	normal.sigma = 3.0;
	t.strictEqual( normal.sigma, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `sigma` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var normal = new Normal();
			normal.sigma = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var normal;

	t.strictEqual( hasOwnProp( Normal.prototype, 'entropy' ), true, 'has property' );

	normal = new Normal();
	t.strictEqual( normal.entropy, entropy( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var normal;

	t.strictEqual( hasOwnProp( Normal.prototype, 'kurtosis' ), true, 'has property' );

	normal = new Normal( 2.0, 4.0 );
	t.strictEqual( normal.kurtosis, kurtosis( 2.0, 4.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var normal;

	t.strictEqual( hasOwnProp( Normal.prototype, 'mean' ), true, 'has property' );

	normal = new Normal();
	t.strictEqual( normal.mean, mean( 0.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution median', function test( t ) {
	var normal;

	t.strictEqual( hasOwnProp( Normal.prototype, 'median' ), true, 'has property' );

	normal = new Normal( 5.0, 2.0 );
	t.strictEqual( normal.median, median( 5.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var normal;

	t.strictEqual( hasOwnProp( Normal.prototype, 'mode' ), true, 'has property' );

	normal = new Normal( 2.0, 3.0 );
	t.strictEqual( normal.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var normal;

	t.strictEqual( hasOwnProp( Normal.prototype, 'skewness' ), true, 'has property' );

	normal = new Normal( 0.5, 0.5 );
	t.strictEqual( normal.skewness, skewness( 0.5, 0.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var normal;

	t.strictEqual( hasOwnProp( Normal.prototype, 'stdev' ), true, 'has property' );

	normal = new Normal( 3.0, 1.0 );
	t.strictEqual( normal.stdev, stdev( 3.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var normal;

	t.strictEqual( hasOwnProp( Normal.prototype, 'variance' ), true, 'has property' );

	normal = new Normal( 3.0, 1.0 );
	t.strictEqual( normal.variance, variance( 3.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var normal;
	var y;

	t.strictEqual( hasOwnProp( Normal.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Normal.prototype.cdf ), true, 'has method' );

	normal = new Normal();
	y = normal.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (PDF)', function test( t ) {
	var normal;
	var y;

	t.strictEqual( hasOwnProp( Normal.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Normal.prototype.logpdf ), true, 'has method' );

	normal = new Normal();
	y = normal.logpdf( 0.2 );

	t.strictEqual( y, logpdf( 0.2, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (CDF)', function test( t ) {
	var normal;
	var y;

	t.strictEqual( hasOwnProp( Normal.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Normal.prototype.logcdf ), true, 'has method' );

	normal = new Normal();
	y = normal.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var normal;
	var y;

	t.strictEqual( hasOwnProp( Normal.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Normal.prototype.mgf ), true, 'has method' );

	normal = new Normal();
	y = normal.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var normal;
	var y;

	t.strictEqual( hasOwnProp( Normal.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Normal.prototype.pdf ), true, 'has method' );

	normal = new Normal();
	y = normal.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var normal;
	var y;

	t.strictEqual( hasOwnProp( Normal.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Normal.prototype.quantile ), true, 'has method' );

	normal = new Normal();
	y = normal.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 0.0, 1.0 ), 'returns expected value' );
	t.end();
});
