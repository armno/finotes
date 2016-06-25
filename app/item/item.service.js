(function() {
	angular.module('finotes')
		.service('ItemService', ItemService);

	function ItemService() {
		this.getItems = function() {
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
		};
	}
})();