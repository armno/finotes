(function() {
	angular.module('finotes')
		.service('ItemService', ItemService);

	ItemService.$inject = ['$q'];

	function ItemService($q) {
		var items = [
			{
				id: 1,
				name: 'Food',
				value: 35,
				createdAt: 1466836632981
			},
			{
				id: 2,
				name: 'Coffee',
				value: 75,
				createdAt: 1466836632983
			},
			{
				id: 3,
				name: 'Drink',
				value: 90,
				createdAt: 1466836632984
			},
			{
				id: 4,
				name: 'Gas',
				value: 500,
				createdAt: 1466836632985
			}
		];

		this.addItem = function(newItem) {
			var deferred = $q.defer();

			if (!newItem) {
				return false;
			}

			// get next id value
			var lastItem = _.maxBy(items, 'id');

			newItem.id = lastItem.id + 1;
			newItem.createdAt = Math.floor(Date.now() / 1000);

			items.push(newItem);
			deferred.resolve(true);

			return deferred.promise;
		};

		this.getItems = function() {
			return items;
		};

		this.getItem = function(id) {
			id = +id;
			return _.find(items, (i) => i.id === id);
		};
	}
})();