/**
 * Created by subbaraju on 30/11/2016.
 */
(function(){
    angular.module("BHC")
        .config(Config);

    function Config($routeProvider)
    {
        $routeProvider
            .when("/home",{
                templateUrl:"home.html",
                controller:"HomeController",
                controllerAs:"model",

            })
            .when("/road",{
                templateUrl:"road.html",
                controller:"RoadController",
                controllerAs:"model",

            })
            .when("/chat",{
                templateUrl:"chat.html",
                controller:"ChatController",
                controllerAs:"model",

            })
            .when("/BuildTeam",{
                templateUrl:"BuildTeam.html",
                controller:"BuildTeamController",
                controllerAs:"model"

            })
            .when("/team",{
                templateUrl:"team.html",
                controller:"TeamController",
                controllerAs:"model",

            })
            .when("/login",{
                templateUrl:"login.html",
                controller:"LoginController",
                controllerAs:"model",

            })
            .when("/teamDetail",{
                templateUrl:"teamDetail.html",
                controller:"TeamDetailController",
                controllerAs:"model",

            })
            .when("/videos",{
                templateUrl:"videos.html",
                controller:"VideosController",
                controllerAs:"model",

            })
            .when("/",{

                redirectTo:"/home"
            })
            .otherwise({
                redirectTo:"/home"
            });

    }

})();

