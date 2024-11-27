export const fetchProductsAsync = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 2,
                    name: 'Sahumerio Tibetanos',
                    img: '/img/Sahumerios 1.webp',
                    price: 25,
                    category: 'sahumerios'
                },
                {
                    id: 4,
                    name: 'Sahumerios Tibetanos Frutales',
                    img: '/img/SAHUMERIOS 2.webp',
                    price: 75,
                    category: 'sahumerios'
                },
                {
                    id: 5,
                    name: 'Sahumerios Tibetanos Espirituales',
                    img: '/img/SAHUMERIOS 3.webp',
                    price: 75,
                    category: 'sahumerios'
                },
                {
                    id: 6,
                    name: 'Sahumerios Tibetanos Magicos',
                    img: '/img/SAHUMERIOS 4.webp',
                    price: 75,
                    category: 'sahumerios'
                },
                {
                    id: 3,
                    name: 'Velas de Noche',
                    img: '/img/velas 1.webp',
                    price: 45,
                    category: 'velas'
                },
                {
                    id: 7,
                    name: 'Velas Iluminarte',
                    img: '/img/velas 2.webp',
                    price: 45,
                    category: 'velas'
                },
                {
                    id: 8,
                    name: 'Velas Aromaticas Frutales',
                    img: '/img/velas 3.webp',
                    price: 45,
                    category: 'velas'
                },
                {
                    id: 9,
                    name: 'Velas Espirituales',
                    img: '/img/velas 4.webp',
                    price: 45,
                    category: 'velas'
                },
                {
                    id: 1,
                    name: 'Perfume Aromanza',
                    img: '/img/perfumes 1.jpeg',
                    price: 500,
                    category: 'perfumes'
                },
                {
                    id: 10,
                    name: 'Perfume Fragancia Oriental',
                    img: '/img/perfume 2.webp',
                    price: 500,
                    category: 'perfumes'
                },
                {
                    id: 11,
                    name: 'Perfume Ambientes',
                    img: '/img/perfume 3.webp',
                    price: 500,
                    category: 'perfumes'
                },
                {
                    id: 12,
                    name: 'Perfume Aromanza para Telas',
                    img: '/img/perfume 4.webp',
                    price: 500,
                    category: 'perfumes'
                },
            ]);
        }, 2000);
    });
};

