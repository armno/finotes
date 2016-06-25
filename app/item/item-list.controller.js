(function() {
	angular.module('finotes')
		.controller('ItemListCtrl', ItemListCtrl);

	ItemListCtrl.$inject = ['items', '$state'];

	function ItemListCtrl(items, $state) {
		this.items = items;
		this.onClickItem = function(item) {
			$state.go('view', { id: item.id});
		}
	}
})();
