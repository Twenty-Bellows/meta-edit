const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

defaultConfig[ 0 ] = {
	...defaultConfig[ 0 ],
	...{
		entry: {
			editor: './src/index.js',
		},
	},
};

module.exports = defaultConfig;
