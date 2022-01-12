

export interface Product {
    name: string;
    price: number;
}

const products:Product[] = [
    {
        name: 'Iphone',
        price: 1200
    },
    {
        name: 'Samsung',
        price: 1100
    },
    {
        name: 'Motorola',
        price: 950
    }
];

export function calcAverageProductPrice(products: Product[]):number {
    let sum:number = 0;
    if (products.length === 0) {
        return sum;
    }
    
    for (let i=0; i<products.length; i++) {
        sum= sum + products[i].price;
    }
    return parseFloat((sum/products.length).toFixed(2));
};

const result = calcAverageProductPrice(products);
console.log(result)