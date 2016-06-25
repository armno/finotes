(function() {
	angular.module('finotes')
		.controller('ItemListCtrl', ItemListCtrl);

	ItemListCtrl.$inject = ['items'];

	function ItemListCtrl(items) {
		this.items = items;
	}
})();
