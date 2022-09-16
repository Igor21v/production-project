import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLladers(options: BuildOptions): webpack.RuleSetRule[] {
    
    //Если не используем тайскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          options.isDev? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }

return [
    typescriptLoader,
    cssLoader,
]
}