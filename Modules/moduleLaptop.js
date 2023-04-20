var app=angular.module('myModLap',[]);
app.controller('myControllerLaptops1',function($scope))
{
    $scope.imageAddress="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    $scope.price="";
    $scope.brand="";
    $scope.rating="";
    $scope.item1=function()
    {
      let i = $scope.selectedOption1;
      let image = $scope.watches1[i].image;
      let price = $scope.watches1[i].price;
      let brand = $scope.watches1[i].brand;
      let rating = $scope.watches1[i].rating;

      $scope.imageAddress = image;
      $scope.price = price;
      $scope.brand = brand;
      $scope.rating = rating;
    }
}






var Laptops1= [
    {
     "id":"0",
        "title": "",
        "price": "",
        "description": "",
        "brand": "",
        "rating": "",
        "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
        "url": "",
        "Price_url":""
       
    },
 {
  "id":"1",
  "title": "HP 14s",
  "price": "37,490",
  "description": "11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge, Anti-Glare, FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/MSO 2021/1.41 Kg, 14s-dy2507TU",
  "brand": "HP",
  "rating": "4.1 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/81E0ZtOuqsL._SL1500_.jpg  ",
  "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfYXRmOjIwMDY2MzUwMTA5Mzk4OjowOjo&url=%2FHP-i3-1115G4-Micro-Edge-Anti-Glare-14s-dy2507TU%2Fdp%2FB0B63Y75P9%2Fref%3Dsr_1_1_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
  "Price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfYXRmOjIwMDY2MzUwMTA5Mzk4OjowOjo&url=%2FHP-i3-1115G4-Micro-Edge-Anti-Glare-14s-dy2507TU%2Fdp%2FB0B63Y75P9%2Fref%3Dsr_1_1_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
 
 },
 {
  "id":"2",
  "title": "HP Chromebook 11a",
  "price": "21,990",
  "description":", MediaTek MT8183 Processor 11.6 inch(29.5 cm) Thin and Light Touchscreen Laptop (4 GB RAM/64 GB eMMC/Chrome OS/Fast Charge/Google Assistant/Indigo Blue/1.07Kg), na0002MU, 1.07Kg",
  "brand":"HP",
  "image":"https://m.media-amazon.com/images/I/61d1xNY54HL._SL1200_.jpg",
  "rating": "3.8 out of 5 stars",
  "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfYXRmOjIwMDc5NTc4MDE0NTk4OjowOjo&url=%2FHP-Chromebook-11-6-inch-Touchscreen-11a-na0002MU%2Fdp%2FB08WPNPTDD%2Fref%3Dsr_1_2_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
  "Price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfYXRmOjIwMDc5NTc4MDE0NTk4OjowOjo&url=%2FHP-Chromebook-11-6-inch-Touchscreen-11a-na0002MU%2Fdp%2FB08WPNPTDD%2Fref%3Dsr_1_2_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
  
 },
 {
  "id":"3",
  "title": "Honor MagicBook 14",
  "Price": "40,990",
  "description":" AMD Ryzen 5 5500U 14-inch (35.56 cm) FHD IPS Anti-Glare Thin and Light Laptop (16GB/512GB PCIe SSD/Windows 11/Fingerprint Login/Metal Body/Backlit KB/1.38Kg), Gray, NobelM-WFQ9AHNE",
  "brand":"Honor",
  "rating": "4.4 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/71tHNTGasKL._SL1500_.jpg",
  "Price_url": "https://www.amazon.in/Honor-MagicBook-Anti-Glare-Fingerprint-NobelM-WFQ9AHNE/dp/B0BC9R8XYZ/ref=sr_1_3?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-3",
  "url": "https://www.amazon.in/Honor-MagicBook-Anti-Glare-Fingerprint-NobelM-WFQ9AHNE/dp/B0BC9R8XYZ/ref=sr_1_3?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-3"
 },
 {
  "id":"4",
  "title": "HP 245 G8 3S7L2PA Notebook ",
  "price": "23,990",
  "description":"Business Laptop 14 Inch HD (AMD Ryzen 3-3250/4 GB RAM / 1TB HDD/Windows 11 Home) 1 Year Onsite Brand Warranty",
  "brand":"HP",
  "rating": "3.2 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/71mEmEXG2SL._AC_SL1500_.jpg",
  "url": "https://www.amazon.in/HP-3S7L2PA-Notebook-Business-Warranty/dp/B0BM45QW4L/ref=sr_1_4?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-4",
  "Price_url": "https://www.amazon.in/HP-3S7L2PA-Notebook-Business-Warranty/dp/B0BM45QW4L/ref=sr_1_4?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-4",
  
 },
 {
  "id":"5",
  "title": "Lenovo IdeaPad D330 ",
  "price":"20,990",
  "description":"Intel Celeron N4020 10.1\" (25cm) HD IPS Detachable 2-in-1 Laptop (4GB/128GB eMMC/Windows 10/1 Yr Warranty/Mineral Grey/1.1Kg), 82H0001YIN",
  "brand":"Lenovo",
  "rating": "3.9 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/51gkDWHPvQL._SL1067_.jpg",
  "url": "https://www.amazon.in/Lenovo-IdeaPad-Detachable-Warranty-82H0001YIN/dp/B09SV2B5SR/ref=sr_1_5?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-5",
 
  "Price_url": "https://www.amazon.in/Lenovo-IdeaPad-Detachable-Warranty-82H0001YIN/dp/B09SV2B5SR/ref=sr_1_5?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-5",
  
 },
 {
 "id":"6",
  "title": "ASUS TUF Gaming A15",
  "price": "49,990",
  "description":"15.6-inch (39.62 cms) FHD 144Hz, AMD Ryzen 5 4600H, 4GB NVIDIA GeForce GTX 1650, Gaming Laptop (8GB/512GB SSD/Windows 11/Black/2.3 Kg), FA506IHRZ-HN111W",
  "brand":"ASUS",
  "rating": "4.3 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/91zVSkGGZbS._SL1500_.jpg",
  "url": "https://www.amazon.in/ASUS-15-6-inch-GeForce-Windows-FA506IHRZ-HN111W/dp/B0B5DZTNZQ/ref=sr_1_6?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-6",
 
  "Price_url": "https://www.amazon.in/ASUS-15-6-inch-GeForce-Windows-FA506IHRZ-HN111W/dp/B0B5DZTNZQ/ref=sr_1_6?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-6",
  
 },
 {
    "id":"7",
    "title": "Lenovo IdeaPad Slim 3 ",
  "price": "33,990",
  "description":"Intel Core i3-1115G4 11th Gen 15.6\" (39.62cm) FHD Laptop (8GB/256GB SSD/Win 11/Office 2021/2 Year Warranty/3 Month Game Pass/Platinum Grey/1.7Kg), 81X800LCIN",
  "brand":"Lenovo",
  "rating": "4.1 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg",
    "url": "https://www.amazon.in/Lenovo-i3-1115G4-Warranty-Platinum-81X800LCIN/dp/B0B9YHX39M/ref=sr_1_7?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-7",
    "Price_url": "https://www.amazon.in/Lenovo-i3-1115G4-Warranty-Platinum-81X800LCIN/dp/B0B9YHX39M/ref=sr_1_7?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-7",

 },
 {
    "id":"8",
    "title":"Lenovo IdeaPad 3",
    "price": "38,400",
    "description": "Lenovo IdeaPad 3 11th Gen Intel Core i3 15.6\" FHD Thin & Light Laptop(8GB/512GB SSD/Windows 11/Office 2021/2Yr Warranty/3months Xbox Game Pass/Platinum Grey/1.7Kg), 81X800N2IN",
   "brand":"Lenovo",
   "rating": "4.1 out of 5 stars",
   "image":"https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg",
    "url": "https://www.amazon.in/Lenovo-IdeaPad-Warranty-Platinum-81X800LGIN/dp/B0B2RBP83P/ref=sr_1_8?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-8",
  
  "Price_url": "https://www.amazon.in/Lenovo-IdeaPad-Warranty-Platinum-81X800LGIN/dp/B0B2RBP83P/ref=sr_1_8?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-8",
  
 },
 {
    'id':"9",
    "title":"Dell Inspiron 3511",
    "price": "52,490",
    "description": "Dell Inspiron 3511 Laptop, Intel Core i5-1135G7, 8GB, 512GB SSD, 15.6\" (39.62Cms) FHD WVA AG, Windows 11 + MSO'21, Carbon Black (1.8Kgs, D560745WIN9B)",
    "brand":"Dell",
    "rating": "4.2 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/41Fk0R9URsL._SX300_SY300_QL70_FMwebp_.jpg",
    "url": "https://www.amazon.in/Dell-Inspiron-i5-1135G7-39-62Cms-D560745WIN9B/dp/B0B5H5DW11/ref=sr_1_9?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-9",
  
  "Price_url": "https://www.amazon.in/Dell-Inspiron-i5-1135G7-39-62Cms-D560745WIN9B/dp/B0B5H5DW11/ref=sr_1_9?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-9",
  
 },
 {
    "id":"10",
    "title":"HP 14s",
    "price": "25,990",
    "description": "HP 14s, Intel Celeron N4500, 8GB RAM/256GB SSD 14-inches/35.6 cm HD, Micro-Edge Display/Alexa Built-in/Windows 11/Intel UHD Graphics/Dual Speakers/MSO 2021/1.46 Kg, 14s-dq3037tu",
    "brand":"HP",
    "rating": "3.7 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/91d75JiCH9L._SL1500_.jpg",
    "url": "https://www.amazon.in/HP-14-inches-Micro-Edge-Graphics-14s-dq3037tu/dp/B0B69LVPBT/ref=sr_1_10?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-10",
    "Price_url": "https://www.amazon.in/HP-14-inches-Micro-Edge-Graphics-14s-dq3037tu/dp/B0B69LVPBT/ref=sr_1_10?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-10",
  
 },
 {
    "id":"11",
    "title":"Dell Vostro",
    "price": "41,990",
 "description": "Dell Vostro 3420 Laptop,12th Gen Intel Core i3-1215U, 8GB & 512GB SSD, 14.0\" (35.56Cms) FHD WVA AG 250 nits, Win11+MSO'21, Carbon Black(D552325WIN9BE, 1.48 KGs)",
"brand":"Dell",
 "rating": "4.1 out of 5 stars",
 "image":"https://m.media-amazon.com/images/I/51bqpP0jb5L._SL1080_.jpg",
  "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfbXRmOjIwMTMyMTg0MjE1NTk4OjowOjo&url=%2FDell-Vostro-i3-1215U-35-56Cms-D552325WIN9BE%2Fdp%2FB0BQJ68HHC%2Fref%3Dsr_1_11_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
 
  "Price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfbXRmOjIwMTMyMTg0MjE1NTk4OjowOjo&url=%2FDell-Vostro-i3-1215U-35-56Cms-D552325WIN9BE%2Fdp%2FB0BQJ68HHC%2Fref%3Dsr_1_11_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
  
 },
 {
    "id":"12",
    "title":"Xiaomi NotebookPro",
    "price": "56,390",
     
    "description": "Xiaomi NotebookPro QHD+ IPS AntiGlare Display Intel Core i5-11300H 11th Gen 14 inch(35.56 cm) Thin & Light Laptop(8GB/512GB SSD/Iris Xe Graphics/Windows 11/MS Office 21/Backlight KB/FP Sensor/1.4 Kg)",
    "brand":"Xiaomi",
    "rating": "4.3 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/71iiXU7HHkL._SL1500_.jpg",
    "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfbXRmOjIwMDY2Mjk5OTMyODk4OjowOjo&url=%2FNotebook-Display-i5-11300H-Graphics-Fingerprint%2Fdp%2FB098XM2SJ4%2Fref%3Dsr_1_12_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-12-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
  
  "Price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfbXRmOjIwMDY2Mjk5OTMyODk4OjowOjo&url=%2FNotebook-Display-i5-11300H-Graphics-Fingerprint%2Fdp%2FB098XM2SJ4%2Fref%3Dsr_1_12_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-12-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
  
 },
 {
    "id":"13",
    "title":"HP 255 G98",
    "price": "25,999",
  "description": "HP 255 G8 Laptop with AMD Athlon Silver 3050U APU/ 8GB Ram/ 256GB SSD/DOS/AMD Radeon Vega 8 Mobile Graphics/39.6 cm HD (1366 x 768), SVA, Anti-Glare WLED/Black/1 Year Onsite Warranty",
  "brand":"HP",
  "rating": "3.3 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/41B+OthIGLL.jpg",
    "url": "https://www.amazon.in/HP-Laptop-Graphics-Anti-Glare-Warranty/dp/B0BVQJ5R2H/ref=sr_1_13?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-13",
  
  "Price_url": "https://www.amazon.in/HP-Laptop-Graphics-Anti-Glare-Warranty/dp/B0BVQJ5R2H/ref=sr_1_13?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-13",
  
 },
 {
    "id":"14",
    "title":"HP 15s, 11th Gen ",
    "price": "38,490",
 
    "description": "HP 15s, 11th Gen Intel Core i3 8GB RAM/1TB HDD+256 GB SSD 15.6-inches/39.6 cm FHD Laptop/Windows 11/Intel UHD Graphics/Dual Speakers/Alexa/MSO/Fast Charge/1.75 Kg, 15s-du3614TU",
    "brand":"HP",
    "rating": "3.4 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/810Y-PUrbyL._SL1500_.jpg",
    "url": "https://www.amazon.in/HP-15-6-inches-Graphics-Speakers-15s-du3614TU/dp/B0B6F6PM6C/ref=sr_1_14?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-14",

  "Price_url": "https://www.amazon.in/HP-15-6-inches-Graphics-Speakers-15s-du3614TU/dp/B0B6F6PM6C/ref=sr_1_14?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-14",
  
 },
 {
    "id":"15",
    "title":"Lenovo ThinkBook 15 G3 ",
    "price": "33,990",
    "description": "Lenovo ThinkBook 15 G3 Ryzen 3 15.6\" FHD Thin and Light Laptop (8GB RAM/512GB SSD/Windows 11 Home/Fingerprint Reader/Mineral Grey/1.7 kg), 21A4A08WIH",
    "brand":"Lenovo",
    "rating": "4.2 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/51cvi7BDzxL._SL1024_.jpg",
  "url": "https://www.amazon.in/Lenovo-ThinkBook-Windows-Fingerprint-21A4A08WIH/dp/B0BW92J1KM/ref=sr_1_15?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-15",
  
  "Price_url": "https://www.amazon.in/Lenovo-ThinkBook-Windows-Fingerprint-21A4A08WIH/dp/B0BW92J1KM/ref=sr_1_15?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-15",
  
 },
 {
    "id":"15",
    "title":"Lenovo E41-55",
    "price": "19,999",
  
    "description": "Lenovo E41-55 Laptop ( AMD Athlon Pro 3045B/ 4GB RAM/ 1TB HDD/ Windows 11 Home / AMD Radeon Graphics/ 14 Inches/ 1 Year Warranty) Black",
   "brand":"Lenovo",
    "rating": "3.2 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/71PbpgP2-ZL._SL1500_.jpg",
    "url": "https://www.amazon.in/Lenovo-E41-55-Windows-Graphics-Warranty/dp/B08KRZPGL3/ref=sr_1_16?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-16",
  
  "Price_url": "https://www.amazon.in/Lenovo-E41-55-Windows-Graphics-Warranty/dp/B08KRZPGL3/ref=sr_1_16?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-16",
  
 },
 {
    "id":"16",
    "title":"Xiaomi NotebookPro",
    "price": "56,390",
  "description": "Xiaomi NotebookPro QHD+ IPS AntiGlare Display Intel Core i5-11300H 11th Gen 14 inch(35.56 cm) Thin & Light Laptop(8GB/512GB SSD/Iris Xe Graphics/Windows 11/MS Office 21/Backlight KB/FP Sensor/1.4 Kg)",
  "brand":"Xiaomi",
  "rating": "4.3 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/71iiXU7HHkL._SL1500_.jpg",
  "url": "https://www.amazon.in/Notebook-Display-i5-11300H-Graphics-Fingerprint/dp/B098XM2SJ4/ref=sr_1_17?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-17",
  
  "Price_url": "https://www.amazon.in/Notebook-Display-i5-11300H-Graphics-Fingerprint/dp/B098XM2SJ4/ref=sr_1_17?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-17",
  
 },
 {
    "id":"17",
    "title":"ASUS ROG Strix G17",
    "price": "85,990",
  "description": "ASUS ROG Strix G17, 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7 4800H, RTX 3050 Ti 4GB Graphics, Gaming Laptop (16GB/1TB SSD/Windows 11//Gray/2.4 kg), G713IE-HX040W",
  "brand":"ASUS",
  "rating": "4.5 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/61bwqXfWiaL._SL1500_.jpg",
  "url": "https://www.amazon.in/ASUS-17-3-inch-RTX-3050-Ti-Graphics-G713IE-HX040W/dp/B0B3DQ36P7/ref=sr_1_18?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-18",
  
  "Price_url": "https://www.amazon.in/ASUS-17-3-inch-RTX-3050-Ti-Graphics-G713IE-HX040W/dp/B0B3DQ36P7/ref=sr_1_18?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-18",
  
 },
 {
    "id":"18",
    "title":"ASUS Vivobook 16X (2022)",
    "price": "47,990",
  "description": "ASUS Vivobook 16X (2022), 16-inch (40.64 cms) WUXGA, AMD Ryzen 5 5600H, Thin and Light Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Quiet Blue/1.8 kg), M1603QA-MB502WS",
  "brand":"ASUS",
  "rating": "4.2 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/715NX9VL1sL._SL1500_.jpg",
  "url": "https://www.amazon.in/ASUS-Vivobook-Integrated-Graphics-M1603QA-MB502WS/dp/B09ZV5CDWD/ref=sr_1_19?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-19",
  
  "Price_url": "https://www.amazon.in/ASUS-Vivobook-Integrated-Graphics-M1603QA-MB502WS/dp/B09ZV5CDWD/ref=sr_1_19?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-19",
  
 },
 {
    "id":"19",
    "title":"Lenovo IdeaPad Slim 3",
    "price": "50,990",
  "description": "Lenovo IdeaPad Slim 3 Intel Core i5 11th Gen 15.6 inches (39.62cm) FHD Thin & Light Business Laptop (8GB/512GB SSD/Windows 11/MS Office/Backlit Keyboard/Arctic Grey/1.65Kg), 82H802XTIN",
  "brad":"Lenovo",
  "rating": "4.1 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/61q6x-ll5FL._SL1000_.jpg",
  "url": "https://www.amazon.in/Lenovo-IdeaPad-Business-Keyboard-82H802KVIN/dp/B0B82FX9JW/ref=sr_1_20?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-20",
  
  "Price_url": "https://www.amazon.in/Lenovo-IdeaPad-Business-Keyboard-82H802KVIN/dp/B0B82FX9JW/ref=sr_1_20?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-20",
  
 },
 {
    "id":"20",
    "title":"Dell Inspiron 3511 Laptop",
    "price": "40,990",
  "description": "Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB DDR4 & 512GB SSD, Windows 11 + MSO'21, 15.6\" (39.62Cms) FHD WVA AG, Carbon Black (D560801WIN9B, 1.8Kgs)",
  "brand":"Dell",
  "rating": "3.6 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/6192pE7H2FL._SL1080_.jpg",
  "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfYnRmOjIwMTMxNDgwODU5ODk4OjowOjo&url=%2FDell-Inspiron-Windows-i3-1115G4-39-62Cms%2Fdp%2FB0B468SB8G%2Fref%3Dsr_1_21_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-21-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
  
  "Price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfYnRmOjIwMTMxNDgwODU5ODk4OjowOjo&url=%2FDell-Inspiron-Windows-i3-1115G4-39-62Cms%2Fdp%2FB0B468SB8G%2Fref%3Dsr_1_21_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-21-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
  
 },
 {
    "id":"21",
    
    "title":"Apple 2023 MacBook Pro",
    "price": "2,69,900",
  "description": "Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 33.74 cm (16.2-inch), 16GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Space Grey",
  "brand":"Apple",
  "rating": "5.0 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/916BSI-wrhL._SL1500_.jpg",
  "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfYnRmOjIwMTE0MTk4MjU0Nzk4OjowOjo&url=%2FApple-MacBook-Laptop-12%25E2%2580%2591core-19%25E2%2580%2591core%2Fdp%2FB0BSHJSMTW%2Fref%3Dsr_1_22_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
  
  "Price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfYnRmOjIwMTE0MTk4MjU0Nzk4OjowOjo&url=%2FApple-MacBook-Laptop-12%25E2%2580%2591core-19%25E2%2580%2591core%2Fdp%2FB0BSHJSMTW%2Fref%3Dsr_1_22_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
  
 }
]
