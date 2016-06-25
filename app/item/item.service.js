(function() {
	angular.module('finotes')
		.service('ItemService', ItemService);

	ItemService.$inject = ['$q'];

	function ItemService($q) {
		var items = [];

		this.addItem = function(newItem) {
			var deferred = $q.defer();

			if (!newItem) {
				return false;
			}

			// get next id value, or use 1 if no stored items
			var lastItem = _.maxBy(items, 'id');

			newItem.id = (lastItem) ? lastItem.id + 1 : 1;
			newItem.createdAt = Math.floor(Date.now() / 1000);

			items.push(newItem);
			deferred.resolve(true);

			return deferred.promise;
		};

		this.getItems = function() {
			return items;
		};

		this.getItem = function(id) {
			if (!id) {
				return items[items.length - 1];
			}

			id = +id;
			return _.find(items, (i) => i.id === id);
		};

		this.deleteItem = function(id) {
			id = +id;
			items.splice(_.indexOf(items, this.getItem(id)), 1);
		};

		this.clear = function() {
			items = [];
		};

	}
})();
