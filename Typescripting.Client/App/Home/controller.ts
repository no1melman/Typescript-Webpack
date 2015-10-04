export function register(app: angular.IModule) {
    app.controller("HomeController", HomeController);
}

interface IHomeController {
    hello: string
}

class HomeController implements IHomeController {
    hello: string;

    constructor(private $http: angular.IHttpService) {
        this.hello = "Howdy";

        this.$http.get('api/test')
            .then(
                (response: angular.IHttpPromiseCallbackArg<string>) => {

                },
                (error: string) => {

                    throw error;
                });

    }
}