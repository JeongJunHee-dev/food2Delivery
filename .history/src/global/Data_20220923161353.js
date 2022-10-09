export const filterData = [
    {name: "패스트 푸드", image: require('../assets/fastfood.png'), id:"0"},
    {name: "한식", image: require('../assets/koreanfood.png'), id:"1"},
    {name: "양식", image: require('../assets/westernfood.png'), id:"2"},
    {name: "중식", image: require('../assets/chinese.png'), id:"3"},
    {name: "디저트", image: require('../assets/dessert.png'), id:"4"},
    {name: "1인분", image: require('../assets/oneorder.png'), id:"5"},
    {name: "마트배달", image: require('../assets/martdelivery.png'), id:"6"},
];

export const filterData2 = [
    {name: "패스트 푸드",image:'https://www.mcdonalds.co.kr/upload/main/banner/1661337117082.jpg' , id:"0"},
    {name: "한식",image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220823_56%2F1661239977638XyQpX_JPEG%2FKakaoTalk_20220817_161257906_21.jpg',id:"1"},
    {name: "양식",image:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220801_95%2F1659358604237qbLCt_JPEG%2F%25C8%25AD%25B8%25E9_%25C4%25B8%25C3%25B3_2022-08-01_205705.jpg",id:"2"},
    {name: "중식",image: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MjBfMTEg%2FMDAxNjU1NzE0NDI3ODc1.piIKyPEj7ciAFnrD_rbZ6PQPDsLwcnbv6zpaPdGtFDUg.yNNnyHA1XYWYamWX5I_YGPdNSDaB-RFLFE3wLkHmoHwg.JPEG.fghjkl2593%2F1655714425562.jpg",id:"3"},
    {name: "디저트",image:"https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA4MjhfMTk2%2FMDAxNjYxNjgyMDAxNjc1.RGVyTHAKifX0JlJVh6kvDS91PtLlQubGgviQbs_z4bog.vqiavyIYMxEfU3OxFFhUZShCmcXqBdTooU5xHYtnKNUg.JPEG%2F20220828_173940.jpg",id:"4"},
    {name: "1인분",image:"https://postfiles.pstatic.net/MjAyMjA3MDdfMTgx/MDAxNjU3MTk4MjkwMjY4.fG6O1ixG7-n5Y0PJwQ44SI6t02L4zkn8N0jrxJjeRtwg.WxrTlru729r8IKyo8Rza6WqaWZ74J_wfBUDDWCEgxS4g.JPEG.amber12/IMG_1613.jpg?type=w773",id:"5"},  
    {name: "마트배달",image:"https://mblogthumb-phinf.pstatic.net/MjAxNzA0MTlfNTkg/MDAxNDkyNjAxOTgyMDUz.9_M7NDOJYWaGzkkvax4iViEMBjUucQObpZnEYycLA1Mg.nYVv8bjJYbbK0pm6QKPcLy20LF3D-npZ8MfrMf79a4og.JPEG.sabi_yang/image_5195358231492601530589.jpg?type=w800",id:"6"},
];

export const restaurantsData = [
    {restaurantName: "맥도날드", farAway:"14.5",
    bussinessAddress: "경남 양산시 양산대로 925", images: "https://www.mcdonalds.co.kr/upload/main/card/1659512755699.jpg",
    averageReview: 4.6, numberOfReview: 251, coordinates: {lat: 35.353075, lng: 129.037302}, discount:5, deliveryTime:10,
    collectTime: 5, foodType: "Burgers, fries, Sodas....", 
    productData:[{name: "1988 버거", price: 5.50, image: "https://www.mcdonalds.co.kr/upload/main/card/1661337592960.jpg"},
                 {name: "맥 크리스피", price: 6.20, image: "https://www.mcdonalds.co.kr/upload/main/card/1653467599860.png"},
                ],
    id:0},

    {restaurantName: "스타벅스", farAway:"27.5",
    bussinessAddress: "경상남도 양산시 양주동 양산역1길 7", images: "https://image.istarbucks.co.kr/img/event/2022/wn_Autumnpro_220829_05.jpg",
    averageReview: 4.8, numberOfReview: 226, coordinates: {lat: 35.335467, lng: 129.027065}, discount:5, deliveryTime:20,
    collectTime: 10, foodType: "Coffee, Sandwich, Cookies....", 
    productData:[{name: "콜드 브루", price: 3.50, image: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"},
                 {name: "레이어 가나슈 케이크", price: 6.20, image: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9300000001179]_20210421164934656.jpg"},
                ],
    id:1},

    {restaurantName: "맘스터치", farAway:"12.4",
    bussinessAddress: "경상남도 양산시 북안남4길 7-37 1층", images: "https://momstouchdev.co.kr/upload_file/mainsns/1617093724-IKHOP.png",
    averageReview: 4.3, numberOfReview: 321, coordinates: {lat: 35.344178, lng: 129.037658}, discount:10, deliveryTime:5,
    collectTime: 5, foodType: "Burgers, fries, Sodas....", 
    productData:[{name: "에메이징 매콤마요 버거", price: 5.50, image: "https://momstouchdev.co.kr/upload_file/product_info/1655341040-HOKQW.png"},
                 {name: "허니버터 뿌치", price: 6.20, image: "https://momstouchdev.co.kr/upload_file/product_info/1657150671-QLFEO.png"},
                ],
    id:2},
    
    {restaurantName: "서브웨이", farAway:"27.4",
    bussinessAddress: "경남 양산시 양산역2길 3 110호", images: "https://www.subway.co.kr/images/main/img_subway_history.png",
    averageReview: 4.7, numberOfReview: 221, coordinates: {lat: 35.335543, lng: 129.027509}, discount:15, deliveryTime:15,
    collectTime: 15, foodType: "Sandwich, Chips, Sodas.....", 
    productData:[{name: "에그마요", price: 5.50, image: "https://www.subway.co.kr/upload/menu/Egg-Mayo_20211231094817112.png"},
                 {name: "이탈리안 비엠티", price: 6.20, image: "https://www.subway.co.kr/upload/menu/Italian_B.M.T_20211231094910899.png"},
                ],
    id:3},
];