(function() {
	angular.module('finotes', [
		'ui.router',
		'ngMaterial'
	])
	 .config(function($stateProvider, $urlRouterProvider) {
			 $urlRouterProvider.otherwise('/home');

			 $stateProvider.state('home', {
					 url: '/home',
					 templateUrl: 'home.html',
					 controller: HomeCtrl,
					 controllerAs: 'home',
					 resolve: {
						 items: function(ItemService) {
							 return ItemService.getItems();
						 }
					 }
			 })
			 .state('add', {
					 url: '/add',
					 templateUrl: 'add.html',
					 controller: AddCtrl,
					 controllerAs: 'add'
			 });
	 });

	function HomeCtrl(items) {
		this.message = 'hello from angular';
		this.items = items;
	}

	function AddCtrl() {
		this.title = 'Add new item';
		this.submit = function(item) {
			console.log('submitted', item);
		};
	}
})();