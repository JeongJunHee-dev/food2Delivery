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

export const restauratsData = [
    {restaurantName: "맥도날드", farAway:"4.5",
    bussinessAddress: "경남 양산시 양산대로 925", images: "https://www.mcdonalds.co.kr/upload/main/card/1659512755699.jpg",
    averageReview: 4.6, numberOfReview: 251, coordinates: {lat: 35.353075, lng: 129.037302}, discount:5, deliveryTime:10,
    collectTime: 5, foodType: "Burgers, fries, Sodas....", 
    productData:[{name: "1988 버거", price: 5500, image: "https://www.mcdonalds.co.kr/upload/main/card/1661337592960.jpg"},
                 {name: "맥 크리스피", price: 6200, image: "https://www.mcdonalds.co.kr/upload/main/card/1653467599860.png"},
                ],
    id:0},

    {restaurantName: "스타벅스", farAway:"7.5",
    bussinessAddress: "경상남도 양산시 양주동 양산역1길 7", images: "https://image.istarbucks.co.kr/img/event/2022/wn_Autumnpro_220829_05.jpg",
    averageReview: 4.8, numberOfReview: 226, coordinates: {lat: 35.335467, lng: 129.027065}, discount:5, deliveryTime:20,
    collectTime: 10, foodType: "Coffee, Sandwich, Cookies....", 
    productData:[{name: "콜드 브루", price: 4500, image: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"},
                 {name: "레이어 가나슈 케이크", price: 6200, image: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9300000001179]_20210421164934656.jpg"},
                ],
    id:1},

    {restaurantName: "맘스터치", farAway:"2.4",
    bussinessAddress: "경상남도 양산시 북안남4길 7-37 1층", images: "https://momstouchdev.co.kr/upload_file/mainsns/1617093724-IKHOP.png",
    averageReview: 4.3, numberOfReview: 321, coordinates: {lat: 35.344178, lng: 129.037658}, discount:10, deliveryTime:5,
    collectTime: 5, foodType: "Burgers, fries, Sodas....", 
    productData:[{name: "에메이징 매콤마요 버거", price: 5500, image: "https://momstouchdev.co.kr/upload_file/product_info/1655341040-HOKQW.png"},
                 {name: "허니버터 뿌치", price: 6200, image: "https://momstouchdev.co.kr/upload_file/product_info/1657150671-QLFEO.png"},
                ],
    id:2},
    
    {restaurantName: "서브웨이", farAway:"7.4",
    bussinessAddress: "경남 양산시 양산역2길 3 110호", images: "https://www.subway.co.kr/images/main/img_subway_history.png",
    averageReview: 4.7, numberOfReview: 221, coordinates: {lat: 35.335543, lng: 129.027509}, discount:15, deliveryTime:15,
    collectTime: 15, foodType: "Sandwich, Chips, Sodas.....", 
    productData:[{name: "에그마요", price: 5500, image: "https://www.subway.co.kr/upload/menu/Egg-Mayo_20211231094817112.png"},
                 {name: "이탈리안 비엠티", price: 6200, image: "https://www.subway.co.kr/upload/menu/Italian_B.M.T_20211231094910899.png"},
                ],
    id:3},
];


export const productData = [
    {name: "1988 버거", price: 5500, image: "https://www.mcdonalds.co.kr/upload/main/card/1661337592960.jpg",
     details:"1988복고풍 으로 만든 추억의 버거",id:0},
    {name: "맥 크리스피", price: 6200, image: "https://www.mcdonalds.co.kr/upload/main/card/1653467599860.png",
     details:"통다리살로 만든 케이준 치킨페티로 새로운 버거",id:1},
    {name:"베이컨 토마토 디럭스", price:7000,image:"https://www.mcdonalds.co.kr/upload/product/pcfile/1583727707216.png",details:"",id:2},
                
    {name: "1988 버거", price: 5500, image: "https://www.mcdonalds.co.kr/upload/main/card/1661337592960.jpg",
    details:"1988복고풍 으로 만든 추억의 버거",id:3},
    {name: "맥 크리스피", price: 6200, image: "https://www.mcdonalds.co.kr/upload/main/card/1653467599860.png",
    details:"통다리살로 만든 케이준 치킨페티로 새로운 버거",id:4},
    {name:"베이컨 토마토 디럭스", price:7000,image:"https://www.mcdonalds.co.kr/upload/product/pcfile/1583727707216.png",details:"",id:5},
              
];

export const menuData = [
    
    {title:"소고기",special:false,key:0, },
    {title:"닭고기", special:false,key:1},
    {title:"채소 버거",special:false ,key:2},
    {title:"감자튀김 & 옥수수",special:false ,key:3},
    {title:"샐러드",special:false,key:4},
    {title:"해피밀",special:false,key:5},
    {title:"쿠폰사용",special:false,key:6},
    {title:"밀크쉐이크",special:false,key:7},
    {title:"음료",special:false,key:8},
    {title:"디저트",special:false,key:9},
    {title:"커피 및 핫초코 류",special:false,key:10},
  
];

export const specialData =[
    {title:"시즌 한정",key:0},
    {title:"더 맵게",key:1},
    {title:"치즈 추가",key:2},
    {title:"맥치킨 디럭스 할인행사",key:3},
]; 

export const menu = [
    { key: 1, title: '소고기' },
    { key: 2, title: '닭고기' },
    { key: 3, title: '채소 버거' },
    { key: 4, title: '쿠폰사용' },
    { key: 5, title: '해피밀' },
    { key: 6, title: '감자튀김' },
    { key: 7, title: '사이드 선택' },
    { key: 8, title: '밀크쉐이크' },
] 

export const menuDetailedData =[
    { 
      meal:"1988 버거",
      price:5500,
      image:"https://www.mcdonalds.co.kr/upload/main/card/1661337592960.jpg",
      details:"1988복고풍 으로 만든 추억의 버거",
      preferenceTitle:["딥소스 2개 선택","음료는 1개맛 가능", "음료를 2개맛 가능","추가할 음식이 있습니까?","소스를 추가 하시겠습니까?"  ],
      preferenceData: [

                      [{name:"할라피뇨 딥 소스",price:800,checked:false,id:10},{name:"단짠 소스",price:850,checked:false ,id:11},{name:'BBQ 소스',price:1100 ,checked:false,id:12},
                      ],

                      [{name:"콜라 소형",price:890 ,checked:false,id:13 },{name:"환타 오렌지 소형",price:890 ,checked:false,id:14},{name:'스프라이트 소형',price:1100,checked:false ,id:15},
                      {name:'코카콜라 제로 소형',price:450 ,checked:false,id:16},{name:'나랑드 제로 소형',price:400 ,checked:false,id:17},{name:'애플쥬스 소형',price:1100 ,checked:false,id:18},
                      {name:'딸기쉐이크 소형',price:1700 ,checked:false,id:19},{name:'초코쉐이크 소형',price:1700 ,checked:false,id:20},
                      ],

                      [{name:"콜라 소형",price:890,checked:false ,id:21},{name:"환타 오렌지 소형",price:890 ,checked:false ,id:22},{name:'스프라이트 소형',price:1100,checked:false ,id:23},
                      {name:'코카콜라 제로 소형',price:450 ,checked:false,id:24},{name:'나랑드 제로 소형',price:400 ,checked:false,id:25},{name:'애플쥬스 소형',price:1100 ,checked:false ,id:26},
                      {name:'딸기쉐이크 소형',price:1700 ,checked:false ,id:27},{name:'초코쉐이크 소형',price:1700 ,checked:false,id:28},{name:'바닐라쉐이크 소형',price:1800 ,checked:false,id:29},
                        ],
                          
                      [{name:"계란 스크램 추가",price:1000 ,checked:false,id:30},{name:"BBQ 소스",price:900,checked:false ,id:31},{name:'추억의 소스',price:1300,checked:false ,id:32},
                      ],

                      [
                      {name:"콜라 소형",price:890,checked:false,id:33},{name:"환타 오렌지 소형",price:890 ,checked:false,id:34},{name:'스프라이트 소형',price:1100,checked:false,id:35},
                      {name:'코카콜라 제로 소형',price:450 ,checked:false,id:36},{name:'나랑드 제로 소형',price:400 ,checked:false,id:37},{name:'애플쥬스 소형',price:1100,checked:false,id:38},
                      {name:'딸기쉐이크 소형',price:1700 ,checked:false ,id:39},{name:'초코쉐이크 소형',price:1700 ,checked:false,id:40},{name:'바닐라쉐이크 소형',price:1800 ,checked:false ,id:41},
                      ],
                      ],
      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],              
      id:0
    },
  
    { 
      meal:"맥 크리스피", 
      price:6200,
      image:"https://www.mcdonalds.co.kr/upload/main/card/1653467599860.png",
      details:"통다리살로 만든 케이준 치킨페티로 새로운 버거",
      preferenceTitle:["딥소스 2개 선택","음료는 1개맛 가능", "음료를 2개맛 가능","추가할 음식이 있습니까?","소스를 추가 하시겠습니까?"  ],
      preferenceData: [

        [{name:"할라피뇨 딥 소스",price:800,checked:false,id:0},{name:"단짠 소스",price:850,checked:false ,id:1},{name:'BBQ 소스',price:1100 ,checked:false,id:2},
        ],

        [{name:"콜라 소형",price:890 ,checked:false,id:0 },{name:"환타 오렌지 소형",price:890,checked:false,id:1},{name:'스프라이트 소형',price:1100,checked:false ,id:2},
        {name:'코카콜라 제로 소형',price:450 ,checked:false,id:3},{name:'나랑드 제로 소형',price:400 ,checked:false,id:4},{name:'애플쥬스 소형',price:1100,checked:false,id:5},
        {name:'딸기쉐이크 소형',price:1700 ,checked:false,id:6},{name:'초코쉐이크 소형',price:1700 ,checked:false,id:7},
        ],

        [{name:"콜라 소형",price:890 ,checked:false,id:0 },{name:"환타 오렌지 소형",price:890,checked:false,id:1},{name:'스프라이트 소형',price:1100,checked:false ,id:2},
        {name:'코카콜라 제로 소형',price:450 ,checked:false,id:3},{name:'나랑드 제로 소형',price:400 ,checked:false,id:4},{name:'애플쥬스 소형',price:1100,checked:false,id:5},
        {name:'딸기쉐이크 소형',price:1700 ,checked:false,id:6},{name:'초코쉐이크 소형',price:1700 ,checked:false,id:7},{name:'바닐라쉐이크 소형',price:1800 ,checked:false,id:8},
          ],
            
        [{name:"계란 스크램 추가",price:1000 ,checked:false,id:0},{name:"BBQ 소스",price:900,checked:false ,id:1},{name:'추억의 소스',price:1300,checked:false ,id:2},
        ],

        [
            {name:"콜라 소형",price:890 ,checked:false,id:0 },{name:"환타 오렌지 소형",price:890,checked:false,id:1},{name:'스프라이트 소형',price:1100,checked:false ,id:2},
            {name:'코카콜라 제로 소형',price:450 ,checked:false,id:3},{name:'나랑드 제로 소형',price:400 ,checked:false,id:4},{name:'애플쥬스 소형',price:1100,checked:false,id:5},
            {name:'딸기쉐이크 소형',price:1700 ,checked:false,id:6},{name:'초코쉐이크 소형',price:1700 ,checked:false,id:7},{name:'바닐라쉐이크 소형',price:1800 ,checked:false,id:8},
        ],
        ],
        minimum_quatity:[2,1,2,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false], 
        id:1
    },
  
    {
      meal:"빅맥",
      price:4700,
      image:"https://www.mcdonalds.co.kr/upload/product/pcfile/1583727855319.png",
      details:"100% 순 쇠고기 패티 두 장에 특별한 소스. 50년 넘게 전 세계인의 입맛을 사로 잡은 대명사.",
      preferenceTitle:["딥소스 2개 선택","음료는 1개맛 가능", "음료를 2개맛 가능","추가할 음식이 있습니까?","소스를 추가 하시겠습니까?"  ],
      preferenceData: [

        [{name:"할라피뇨 딥 소스",price:800,checked:false,id:0},{name:"단짠 소스",price:850,checked:false ,id:1},{name:'BBQ 소스',price:1100 ,checked:false,id:2},
        ],

        [{name:"콜라 소형",price:890 ,checked:false,id:0 },{name:"환타 오렌지 소형",price:890,checked:false,id:1},{name:'스프라이트 소형',price:1100,checked:false ,id:2},
        {name:'코카콜라 제로 소형',price:450 ,checked:false,id:3},{name:'나랑드 제로 소형',price:400 ,checked:false,id:4},{name:'애플쥬스 소형',price:1100,checked:false,id:5},
        {name:'딸기쉐이크 소형',price:1700 ,checked:false,id:6},{name:'초코쉐이크 소형',price:1700 ,checked:false,id:7},
        ],

        [{name:"콜라 소형",price:890 ,checked:false,id:0 },{name:"환타 오렌지 소형",price:890,checked:false,id:1},{name:'스프라이트 소형',price:1100,checked:false ,id:2},
        {name:'코카콜라 제로 소형',price:450 ,checked:false,id:3},{name:'나랑드 제로 소형',price:400 ,checked:false,id:4},{name:'애플쥬스 소형',price:1100,checked:false,id:5},
        {name:'딸기쉐이크 소형',price:1700 ,checked:false,id:6},{name:'초코쉐이크 소형',price:1700 ,checked:false,id:7},{name:'바닐라쉐이크 소형',price:1800 ,checked:false,id:8},
          ],
            
        [{name:"계란 스크램 추가",price:1000 ,checked:false,id:0},{name:"BBQ 소스",price:900,checked:false ,id:1},{name:'추억의 소스',price:1300,checked:false ,id:2},
        ],

        [
            {name:"콜라 소형",price:890 ,checked:false,id:0 },{name:"환타 오렌지 소형",price:890,checked:false,id:1},{name:'스프라이트 소형',price:1100,checked:false ,id:2},
            {name:'코카콜라 제로 소형',price:450 ,checked:false,id:3},{name:'나랑드 제로 소형',price:400 ,checked:false,id:4},{name:'애플쥬스 소형',price:1100,checked:false,id:5},
            {name:'딸기쉐이크 소형',price:1700 ,checked:false,id:6},{name:'초코쉐이크 소형',price:1700 ,checked:false,id:7},{name:'바닐라쉐이크 소형',price:1800 ,checked:false,id:8},
        ],
        ],

        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],   
      id:2
    },
  
    {
      meal:"창녕 갈릭 버거",
      price:5800,
      image:"https://www.mcdonalds.co.kr/upload/product/pcfile/1659511751811.png",
      details:"100% 국산 창녕 햇마늘이 듬뿍 들어간 마늘 토핑과 마늘 아이올리 소스,순 쇠고기 패티 2장의 맛!",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      preferenceData: [

        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
        ],

        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
        ],

        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
          ],
            
        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
        ],

        [
        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
        ],
        ],
      
        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],    
      id:3
    },
  
    
    { 
      
      meal:"Hand cut chips", 
      price:29.30,
      image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",
      details:"Two 100% fresh beef burger patties that are hot,deliciously",
      
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      
      preferenceData: [

        [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
        ],

        [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
        ],

        [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
          ],
            
        [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
        ],

        [
        {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
        {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
        ],
        ],

      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],     
      id:4
    },

    { 
      meal:"Big Mac",
      price:70.20,
      image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
      details:"McFeast features two 100% fresh beef burger patties that are hot",
      preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
      preferenceData: [

                      [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                      ],

                      [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                      {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                      ],

                      [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                        ],
                          
                      [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                      ],

                      [
                      {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                      {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                      {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                      ],
                      ],
      minimum_quatity:[2,1,1,null,null],
      counter:[0,0,0,0,0],
      required: [true,true,true,false,false],              
      id:5
    },
  
  ];