(function() {
	angular.module('finotes')
		.controller('ViewItemCtrl', ViewItemCtrl);

	ViewItemCtrl.$inject = ['item', '$state'];

	function ViewItemCtrl(item, $state) {
		this.item = item;

		this.goBack = function() {
			$state.go('home');
		};

		this.edit = function(item) {
			$state.go('edit', { id: item.id });
		};
	}
})();
