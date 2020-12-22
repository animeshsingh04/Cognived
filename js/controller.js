angular.module("myApp",[])
.controller('submitController',['$scope',function($scope){

	$scope.list = [
		{
			Name : 'Trade Mill',
			Url : 'http://www.bowflex.com/on/demandware.static/-/Library-Sites-bowflexShared/default/dw574111d5/product-lines/treadmills/treadmill-bxt216-plp-hero.png',
			description : 'Best for fitness',
			price : '25000',
      count : '0'
		},
		{
			Name : 'Dumbles',
			Url : 'http://nextgenfitness.in/images/Viva/rcd.jpg',
			description : 'Dumbles ',
			price : '15000',
      count : '0'
		},
		{
			Name : 'Bicycle',
			Url : 'http://img.diytrade.com/cdimg/965321/9757431/0/1247792020.jpg',
			description : 'Easiest way for cycling',
			price : '10000',
      count : '0'
		}
	];
	$scope.submit = function() {
        if ($scope.imageUrl) {
          $scope.list.push(this.imageUrl);
          $scope.imageUrl = '';
        }
        if ($scope.Product_Name) {
          $scope.list.push(this.Product_Name);
          $scope.Product_Name = '';
        }
        if ($scope.description) {
          $scope.list.push(this.description);
          $scope.description = '';
        }
        if ($scope.price) {
          $scope.list.push(this.price);
          $scope.price = '';
        }
      
    };
	$scope.cart=[];

   // $scope.disable= false;
	$scope.total = 0;
    $scope.AddFunc = function(index){
      index.count  = parseInt(index.count) + 1;
      if($scope.cart.indexOf(index) == -1) 
      {
        $scope.cart.push(index);
      }
      $scope.total = parseInt(index.price) + parseInt($scope.total);
      index.disable=true;
    }  

    $scope.Remove = function(index){
      index.count  = parseInt(index.count) - 1;
      $scope.total =  parseInt($scope.total) - parseInt(index.price);
      if(index.count == 0) {
        var pos = $scope.cart.indexOf(index);
      $scope.cart.splice(pos,1);
      index.disable = false;
      }
    }

    $scope.RemoveProduct = function(index){
      var pos = $scope.cart.indexOf(index);
      $scope.cart.splice(pos,1);
      $scope.total = parseInt($scope.total) - parseInt(index.price*index.count);   
      index.count=0;
      index.disable = false;
    }
}]);