'use strict';

const webpack = require('webpack');

const { run } = require('../utils/test-utils');
const pkgJSON = require('../../packages/webpack-cli/package.json');
const initPkgJSON = require('../../packages/init/package.json');
const servePkgJSON = require('../../packages/serve/package.json');
const migratePkgJSON = require('../../packages/migrate/package.json');
const infoPkgJSON = require('../../packages/info/package.json');
const generatorsPkgJSON = require('../../packages/generators/package.json');
const webpackDevServerPkgJSON = require('webpack-dev-server/package.json');

describe('single version flag', () => {
    it('outputs versions with command syntax', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs versions with dashed syntax', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['--version'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs versions with alias syntax', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['-v'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs version with info', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['info', '--version'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`@webpack-cli/info ${infoPkgJSON.version}`);
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs version with info using option alias', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['info', '-v'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`@webpack-cli/info ${infoPkgJSON.version}`);
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs version with info using command syntax', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', 'info'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`@webpack-cli/info ${infoPkgJSON.version}`);
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs version with info using command alias', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['v', 'info'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`@webpack-cli/info ${infoPkgJSON.version}`);
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs version with bundle', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['bundle', '--version'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs version with plugin', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['plugin', '--version'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`@webpack-cli/generators ${generatorsPkgJSON.version}`);
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs version with loader', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['loader', '--version'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`@webpack-cli/generators ${generatorsPkgJSON.version}`);
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs version with init', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['init', '--version'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`@webpack-cli/init ${initPkgJSON.version}`);
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs version with serve', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['serve', '--version'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`@webpack-cli/serve ${servePkgJSON.version}`);
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs version with migrate', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['migrate', '--version'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`@webpack-cli/migrate ${migratePkgJSON.version}`);
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs version with the alias c for init', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['i', '--version'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`@webpack-cli/info ${infoPkgJSON.version}`);
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('should ask to install unknown command using command syntax', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', 'unknown'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toContain("For using this command you need to install: 'unknown' package");
        expect(stderr).toContain("Would you like to install 'unknown' package?");
        expect(stdout).toBeFalsy();
    });

    it('should ask to install unknown command using command syntax with multi commands', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', 'info', 'unknown'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toContain("For using this command you need to install: 'unknown' package");
        expect(stderr).toContain("Would you like to install 'unknown' package?");
        expect(stdout).toBeFalsy();
    });

    it('should work for multiple commands', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['info', 'serve', '--version'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`@webpack-cli/info ${infoPkgJSON.version}`);
        expect(stdout).toContain(`@webpack-cli/serve ${servePkgJSON.version}`);
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('should output versions for multiple commands using command syntax', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', 'info', 'serve'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`@webpack-cli/info ${infoPkgJSON.version}`);
        expect(stdout).toContain(`@webpack-cli/serve ${servePkgJSON.version}`);
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('should ask to install command when unknown command used with --version flag', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['init', 'abc', '--version', '--no-color'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toContain("For using this command you need to install: 'abc' package");
        expect(stderr).toContain("Would you like to install 'abc' package?");
        expect(stdout).toBeFalsy();
    });

    it('should ask to install command when unknown command used with -v alias', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['init', 'abc', '-v', '--no-color'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toContain("For using this command you need to install: 'abc' package");
        expect(stderr).toContain("Would you like to install 'abc' package?");
        expect(stdout).toBeFalsy();
    });

    it('should not output version with help command', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', 'help'], false);

        expect(exitCode).toBe(2);
        expect(stderr).toContain(`Invalid command 'help'`);
        expect(stderr).toContain(`Run 'webpack --help' to see available commands and options`);
        expect(stdout).toBeFalsy();
    });

    it('should not output version with help dashed', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', '--help'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain('webpack version|v [commands...]');
    });

    it('outputs versions with --color using command syntax', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['--version', '--color'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs versions with --no-color using command syntax', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['--version', '--no-color'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs versions with --color using command syntax', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', '--color'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('outputs versions with --no-color using command syntax', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', '--no-color'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('should ask to install command when unknown command used', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', 'abc', '--no-color'], false, []);

        expect(exitCode).toBe(0);
        expect(stderr).toContain("For using this command you need to install: 'abc' package");
        expect(stderr).toContain("Would you like to install 'abc' package?");
        expect(stdout).toBeFalsy();
    });

    it('throws error if invalid option is passed with version command', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', '--abc', '--no-color'], false);

        expect(exitCode).toBe(2);
        expect(stderr).toContain(`error: unknown option '--abc`);
        expect(stderr).toContain("Run 'webpack --help' to see available commands and options");
        expect(stdout).toBeFalsy();
    });

    it('should ask to install command when unknown command used with --version flag', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['--version', 'abc', '--no-color'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toContain("For using this command you need to install: 'abc' package");
        expect(stderr).toContain("Would you like to install 'abc' package?");
        expect(stdout).toBeFalsy();
    });

    it('throws error if invalid option is passed with --version flag', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['--version', '--abc', '--no-color'], false);

        expect(exitCode).toBe(2);
        expect(stderr).toContain(`Invalid option '--abc'`);
        expect(stderr).toContain("Run 'webpack --help' to see available commands and options");
        expect(stdout).toBeFalsy();
    });

    it('should ask to install command when unknown command used with -v alias', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['-v', 'abc', '--no-color'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toContain("For using this command you need to install: 'abc' package");
        expect(stderr).toContain("Would you like to install 'abc' package?");
        expect(stdout).toBeFalsy();
    });

    it('throws error if invalid option is passed with -v alias', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['-v', '--abc', '--no-color'], false);

        expect(exitCode).toBe(2);
        expect(stderr).toContain("Invalid option '--abc'");
        expect(stderr).toContain("Run 'webpack --help' to see available commands and options");
        expect(stdout).toBeFalsy();
    });

    it('should log an error using command syntax with the "version" value', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', 'version'], false);

        expect(exitCode).toBe(2);
        expect(stderr).toContain(`Invalid command 'version'`);
        expect(stderr).toContain(`Run 'webpack --help' to see available commands and options`);
        expect(stdout).toBeFalsy();
    });

    it('should work using command syntax and the "--version" argument', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', '--version'], false);

        expect(exitCode).toBe(0);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain(`webpack-cli ${pkgJSON.version}`);
        expect(stdout).toContain(`webpack ${webpack.version}`);
        expect(stdout).toContain(`webpack-dev-server ${webpackDevServerPkgJSON.version}`);
    });

    it('should log an error using command syntax with unknown argument', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', '--unknown'], false);

        expect(exitCode).toBe(2);
        expect(stderr).toContain("unknown option '--unknown'");
        expect(stderr).toContain(`Run 'webpack --help' to see available commands and options`);
        expect(stdout).toBeFalsy();
    });

    it('should log an error using command syntax with unknown argument #2', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', 'info', '--unknown'], false);

        expect(exitCode).toBe(2);
        expect(stderr).toContain("unknown option '--unknown'");
        expect(stderr).toContain("Run 'webpack --help' to see available commands and options");
        expect(stdout).toBeFalsy();
    });

    it('should log an error using command syntax with multiple commands with unknown argument', () => {
        const { exitCode, stderr, stdout } = run(__dirname, ['version', 'info', 'serve', '--unknown'], false);

        expect(exitCode).toBe(2);
        expect(stderr).toContain("unknown option '--unknown'");
        expect(stderr).toContain("Run 'webpack --help' to see available commands and options");
        expect(stdout).toBeFalsy();
    });
});
