/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',
    'uiRouter',
    './content/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'app.controllers',
        'app.directives',
        'ui.router'
    ]);
});
