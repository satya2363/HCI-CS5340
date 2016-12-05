


(function(){
    angular
        .module("BHC")
        .controller("RoadController",RoadController);


    function RoadController($location) {
      var vm = this;

      vm.enable=enable;


      vm.list=[{
        id:0,
        heading : "Heading",
        content: "hi hello how are you",
        enable : true,
        disable:false
      },
        {
          id:1,
          heading : "Heading",
          content: "hi hello how are you",
          enable : false,
          disable:true
        },
        {
          id:2,
          heading : "Heading",
          content: "hi hello how are you",
          enable : false,
          disable:true
        },
        {
          id:3,
          heading : "Heading",
          content: "hi hello how are you",
          enable : false,
          disable:true
        },
        {
          id:4,
          heading : "Heading",
          content: "hi hello how are you",
          enable : false,
          disable:true
        },
        {
          id:5,
          heading : "Heading",
          content: "hi hello how are you",
          enable : false,
          disable:true
        },
        {
          id:6,
          heading : "Heading",
          content: "hi hello how are you",
          enable : false,
          disable:true
        },
        {
          id:0,
          heading : "Heading",
          content: "hi hello how are you",
          enable : false,
          disable:true
        }
      ];


      function enable(panelid)
      {
        console.log("hello hi");
        console.log(panelid);
        vm.list[panelid+1].enable=true;
        vm.list[panelid+1].disable=false;

      }



    }

})();


