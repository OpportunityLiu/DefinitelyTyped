// Type definitions for webpack-watched-glob-entries-plugin 2.1
// Project: https://github.com/Milanzor/webpack-watched-glob-entries-plugin#readme
// Definitions by: Joel Spadin <https://github.com/ChaosinaCan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { IOptions } from 'glob';
import { EntryFunc, Plugin } from 'webpack';

export interface PluginOptions {
    basename_as_entry_name?: boolean;
}

export default class WebpackWatchedGlobEntries extends Plugin {
    static getEntries(globs: string[], globOptions?: IOptions, pluginOptions?: PluginOptions): EntryFunc;
    static getFiles(globString: string, globOptions?: IOptions, basename_as_entry_name?: boolean): Record<string, string>;
}
