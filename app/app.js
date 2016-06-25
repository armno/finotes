(function() {
	angular.module('finotes', [
		'ui.router',
		'ngMaterial'
	])
	 .config(function($stateProvider, $urlRouterProvider) {
		 $urlRouterProvider.otherwise('/home');

		 $stateProvider.state('home', {
				 url: '/home',
				 templateUrl: 'app/item/list.html',
				 controller: 'ItemListCtrl',
				 controllerAs: 'home',
				 resolve: {
					 items: function(ItemService) {
						 return ItemService.getItems();
					 }
				 }
		 })
		 .state('add', {
				 url: '/add',
				 templateUrl: 'app/item/add.html',
				 controller: 'AddItemCtrl',
				 controllerAs: 'add'
		 });
	 });
})();