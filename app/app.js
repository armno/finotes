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
						 items: function() {
							 return [
								{
									id: 1,
									name: 'Food',
									value: 35
								},
								{
									id: 2,
									name: 'Coffee',
									value: 75
								},
								{
									id: 3,
									name: 'Drink',
									value: 90
								},
								{
									id: 4,
									name: 'Gas',
									value: 500
								}
							 ];
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
	}
})();