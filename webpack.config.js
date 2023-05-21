const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
	entry: {
		index: "./src/index.js",
		register: "./src/register.js",
        login: "./src/login.js",
        kontakt: "./src/kontakt.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].bundle.js",
		clean: true,
	},
	devtool: "source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		port: 8001
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: true,
			chunks: ["index"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/register.html",
			inject: true,
			chunks: ["index2"],
			filename: "register.html",
		}),
        new HtmlWebpackPlugin({
			template: "./src/kontakt.html",
			inject: true,
			chunks: ["index2"],
			filename: "kontakt.html",
		}),
        new HtmlWebpackPlugin({
			template: "./src/login.html",
			inject: true,
			chunks: ["index2"],
			filename: "login.html",
		}),
		new MiniCssExtractPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "./src/assets/**",
					to() {
						return "assets/img/[name][ext]";
					},
				},
			],
		}),
	],

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: ["autoprefixer"],
							},
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.(png|gif|jpg|jpeg|svg)$/,
				type: "asset/resource",
			},
		],
	},
};
