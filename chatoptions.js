/**
 * Created by subbaraju on 6/12/2016.
 */
/**
 * Created by subbaraju on 6/12/2016.
 */
/**
 * Created by subbaraju on 1/12/2016.
 */
/**
 * Created by subbaraju on 30/11/2016.
 */


(function(){
    angular
        .module("BHC")
        .controller("ChatOptionsController",ChatOptionsController);


    function ChatOptionsController($location) {
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

        }




    }

})();

