export interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
  unit: string;
  tag: string | null;
  img: string;
  available: boolean;
  origin: string;
  vitamins: string;
  longDesc: string;
  category: 'Fruits' | 'Vegetables';
}

export const products: Product[] = [
  {
    id: 'apple-red',
    name: 'Red Apple',
    desc: 'Directly sourced from high-altitude orchards, bursting with sweetness.',
    price: 180,
    unit: 'kg',
    tag: 'IN SEASON',
    img: 'https://images2.alphacoders.com/719/thumb-1920-719435.jpg',
    available: true,
    origin: 'High-Altitude Orchards',
    vitamins: 'Rich in Vitamin C & Fiber',
    longDesc: 'Our Crisp Red Apples are hand-picked at peak ripeness to ensure a satisfying crunch and perfect balance of tart and sweet flavors. Ideal for snacking, baking, or adding to fresh salads.',
    category: 'Fruits'
  },
  {
    id: 'banana-local',
    name: 'Banana',
    desc: 'Sweet, creamy texture, perfect for your morning energy boost.',
    price: 60,
    unit: 'dozen',
    tag: 'IN SEASON',
    img: 'https://static.vecteezy.com/system/resources/previews/017/173/720/non_2x/bunch-of-bananas-banana-on-wooden-background-ripe-banana-fruit-on-floor-free-photo.JPG',
    available: true,
    origin: 'Mangaluru Farms',
    vitamins: 'Potassium & Vitamin B6',
    longDesc: 'Grown locally in the rich soils of Mangaluru, these bananas offer a creamy texture and natural sweetness that makes them the perfect healthy snack or smoothie base.',
    category: 'Fruits'
  },
  {
    id: 'mango-alphonso',
    name: 'Alphonso Mango',
    desc: 'King of mangoes. Returning next summer!',
    price: 120,
    unit: 'kg',
    tag: 'OUT OF SEASON',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0o7szFUw-EFUcZ4dtTC72pncRodTEjB5jIfh9fBD-lTtgT59nI4TOTCT86NCRV4P94bCRMYtf2NHujt4EyZDDscx0CcIP5Txu3rJ48rRR0PJDvxpp5HoIP6RbtvKSo49O7ivgsPxBpfeV5n6CzySkuLpqdi8k6vrulKBGTbJSV759rasHAcYVtGJIOh3sSvMbqsDeNi1J6qvYTtyiKsf4u_hbQsxhaHCFpN3EplY-9z46If-XUISYu9hMihy9fIdUNXBK65QxBpM',
    available: false,
    origin: 'Ratnagiri Orchards',
    vitamins: 'Rich in A & C',
    longDesc: 'Sweet and juicy seasonal mangoes. Hand-picked from the sundrenched orchards, these mangoes represent the pinnacle of tropical flavor. Nature doesn\'t rush. Our mangoes are only harvested when they achieve peak sun-ripeness.',
    category: 'Fruits'
  },
  {
    id: 'tomato-heirloom',
    name: 'Tomato',
    desc: 'Rich, savory flavor profile, perfect for sauces and salads.',
    price: 40,
    unit: 'kg',
    tag: 'IN SEASON',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-yfCAuQ7L8nqr5zpLpixnLQPd5oc__hg_cwWKAn4vg5OiIWOaeeTZSqet6QUgZve2Q1FVxkaZb_olgf1Llf2Q2cJtwzcrUGOkdSHy7ITTvUPrWKIPiUFxzq7xt0KTZQ5enFb75FCBt-yx5-D-BOgvHDw9hAPxcFaKSXb26YDuA9edQAWTIZRKL2d_2J3WncBEGJoN4LxnBPSYtslvsOwgrP2bNLszfpW1NRxkqcNOnfdel_ld_LbhcO88Q4ohgxA11za3CUCJc_0',
    available: true,
    origin: 'Local Greenhouse',
    vitamins: 'Lycopene & Vitamin C',
    longDesc: 'These heirloom tomatoes are grown for their exceptional flavor rather than uniformity. They boast a rich, complex taste that elevates any dish, from simple salads to hearty pasta sauces.',
    category: 'Vegetables'
  },
  {
    id: 'potato-russet',
    name: 'Russet Potato',
    desc: 'Versatile and starchy, freshly dug from local Mangaluru soil.',
    price: 30,
    unit: 'kg',
    tag: 'IN SEASON',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClPAsxT2T-o236MOdLKX6nA_7FX0u8hFwYZbvOqdf0qqV2MmueIzdhMkY8GuU6YYenEa0Jm7wGYJSmxcwFg7r-qsTf1nB4Hqb-UE7W9JnHNuVuAMOP-sr0u_vibx__kzUx_CCl32bag3GPv14pjq16TTh9xd_SI_9bsg3UZAxJzrqGZ0Ftdzg2S0KWIWs5CgpLj9Qq0l4qiho9-bjjM5G80Fkf3suKIBGebID8QkJF6trF27BY3neQtQc11kUWCez1u4WnDkRJ-FA',
    available: true,
    origin: 'Mangaluru Soil',
    vitamins: 'Potassium & Vitamin C',
    longDesc: 'The classic baking potato. With a high starch content and fluffy texture when cooked, these russet potatoes are perfect for mashing, baking, or making crispy homemade fries.',
    category: 'Vegetables'
  },
  {
    id: 'pineapple-tropical',
    name: 'Pineapple',
    desc: 'Sweet & Tangy • 1 Unit',
    price: 85,
    unit: 'unit',
    tag: 'IN SEASON',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_MKKbWZYcaemxlkS-Tcnb6YEX5D1h1PfN442-Us5JAjnAWcl8gDnWom6ouaYmMS02-2QkqPfGQO06A1DamPjja5_WhudmiHLYN0t7EtdqE9A4KDOHTCXJRsPYKOKzfc2WO2vSfCibU1GtEFwLHOYFa04hsMAag24W_zZ1Sp5-fKhKopaaP5IVFlEBb57liau-K0mYcN-ylWBQVhPBauxb4puiPRM241h8Wa-Ybwsw9nPLikssWV7SQgKIBtmzdlKCmM1Iere56WA',
    available: true,
    origin: 'Coastal Farms',
    vitamins: 'Vitamin C & Manganese',
    longDesc: 'Bursting with tropical flavor, our pineapples are harvested when fully ripe for maximum sweetness and juiciness. Excellent for fresh eating, grilling, or adding a tropical twist to your recipes.',
    category: 'Fruits'
  },
  {
    id: 'avocado-butter',
    name: 'Butter Avocado',
    desc: 'Rich & Creamy • 500g',
    price: 120,
    unit: '500g',
    tag: 'LIMITED',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLUhdd5PsQYxuix_UB_bheKeXtO1U_HFpVVx3KR8j6lqpClwfqrH8QiC3DzfOP9sTZRN5zCS_2xp_mopeQkyGWC9lotgtSvEIyQPiyBwh5Q98c8yCqZF5eYm4K0jG1iUxL-c2PPARoF2E4Dcl_ff15vpoCq9dSqBos2n_X0z1Pbwt_BocX-LuFfPz1qjAKnNxdzEcfF996sW_sLR2tMWYG4wjXgn-vQyUf6qtqg69d5K5TpKNNYxSSNEJ_aWfPqDZjxP9SSOCDTpI',
    available: true,
    origin: 'Southern Highlands',
    vitamins: 'Healthy Fats & Vitamin K',
    longDesc: 'Known for their exceptionally creamy texture and rich, nutty flavor. These avocados are perfect for guacamole, spreading on toast, or adding a luxurious touch to salads.',
    category: 'Fruits'
  },
  {     
    id: 'grape-green',     
    name: 'Green Grapes',     
    desc: 'Fresh & Juicy • 500g',     
    price: 120,     
    unit: '500g',     
    tag: null,     
    img: 'https://tse2.mm.bing.net/th/id/OIP.P7-bROcWQgG3CmzC4DQsJwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',     
    available: true,     
    origin: 'Local Vineyard',     
    vitamins: 'Vitamin K & Antioxidants',     
    longDesc: 'Sweet, crisp, and refreshing. These fresh green grapes are perfect for snacking, blending into smoothies, or adding a juicy pop to fruit salads.',     
    category: 'Fruits'   
  },
  {
    id: 'papaya',     
    name: 'papaya',     
    desc: 'Fresh & Juicy • 1kg',     
    price: 150,     
    unit: '1kg',     
    tag: null,     
    img: 'https://tse4.mm.bing.net/th/id/OIP.WLA4SnOF7h3Yk_N0eyIP-QHaFr?rs=1&pid=ImgDetMain&o=7&rm=3',     
    available: false,     
    origin: 'Local Vineyard',     
    vitamins: 'Vitamin K & Antioxidants',     
    longDesc: 'Sweet, crisp, and refreshing. These fresh green grapes are perfect for snacking, blending into smoothies, or adding a juicy pop to fruit salads.',     
    category: 'Fruits'   
  }
];
