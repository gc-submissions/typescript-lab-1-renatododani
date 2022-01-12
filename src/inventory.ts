import { Product } from "./products";

interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory:InventoryItem[] = [
    {
        product: {
            name: 'motor',
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: 'LED',
            price: 1.00
        },
        quantity: 20
    }
]

export function calcInventoryValue(inventory:InventoryItem[]):number {
    let total:number = 0;
    if(inventory.length === 0) {
        return total;
    }
    for(let i=0; i<inventory.length; i++) {
        total = total + (inventory[i].quantity * inventory[i].product.price);
    }
    return total;
}

const result = calcInventoryValue(inventory);
console.log(result)