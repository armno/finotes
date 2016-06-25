(function() {
	angular.module('finotes')
		.controller('AddItemCtrl', AddItemCtrl);

	AddItemCtrl.$inject = ['ItemService', '$state']

	function AddItemCtrl(ItemService, $state) {

		this.submit = function(newItem) {
			ItemService.addItem(newItem)
				.then((isAdded) => {
					if (isAdded) {
						$state.go('home');
					} else {
						console.warn('cannot add new item');
					}
				});
		}
	}
})();
