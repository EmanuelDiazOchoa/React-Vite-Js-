export const fetchProductsAsync = async () => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve([
        { id: 1, name: "Producto 1", price: 100 },
        { id: 2, name: "Producto 2", price: 200 },
        { id: 3, name: "Producto 3", price: 300 },
        { id: 4, name: "Producto 4", price: 400 },
        { id: 5, name: "Producto 5", price: 500 },
        ]);
    }, 2000); 
    });
};

