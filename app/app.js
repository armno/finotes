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
		 })
		 .state('view', {
			 url: '/view/:id',
			 templateUrl: 'app/item/view.html',
			 controller: 'ViewItemCtrl',
			 controllerAs: 'viewItem',
			 resolve: {
				 item: function(ItemService, $stateParams) {
					 return ItemService.getItem($stateParams.id);
				 }
			 }
		 })
		 .state('edit', {
			 url: '/edit/:id',
			 templateUrl: 'app/item/edit.html',
			 controller: 'EditItemCtrl',
			 controllerAs: 'editItem',
			 resolve: {
				 item: function(ItemService, $stateParams) {
					 return ItemService.getItem($stateParams.id);
				 }
			 }
		 })
	 });
})();