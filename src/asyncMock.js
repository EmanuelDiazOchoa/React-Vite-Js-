export const fetchProductsAsync = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 2,
                    name: 'Sahumerio Tibetanos',
                    href: '#',
                    imageSrc: '/img/Sahumerios 1.webp',
                    imageAlt: "Sahumerio purifica la vida en tu Hogar.",
                    price: 25,
                    color: 'Multi-colores',
                    category: 1
                },
                {
                    id: 4,
                    name: 'Sahumerios Tibetanos Frutales',
                    href: '#',
                    imageSrc: '/img/SAHUMERIOS 2.webp',
                    imageAlt: "Sahumerios Tibetanos Frutales.",
                    price: 75,
                    color: 'Multi-color',
                    category: 1
                },
                {
                    id: 5,
                    name: 'Sahumerios Tibetanos Espirituales',
                    href: '#',
                    imageSrc: '/img/SAHUMERIOS 3.webp',
                    imageAlt: "Sahumerios Tibetanos Espirituales.",
                    price: 75,
                    color: 'Multi-color',
                    category: 1
                },
                {
                    id: 6,
                    name: 'Sahumerios Tibetanos Magicos',
                    href: '#',
                    imageSrc: '/img/SAHUMERIOS 4.webp',
                    imageAlt: "Sahumerios Tibetanos Magicos.",
                    price: 75,
                    color: 'Multi-color',
                    category: 1
                },
                {
                    id: 3,
                    name: 'Velas de Noche',
                    href: '#',
                    imageSrc: '/img/velas 1.webp',
                    imageAlt: "12 Velas de Noche.",
                    price: 45,
                    color: 'White',
                    category: 2
                },
                {
                    id: 7,
                    name: 'Velas Iluminarte',
                    href: '#',
                    imageSrc: '/img/velas 2.webp',
                    imageAlt: "Velas Iluminarte industria nacional.",
                    price: 45,
                    color: 'White',
                    category: 2
                },
                {
                    id: 8,
                    name: 'Velas Aromaticas Frutales',
                    href: '#',
                    imageSrc: '/img/velas 3.webp',
                    imageAlt: "Velas Aromaticas Frutales.",
                    price: 45,
                    color: 'Pink Yellow Brown',
                    category: 2
                },
                {
                    id: 9,
                    name: 'Velas Espirituales',
                    href: '#',
                    imageSrc: '/img/velas 4.webp',
                    imageAlt: "Velas Espirituales.",
                    price: 45,
                    color: 'Multi-Color',
                    category: 2
                },
                {
                    id: 1,
                    name: 'Perfume Aromanza',
                    href: '#',
                    imageSrc: '/img/perfumes 1.jpeg',
                    imageAlt: "Perfume Aromanza.",
                    price: 500,
                    color: 'Blue',
                    category: 3
                },
                {
                    id: 10,
                    name: 'Perfume Fragancia Oriental',
                    href: '#',
                    imageSrc: '/img/perfume 2.webp',
                    imageAlt: "Perfume Fragancia Oriental.",
                    price: 500,
                    color: 'Yellow Pink Red Green',
                    category: 3
                },
                {
                    id: 11,
                    name: 'Perfume Ambientes',
                    href: '#',
                    imageSrc: '/img/perfume 3.webp',
                    imageAlt: "Perfume Ambientes ",
                    price: 500,
                    color: 'Yellow Pink Red Green',
                    category: 3
                },
                {
                    id: 12,
                    name: 'Perfume Aromanza para Telas',
                    href: '#',
                    imageSrc: '/img/perfume 4.webp',
                    imageAlt: "Perfume Aromanza para Telas.",
                    price: 500,
                    color: 'violet pink red green',
                    category: 3
                },
            ]);
        }, 2000);
    });
};

