(function() {
	angular.module('finotes')
		.controller('ViewItemCtrl', ViewItemCtrl);

	ViewItemCtrl.$inject = ['item', '$state', 'ItemService'];

	function ViewItemCtrl(item, $state, ItemService) {
		this.item = item;

		this.goBack = function() {
			$state.go('home');
		};

		this.edit = function(item) {
			$state.go('edit', { id: item.id });
		};

		this.delete = function(id) {
			ItemService.deleteItem(id);
			$state.go('home');
		}
	}
})();
