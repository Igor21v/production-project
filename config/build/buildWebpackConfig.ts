import { BuildOptions } from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildLladers } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import webpack from "webpack";
import path from 'path';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;
    return {
        mode, 
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLladers(),
        },
        resolve: buildResolvers(),
    }
}