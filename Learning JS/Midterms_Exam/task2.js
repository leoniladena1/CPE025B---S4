function getInventoryValuation(inventory) {
    let totalPerCategory ={};

    for (let product of inventory){
        if (typeof product.qty === "number" &&
            typeof product.price === "number" &&
            product.qty > 0 &&
            product.price > 0
        ){
            let Value = product.qty * product.price;
            if (totalPerCategory[product.category]){
                totalPerCategory[product.category] += Value;
            }else {
                totalPerCategory[product.category] = Value;
            }
        }

        
    }
    
    return totalPerCategory;
}
// Test Code
const testInventory = [
    { name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
    { name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
    { name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
    { name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];
console.log(getInventoryValuation(testInventory)); 


