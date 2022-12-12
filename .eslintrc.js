module.exports = {
	'env':
	{
		'browser': true,
		'commonjs': true,
		'es2021': true,
		'jest': true
	},
	'extends': 'airbnb',
	'overrides': [
	],
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'no-tabs':0,
		'eqeqeq': 'error',
		'no-trailing-spaces': 'error',
		'object-curly-spacing': [
			'error', 'always'
		],
		'object-curly-newline':[ 
			'error', { 'ObjectPattern': { 'multiline': true }}
		],
		'no-underscore-dangle': 0,
		'arrow-spacing': [
			'error', { 'before': true, 'after': true }
		],
		'no-console': 0,
		'linebreak-style': [
			'error', 'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
