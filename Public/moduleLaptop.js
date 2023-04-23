var app=angular.module('myMod2',[]);
app.controller('myControllerLaptops1',function($scope)
{
    $scope.imageAddress="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    $scope.price="";
    $scope.brand="";
    $scope.rating="";
    $scope.item1=function()
    {
      let i = $scope.selectedOption1;
      let image = $scope.Laptops1[i].image;
      let price = $scope.Laptops1[i].price;
      let brand = $scope.Laptops1[i].brand;
      let rating = $scope.Laptops1[i].rating;

      $scope.imageAddress = image;
      $scope.price = price;
      $scope.brand = brand;
      $scope.rating = rating;

    }

    
    $scope.Laptops1= [
   
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
  "price": "40,990",
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
    "id":"16",
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
    "id":"17",
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
    "id":"18",
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
    "id":"19",
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
    "id":"20",
    "title":"Lenovo IdeaPad Slim 3",
    "price": "50,990",
  "description": "Lenovo IdeaPad Slim 3 Intel Core i5 11th Gen 15.6 inches (39.62cm) FHD Thin & Light Business Laptop (8GB/512GB SSD/Windows 11/MS Office/Backlit Keyboard/Arctic Grey/1.65Kg), 82H802XTIN",
  "brnad":"Lenovo",
  "rating": "4.1 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/61q6x-ll5FL._SL1000_.jpg",
  "url": "https://www.amazon.in/Lenovo-IdeaPad-Business-Keyboard-82H802KVIN/dp/B0B82FX9JW/ref=sr_1_20?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-20",
  
  "Price_url": "https://www.amazon.in/Lenovo-IdeaPad-Business-Keyboard-82H802KVIN/dp/B0B82FX9JW/ref=sr_1_20?crid=39TZX51Y1NVB5&keywords=laptops&qid=1681533838&sprefix=laptop%2Caps%2C287&sr=8-20",
  
 },
 {
    "id":"21",
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
    "id":"22",
    
    "title":"Apple 2023 MacBook Pro",
    "price": "2,69,900",
  "description": "Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 33.74 cm (16.2-inch), 16GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Space Grey",
  "brand":"Apple",
  "rating": "5.0 out of 5 stars",
  "image":"https://m.media-amazon.com/images/I/916BSI-wrhL._SL1500_.jpg",
  "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfYnRmOjIwMTE0MTk4MjU0Nzk4OjowOjo&url=%2FApple-MacBook-Laptop-12%25E2%2580%2591core-19%25E2%2580%2591core%2Fdp%2FB0BSHJSMTW%2Fref%3Dsr_1_22_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
  
  "Price_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo4OTg5NDk0Mjc0NDMyNDE3OjE2ODE1MzM4Mzg6c3BfYnRmOjIwMTE0MTk4MjU0Nzk4OjowOjo&url=%2FApple-MacBook-Laptop-12%25E2%2580%2591core-19%25E2%2580%2591core%2Fdp%2FB0BSHJSMTW%2Fref%3Dsr_1_22_sspa%3Fcrid%3D39TZX51Y1NVB5%26keywords%3Dlaptops%26qid%3D1681533838%26sprefix%3Dlaptop%252Caps%252C287%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
  
      },
   ];
});
app.controller('myControllerLaptops2',function($scope){
    $scope.imageAddress="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    $scope.price="";
    $scope.brand="";
    $scope.rating="";
    $scope.item2=function()
    {
      let i = $scope.selectedOption2;
      let image = $scope.Laptops2[i].image;
      let price = $scope.Laptops2[i].price;
      let brand = $scope.Laptops2[i].brand;
      let rating = $scope.Laptops2[i].rating;

      $scope.imageAddress = image;
      $scope.price = price;
      $scope.brand = brand;
      $scope.rating = rating;

    }

    $scope.Laptops2=[
     
       {
         'id':'1',
    "title": "HP 14s",
    "price": "41,900",
    "description": "11th Gen Intel Core i3-1115G4, 8GB RAM/256GB SSD 14-inch(35.6 cm) Micro-Edge, Anti-Glare, FHD Laptop/Alexa Built-in/Win 11/Intel UHD Graphics/Dual Speakers/MSO 2021/1.41 Kg, 14s-dy2507TU",
    "brand": "HP",
    "rating": "4.4 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/81zoyHn5uJL._SL1500_.jpg",
    "url": "https://www.flipkart.com/hp-intel-core-i3-11th-gen-8-gb-256-gb-ssd-windows-10-home-14s-dy2501tu-thin-light-laptop/p/itmdce0f13dd3a4e",
    
   
   },
   {
    "id":"2",
    "title": "HP Chromebook 11a",
    "price": "18,100",
    "description":"MediaTek MT8183 Processor 11.6 inch(29.5 cm) Thin and Light Touchscreen Laptop (4 GB RAM/64 GB eMMC/Chrome OS/Fast Charge/Google Assistant/Indigo Blue/1.07Kg), na0002MU, 1.07Kg",
    "brand":"HP",
    "image":"https://m.media-amazon.com/images/I/61d1xNY54HL._SL1200_.jpg",
    "rating": "3.8 out of 5 stars",
    "url": "https://www.flipkart.com/hp-14s-intel-core-i3-11th-gen-8-gb-256-gb-ssd-windows-11-home-dy2507tu-thin-light-laptop/p/itm183e95bd1f23b?pid=COMGG63H9BFFUYVY&lid=LSTCOMGG63H9BFFUYVYFHH552&marketplace=FLIPKART&cmpid=content_computer_13986015809_g_8965229628_gmc_pla&tgi=sem,1,G,11214002,g,search,,549168163382,,,,c,,,,,,,&ef_id=Cj0KCQjwlumhBhClARIsABO6p-x7VJeFgSlLBq2lSrEuE9YyPbIJEcYcBSrUJ6yjqpb5u6DbBc51qwAaAu8bEALw_wcB:G:s&s_kwcid=AL!739!3!549168163382!!!g!1933639770216!&semcmpid=sem_7847244212_electronics_PLA_Bump_Laptop_goog&gclid=Cj0KCQjwlumhBhClARIsABO6p-x7VJeFgSlLBq2lSrEuE9YyPbIJEcYcBSrUJ6yjqpb5u6DbBc51qwAaAu8bEALw_wcB",
   
    
   },
   {
    "id":"3",
    "title": "Honor MagicBook 14",
    "price": "39,490",
    "description":" AMD Ryzen 5 5500U 14-inch (35.56 cm) FHD IPS Anti-Glare Thin and Light Laptop (16GB/512GB PCIe SSD/Windows 11/Fingerprint Login/Metal Body/Backlit KB/1.38Kg), Gray, NobelM-WFQ9AHNE",
    "brand":"Honor",
    "rating": "4.6 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/71tHNTGasKL._SL1500_.jpg",
    "url": "https://www.flipkart.com/honor-magicbook-15-ryzen-5-quad-core-3500u-8-gb-256-gb-ssd-windows-10-home-boh-waq9hnr-thin-light-laptop/p/itm5cc079c6abd4d"
   },
   {
    "id":"4",
    "title": "HP 245 G8 3S7L2PA Notebook ",
    "price": "31,999",
    "description":"Business Laptop 14 Inch HD (AMD Ryzen 3-3250/4 GB RAM / 1TB HDD/Windows 11 Home) 1 Year Onsite Brand Warranty",
    "brand":"HP",
    "rating": "3.5 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/71mEmEXG2SL._AC_SL1500_.jpg",
    "url": "https://www.flipkart.com/hp-g8-ryzen-3-dual-core-3250u-8-gb-1-tb-hdd-windows-11-home-245-laptop/p/itm2766707534f54?pid=COMGGVF8XSZGNQPV&lid=LSTCOMGGVF8XSZGNQPVN1GLEH&marketplace=FLIPKART&q=hp+245+g8+laptop&store=6bo%2Fb5g&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_7_na_na_na&fm=organic&iid=041782f0-5c4c-47e7-bc10-7c1b4268074e.COMGGVF8XSZGNQPV.SEARCH&ppt=hp&ppn=homepage&ssid=cy1ipc4tjk0000001681551882123&qH=d38cb8d1d43815c7",
    
    
   },
   {
    "id":"5",
    "title": "Lenovo IdeaPad D330 ",
    "price":"22,999",
    "description":"Intel Celeron N4020 10.1\" (25cm) HD IPS Detachable 2-in-1 Laptop (4GB/128GB eMMC/Windows 10/1 Yr Warranty/Mineral Grey/1.1Kg), 82H0001YIN",
    "brand":"Lenovo",
    "rating": "4-2 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/51gkDWHPvQL._SL1067_.jpg",
    "url": "https://www.flipkart.com/lenovo-ideapad-d330-keyboard-pen-4-gb-ram-128-rom-10-1-inch-wi-fi-only-tablet-mineral-grey/p/itm909afde3c1489?pid=TABFZ8QWGFTZHQ3S&lid=LSTTABFZ8QWGFTZHQ3SVDVTDE&marketplace=FLIPKART&q=lenovo+ideapad+d330&store=tyy%2Fhry&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_19_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_19_na_na_ps&fm=organic&iid=157364ae-7229-4f7c-8e49-6ca0d9b0f332.TABFZ8QWGFTZHQ3S.SEARCH&ppt=pp&ppn=pp&ssid=nv7d2awhj40000001681551930079&qH=31dd161e89c3c544",
   
   
    
   },
   {
    "id":"6",
    "title": "ASUS TUF Gaming A15",
    "price": "57,990",
    "description":"15.6-inch (39.62 cms) FHD 144Hz, AMD Ryzen 5 4600H, 4GB NVIDIA GeForce GTX 1650, Gaming Laptop (8GB/512GB SSD/Windows 11/Black/2.3 Kg), FA506IHRZ-HN111W",
    "brand":"ASUS",
    "rating": "Be the first to Review this product",
    "image":"https://m.media-amazon.com/images/I/91zVSkGGZbS._SL1500_.jpg",
    "url": "https://www.flipkart.com/asus-tuf-gaming-a15-ryzen-5-hexa-core-4600h-8-gb-1-tb-ssd-windows-11-home-4-gb-graphics-nvidia-geforce-gtx-1650-144-hz-fa506ihrz-hn112w-laptop/p/itmc2aaa85eb9f44?pid=COMGJ3QYVY7WZHUM&lid=LSTCOMGJ3QYVY7WZHUMUQELZD&marketplace=FLIPKART&q=asus+tuf+gaming+a15+ryzen+7&store=6bo%2Fb5g&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_19_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_19_na_na_na&fm=organic&iid=ca7d4e40-aeab-479c-a39d-9d924ae7b550.COMGJ3QYVY7WZHUM.SEARCH&ppt=pp&ppn=pp&ssid=uh6ajf95m80000001681551983205&qH=87e46fc26fbd91b3",
   
   
    
   },
   {
      "id":"7",
      "title": "Lenovo IdeaPad Slim 3 ",
    "price": "36,990",
    "description":"Intel Core i3-1115G4 11th Gen 15.6\" (39.62cm) FHD Laptop (8GB/256GB SSD/Win 11/Office 2021/2 Year Warranty/3 Month Game Pass/Platinum Grey/1.7Kg), 81X800LCIN",
    "brand":"Lenovo",
    "rating": "5 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg",
      "url": "https://www.flipkart.com/lenovo-ideapad-3-intel-core-i3-10th-gen-4-gb-256-gb-ssd-windows-10-home-81wb010xin-laptop/p/itm432528dd6618b?pid=COMG7EJFQHPFHG8Q&lid=LSTCOMG7EJFQHPFHG8QUC0RDK&marketplace=FLIPKART&q=lenovo+ideapad+slim+3&store=6bo%2Fb5g&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_21_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_21_na_na_ps&fm=organic&iid=0c18cdb2-6180-4e9b-b1d6-5cec292fe87b.COMG7EJFQHPFHG8Q.SEARCH&ppt=pp&ppn=pp&ssid=oabx1u931s0000001681552082402&qH=2ba67d9bfd564f77",
     
  
   },
   {
      "id":"8",
      "title":"Lenovo IdeaPad 3",
      "price": "43,890",
      "description": "Lenovo IdeaPad 3 11th Gen Intel Core i3 15.6\" FHD Thin & Light Laptop(8GB/512GB SSD/Windows 11/Office 2021/2Yr Warranty/3months Xbox Game Pass/Platinum Grey/1.7Kg), 81X800N2IN",
     "brand":"Lenovo",
     "rating": "4.3 out of 5 stars",
     "image":"https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg",
      "url": "https://www.flipkart.com/lenovo-ideapad-3-ryzen-5-hexa-core-5500u-8-gb-512-gb-ssd-windows-11-home-15alc6-thin-light-laptop/p/itm790def6ef6b6f?pid=COMG9VHHF6HVJPP9&lid=LSTCOMG9VHHF6HVJPP9U213LU&marketplace=FLIPKART&q=lenovo+ideapad+3+ryzen+5&store=6bo%2Fb5g&spotlightTagId=FkPickId_6bo%2Fb5g&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_16_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_16_na_na_ps&fm=search-autosuggest&iid=5a184af0-e7c3-49f3-b4a6-ac34f392b7b7.COMG9VHHF6HVJPP9.SEARCH&ppt=sp&ppn=sp&ssid=gye5f3gc000000001681552128597&qH=d760238400b12ad4",
    
    
    
   },
   {
      'id':"9",
      "title":"Dell Inspiron 3511",
      "price": "43,500",
      "description": "Dell Inspiron 3511 Laptop, Intel Core i5-1135G7, 8GB, 512GB SSD, 15.6\" (39.62Cms) FHD WVA AG, Windows 11 + MSO'21, Carbon Black (1.8Kgs, D560745WIN9B)",
      "brand":"Dell",
      "rating": "4.3 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/41Fk0R9URsL._SX300_SY300_QL70_FMwebp_.jpg",
      "url": "https://www.flipkart.com/dell-inspiron-core-i3-11th-gen-8-gb-1-tb-hdd-256-gb-ssd-windows-11-home-3511-inspiron-3000-thin-light-laptop/p/itmb93d2a1e224d0?pid=COMGAD2B4QMZTWKB&lid=LSTCOMGAD2B4QMZTWKBAQFCOV&marketplace=FLIPKART&q=dell%20inspiron%203511&store=6bo%2Fb5g&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_18_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_18_na_na_ps&fm=search-autosuggest&iid=6ce90dbd-4e37-48b5-8f83-b2f0b1555184.COMGAD2B4QMZTWKB.SEARCH&ppt=pp&ppn=pp&ssid=ywgqujdrgw0000001681552196079&qH=cfb592e7b1e83f0c",
    
    
   },
   {
      "id":"10",
      "title":"HP 14s",
      "price": "23,900",
      "description": "HP 14s, Intel Celeron N4500, 8GB RAM/256GB SSD 14-inches/35.6 cm HD, Micro-Edge Display/Alexa Built-in/Windows 11/Intel UHD Graphics/Dual Speakers/MSO 2021/1.46 Kg, 14s-dq3037tu",
      "brand":"HP",
      "rating": "3.8 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/91d75JiCH9L._SL1500_.jpg",
      "url": "https://www.flipkart.com/hp-14s-intel-celeron-dual-core-8-gb-256-gb-ssd-windows-11-home-14s-dq3032tu-thin-light-laptop/p/itm521c61745e39a?pid=COMGAX8ECYVNE5NH&lid=LSTCOMGAX8ECYVNE5NHSASZQK&marketplace=FLIPKART&q=hp+14s+intel+celeron+n4500&store=6bo%2Fb5g&spotlightTagId=FkPickId_6bo%2Fb5g&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_40_na_pm_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_40_na_pm_ps&fm=search-autosuggest&iid=212f9a20-5a4c-4595-9595-f53ab901c3ac.COMGAX8ECYVNE5NH.SEARCH&ppt=sp&ppn=sp&ssid=ybfsk5x9og0000001681552334793&qH=b7b7e5d01c7e7512",
   
    
   },
   {
      "id":"11",
      "title":"Dell Vostro",
      "price": "45,390",
   "description": "Dell Vostro 3420 Laptop,12th Gen Intel Core i3-1215U, 8GB & 512GB SSD, 14.0\" (35.56Cms) FHD WVA AG 250 nits, Win11+MSO'21, Carbon Black(D552325WIN9BE, 1.48 KGs)",
  "brand":"Dell",
   "rating": "4.1 out of 5 stars",
   "image":"https://m.media-amazon.com/images/I/51bqpP0jb5L._SL1080_.jpg",
    "url": "https://www.flipkart.com/dell-core-i3-12th-gen-8-gb-512-gb-ssd-windows-11-home-vostro-3420-thin-light-laptop/p/itmfb543adbe5908?pid=COMGMGSJBZH8DYHS&lid=LSTCOMGMGSJBZH8DYHSE68YTK&marketplace=FLIPKART&q=dell+vostro+3420+laptop&store=6bo%2Fb5g&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_15_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_15_na_na_ps&fm=Search&iid=486c0931-4a3b-4d85-8abe-8e7b4793b892.COMGMGSJBZH8DYHS.SEARCH&ppt=sp&ppn=sp&ssid=x6x13fekzk0000001681552414070&qH=3298676e2f2fe167",
   
   
    
   },
   {
      "id":"12",
      "title":"Xiaomi Notebook",
      "price": "43,990",
       
      "description": "Xiaomi NotebookPro QHD+ IPS AntiGlare Display Intel Core i5-11300H 11th Gen 14 inch(35.56 cm) Thin & Light Laptop(8GB/512GB SSD/Iris Xe Graphics/Windows 11/MS Office 21/Backlight KB/FP Sensor/1.4 Kg)",
      "brand":"Xiaomi",
      "rating": "4.3 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71iiXU7HHkL._SL1500_.jpg",
      "url": "https://www.flipkart.com/mi-notebook-14-core-i5-10th-gen-8-gb-512-gb-ssd-windows-10-home-jyu4243in-thin-light-laptop/p/itm970105b392f49",
    
    
   },
   {
      "id":"13",
      "title":"HP 255 G98",
      "price": "25,499",
    "description": "HP 255 G8 Laptop with AMD Athlon Silver 3050U APU/ 8GB Ram/ 256GB SSD/DOS/AMD Radeon Vega 8 Mobile Graphics/39.6 cm HD (1366 x 768), SVA, Anti-Glare WLED/Black/1 Year Onsite Warranty",
    "brand":"HP",
    "rating": "4 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/41B+OthIGLL.jpg",
      "url":" https://www.flipkart.com/hp-athlon-dual-core-3050u-4-gb-256-gb-ssd-dos-255-g8-notebook/p/itm059928ca47cfe?pid=COMGJ5TZFKZTRBSX&lid=LSTCOMGJ5TZFKZTRBSX69MBAD&marketplace=FLIPKART&q=HP+255+G8+Laptop+with+AMD+Athlon+Silver+3050U+APU&store=6bo%2Fb5g&spotlightTagId=FkPickId_6bo%2Fb5g&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=aa1daa9b-e4d8-480e-93cc-8de7af1103a9.COMGJ5TZFKZTRBSX.SEARCH&ppt=sp&ppn=sp&ssid=ph4lfccteo0000001681552543609&qH=243f2a7548e7f461",
    
    
    
   },
   {
      "id":"14",
      "title":"HP 15s, 11th Gen ",
      "price": "42,600",
   
      "description": "HP 15s, 11th Gen Intel Core i3 8GB RAM/1TB HDD+256 GB SSD 15.6-inches/39.6 cm FHD Laptop/Windows 11/Intel UHD Graphics/Dual Speakers/Alexa/MSO/Fast Charge/1.75 Kg, 15s-du3614TU",
      "brand":"HP",
      "rating": "4.3 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/810Y-PUrbyL._SL1500_.jpg",
      "url": "https://www.flipkart.com/hp-15s-core-i3-11th-gen-8-gb-512-gb-ssd-windows-10-home-15s-fq2072tu-thin-light-laptop/p/itmc1ba70c0282aa?pid=COMGYCG8P7MCYQWH&lid=LSTCOMGYCG8P7MCYQWHD3A35V&marketplace=FLIPKART&q=HP+15s%2C+11th+Gen&store=6bo%2Fb5g&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=957a8ca5-3fcc-42c6-8244-a08dc74c3759.COMGYCG8P7MCYQWH.SEARCH&ppt=pp&ppn=pp&ssid=ivwspt8h5s0000001681552603188&qH=2373ecd3a32c3600",
  
  
    
   },
   {
      "id":"15",
      "title":"Lenovo ThinkBook 15 G3 ",
      "price": "45,990",
      "description": "Lenovo ThinkBook 15 G3 Ryzen 3 15.6\" FHD Thin and Light Laptop (8GB RAM/512GB SSD/Windows 11 Home/Fingerprint Reader/Mineral Grey/1.7 kg), 21A4A08WIH",
      "brand":"Lenovo",
      "rating": "Be the first to rate this product",
      "image":"https://m.media-amazon.com/images/I/51cvi7BDzxL._SL1024_.jpg",
    "url": "https://www.flipkart.com/lenovo-ryzen-5-hexa-core-5500u-8-gb-512-gb-ssd-windows-11-home-thinkbook-15-g3-thin-light-laptop/p/itm4e8b7b1c1d272?pid=COMGHEGH5GTHFZRU&lid=LSTCOMGHEGH5GTHFZRUPWHCIS&marketplace=FLIPKART&q=Lenovo+ThinkBook+15+G3+&store=6bo%2Fb5g&spotlightTagId=TrendingId_6bo%2Fb5g&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=97fcbd53-01ee-4b2d-971d-68f960dfa494.COMGHEGH5GTHFZRU.SEARCH&ppt=sp&ppn=sp&ssid=r05wc41ohs0000001681552645373&qH=eb756b5549b75736",
    
    
    
   },
   {
      "id":"16",
      "title":"Lenovo E41-55",
      "price": "23,999",
    
      "description": "Lenovo E41-55 Laptop ( AMD Athlon Pro 3045B/ 4GB RAM/ 1TB HDD/ Windows 11 Home / AMD Radeon Graphics/ 14 Inches/ 1 Year Warranty) Black",
     "brand":"Lenovo",
      "rating": "3.6 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71PbpgP2-ZL._SL1500_.jpg",
      "url": "https://www.flipkart.com/lenovo-athlon-dual-core-4-gb-256-gb-ssd-dos-e41-55-45-2-laptop/p/itm3a9379e2f6ee9?pid=COMGHYAS6GRKGANP&lid=LSTCOMGHYAS6GRKGANPUMNLJX&marketplace=FLIPKART&q=Lenovo+E41-55&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=4a73939e-d092-450f-a53b-bd6135540495.COMGHYAS6GRKGANP.SEARCH&ppt=pp&ppn=pp&ssid=uwaod6xdds0000001681552723487&qH=96930fdb079a7748",
    
   
    
   },
   {
      "id":"17",
      "title":"Redmi Book Pro Core",
      "price": "37,990",
    "description": "Xiaomi NotebookPro QHD+ IPS AntiGlare Display Intel Core i5-11300H 11th Gen 14 inch(35.56 cm) Thin & Light Laptop(8GB/512GB SSD/Iris Xe Graphics/Windows 11/MS Office 21/Backlight KB/FP Sensor/1.4 Kg)",
    "brand":"Xiaomi",
    "rating": "4.1 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/71iiXU7HHkL._SL1500_.jpg",
    "url": "https://www.flipkart.com/redmibook-pro-core-i5-11th-gen-8-gb-512-gb-ssd-windows-11-home-thin-light-laptop/p/itm436427e982703?pid=COMG4Z359A4Z3MFG&lid=LSTCOMG4Z359A4Z3MFGOJQLGB&marketplace=FLIPKART&q=xiaomi+notebook+pro+laptop&store=6bo&spotlightTagId=BestsellerId_6bo&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_2_18_sc_na_ps&otracker1=AS_Query_OrganicAutoSuggest_2_18_sc_na_ps&fm=search-autosuggest&iid=5662e966-3b35-43bc-8013-ce6169730ffb.COMG4Z359A4Z3MFG.SEARCH&ppt=sp&ppn=sp&ssid=ko1ce7kyi80000001681552767343&qH=a82ad321fd77a338",
    
   
    
   },
   {
      "id":"18",
      "title":"ASUS ROG Strix G17",
      "price": "97,900",
    "description": "ASUS ROG Strix G17, 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7 4800H, RTX 3050 Ti 4GB Graphics, Gaming Laptop (16GB/1TB SSD/Windows 11//Gray/2.4 kg), G713IE-HX040W",
    "brand":"ASUS",
    "rating": "4.5 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/61bwqXfWiaL._SL1500_.jpg",
    "url": "https://www.flipkart.com/asus-rog-strix-g15-2022-ryzen-7-octa-core-amd-r7-6800h-16-gb-1-tb-ssd-windows-11-home-4-gb-graphics-nvidia-geforce-rtx-3050-144-hz-g513rc-hn083w-gaming-laptop/p/itmaf9dde96ae73d?pid=COMGCYCEH9RMGGZ5&lid=LSTCOMGCYCEH9RMGGZ5FIZ8ZJ&marketplace=FLIPKART&q=asus+rog+strix+g17+ryzen+7+6800h&store=6bo%2Fb5g&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_18_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_18_na_na_ps&fm=search-autosuggest&iid=0f6ce369-fcd0-475b-bf53-962ce1da6492.COMGCYCEH9RMGGZ5.SEARCH&ppt=pp&ppn=pp&ssid=jik1prfgw00000001681552981368&qH=35baff564c3eb51c",
    
    
   },
   {
      "id":"19",
      "title":"ASUS Vivobook 16X (2022)",
      "price": "42,990",
    "description": "ASUS Vivobook 16X (2022), 16-inch (40.64 cms) WUXGA, AMD Ryzen 5 5600H, Thin and Light Laptop (8GB/512GB SSD/Integrated Graphics/Windows 11/Office 2021/Quiet Blue/1.8 kg), M1603QA-MB502WS",
    "brand":"ASUS",
    "rating": "4.4 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/715NX9VL1sL._SL1500_.jpg",
    "url": "https://www.flipkart.com/asus-vivobook-k15-oled-2022-core-i3-11th-gen-8-gb-256-gb-ssd-windows-11-home-k513ea-l302ws-thin-light-laptop/p/itmb768764e55ddd?pid=COMG87FFTTGFCKBS&lid=LSTCOMG87FFTTGFCKBS21FXQR&marketplace=FLIPKART&q=ASUS+Vivobook+16X+%282022%29&store=6bo%2Fb5g&srno=s_1_1&otracker=search&otracker1=search&fm=search-autosuggest&iid=37688b10-9827-4001-becf-b10d73fc6852.COMG87FFTTGFCKBS.SEARCH&ppt=pp&ppn=pp&ssid=tagx7dgq6o0000001681553030278&qH=8842e3166fcaf16f",
    
  
   },
   {
      "id":"20",
      "title":"Lenovo IdeaPad Slim 3",
      "price": "58,900",
    "description": "Lenovo IdeaPad Slim 3 Intel Core i5 11th Gen 15.6 inches (39.62cm) FHD Thin & Light Business Laptop (8GB/512GB SSD/Windows 11/MS Office/Backlit Keyboard/Arctic Grey/1.65Kg), 82H802XTIN",
    "brand":"Lenovo",
    "rating": "3.3 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/61q6x-ll5FL._SL1000_.jpg",
    "url": "https://www.flipkart.com/lenovo-ideapad-slim-3i-2021-core-i5-11th-gen-8-gb-512-gb-ssd-windows-10-home-15itl05-thin-light-laptop/p/itm157cda886232d?pid=COMG85NJRMG2XMRP&lid=LSTCOMG85NJRMG2XMRPI4VU4Y&marketplace=FLIPKART&q=lenovo+ideapad+slim+3+i5&store=6bo%2Fb5g&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_21_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_21_na_na_ps&fm=search-autosuggest&iid=3115babd-1b98-49bd-b733-862ca6834de1.COMG85NJRMG2XMRP.SEARCH&ppt=pp&ppn=pp&ssid=p970w2t6q80000001681553070988&qH=22a97270ca17e087",
    
    
    
   },
   {
      "id":"21",
      "title":"Dell Inspiron 3511 Laptop",
      "price": "54,806",
    "description": "Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB DDR4 & 512GB SSD, Windows 11 + MSO'21, 15.6\" (39.62Cms) FHD WVA AG, Carbon Black (D560801WIN9B, 1.8Kgs)",
    "brand":"Dell",
    "rating": "4.2 out of 5 stars",
    "image":"https://m.media-amazon.com/images/I/6192pE7H2FL._SL1080_.jpg",
    "url": "https://www.flipkart.com/dell-inspiron-core-i5-11th-gen-16-gb-512-gb-ssd-windows-11-home-3511-thin-light-laptop/p/itme54990a6ded82?pid=COMG9QVUUFXRGJGZ&lid=LSTCOMG9QVUUFXRGJGZDYNC9G&marketplace=FLIPKART&q=dell+inspiron+3511+laptop+i5+11+gen&store=6bo%2Fb5g&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_25_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_25_na_na_ps&fm=search-autosuggest&iid=53016ba0-4e7b-4952-84cd-02e4d160aa4e.COMG9QVUUFXRGJGZ.SEARCH&ppt=pp&ppn=pp&ssid=xzhuut79000000001681553115644&qH=ad23b1394e36131b",
    
  
    
   },
   {
      "id":"22",
      "title":"Apple 2023 MacBook Pro",
      "price": "2,39,990",
    "description": "Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 33.74 cm (16.2-inch), 16GB Unified Memory, 1TB SSD Storage. Works with iPhone/iPad; Space Grey",
    "brand":"Apple",
    "rating": "Be the first to rate this product",
    "image":"https://m.media-amazon.com/images/I/916BSI-wrhL._SL1500_.jpg",
    "url": "https://www.flipkart.com/apple-2023-macbook-pro-m2-16-gb-1-tb-ssd-macos-ventura-mphf3hn-a/p/itmc160921b45f9f?pid=COMGHZGH32RFFMVZ&lid=LSTCOMGHZGH32RFFMVZJS5VXR&marketplace=FLIPKART&q=Apple+2023+MacBook+Pro&store=6bo%2Fb5g&srno=s_1_5&otracker=search&otracker1=search&fm=Search&iid=d3b3fb8d-1777-455e-a263-81df18c0d010.COMGHZGH32RFFMVZ.SEARCH&ppt=sp&ppn=sp&ssid=s0da4z3o0g0000001681553164137&qH=41fae2b580b8c405",
    
   
    
   },
];
});

