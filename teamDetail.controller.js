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

        function init() {

        }

        init();

        vm.list=[];

        function send(message)
        {
            console.log(message);
            vm.list.push(message);
            console.log(vm.list);
            vm.message = true;
            console.log(vm.message);

        }



    }

})();

