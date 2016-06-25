describe('ItemService', () => {
	beforeEach(module('finotes'));

	var itemService;

	beforeEach(inject(function(_ItemService_) {
		itemService = _ItemService_;
	}))

	it('should be defined', function() {
		expect(itemService).toBeDefined();
	});

	describe('getItems', () => {
		it('should be defined', () => {
			expect(itemService.getItems).toBeDefined();
			expect(typeof itemService.getItems).toEqual('function');
		});

		it('should return a list of existing items initially', () => {
			var items = itemService.getItems();
			expect(items.length).toEqual(4);
			expect(items[0].name).toEqual('Food');
			expect(items[3].name).toEqual('Gas');
		});
	});


	describe('addItem', () => {
		it('should be defined', () => {
			expect(itemService.addItem).toBeDefined();
			expect(typeof itemService.addItem).toEqual('function');
		});

		it('should add item into the list', () => {
			var newItem = {
				name: 'New Item',
				value: 30
			};
			var updateItems;

			itemService.addItem(newItem);
			updateItems = itemService.getItems();
			expect(updateItems.length).toEqual(5);
			expect(updateItems[4].name).toEqual('New Item');
			expect(updateItems[4].value).toEqual(30);
		});

		it('should automatically add createdAt property to newly added item', () => {
			var newItem = {
				name: 'another item',
				value: 55
			};

			var addedTimestamp = Math.floor(Date.now() / 1000);
			itemService.addItem(newItem);

			var updatedItems = itemService.getItems();
			expect(updatedItems[4].createdAt).toBeDefined();
			expect(updatedItems[4].createdAt).toEqual(addedTimestamp);
		})
	});

});