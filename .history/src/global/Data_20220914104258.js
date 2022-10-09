export const filterData = [
    {name: "패스트 푸드", image: require('../assets/fastfood.png'), id:"0"},
    {name: "한식", image: require('../assets/koreanfood.png'), id:"1"},
    {name: "양식", image: require('../assets/westernfood.png'), id:"2"},
    {name: "중식", image: require('../assets/chinese.png'), id:"3"},
    {name: "디저트", image: require('../assets/dessert.png'), id:"4"},
    {name: "1인분", image: require('../assets/oneorder.png'), id:"5"},
    {name: "마트배달", image: require('../assets/martdelivery.png'), id:"6"},
];

export const restauratsData = [
    {restaurantName: "맥도날드", farAway:"4.5",
    bussinessAddress: "경남 양산시 양산대로 925", images: 'https://www.mcdonalds.co.kr/upload/main/card/1659512755699.jpg',
    averageReview: 4.6, numberOfReview: 251, coordinates: {lat: 35.353075, lng: 129.037302}, discount:5, deliveryTime:10,
    collectTime: 5, foodType: "Burgers, fries, Sodas....", 
    productData:[{name: "1988 버거", price: 5.50, image: "https://www.mcdonalds.co.kr/upload/main/card/1661337592960.jpg"},
                 {name: "맥 크리스피", price: 6.20, image: "https://www.mcdonalds.co.kr/upload/main/card/1653467599860.png"}]
    }
]