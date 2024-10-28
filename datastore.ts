// Use TypeScript to implement the data store.
// Ensure that the data store can handle any type of item (use generics).
// Define an interface for the items that includes at least an id and a name.
// Implement error handling for cases where an item is not found.
// Additional Challenges
// Modify the DataStore to allow for bulk addition of items.
// Implement a method to find items by a specific property (e.g., name).
// Add type safety checks to ensure that only items with unique IDs can be added.

interface Item {
    id: number,
    name: string,
}

const items: Item[] = [
    {
        id: 1,
        name: "sarath"
    },
    {
        id: 2,
        name: "nettem"
    }
];

const addItem = (newItem: Item): string =>{
    const isExists: Item | undefined = items.find((item)=> item.id == newItem.id )
    if(isExists){
        return "Item ID already Exists"
    }
    items.push(newItem)
    return "New Item Added"
};

const findItem = (itemId: number): Item | string | undefined =>{
    const found: Item | undefined = items.find((item)=> item.id == itemId )
    if(!found){
        return "Item Does not exist"
    }
    return found
}

for(let i=0; i<5; i++){
    const newItem = {
        id: Math.random(),
        name: Math.random().toString()
    };
    addItem(newItem)
};

console.log("Items", items)

const id = 1
const foundItem = findItem(id);
console.log("foundItem", foundItem)