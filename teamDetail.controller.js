/**
 * Created by subbaraju on 1/12/2016.
 */



(function(){
    angular
        .module("BHC")
        .controller("TeamDetailController",TeamController);
    console.log("hi");

    function TeamController() {
        var vm = this;


        vm.send=send;
        vm.remove=remove;

        function init() {

        }

        init();

        vm.favourite=true;

        function send()
        {
            console.log(false);

        vm.favourite=false;
        }

        function remove()
        {
            console.log(true);

            vm.favourite=true;
        }



    }

})();

