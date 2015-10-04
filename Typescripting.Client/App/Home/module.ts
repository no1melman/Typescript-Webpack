/// <reference path="../../typings/tsd.d.ts" />

import controller = require('./controller');

export function configure(app: angular.IModule) {

    controller.register(app);

    app.config(($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider): void => {
        $stateProvider.state('home', <ng.ui.IState>{
            url: '/',
            views: {
                "main@": <IView > {
                    controller: "HomeController as vm",
                    template: require('./home.html')
                }
            }
        });

        $urlRouterProvider.otherwise('/');
    });
}

interface IView {
    controller: string;
    template: any;
}