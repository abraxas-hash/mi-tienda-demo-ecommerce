export const products = [
  {
    id: "1",
    name: "Chompa de Alpaca Premium",
    price: 350.00,
    discount: 20,
    quantityAvailable: 5,
    category: "Chompas",
    currentPrice: 280.00,
    sizes: ["xl", "l", "m"],
    colors: ["#D4BE8D", "#6F3E18", "#000"],
    images: ["/images/products/product-1.jpg"],
    punctuation: {
      countOpinions: 45,
      punctuation: 4.8,
      votes: [
        { value: 1, count: 0 },
        { value: 2, count: 1 },
        { value: 3, count: 2 },
        { value: 4, count: 10 },
        { value: 5, count: 32 },
      ],
    },
    reviews: [
      {
        name: "Carlos Mendoza",
        avatar: "/images/featured-1.jpg",
        description: "<p>La calidad de la lana es increíble. Muy abrigadora para el invierno limeño.</p>",
        punctuation: 5,
      }
    ],
  },
  {
    id: "2",
    name: "Polo Algodón Pima - Blanco",
    price: 110.00,
    quantityAvailable: 10,
    category: "Polos",
    currentPrice: 89.90,
    sizes: ["s", "m", "l"],
    colors: ["#FFF"],
    images: ["/images/products/product-2.jpg"],
    punctuation: {
      countOpinions: 120,
      punctuation: 4.9,
      votes: [
        { value: 1, count: 0 },
        { value: 2, count: 0 },
        { value: 3, count: 5 },
        { value: 4, count: 15 },
        { value: 5, count: 100 },
      ],
    },
    reviews: [
      {
        name: "María Garcia",
        avatar: "/images/featured-1.jpg",
        description: "<p>Súper suave, se nota la calidad del algodón peruano.</p>",
        punctuation: 5,
      }
    ],
  },
  {
    id: "3",
    name: "Chullo Tejido Tradicional",
    price: 60.00,
    quantityAvailable: 15,
    category: "Accesorios",
    currentPrice: 45.00,
    sizes: ["M", "L"],
    colors: ["#FF0000", "#0000FF", "#FFF"],
    images: ["/images/products/product-3.jpg"],
    punctuation: {
      countOpinions: 25,
      punctuation: 4.7,
      votes: [
        { value: 1, count: 0 },
        { value: 2, count: 0 },
        { value: 3, count: 2 },
        { value: 4, count: 8 },
        { value: 5, count: 15 },
      ],
    },
    reviews: [
      {
        name: "Jorge Luis",
        avatar: "/images/featured-1.jpg",
        description: "<p>Diseño muy bonito y muy tradicional. Recomendado.</p>",
        punctuation: 5,
      }
    ],
  },
  {
    id: "4",
    name: "Polo Básico Negro",
    price: 119.90,
    quantityAvailable: 2,
    category: "Polos",
    currentPrice: 89.99,
    sizes: ["xl", "l"],
    colors: ["#000", "6F3E18", "#D4BE8D", "#FFF"],
    images: ["/images/products/product-3.jpg"],
    punctuation: {
      countOpinions: 81,
      punctuation: 4.5,
      votes: [
        {
          value: 1,
          count: 1,
        },
        {
          value: 2,
          count: 10,
        },
        {
          value: 3,
          count: 10,
        },
        {
          value: 4,
          count: 20,
        },
        {
          value: 5,
          count: 40,
        },
      ],
    },
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 2,
      },
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 4,
      },
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 5,
      },
    ],
  },
  {
    id: "5",
    name: "Polo Básico Blanco",
    price: 119.90,
    quantityAvailable: 2,
    category: "Polos",
    currentPrice: 89.99,
    sizes: ["xl", "l"],
    colors: ["#000", "6F3E18", "#D4BE8D", "#FFF"],
    images: ["/images/products/product-4.jpg"],
    punctuation: {
      countOpinions: 81,
      punctuation: 4.5,
      votes: [
        {
          value: 1,
          count: 1,
        },
        {
          value: 2,
          count: 10,
        },
        {
          value: 3,
          count: 10,
        },
        {
          value: 4,
          count: 20,
        },
        {
          value: 5,
          count: 40,
        },
      ],
    },
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 2,
      },
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 4,
      },
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 5,
      },
    ],
  },
  {
    id: "6",
    name: "Camisa Casual Beige",
    price: 159.90,
    quantityAvailable: 2,
    category: "Camisas",
    currentPrice: 89.99,
    sizes: ["xl", "l"],
    colors: ["#000", "6F3E18", "#D4BE8D", "#FFF"],
    images: ["/images/products/product-5.jpg"],
    punctuation: {
      countOpinions: 81,
      punctuation: 4.5,
      votes: [
        {
          value: 1,
          count: 1,
        },
        {
          value: 2,
          count: 10,
        },
        {
          value: 3,
          count: 10,
        },
        {
          value: 4,
          count: 20,
        },
        {
          value: 5,
          count: 40,
        },
      ],
    },
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 2,
      },
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 4,
      },
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 5,
      },
    ],
  },
  {
    id: "7",
    name: "Camisa Manga Larga Negra",
    price: 119.99,
    discount: 30,
    quantityAvailable: 2,
    category: "Camisas",
    currentPrice: 89.99,
    sizes: ["xl", "l"],
    colors: ["#000", "6F3E18", "#D4BE8D", "#FFF"],
    images: ["/images/products/product-6.jpg"],
    punctuation: {
      countOpinions: 81,
      punctuation: 4.5,
      votes: [
        {
          value: 1,
          count: 1,
        },
        {
          value: 2,
          count: 10,
        },
        {
          value: 3,
          count: 10,
        },
        {
          value: 4,
          count: 20,
        },
        {
          value: 5,
          count: 40,
        },
      ],
    },
    reviews: [
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 2,
      },
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 4,
      },
      {
        name: "John Doe",
        avatar: "/images/featured-1.jpg",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>",
        punctuation: 5,
      },
    ],
  },
];

export default products;
