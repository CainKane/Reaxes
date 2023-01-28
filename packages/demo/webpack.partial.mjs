const {
	ProvidePlugin ,
	DefinePlugin,
} = webpack;

export const webpackConfig = {
	devServer : {
		port : await getPort(3001),
	},
	resolve: {
		alias: {
			'@@libs' : path.resolve(__dirname , 'libs') ,
			'#root' : repoRoot ,
			'#packages' : path.resolve(repoRoot,'packages') ,
			'#utils' : path.resolve(repoRoot , 'packages/utils') ,
		},
	},
	plugins: [
		new NodePolyfillPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(repoRoot, 'public/index.template.ejs'),
			filename: 'index.html',
			minify: false,
			hash: true,
			excludeChunks: [],
			inject: false,
		}),
		new DefinePlugin({
			__IS_MOCK__ : mock ? 'true' : 'false' ,
			__ENV__ : JSON.stringify(env) ,
			__NODE_ENV__ : JSON.stringify(node_env),
			__METHOD__ : JSON.stringify(method),
			__EXPERIMENTAL__ : JSON.stringify(experimental === 'experimental'),
		}),
		new ProvidePlugin({
			orzPromise: ['#utils', 'orzPromise'],
			utils: ['#utils'],
			toolkits: ['@@toolkits'],
			crayon: ['#utils', 'crayon'],
			logProxy: ['#utils', 'logProxy'],
			decodeQueryString: ['#utils', 'decodeQueryString'],
			encodeQueryString: ['#utils', 'encodeQueryString'],
			stringify: ['#utils', 'stringify'],
		}),
	],
};

import path from 'path';
import webpack from 'webpack';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { getPort } from '../../build/toolkits.mjs';
import {method, repo, repoRoot , mock , env , node_env , experimental, } from '../../build/entrance.mjs';
import HtmlWebpackPlugin from 'html-webpack-plugin';
