interface Product {
    id: string;
    name: string;
    price: number;
    tags: string[];
    discount?: number;
}


function applyDiscount(product: Product): number {
    return product.price - (product.discount ?? 0);
}

function getTagSummary(product: Product): string {
    return product.tags.join(", ").toUpperCase();
}

function createProduct(name: string, price: number): Product {
    return {
        id: Math.random().toString(),
        name: name,
        price: price,
        tags: []
    };
}



function findCheapest(products: Product[]): Product | undefined {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    return sorted[0];
}

function printProduct(product: Product): void {
    console.log(`${product.name} costs ${product.price}`);
}
