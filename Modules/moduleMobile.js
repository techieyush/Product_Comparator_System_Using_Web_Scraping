var app=angular.module('myMod3',[]);
app.controller("myMobile1Controller",function($scope,$window){
    $scope.imageAddress = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    $scope.price = "";
    $scope.brand = "";
    $scope.rating = "";
    $scope.item1 = function(){
        let i = $scope.selectedOption1;
        let image = $scope.Mobiles1[i].image;
        let price = $scope.Mobiles1[i].price;
        let brand = $scope.Mobiles1[i].brand;
        let rating = $scope.Mobiles1[i].rating;
        
       $scope.imageAddress = image;
        $scope.price = price;
        $scope.brand = brand;
        $scope.rating = rating;
}

$scope.Mobiles1=[{
    "id": "0",
    "title": "---Select Anyone---",
    "price": "",
    "description": "",
    "brand": "",
    "rating":"",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
}, 
  
{
      "id":"1",
      "title":"Apple iPhone 14 Pro",
      "price": "1,19,999",
      "description": "Apple iPhone 14 Pro (128 GB) - Deep Purple",
      "brand":"Apple",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/61HHS0HrjpL._SL1500_.jpg",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDYyMzcwMzg2NjM2MjE4OjE2ODE2NjUwMjE6c3BfYXRmX25leHQ6MjAxMTU3ODM4MTI3OTg6OjA6Og&url=%2FApple-iPhone-128GB-Deep-Purple%2Fdp%2FB0BDJ6ZMCC%2Fref%3Dsr_1_17_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665021%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-17-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGZfbmV4dA%26psc%3D1",
      
      "price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDYyMzcwMzg2NjM2MjE4OjE2ODE2NjUwMjE6c3BfYXRmX25leHQ6MjAxMTU3ODM4MTI3OTg6OjA6Og&url=%2FApple-iPhone-128GB-Deep-Purple%2Fdp%2FB0BDJ6ZMCC%2Fref%3Dsr_1_17_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665021%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-17-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGZfbmV4dA%26psc%3D1",
     
     },
    
     {
      "id":"2",
      "title":"Redmi Note 11T",
      "price": "18,499",
      "description": "Redmi Note 11T 5G (Stardust White, 8GB RAM, 128GB ROM) | Dimensity 810 5G | 33W Pro Fast Charging | Charger Included | Additional Exchange Offers| Get 2 Months of YouTube Premium Free!",
      "brand":"Redmi",
      "rating": "4.1 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71C4pfJ7ecL._SL1500_.jpg",
      "url": "https://www.amazon.in/Redmi-Note-11T-5G-Dimensity/dp/B09LHX1YFX/ref=sr_1_19?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-19",
      
      "price_url": "https://www.amazon.in/Redmi-Note-11T-5G-Dimensity/dp/B09LHX1YFX/ref=sr_1_19?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-19",
      
     },
     {
      "id":"3",
      "title":"Redmi A1",
      "price": "6,499",
      "description": "Redmi A1 (Light Green, 2GB RAM 32GB ROM) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
      "brand":"Redmi",
      "rating": "4.0 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81UmTnrBDSL._SL1500_.jpg",
      "url": "https://www.amazon.in/Redmi-Segment-5000mAh-Battery-Leather/dp/B0BBN3WF7V/ref=sr_1_20?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-20",
     
      "price_url": "https://www.amazon.in/Redmi-Segment-5000mAh-Battery-Leather/dp/B0BBN3WF7V/ref=sr_1_20?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-20",
      
     },
     {
      "id":"4",
      "title":"RealMe Narzo 50",
      "price": "15,499",
      "description": "realme narzo 50 (Speed Blue, 6GB RAM+128GB Storage) Helio G96 Processor | 50MP AI Triple Camera | 120Hz Ultra Smooth Display",
      "brand":"Realme",
      "rating": "4.2 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81gRC3KTeaL._SL1500_.jpg",
      "url": "https://www.amazon.in/realme-Storage-Processor-Triple-Display/dp/B09RN24CY6/ref=sr_1_21?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-21",
      
      "price_url": "https://www.amazon.in/realme-Storage-Processor-Triple-Display/dp/B09RN24CY6/ref=sr_1_21?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-21",
      
     },
     {
      "id":"5",
      "title":"Vivo iQOO Z6",
      "price": "15,499",
      "description": "iQOO Z6 5G by vivo (Dynamo Black, 4GB RAM, 128GB Storage) | Snapdragon 695-6nm Processor | 120Hz FHD+ Display | 5000mAh Battery",
      "brand":"Vivo",
      "rating": "4.0 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/61SpA599GgL._SL1200_.jpg",
      "url": "https://www.amazon.in/iQOO-Storage-Snapdragon-695-6nm-Processor/dp/B07WDKL741/ref=sr_1_22?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-22",
    
      "price_url": "https://www.amazon.in/iQOO-Storage-Snapdragon-695-6nm-Processor/dp/B07WDKL741/ref=sr_1_22?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-22",
     
     },
     {
      "id":"6",
      "title":"Samsung Galaxy A23",
      "price": "17,499",
      "description": "Samsung Galaxy A23 Blue, 6GB RAM, 128GB Storage with No Cost EMI/Additional Exchange Offers",
      "brand":"Samsung",
      "rating": "4.0 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/91W42b8YW+L._SL1500_.jpg",
      "url": "https://www.amazon.in/Samsung-Galaxy-Storage-Additional-Exchange/dp/B09VK5D8KW/ref=sr_1_23?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-23",
     
      "price_url": "https://www.amazon.in/Samsung-Galaxy-Storage-Additional-Exchange/dp/B09VK5D8KW/ref=sr_1_23?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-23",
     
     },
     {
      "id":"7",
      "title":"Tecno Spark 8T ",
      "price": "8,299",
      "description": "Tecno Spark 8T (Atlantic Blue, 4GB RAM,64GB Storage)| 50MP AI Camera | 7GB Expandable RAM",
      "brand":"Techno Spark",
      "rating":"4.2 out of 5",
      "image":"https://m.media-amazon.com/images/I/71AWvZMY6LL._SL1500_.jpg",
      "url": "https://www.amazon.in/Tecno-Spark-8T-Expandable-64GB/dp/B09MKPX6RQ/ref=sr_1_24?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-24",
     
      "price_url": "https://www.amazon.in/Tecno-Spark-8T-Expandable-64GB/dp/B09MKPX6RQ/ref=sr_1_24?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-24",
     
     },
     {
      "id":"8",
      "title":"Redmi Note 11 ",
      "price": "12,999",
      "description": "Redmi Note 11 (Space Black, 4GB RAM, 64GB Storage)|90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included",
      "brand":"Redmi",
      "rating": "4.1 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71yTvU9VgdL._SL1500_.jpg",
      "url": "https://www.amazon.in/Redmi-Storage-Qualcomm%C2%AE-SnapdragonTM-Included/dp/B09QS8V5N8/ref=sr_1_25?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-25",
    
      "price_url": "https://www.amazon.in/Redmi-Storage-Qualcomm%C2%AE-SnapdragonTM-Included/dp/B09QS8V5N8/ref=sr_1_25?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-25",
      
     },
     {
      "id":"9",
      "title":"Oppo F21s Pro 5G",
      "price": "25,999",
      "description": "Oppo F21s Pro 5G (Starlight Black, 8GB RAM, 128 Storage)|6.43\" FHD+ AMOLED|64MP Rear Triple AI Camera|4500 mAh Battery with 33W SUPERVOOC Charger|with No Cost EMI/Additional Exchange Offers",
      "brand":"Oppo",
      "rating": "4.0 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71TFnrSIs-L._SL1500_.jpg",
      "url": "https://www.amazon.in/Oppo-Starlight-Storage-Additional-Exchange/dp/B0BD52C9GZ/ref=sr_1_26?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-26",
     
      "price_url": "https://www.amazon.in/Oppo-Starlight-Storage-Additional-Exchange/dp/B0BD52C9GZ/ref=sr_1_26?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-26",
      
     },
     {
      "id":"10",
      "title":"Itel P40 ",
      "price": "6,299",
      "description": "Itel P40 (6000mAh Battery with Fast Charging | 2GB RAM + 64GB ROM, Up to 4GB RAM with Memory Fusion | 13MP AI Dual Rear Camera) - Luxurious Gold",
      "brand":"Itel",
      "rating": "5.0 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71yTJCdHdaL._SL1500_.jpg",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDYyMzcwMzg2NjM2MjE4OjE2ODE2NjUwMjE6c3BfbXRmOjIwMTQxMDA5ODU5Nzk4OjowOjo&url=%2FItel-6000mAh-Battery-Charging-Memory%2Fdp%2FB0BXLPY5WW%2Fref%3Dsr_1_27_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665021%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-27-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
     
      "price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDYyMzcwMzg2NjM2MjE4OjE2ODE2NjUwMjE6c3BfbXRmOjIwMTQxMDA5ODU5Nzk4OjowOjo&url=%2FItel-6000mAh-Battery-Charging-Memory%2Fdp%2FB0BXLPY5WW%2Fref%3Dsr_1_27_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665021%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-27-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      
     },
    
     {
      "id":"11",
      "title":"OnePlus Nord 2T",
      "price": "28,999",
      "name": "OnePlus Nord 2T 5G (Gray Shadow, 8GB RAM, 128GB Storage)",
      "brand":"OnePlus",
      "rating": "4.3 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/617MPEZB5mL._SL1500_.jpg",
      "url": "https://www.amazon.in/OnePlus-Nord-Shadow-128GB-Storage/dp/B0B3CQBRB4/ref=sr_1_29?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-29",
    
      "price_url": "https://www.amazon.in/OnePlus-Nord-Shadow-128GB-Storage/dp/B0B3CQBRB4/ref=sr_1_29?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-29",
      
     },
     {
      "id":"12",
      "title":"Vivo Y56",
      "price": "19,999",
      "description": "Vivo Y56 5G (Black Engine, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
      "brand":"Vivo",
      "rating": "4.3 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/61y7ZbTQcWL._SL1200_.jpg",
      "url": "https://www.amazon.in/Vivo-Engine-Storage-Additional-Exchange/dp/B07WFPMD64/ref=sr_1_30?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-30",
      
      "price_url": "https://www.amazon.in/Vivo-Engine-Storage-Additional-Exchange/dp/B07WFPMD64/ref=sr_1_30?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-30",
     
     },
     {
      "id":"13",
      "title":"realme narzo 50i",
      "price": "7,499",
      "description": "realme narzo 50i (Carbon Black, 2GB RAM+32GB Storage) Octa Core Processor | 6.5\" inch Large Display",
      "brand":"Realme",
      "rating": "4.0 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81HJ4pkOsiL._SL1500_.jpg",
      "url": "https://www.amazon.in/realme-narzo-Carbon-Black-Storage/dp/B09FKGDJNC/ref=sr_1_31?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-31",
     
      "price_url": "https://www.amazon.in/realme-narzo-Carbon-Black-Storage/dp/B09FKGDJNC/ref=sr_1_31?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-31",
      
     },
     {
      "id":"14",
      "title":"Redmi 9A Sport",
      "price": "6,499",
      "description": "Redmi 9A Sport (Carbon Black, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
      "brand":"Redmi",
      "rating": "4.1 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81T4O-rEI+L._SL1500_.jpg",
      "url": "https://www.amazon.in/Redmi-9A-Sport-Octa-core-Processor/dp/B09GFM8CGS/ref=sr_1_32?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-32",
      
      "price_url": "https://www.amazon.in/Redmi-9A-Sport-Octa-core-Processor/dp/B09GFM8CGS/ref=sr_1_32?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-32",
      
     },
     {
      "id":"15",
      "title":"Redmi Note 10S ",
      "price": "16,499",
      "description": "Redmi Note 10S (Frost White, 6GB RAM, 128GB Storage) - Super Amoled Display | 64 MP Quad Camera | 6 Month Free Screen Replacement (Prime only) | 33W Charger Included",
      "brand":"Redmi",
      "rating": "4.2 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71uZCu7+m1L._SL1500_.jpg",
      "url": "https://www.amazon.in/Redmi-Note-Frost-White-128GB/dp/B0948M5DZW/ref=sr_1_33?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-33",
     
      "price_url": "https://www.amazon.in/Redmi-Note-Frost-White-128GB/dp/B0948M5DZW/ref=sr_1_33?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-33",
      
     },
     {

      "id":"16",
      "title":"Samsung Galaxy M13",
      "price": "12,999",
      "description": "Samsung Galaxy M13 (Stardust Brown, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus",
      "brand":"Samsung",
      "rating": "4.1 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81Prc5i7hML._SL1500_.jpg",
      "url": "https://www.amazon.in/Samsung-Stardust-Storage-6000mAh-Battery/dp/B0B4F2ZWL3/ref=sr_1_34?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-34",
      
      "price_url": "https://www.amazon.in/Samsung-Stardust-Storage-6000mAh-Battery/dp/B0B4F2ZWL3/ref=sr_1_34?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-34",
     
     },
     {
      "id":"17",
      "title":"OnePlus 10R ",
      "price": "34,999",
      "description": "OnePlus 10R 5G (Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
      "brand":"OnePlus",
      "rating": "4.3 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/716uVx3Wr5L._SL1500_.jpg",
      "url": "https://www.amazon.in/OnePlus-Forest-Green-Storage-SuperVOOC/dp/B09WRMNJ9G/ref=sr_1_35?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-35",
      
      "price_url": "https://www.amazon.in/OnePlus-Forest-Green-Storage-SuperVOOC/dp/B09WRMNJ9G/ref=sr_1_35?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-35",
      
     },
     {
      "id":"18",
      "title":"OnePlus Nord CE",
      "price": "18,990",
      "description": "OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)",
      "brand":"OnePlus",
      "rating": "4.3 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71AvQd3VzqL._SL1500_.jpg",
      "url": "https://www.amazon.in/OnePlus-Nord-Lite-128GB-Storage/dp/B09WQYFLRX/ref=sr_1_36?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-36",
      
      "price_url": "https://www.amazon.in/OnePlus-Nord-Lite-128GB-Storage/dp/B09WQYFLRX/ref=sr_1_36?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-36",
     
     },
    
     {
      "id":"19",
      "title":"Apple iPhone 13 Mini",
      "price": "89,999",
      "description": "Apple iPhone 13 Mini (512GB) - Pink",
      "brand":"Apple",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/61nPiOOv9BL._SL1500_.jpg",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDYyMzcwMzg2NjM2MjE4OjE2ODE2NjUwMjE6c3BfYnRmOjIwMDc5NjgyODQ3NTAzOjowOjo&url=%2FApple-iPhone-13-Mini-512GB%2Fdp%2FB09G997HJP%2Fref%3Dsr_1_38_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665021%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-38-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      
      "price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDYyMzcwMzg2NjM2MjE4OjE2ODE2NjUwMjE6c3BfYnRmOjIwMDc5NjgyODQ3NTAzOjowOjo&url=%2FApple-iPhone-13-Mini-512GB%2Fdp%2FB09G997HJP%2Fref%3Dsr_1_38_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665021%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-38-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      
     }
    ,
    {
      "id":"20",
      "title":"OnePlus Nord CE 2 Lite",
      "price": "18,990",    
      "description": "OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)",
      "brand":"OnePlus",
      "rating": "4.3 out of 5 stars",   
      "image":"https://m.media-amazon.com/images/I/71V--WZVUIL._SL1500_.jpg",
      "url": "https://www.amazon.in/OnePlus-Nord-Black-128GB-Storage/dp/B09WQY65HN/ref=sr_1_4?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-4",
      "price_url": "https://www.amazon.in/OnePlus-Nord-Black-128GB-Storage/dp/B09WQY65HN/ref=sr_1_4?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-4",
          
    },
  {
          "id":"21",
          "title":"Redmi 10 Power",
          "price": "12,499",
          "description": "Redmi 10 Power (Sporty Orange, 8GB RAM, 128GB Storage)",
          "brand":"Redmi",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/81OZGH4fZiL._SL1500_.jpg",
          "url": "https://www.amazon.in/Redmi-Power-Sporty-Orange-Storage/dp/B09Y5WPXGW/ref=sr_1_6?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-6",
         
          "price_url": "https://www.amazon.in/Redmi-Power-Sporty-Orange-Storage/dp/B09Y5WPXGW/ref=sr_1_6?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-6",
          
         },
         {
          "id":"22",
          "title":"Samsung Galaxy M13 ",
          "price": "10,999",
          "description": "Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
          "brand":"Samsung",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/81-fFXQdPTL._SL1500_.jpg",
          "url": "https://www.amazon.in/Samsung-Galaxy-Storage-6000mAh-Battery/dp/B0B4F2TTTS/ref=sr_1_7?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-7",
        
          "price_url": "https://www.amazon.in/Samsung-Galaxy-Storage-6000mAh-Battery/dp/B0B4F2TTTS/ref=sr_1_7?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-7",
          
         },
       
         {
           "id":"23",
           "title":"Nokia G21 ",
           "price": "13,499",
           "description": "Nokia G21 Android Smartphone, Dual SIM, 3-Day Battery Life, 6GB RAM + 128GB Storage, 50MP Triple AI Camera | Nordic Blue",
           "brand":"Nokia",
           "rating": "4.0 out of 5 stars",
           "image":"https://m.media-amazon.com/images/I/71x+m2-yb7L._SL1500_.jpg",
           "url": "https://www.amazon.in/Nokia-Android-Smartphone-Battery-Storage/dp/B09Y99VSSJ/ref=sr_1_9?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-9",
         
          "price_url": "https://www.amazon.in/Nokia-Android-Smartphone-Battery-Storage/dp/B09Y99VSSJ/ref=sr_1_9?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-9",
         
         },
        
         {
          "id":"24",
          "title":"Itel P40",
          "price": "6,299",
          "description": "Itel P40 (6000mAh Battery with Fast Charging | 2GB RAM + 64GB ROM, Up to 4GB RAM with Memory Fusion | 13MP AI Dual Rear Camera) - Luxurious Gold",
          "brand":"Itel",
          "rating": "5.0 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71yTJCdHdaL._SL1500_.jpg",
          "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDE1NTcyNjE1MDE5NDY3OjE2ODE2NjUzNTc6c3BfbXRmOjIwMTQxMDA5ODU5Nzk4OjowOjo&url=%2FItel-6000mAh-Battery-Charging-Memory%2Fdp%2FB0BXLPY5WW%2Fref%3Dsr_1_11_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665357%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
          
          "price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDE1NTcyNjE1MDE5NDY3OjE2ODE2NjUzNTc6c3BfbXRmOjIwMTQxMDA5ODU5Nzk4OjowOjo&url=%2FItel-6000mAh-Battery-Charging-Memory%2Fdp%2FB0BXLPY5WW%2Fref%3Dsr_1_11_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665357%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
          
         },
         
         {
          "id":"25",
          "title":"Redmi 9A Sport",
          "price": "6,499",
          "description": "Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
          "brand":"Redmi",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/810KHyQ4WcL._SL1500_.jpg",
          "url": "https://www.amazon.in/Redmi-9A-Sport-Octa-core-Processor/dp/B09GFLXVH9/ref=sr_1_13?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-13",
         
          "price_url": "https://www.amazon.in/Redmi-9A-Sport-Octa-core-Processor/dp/B09GFLXVH9/ref=sr_1_13?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-13",
         
         },
         {
          "id":"26",
          "title":"Redmi A1 ",
          "price": "6,499",
          "description": "Redmi A1 (Black, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
          "brand":"Redmi",
          "rating": "4.0 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/81BxHYjeA2L._SL1500_.jpg",
          "url": "https://www.amazon.in/Redmi-Storage-Segment-5000mAh-Battery/dp/B0BBN56J5H/ref=sr_1_14?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-14",
         
          "price_url": "https://www.amazon.in/Redmi-Storage-Segment-5000mAh-Battery/dp/B0BBN56J5H/ref=sr_1_14?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-14",
          
         },
         {
          "id":"27",
          "title":"Realme narzo 50i Prime",
          "price": "7,499",
          "description": "realme narzo 50i Prime (Dark Blue 4GB RAM+64GB Storage) Octa-core Processor | 5000 mAh Battery",
          "brand":"Realme",
          "rating": "4.0 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/81Te0dZU7nL._SL1500_.jpg",
          "url": "https://www.amazon.in/realme-Storage-Octa-core-Processor-Battery/dp/B0BBM7L888/ref=sr_1_15?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-15",
          
          "price_url": "https://www.amazon.in/realme-Storage-Octa-core-Processor-Battery/dp/B0BBM7L888/ref=sr_1_15?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-15",
          
         },
         {
          "id":"28",
          "title":"OPPO A15s ",
          "price": "11,490",
          "description": "OPPO A15s (Fancy White, 4GB, 128GB Storage) AI Triple Camera | 6.52\" HD+ Screen | 2.3GHz Mediatek Helio P35 Octa Core Processor",
          "brand":"Oppo",
          "rating": "4.2 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/71TdXNLT1FL._SL1500_.jpg",
          "url": "https://www.amazon.in/Oppo-Storage-Additional-Exchange-CPH2179/dp/B08LRDT7PL/ref=sr_1_16?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-16",
          
          "price_url": "https://www.amazon.in/Oppo-Storage-Additional-Exchange-CPH2179/dp/B08LRDT7PL/ref=sr_1_16?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-16",
        
         },
         {
          "id":"29",
          "title":"Samsung Galaxy M13",
          "price": "12,999",
          "description": "Samsung Galaxy M13 (Aqua Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus",
          "brand":"Samsung",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/81-fFXQdPTL._SL1500_.jpg",

          "url": "https://www.amazon.in/Samsung-Galaxy-Storage-6000mAh-Battery/dp/B0B4F2XCK3/ref=sr_1_17?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-17",
         
          "price_url": "https://www.amazon.in/Samsung-Galaxy-Storage-6000mAh-Battery/dp/B0B4F2XCK3/ref=sr_1_17?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-17",
          
         },
         {
          "id":"30",
          "title":"Lava Blaze ",
          "price": "10,999",
          "description": "Lava Blaze 5G (Glass Green, 4GB RAM, UFS 2.2 128GB Storage) | 5G Ready | 50MP AI Triple Camera | Upto 7GB Expandable RAM | Charger Included | Clean Android (No Bloatware)",
          "brand":"Lava",
          "rating": "4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/51EknP3PutL._SL1000_.jpg",
          "url": "https://www.amazon.in/Lava-Blaze-5G-Green-Expandable/dp/B0BKJRHV2M/ref=sr_1_18?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-18",
          
          "price_url": "https://www.amazon.in/Lava-Blaze-5G-Green-Expandable/dp/B0BKJRHV2M/ref=sr_1_18?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-18",
         
         },
         {
          "id":"31",
          "title":"Samsung Galaxy M32",
          "price": "15,499",
          "description": "Samsung Galaxy M32 Prime Edition (Light Blue, 6GB RAM, 128GB)",
          "brand":"Samsung",
          "rating":"4.1 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/81OC0ojxH6L._SL1500_.jpg",
          
          "url": "https://www.amazon.in/Samsung-Galaxy-Prime-Light-128GB/dp/B0BD3V985M/ref=sr_1_19?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-19",
          
          "price_url": "https://www.amazon.in/Samsung-Galaxy-Prime-Light-128GB/dp/B0BD3V985M/ref=sr_1_19?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-19",
         
         },
         {
          "id":"32",
          "title":"Apple iPhone SE ",
          "price": "54,900",
          "description": "Apple iPhone SE (128 GB) - Starlight (3rd Generation)",
          "brand":"Apple",
          "rating": "4.3 out of 5 stars",
          "image":"https://m.media-amazon.com/images/I/61-MT8AQAPL._SL1500_.jpg",
          "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDE1NTcyNjE1MDE5NDY3OjE2ODE2NjUzNTc6c3BfYnRmOjIwMDM1NTMzNDQyMTk4OjowOjo&url=%2FApple-iPhone-128-Starlight-Generation%2Fdp%2FB09V44M2JC%2Fref%3Dsr_1_22_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665357%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
          
          "price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDE1NTcyNjE1MDE5NDY3OjE2ODE2NjUzNTc6c3BfYnRmOjIwMDM1NTMzNDQyMTk4OjowOjo&url=%2FApple-iPhone-128-Starlight-Generation%2Fdp%2FB09V44M2JC%2Fref%3Dsr_1_22_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665357%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
          
         }
        ];
    });

app.controller("myMobiles2Controller",function($scope,$window){
        $scope.imageAddress = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
        $scope.price2 = "";
        $scope.pb2 = "";
        $scope.pr2 = "";
        $scope.item2 = function(){
            let i = $scope.selectedOption2;
          
            let image = $scope.Mobiles2[i].image;
            let price = $scope.Mobiles2[i].price;
            let brand = $scope.Mobiles2[i].brand;
            let rating = $scope.Mobiles2[i].rating;
            
            
            $scope.imageAddress = image;
            $scope.price = price;
            $scope.brand = brand;
            $scope.rating = rating;
          
        }


$scope.Mobiles2= [
    {
            "id": "0",
            "title": "---Select Anyone---",
            "price": "",
            "description": "",
            "brand": "",
            "rating":"",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
       
        }, 
          {
              "id":"1",
              "title":"Apple iPhone 14 Pro",
              "price": "1,19,999",
              "description": "Apple iPhone 14 Pro (128 GB) - Deep Purple",
              "brand":"Apple",
              "rating": "4.7 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/61HHS0HrjpL._SL1500_.jpg",
              "url": "https://www.flipkart.com/apple-iphone-14-pro-deep-purple-128-gb/p/itm75f73f63239fa",
              
              "price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDYyMzcwMzg2NjM2MjE4OjE2ODE2NjUwMjE6c3BfYXRmX25leHQ6MjAxMTU3ODM4MTI3OTg6OjA6Og&url=%2FApple-iPhone-128GB-Deep-Purple%2Fdp%2FB0BDJ6ZMCC%2Fref%3Dsr_1_17_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665021%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-17-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGZfbmV4dA%26psc%3D1",
              "rating": "4.5 out of 5 stars"
             },
            
             {
              "id":"2",
              "title":"Redmi Note 11T",
              "price": "17,990",
              "description": "Redmi Note 11T 5G (Stardust White, 8GB RAM, 128GB ROM) | Dimensity 810 5G | 33W Pro Fast Charging | Charger Included | Additional Exchange Offers| Get 2 Months of YouTube Premium Free!",
              "brand":"Redmi",
              "rating": "4.2 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/71C4pfJ7ecL._SL1500_.jpg",
              "url": "https://www.flipkart.com/redmi-note-11t-5g-stardust-white-64-gb/p/itm0dd08e65983e7",
              
              "price_url": "https://www.amazon.in/Redmi-Note-11T-5G-Dimensity/dp/B09LHX1YFX/ref=sr_1_19?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-19",
              
             },
             {
              "id":"3",
              "title":"Redmi A1",
              "price": "6,285",
              "description": "Redmi A1 (Light Green, 2GB RAM 32GB ROM) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
              "brand":"Redmi",
              "rating": "4.2 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/81UmTnrBDSL._SL1500_.jpg",
              "url": "https://www.amazon.in/Redmi-Segment-5000mAh-Battery-Leather/dp/B0BBN3WF7V/ref=sr_1_20?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-20",
             
              "price_url": "https://www.amazon.in/Redmi-Segment-5000mAh-Battery-Leather/dp/B0BBN3WF7V/ref=sr_1_20?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-20",
              
             },
             {
              "id":"4",
              "title":"RealMe Narzo 50",
              "price": "12,363",
              "description": "realme narzo 50 (Speed Blue, 6GB RAM+128GB Storage) Helio G96 Processor | 50MP AI Triple Camera | 120Hz Ultra Smooth Display",
              "brand":"Realme",
              "rating": "4.4 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/81gRC3KTeaL._SL1500_.jpg",
              "url": "https://www.flipkart.com/realme-narzo-50-speed-black-64-gb/p/itm9d47ef5d10145",
              
              "price_url": "https://www.amazon.in/realme-Storage-Processor-Triple-Display/dp/B09RN24CY6/ref=sr_1_21?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-21",
              
             },
             {
              "id":"5",
              "title":"Vivo iQOO Z6",
              "price": "15,999",
              "description": "iQOO Z6 5G by vivo (Dynamo Black, 4GB RAM, 128GB Storage) | Snapdragon 695-6nm Processor | 120Hz FHD+ Display | 5000mAh Battery",
              "brand":"Vivo",
              "rating": "4.0 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/61SpA599GgL._SL1200_.jpg",
              "url": "https://www.flipkart.com/iqoo-z6-5g-chromatic-blue-128-gb/p/itme35c3956c4435",
            
              "price_url": "https://www.amazon.in/iQOO-Storage-Snapdragon-695-6nm-Processor/dp/B07WDKL741/ref=sr_1_22?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-22",
             
             },
             {
              "id":"6",
              "title":"Samsung Galaxy A23",
              "price": "17,499",
              "description": "Samsung Galaxy A23 Blue, 6GB RAM, 128GB Storage with No Cost EMI/Additional Exchange Offers",
              "brand":"Samsung",
              "rating": "4.2 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/91W42b8YW+L._SL1500_.jpg",
              "url": "https://www.flipkart.com/samsung-galaxy-a23-blue-128-gb/p/itm5b2e7b386320a",
             
              "price_url": "https://www.amazon.in/Samsung-Galaxy-Storage-Additional-Exchange/dp/B09VK5D8KW/ref=sr_1_23?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-23",
             
             },
             {
              "id":"7",
              "title":"Tecno Spark 8T ",
              "price": "8,999",
              "description": "Tecno Spark 8T (Atlantic Blue, 4GB RAM,64GB Storage)| 50MP AI Camera | 7GB Expandable RAM",
              "brand":"Techno Spark",
              "rating":"4.2 out of 5",
              "image":"https://m.media-amazon.com/images/I/71AWvZMY6LL._SL1500_.jpg",
              "url": "https://www.flipkart.com/tecno-spark-8t-atlantic-blue-64-gb/p/itmbadb33344c3c6",
             
              "price_url": "https://www.amazon.in/Tecno-Spark-8T-Expandable-64GB/dp/B09MKPX6RQ/ref=sr_1_24?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-24",
             
             },
             {
              "id":"8",
              "title":"Redmi Note 11 ",
              "price": "12,988",
              "description": "Redmi Note 11 (Space Black, 4GB RAM, 64GB Storage)|90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included",
              "brand":"Redmi",
              "rating": "4.2 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/71yTvU9VgdL._SL1500_.jpg",
              "url": "https://www.flipkart.com/redmi-note-11-space-black-64-gb/p/itme81102bba3838",
            
              "price_url": "https://www.amazon.in/Redmi-Storage-Qualcomm%C2%AE-SnapdragonTM-Included/dp/B09QS8V5N8/ref=sr_1_25?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-25",
              
             },
             {
              "id":"9",
              "title":"Oppo F21s Pro 5G",
               "price": "24,984",
              "description": "Oppo F21s Pro 5G (Starlight Black, 8GB RAM, 128 Storage)|6.43\" FHD+ AMOLED|64MP Rear Triple AI Camera|4500 mAh Battery with 33W SUPERVOOC Charger|with No Cost EMI/Additional Exchange Offers",
             "brand":"Oppo",
             "rating": "4.2 out of 5 stars",
             "image":"https://m.media-amazon.com/images/I/71TFnrSIs-L._SL1500_.jpg",
              "url": "https://www.flipkart.com/oppo-f21s-pro-5g-starlight-black-128-gb/p/itm88da29ea5c190",
             
              "price_url": "https://www.amazon.in/Oppo-Starlight-Storage-Additional-Exchange/dp/B0BD52C9GZ/ref=sr_1_26?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-26",
              
             },
             {
              "id":"10",
              "title":"Itel P40 ",
              "price": "7,999",
              "description": "Itel P40 (6000mAh Battery with Fast Charging | 2GB RAM + 64GB ROM, Up to 4GB RAM with Memory Fusion | 13MP AI Dual Rear Camera) - Luxurious Gold",
              "brand":"Itel",
              "rating": "Be the first to Review this product",
              "image":"https://m.media-amazon.com/images/I/71yTJCdHdaL._SL1500_.jpg",
              "url": "https://www.flipkart.com/itel-p40-luxurious-gold-64-gb/p/itm9225fc7967ac7",
             
              "price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDYyMzcwMzg2NjM2MjE4OjE2ODE2NjUwMjE6c3BfbXRmOjIwMTQxMDA5ODU5Nzk4OjowOjo&url=%2FItel-6000mAh-Battery-Charging-Memory%2Fdp%2FB0BXLPY5WW%2Fref%3Dsr_1_27_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665021%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-27-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
              
             },
            
             {
              "id":"11",
              "title":"OnePlus Nord 2T",
              "price": "28,988",
              "name": "OnePlus Nord 2T 5G (Gray Shadow, 8GB RAM, 128GB Storage)",
              "brand":"OnePlus",
              "rating": "4.3 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/617MPEZB5mL._SL1500_.jpg",
              "url": "https://www.flipkart.com/oneplus-nord-2t-5g-gray-shadow-128-gb/p/itmeadf76c1e8943",
            
              "price_url": "https://www.amazon.in/OnePlus-Nord-Shadow-128GB-Storage/dp/B0B3CQBRB4/ref=sr_1_29?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-29",
              
             },
             {
              "id":"12",
              "title":"Vivo Y56",
              "price": "19,999",
              "description": "Vivo Y56 5G (Black Engine, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
              "brand":"Vivo",
              "rating": "4.3 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/61y7ZbTQcWL._SL1200_.jpg",
              "url": "https://www.flipkart.com/vivo-y56-5g-orange-shimmer-128-gb/p/itmc736a6b61db7b",
              
              "price_url": "https://www.amazon.in/Vivo-Engine-Storage-Additional-Exchange/dp/B07WFPMD64/ref=sr_1_30?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-30",
             
             },
             {
              "id":"13",
              "title":"realme narzo 50i",
              "price": "7,390",
              "description": "realme narzo 50i (Carbon Black, 2GB RAM+32GB Storage) Octa Core Processor | 6.5\" inch Large Display",
              "brand":"Realme",
              "rating": "4.5 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/81HJ4pkOsiL._SL1500_.jpg",
              "url": "https://www.flipkart.com/realme-narzo-50i-carbon-black-32-gb/p/itm53fa214c23501",
             
              "price_url": "https://www.amazon.in/realme-narzo-Carbon-Black-Storage/dp/B09FKGDJNC/ref=sr_1_31?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-31",
              
             },
             {
              "id":"14",
              "title":"Redmi 9A Sport",
              "price": "6,999",
              "description": "Redmi 9A Sport (Carbon Black, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
              "brand":"Redmi",
              "rating": "4.1 out of 5 stars",
              "image":"https://www.flipkart.com/redmi-9a-sport-metallic-blue-32-gb/p/itm53bc6ebfe147b",
              
              "price_url": "https://www.amazon.in/Redmi-9A-Sport-Octa-core-Processor/dp/B09GFM8CGS/ref=sr_1_32?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-32",
              
             },
             {
              "id":"15",
              "title":"Redmi Note 10S ",
              "price": "16,999",
              "name": "Redmi Note 10S (Frost White, 6GB RAM, 128GB Storage) - Super Amoled Display | 64 MP Quad Camera | 6 Month Free Screen Replacement (Prime only) | 33W Charger Included",
              "brand":"Redmi",
              "rating": "4.4 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/71uZCu7+m1L._SL1500_.jpg",
              "url": "https://www.flipkart.com/redmi-note-10s-cosmic-purple-64-gb/p/itm2a1b4b90344a3",
             
              "price_url": "https://www.amazon.in/Redmi-Note-Frost-White-128GB/dp/B0948M5DZW/ref=sr_1_33?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-33",
              
             },
             {
        
              "id":"16",
              "title":"Samsung Galaxy M13",
              "price": "13,793",
              "description": "Samsung Galaxy M13 (Stardust Brown, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus",
              "brand":"Samsung",
              "rating": "4.2 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/81Prc5i7hML._SL1500_.jpg",
              "url": "https://www.flipkart.com/samsung-galaxy-m13-stardust-brown-128-gb/p/itmb1902f24653db",
              
              "price_url": "https://www.amazon.in/Samsung-Stardust-Storage-6000mAh-Battery/dp/B0B4F2ZWL3/ref=sr_1_34?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-34",
             
             },
             {
              "id":"17",
              "title":"OnePlus 10R ",
              "price": "33,905",
              "description": "OnePlus 10R 5G (Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
              "brand":"OnePlus",
              "rating": "4.3 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/716uVx3Wr5L._SL1500_.jpg",
              "url": "https://www.flipkart.com/oneplus-10r-5g-prime-blue-128-gb/p/itmccf45a394ea16",
              
              "price_url": "https://www.amazon.in/OnePlus-Forest-Green-Storage-SuperVOOC/dp/B09WRMNJ9G/ref=sr_1_35?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-35",
              
             },
             {
              "id":"18",
              "title":"OnePlus Nord CE",
              "price": "18,997",
              "description": "OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)",
             "brand":"OnePlus",
             "rating": "4.4 out of 5 stars",
             "image":"https://m.media-amazon.com/images/I/71AvQd3VzqL._SL1500_.jpg",
              "url": "https://www.flipkart.com/oneplus-nord-ce-2-lite-5g-blue-tide-128-gb/p/itm7acae55b999e6",
              
              "price_url": "https://www.amazon.in/OnePlus-Nord-Lite-128GB-Storage/dp/B09WQYFLRX/ref=sr_1_36?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665021&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-36",
             
             },
            
             {
              "id":"19",
              "title":"Apple iPhone 13 Mini",
              "price": "89,999",
              "description": "Apple iPhone 13 Mini (512GB) - Pink",
              "brand":"Apple",
              "rating": "4.5 out of 5 stars",
              "image":"https://m.media-amazon.com/images/I/61nPiOOv9BL._SL1500_.jpg",
              "url": "https://www.flipkart.com/apple-iphone-13-mini-pink-512-gb/p/itm56980f8bb46c6",
              
              "price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDYyMzcwMzg2NjM2MjE4OjE2ODE2NjUwMjE6c3BfYnRmOjIwMDc5NjgyODQ3NTAzOjowOjo&url=%2FApple-iPhone-13-Mini-512GB%2Fdp%2FB09G997HJP%2Fref%3Dsr_1_38_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665021%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-38-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
              
             }
            ,
            {
              "id":"20",
              "title":"OnePlus Nord CE 2 Lite",
              "price": "18,896",    
              "description": "OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)",
             "brand":"OnePlus",
              "rating": "4.4 out of 5 stars",   
             "image":"https://m.media-amazon.com/images/I/71V--WZVUIL._SL1500_.jpg",
              "url": "https://www.flipkart.com/oneplus-nord-ce-2-lite-5g-black-dusk-128-gb/p/itm537fc2aa73747",
              "price_url": "https://www.amazon.in/OnePlus-Nord-Black-128GB-Storage/dp/B09WQY65HN/ref=sr_1_4?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-4",
                  
            },
                
                 {
                  "id":"21",
                  "title":"Redmi 10 Power",
                  "price": "11,499",
                  "description": "Redmi 10 Power (Sporty Orange, 8GB RAM, 128GB Storage)",
                  "brand":"Redmi",
                  "rating": "4.2 out of 5 stars",
                  "image":"https://m.media-amazon.com/images/I/81OZGH4fZiL._SL1500_.jpg",
                  "url": "https://www.flipkart.com/redmi-10-power-power-black-128-gb/p/itm97f5d2ec83588",
                 
                  "price_url": "https://www.amazon.in/Redmi-Power-Sporty-Orange-Storage/dp/B09Y5WPXGW/ref=sr_1_6?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-6",
                  
                 },
                 {
                  "id":"22",
                  "title":"Samsung Galaxy M13 ",
                  "price": "13,297",
                  "description": "Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
                  "brand":"Samsung",
                  "rating": "4.1 out of 5 stars",
                  "image":"https://m.media-amazon.com/images/I/81-fFXQdPTL._SL1500_.jpg",
                  "url": "https://www.flipkart.com/samsung-galaxy-m13-5g-aqua-green-64-gb/p/itm46bd671394e50",
                
                  "price_url": "https://www.amazon.in/Samsung-Galaxy-Storage-6000mAh-Battery/dp/B0B4F2TTTS/ref=sr_1_7?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-7",
                  
                 },
               
                 {
                  "id":"23",
                  "title":"Nokia G21 ",
                  "price": "16,999",
                  "description": "Nokia G21 Android Smartphone, Dual SIM, 3-Day Battery Life, 6GB RAM + 128GB Storage, 50MP Triple AI Camera | Nordic Blue",
                   "brand":"Nokia",
                   "rating": "4.0 out of 5 stars",
                   "image":"https://m.media-amazon.com/images/I/71x+m2-yb7L._SL1500_.jpg",
                  "url": "https://www.flipkart.com/nokia-g21-dusk-128-gb/p/itm2b6c57b4a55cc",
                 
                  "price_url": "https://www.amazon.in/Nokia-Android-Smartphone-Battery-Storage/dp/B09Y99VSSJ/ref=sr_1_9?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-9",
                 
                 },
                
                 {
                  "id":"24",
                  "title":"Itel P40",
                  "price": "7,999",
                  "description": "Itel P40 (6000mAh Battery with Fast Charging | 2GB RAM + 64GB ROM, Up to 4GB RAM with Memory Fusion | 13MP AI Dual Rear Camera) - Luxurious Gold",
                  "brand":"Itel",
                  "rating": "Be the first to Review this product",
                  "image":"https://m.media-amazon.com/images/I/71yTJCdHdaL._SL1500_.jpg",
                  "url": "https://www.flipkart.com/itel-p40-luxurious-gold-64-gb/p/itm9225fc7967ac7",
                  
                  "price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDE1NTcyNjE1MDE5NDY3OjE2ODE2NjUzNTc6c3BfbXRmOjIwMTQxMDA5ODU5Nzk4OjowOjo&url=%2FItel-6000mAh-Battery-Charging-Memory%2Fdp%2FB0BXLPY5WW%2Fref%3Dsr_1_11_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665357%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
                  
                 },
                 
                 {
                  "id":"25",
                  "title":"Redmi 9A Sport",
                  "price": "6,199",
                  "description": "Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
                  "brand":"Redmi",
                  "rating": "4.1 out of 5 stars",
                  "image":"https://m.media-amazon.com/images/I/810KHyQ4WcL._SL1500_.jpg",
                  "url": "https://www.flipkart.com/redmi-9a-sport-metallic-blue-32-gb/p/itm53bc6ebfe147b",
                 
                  "price_url": "https://www.amazon.in/Redmi-9A-Sport-Octa-core-Processor/dp/B09GFLXVH9/ref=sr_1_13?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-13",
                 
                 },
                 {
                  "id":"26",
                  "title":"Redmi A1 ",
                  "price": "6,285",
                  "description": "Redmi A1 (Black, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
                  "brand":"Redmi",
                  "rating": "4.2 out of 5 stars",
                  "image":"https://m.media-amazon.com/images/I/81BxHYjeA2L._SL1500_.jpg",
                  "url": "https://www.flipkart.com/redmi-a1-light-green-32-gb/p/itma613ca74c6f06",
                 
                  "price_url": "https://www.amazon.in/Redmi-Storage-Segment-5000mAh-Battery/dp/B0BBN56J5H/ref=sr_1_14?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-14",
                  
                 },
                 {
                  "id":"27",
                  "title":"Realme narzo 50i Prime",
                  "price": "7,879",
                  "description": "realme narzo 50i Prime (Dark Blue 4GB RAM+64GB Storage) Octa-core Processor | 5000 mAh Battery",
                  "brand":"Realme",
                  "rating": "4.5 out of 5 stars",
                  "image":"https://m.media-amazon.com/images/I/81Te0dZU7nL._SL1500_.jpg",
                  "url": "https://www.flipkart.com/realme-narzo-50i-prime-mint-green-32-gb/p/itmc04e130e013e0",
                  
                  "price_url": "https://www.amazon.in/realme-Storage-Octa-core-Processor-Battery/dp/B0BBM7L888/ref=sr_1_15?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-15",
                  
                 },
                 {
                  "id":"28",
                  "title":"OPPO A15s ",
                  "price": "11,889",
                  "description": "OPPO A15s (Fancy White, 4GB, 128GB Storage) AI Triple Camera | 6.52\" HD+ Screen | 2.3GHz Mediatek Helio P35 Octa Core Processor",
                  "brand":"Oppo",
                  "rating": "4.3 out of 5 stars",
                  "image":"https://m.media-amazon.com/images/I/71TdXNLT1FL._SL1500_.jpg",
                  "url": "https://www.flipkart.com/oppo-a15s-fancy-white-64-gb/p/itm8a26d15bdd39c",
                  
                  "price_url": "https://www.amazon.in/Oppo-Storage-Additional-Exchange-CPH2179/dp/B08LRDT7PL/ref=sr_1_16?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-16",
                
                 },
                 {
                  "id":"29",
                  "title":"Samsung Galaxy M13",
                  "price": "14,867",
                  "description": "Samsung Galaxy M13 (Aqua Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus",
                  "brand":"Samsung",
                  "rating": "4.1 out of 5 stars",
                  "image":"https://m.media-amazon.com/images/I/81-fFXQdPTL._SL1500_.jpg",
        
                  "url": "https://www.flipkart.com/samsung-galaxy-m13-5g-aqua-green-128-gb/p/itm807f5e77fb954",
                 
                  "price_url": "https://www.amazon.in/Samsung-Galaxy-Storage-6000mAh-Battery/dp/B0B4F2XCK3/ref=sr_1_17?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-17",
                  
                 },
                 {
                  "id":"30",
                  "title":"Lava Blaze ",
                  "price": "8,699",
                  "description": "Lava Blaze 5G (Glass Green, 4GB RAM, UFS 2.2 128GB Storage) | 5G Ready | 50MP AI Triple Camera | Upto 7GB Expandable RAM | Charger Included | Clean Android (No Bloatware)",
                  "brand":"Lava",
                  "rating": "4.0 out of 5 stars",
                  "image":"https://m.media-amazon.com/images/I/51EknP3PutL._SL1000_.jpg",
                  "url": "https://www.flipkart.com/lava-blaze-glass-black-64-gb/p/itmbe44c3b1ad1a3",
                  
                  "price_url": "https://www.amazon.in/Lava-Blaze-5G-Green-Expandable/dp/B0BKJRHV2M/ref=sr_1_18?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-18",
                 
                 },
                 {
                  "id":"31",
                  "title":"Samsung Galaxy M32",
                  "price": "15,989",
                  "description": "Samsung Galaxy M32 Prime Edition (Light Blue, 6GB RAM, 128GB)",
                  "brand":"Samsung",
                  "rating":"4.3 out of 5 stars",
                  "image":"https://m.media-amazon.com/images/I/81OC0ojxH6L._SL1500_.jpg",
                  
                  "url": "https://www.flipkart.com/samsung-galaxy-m32-prime-light-blue-128-gb/p/itm42348b585b993",
                  
                  "price_url": "https://www.amazon.in/Samsung-Galaxy-Prime-Light-128GB/dp/B0BD3V985M/ref=sr_1_19?crid=4DF94DCF94WA&keywords=mobiles&qid=1681665357&refinements=p_72%3A1318476031&rnid=1318475031&sprefix=mobile%2Caps%2C256&sr=8-19",
                 
                 },
                 {
                  "id":"32",
                  "title":"Apple iPhone SE ",
                  "price": "37,999",
                  "description": "Apple iPhone SE (128 GB) - Starlight (3rd Generation)",
                  "brand":"Apple",
                  "rating": "4.3 out of 5 stars",
                  "image":"https://m.media-amazon.com/images/I/61-MT8AQAPL._SL1500_.jpg",
                  "url": "https://www.flipkart.com/apple-iphone-se-3rd-gen-starlight-128-gb/p/itme61365b3c85ef",
                  
                  "price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTozNDE1NTcyNjE1MDE5NDY3OjE2ODE2NjUzNTc6c3BfYnRmOjIwMDM1NTMzNDQyMTk4OjowOjo&url=%2FApple-iPhone-128-Starlight-Generation%2Fdp%2FB09V44M2JC%2Fref%3Dsr_1_22_sspa%3Fcrid%3D4DF94DCF94WA%26keywords%3Dmobiles%26qid%3D1681665357%26refinements%3Dp_72%253A1318476031%26rnid%3D1318475031%26sprefix%3Dmobile%252Caps%252C256%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
                  
                 }
                ];
            });
