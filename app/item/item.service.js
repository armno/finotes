(function() {
	angular.module('finotes')
		.service('ItemService', ItemService);

	ItemService.$inject = ['$q'];

	function ItemService($q) {
		var items = [
			{
				name: 'Food',
				value: 35,
				createdAt: 1466836632981
			},
			{
				name: 'Coffee',
				value: 75,
				createdAt: 1466836632983
			},
			{
				name: 'Drink',
				value: 90,
				createdAt: 1466836632984
			},
			{
				name: 'Gas',
				value: 500,
				createdAt: 1466836632985
			}
		];

		this.add = function(newItem) {
			var deferred = $q.defer();

			newItem.createdAt = new Date().getTime();
			items.push(newItem);
			deferred.resolve(true);

			return deferred.promise;
		};

		this.getItems = function() {
			return items;
		};
	}
})();