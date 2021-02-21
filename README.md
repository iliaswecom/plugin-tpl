## plugin-tpl

A simple plugin template. Re-creating the same setup every time is annoying so I thought of creating an easy to use (for me) template.

---

![Tests](https://github.com/mrxkon/plugin-tpl/workflows/Main_Checks/badge.svg)
[![PHP Compatibility 7.0+](https://img.shields.io/badge/PHP%20Compatibility-7.0+-8892BF)](https://github.com/PHPCompatibility/PHPCompatibility)
[![WordPress Coding Standards](https://img.shields.io/badge/WordPress%20Coding%20Standards-latest-blue)](https://github.com/WordPress/WordPress-Coding-Standards)

#### Setup

`composer install && npm install`

Uses: [ESLint](https://eslint.org/), [stylelint](https://stylelint.io/), [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer), [PHPCompatibilityWP](https://github.com/PHPCompatibility/PHPCompatibilityWP), [WordPress Coding Standards](https://github.com/WordPress/WordPress-Coding-Standards), [node-composer-runner](https://www.npmjs.com/package/node-composer-runner), [copy-and-watch](https://www.npmjs.com/package/copy-and-watch), [zip-build](https://www.npmjs.com/package/zip-build)

#### Available commands

- `css:lint` - Lints all css inside the `src/css` directory.
- `css:fix` - Fixes any issues inside the `src/css` directory.
- `js:lint` - Lints all css inside the `src/js` directory.
- `css:fix` - Fixes any issues inside the `src/js` directory.
- `php:lint` - Lints all `.php` files inside the `src` directory.
- `php:fix`  - Fixes all `.php` files inside the `src` directory.
- `php:compat` - Checks all `.php` files inside the `src` directory for compatibility with PHP 7.0+.
- `lint` - Runs all previous mentioned lints.
- `fix` - Runs all previous mentioned fixes.
- `copy` - Copies all files from the `src/` directory into `build/{plugin-name}` directory.
- `watch` - Watches for file changes in `src/` directory and copies files into `build/{plugin-name}` directory.
- `zip` - Creates a `.zip` of `build/{plugin-name}` directory.
- `build` - Single action for `copy` & `zip` commands.
