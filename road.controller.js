


(function(){
    angular
        .module("BHC")
        .controller("RoadController",RoadController);


    function RoadController($location) {
        var vm = this;

        vm.navigation=navigation;



        function init() {

        }

        init();


        function navigation()
        {
            console.log("in controller");
        }




    }

})();


