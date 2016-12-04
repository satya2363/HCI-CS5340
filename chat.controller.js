/**
 * Created by subbaraju on 1/12/2016.
 */
/**
 * Created by subbaraju on 30/11/2016.
 */


(function(){
    angular
        .module("BHC")
        .controller("ChatController",ChatController);


    function ChatController($location) {
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

