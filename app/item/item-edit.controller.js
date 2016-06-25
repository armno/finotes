(function() {
	angular.module('finotes')
		.controller('EditItemCtrl', EditItemCtrl);

	EditItemCtrl.$inject = ['item', '$state']

	function EditItemCtrl(item, $state) {

		this.item = item;

		this.submit = function(updatedItem) {
			console.log(updatedItem);
		}
	}
})();
