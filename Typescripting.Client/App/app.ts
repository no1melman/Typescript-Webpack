/// <reference path="../typings/tsd.d.ts" />

import homeModule = require('./Home/module');

require('angular');
require('angular-ui-router');


var app = angular.module("app", [
    'ui.router'
]);

homeModule.configure(app);