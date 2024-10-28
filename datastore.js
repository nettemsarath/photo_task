// Use TypeScript to implement the data store.
// Ensure that the data store can handle any type of item (use generics).
// Define an interface for the items that includes at least an id and a name.
// Implement error handling for cases where an item is not found.
// Additional Challenges
// Modify the DataStore to allow for bulk addition of items.
// Implement a method to find items by a specific property (e.g., name).
// Add type safety checks to ensure that only items with unique IDs can be added.
var items = [
    {
        id: 1,
        name: "sarath"
    },
    {
        id: 2,
        name: "nettem"
    }
];
var addItem = function (newItem) {
    var isExists = items.find(function (item) { return item.id == newItem.id; });
    if (isExists) {
        return "Item ID already Exists";
    }
    items.push(newItem);
    return "New Item Added";
};
var findItem = function (itemId) {
    var found = items.find(function (item) { return item.id == itemId; });
    if (!found) {
        return "Item Does not exist";
    }
    return found;
};
for (var i = 0; i < 5; i++) {
    var newItem = {
        id: Math.random(),
        name: Math.random().toString()
    };
    addItem(newItem);
}
;
console.log("Items", items);
var id = 1;
var foundItem = findItem(id);
console.log("foundItem", foundItem);
