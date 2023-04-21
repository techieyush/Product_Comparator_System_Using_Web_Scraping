var app=angular.module('myMod1',[]);
app.controller("myNovels1Controller",function($scope,$window){
    $scope.imageAddress = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    $scope.prices = "";
    $scope.author = "";
    $scope.rating = "";
    $scope.item1 = function(){
        let i = $scope.selectedOption1;
        let image = $scope.Novels1[i].image;
        let prices = $scope.Novels1[i].prices;
        let author= $scope.Novels1[i].author;
        let rating = $scope.Novels1[i].rating;
        
        
        $scope.imageAddress = image;
        $scope.prices = prices;
        $scope.author = author;
        $scope.rating = rating;
    }
$scope.Novels1=[
        {
            "id":"0",
            "title": "---Select Anyone---",
            "prices": "",
            "description": "",
            "author": "",
            "rating": "",
            "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
            "url": "",
            "Price_url":""
        },
     {
        "id":"1",
        "title":"A Walk in my Shoes",
        "prices": "233",
      "description": "A Walk in my Shoes : A #1 Fiction and romance bestseller novel. Your perfect valentine's day gift. Empower your love with this cute love story book",
        "author":"Ritesh Karnani",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/41pIYURtzWL._SX311_BO1,204,203,200_.jpg",
      "prices_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfYXRmOjIwMTAwNTIwNjM4MDk4OjowOjo&url=%2FWalk-Shoes-bestseller-valentines-love-story-book%2Fdp%2F9391142206%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfYXRmOjIwMTAwNTIwNjM4MDk4OjowOjo&url=%2FWalk-Shoes-bestseller-valentines-love-story-book%2Fdp%2F9391142206%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
     },
     {
        "id":"2",
        "title":"Everything I Never Told You",
        "prices": "135",
      "description": "Everything I Never Told You",
      "author":"Ajay K Pandey",
      "rating": "4.4 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/813eYwNgZ8L.jpg",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfYXRmOjIwMDc3NDMxODM1Njk4OjowOjo&url=%2FEverything-I-Never-Told-You%2Fdp%2F8194790859%2Fref%3Dsr_1_2_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      
      "prices_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfYXRmOjIwMDc3NDMxODM1Njk4OjowOjo&url=%2FEverything-I-Never-Told-You%2Fdp%2F8194790859%2Fref%3Dsr_1_2_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      
     },
     {
        "id":"3",
        "title":"The Girl in Room 105",
        "prices": "157",
      "description": "The Girl in Room 105",
      "author":"Chetan Bhagat",
      "rating": "4 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/41HO-aObUSL.jpg",
      "url": "https://www.amazon.in/Girl-Room-105-Chetan-Bhagat/dp/9356290962/ref=sr_1_3?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-3",
      
      "prices_url": "https://www.amazon.in/Girl-Room-105-Chetan-Bhagat/dp/9356290962/ref=sr_1_3?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-3",
     
     },
     {
        "id":"4",
        "title":"The Complete Novels of Sherlock Holmes",
        "prices": "160",
      "description": "The Complete Novels of Sherlock Holmes",
      "author":"Arthur Canon Doyle",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81NAo81PtRL.jpg",
      "url": "https://www.amazon.in/Complete-Novels-Sherlock-Holmes/dp/8175994312/ref=sr_1_4?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-4",
      
      "prices_url": "https://www.amazon.in/Complete-Novels-Sherlock-Holmes/dp/8175994312/ref=sr_1_4?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-4",
      
     },
     {
        "id":"5",
        "title":"The Power of Your Subconscious Mind",
        "prices": "115",
      "description":"The Power of Your Subconscious Mind",
      "author":"Joseph Murphy",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71sBtM3Yi5L.jpg",
      "url": "https://www.amazon.in/Power-Your-Subconscious-Mind/dp/8194790832/ref=sr_1_5?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-5",
      
      "prices_url": "https://www.amazon.in/Power-Your-Subconscious-Mind/dp/8194790832/ref=sr_1_5?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-5",
     
     },
     {
        "id":"6",
        "title":"One Day, Life Will Change",
        "prices": "125",
      "description": "One Day, Life Will Change: A story of love and inspiration to win life when it hits you hard . . .",
      "author":"Saranya Umakanthan",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71G2QY75OWL.jpg",

      "url": "https://www.amazon.in/One-Day-Life-Will-Change/dp/9389717841/ref=sr_1_6?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-6",
      
      "prices_url": "https://www.amazon.in/One-Day-Life-Will-Change/dp/9389717841/ref=sr_1_6?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-6",
      
     },
     {
        "id":"7",
        "title":"The Wife Upstairs",
        "prices": "324",
      "description": "The Wife Upstairs: An addictive new 2021 psychological crime thriller with a twist - a New York Times bestseller!",
      "url": "https://www.amazon.in/Wife-Upstairs-Rachel-Hawkins/dp/0008377510/ref=sr_1_7?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-7",
      "author":"Rachel Hawkins",
      "rating": "4.0 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81fjvCmxNWL.jpg",
      "prices_url": "https://www.amazon.in/Wife-Upstairs-Rachel-Hawkins/dp/0008377510/ref=sr_1_7?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-7",
     
     },
     {
        "id":"8",
        "title":"Pride & Prejudice",
        "prices": "129",
      "description": "Pride & Prejudice",
      "author":"Jane Austen",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/819HSIKiWdS.jpg",
      "url": "https://www.amazon.in/Pride-Prejudice-Jane-Austen/dp/8172344503/ref=sr_1_8?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-8",
      
      "prices_url": "https://www.amazon.in/Pride-Prejudice-Jane-Austen/dp/8172344503/ref=sr_1_8?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-8",
     
     },
     {
        "id":"9",
        "title":"Crime and Punishment ",
        "prices": "529",
      "description": "Crime and Punishment (Deluxe Hardbound Edition)",
      "author":"Fyodor Dostoevksy",
      "rating": "4.5 out of 5 stars",
        "image":"https://m.media-amazon.com/images/I/81vTpOYpwOL.jpg",
      "url": "https://www.amazon.in/Punishment-Deluxe-Hardbound-Fyodor-Dostoevsky/dp/9354403794/ref=sr_1_9?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-9",
      
      "prices_url": "https://www.amazon.in/Punishment-Deluxe-Hardbound-Fyodor-Dostoevsky/dp/9354403794/ref=sr_1_9?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-9",
      
     },
     {
        "id":"10",
        "title":"The Diary of a Young Girl",
        "prices": "99",  
      "decsription": "The Diary of a Young Girl",
      "author":"Anne Frank",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81lZ-9E4F-S.jpg",
      "url": "https://www.amazon.in/Diary-Young-Girl-Anne-Frank/dp/8172345194/ref=sr_1_10?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-10",
    
      "prices_url": "https://www.amazon.in/Diary-Young-Girl-Anne-Frank/dp/8172345194/ref=sr_1_10?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-10",
      
     },
     {
      "id":"11",
      "title":"The Power of A Positive Attitude",
      "prices": "99",
      "description": "The Power of A Positive Attitude: Your Road To Success",
      "author":"Roger Fritz",
      
      "rating": "4.4 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81JByBEqw+S.jpg",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfbXRmOjIwMDUwNzI2MzYyNjAyOjowOjo&url=%2FPower-Positive-Attitude-Your-Success%2Fdp%2F9389432642%2Fref%3Dsr_1_11_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
     
      "prices_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfbXRmOjIwMDUwNzI2MzYyNjAyOjowOjo&url=%2FPower-Positive-Attitude-Your-Success%2Fdp%2F9389432642%2Fref%3Dsr_1_11_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      
     },
     {
      "id":"12",
      "title":"As a Man Thinketh",
      "prices": "66",
      "description": "As a Man Thinketh",
      "author":"James Allen",
      "rating": "4.4 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81tEgsxpNZS.jpg",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfbXRmOjIwMDMzMzAyNzgzOTAyOjowOjo&url=%2FAs-Man-Thinketh-James-Allen%2Fdp%2F9386538172%2Fref%3Dsr_1_12_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-12-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      
      "prices_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfbXRmOjIwMDMzMzAyNzgzOTAyOjowOjo&url=%2FAs-Man-Thinketh-James-Allen%2Fdp%2F9386538172%2Fref%3Dsr_1_12_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-12-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      
     },
     {
      "id":"12",
      "title":"That Night",
      "prices": "187",
      "description": "That Night: Four Friends, Twenty Years,",
      "author":"Nidhi Upadhyay",
      "rating": "4.3 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81b1PP4RK1L.jpg",
      "url": "https://www.amazon.in/That-Night-Friends-Haunting-Secret/dp/0143451871/ref=sr_1_13?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-13",
     
      "prices_url": "https://www.amazon.in/That-Night-Friends-Haunting-Secret/dp/0143451871/ref=sr_1_13?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-13",
      
     },
     {
      "id":"13",
      "title":"You Can",
      "prices": "96",
      "description": "You Can",
      "author":"George Matthew Adams",
      "rating": "4.3 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/813uPMOnskL.jpg",
      "url": "https://www.amazon.in/You-Can-George-Matthew-Adams/dp/9389931843/ref=sr_1_14?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-14",
      
      "prices_url": "https://www.amazon.in/You-Can-George-Matthew-Adams/dp/9389931843/ref=sr_1_14?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-14",
     
     },
     {
      "id":"14",
      "title":"Oliver Twist",
      "prices": "149",
      "description": "Oliver Twist : Illustrated Abridged Children Classics English Novel with Review Questions",
      "author":"Charles Dickens",
      "rating": "4.6 out of 5 stars",
      "images":"https://m.media-amazon.com/images/I/81nisX6qgJL.jpg",
      "url": "https://www.amazon.in/Oliver-Twist-Kids-illustrated-Questions/dp/9354402267/ref=sr_1_15?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-15",
      
      "prices_url": "https://www.amazon.in/Oliver-Twist-Kids-illustrated-Questions/dp/9354402267/ref=sr_1_15?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-15",
      
     },
     {
      "id":"15",
      "title":"The Alchemist",
      "prices": "249",
      "description": "The Alchemist",
      "author":"Paulo Coelho",
      "rating": "4.6 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
      "url": "https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988/ref=sr_1_16?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-16",
     
      "prices_url": "https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988/ref=sr_1_16?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-16",
      
     },
     {
      "id":"16",
      "title":"You Only Live Once",
      "prices": "179",
      "description": "You Only Live Once",
      "author":"Stuto Changle",
      "rating": "4.4 out of 5 stars",
      
      "image":"https://m.media-amazon.com/images/I/71dNsRuYL7L.jpg",
      "url": "https://www.amazon.in/You-Only-Live-Once-Friendship/dp/0143453580/ref=sr_1_17?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-17",
     
      "prices_url": "https://www.amazon.in/You-Only-Live-Once-Friendship/dp/0143453580/ref=sr_1_17?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-17",
      
     },
     {
      "id":"17",
      "title":"A Touch of Eternity by Durjoy Datta",
      "prices": "135",
      "description": "A Touch of Eternity by Durjoy Datta: Book on Love by Durjoy Datta | Fictional Book for Young Adults, Penguin Book",
      "author":"Durjoy Datta",
      "rating": "4.3 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/61ZRWLIH8oL.jpg",
      "url": "https://www.amazon.in/Touch-Eternity-Datta-Durjoy/dp/014344834X/ref=sr_1_18?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-18",
      
      
      "prices_url": "https://www.amazon.in/Touch-Eternity-Datta-Durjoy/dp/014344834X/ref=sr_1_18?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-18",
      
     },
     {
      "id":"18",
      "title":"The Time Machine",
      "prices": "99",
      "description": "The Power of Your Subconscious Mind (PREMIUM PAPERBACK, PENGUIN INDIA)",
      "author":"H.G.Wells",
      "rating": "4.4 out of 5 stars",
      "images":"https://m.media-amazon.com/images/I/51DlDekQ5-L.jpg",
      "url": "https://www.amazon.in/Power-Subconscious-Premium-Paperback-Penguin/dp/0143453602/ref=sr_1_19?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-19",
     
      "prices_url": "https://www.amazon.in/Power-Subconscious-Premium-Paperback-Penguin/dp/0143453602/ref=sr_1_19?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-19",
      
     },
     {
      "id":"19",
      "title":"The Highlander’s Temporary Wife",
      "prices": "91",
      "description": "The Highlander’s Temporary Wife: A Medieval Historical Romance Novel (English Lasses in Scotland Book 1)",
      "author":"Eloise Madigan",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/41rXv8jqzOL.jpg",
      "url": "https://www.amazon.in/Highlanders-Temporary-Wife-Medieval-Historical-ebook/dp/B0C24QDLR9/ref=sr_1_20?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-20",
   
      "prices_url": "https://www.amazon.in/Highlanders-Temporary-Wife-Medieval-Historical-ebook/dp/B0C24QDLR9/ref=sr_1_20?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-20",
      
     },
    
     {
      "id":"20",
      "title":"Metamorphosis",
      "prices": "77",
      "description": "Metamorphosis",
      "author":"Franz Kafka",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/91h14raE85S.jpg",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfYnRmOjIwMDUwNzU5NzMyNjAyOjowOjo&url=%2FMetamorphosis-Franz-Kafka%2Fdp%2F8172345135%2Fref%3Dsr_1_22_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
     
      "prices_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfYnRmOjIwMDUwNzU5NzMyNjAyOjowOjo&url=%2FMetamorphosis-Franz-Kafka%2Fdp%2F8172345135%2Fref%3Dsr_1_22_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      
     },
    ];
   });
   app.controller("myNovels2Controller",function($scope,$window){
    $scope.imageAddress = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    $scope.prices = "";
    $scope.author= "";
    $scope.rating = "";
    $scope.item2 = function(){
        let i = $scope.selectedOption2;
        let image = $scope.Novels2[i].image;
        let prices = $scope.Novels2[i].prices;
        let author = $scope.Novels2[i].author;
        let rating = $scope.Novels2[i].rating;
        
        
        $scope.imageAddress = image;
        $scope.prices = prices;
        $scope.author = author;
        $scope.rating = rating;
    }
   
   
 $scope.Novels2=[
        {
            "id":"0",
            "title": "---Select Anyone---",
            "prices": "",
            "description": "",
            "brand": "",
            "rating": "",
            "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png",
            "url": "",
            "Price_url":""
        },
     {
        "id":"1",
        "title":"A Walk in my Shoes",
        "prices": "199",
      "description": "A Walk in my Shoes : A #1 Fiction and romance bestseller novel. Your perfect valentine's day gift. Empower your love with this cute love story book",
        "author":"Ritesh Karnani",
      "rating": "5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/41pIYURtzWL._SX311_BO1,204,203,200_.jpg",
      "prices_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfYXRmOjIwMTAwNTIwNjM4MDk4OjowOjo&url=%2FWalk-Shoes-bestseller-valentines-love-story-book%2Fdp%2F9391142206%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfYXRmOjIwMTAwNTIwNjM4MDk4OjowOjo&url=%2FWalk-Shoes-bestseller-valentines-love-story-book%2Fdp%2F9391142206%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
     },
     {
        "id":"2",
        "title":"Everything I Never Told You",
        "prices": "165",
      "description": "Everything I Never Told You",
      "author":"Ajay K Pandey",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/813eYwNgZ8L.jpg",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfYXRmOjIwMDc3NDMxODM1Njk4OjowOjo&url=%2FEverything-I-Never-Told-You%2Fdp%2F8194790859%2Fref%3Dsr_1_2_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      
      "prices_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfYXRmOjIwMDc3NDMxODM1Njk4OjowOjo&url=%2FEverything-I-Never-Told-You%2Fdp%2F8194790859%2Fref%3Dsr_1_2_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
      
     },
     {
        "id":"3",
        "title":"The Girl in Room 105",
        "prices": "157",
      "description": "The Girl in Room 105",
      "author":"Chetan Bhagat",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/41HO-aObUSL.jpg",
      "url": "https://www.amazon.in/Girl-Room-105-Chetan-Bhagat/dp/9356290962/ref=sr_1_3?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-3",
      
      "prices_url": "https://www.amazon.in/Girl-Room-105-Chetan-Bhagat/dp/9356290962/ref=sr_1_3?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-3",
     
     },
     {
        "id":"4",
        "title":"The Complete Novels of Sherlock Holmes",
        "prices": "160",
      "description": "The Complete Novels of Sherlock Holmes",
      "author":"Arthur Canon Doyle",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81NAo81PtRL.jpg",
      "url": "https://www.amazon.in/Complete-Novels-Sherlock-Holmes/dp/8175994312/ref=sr_1_4?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-4",
      
      "prices_url": "https://www.amazon.in/Complete-Novels-Sherlock-Holmes/dp/8175994312/ref=sr_1_4?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-4",
      
     },
     {
        "id":"5",
        "title":"The Power of Your Subconscious Mind",
        "prices": "206",
      "description":"The Power of Your Subconscious Mind",
      "author":"Joseph Murphy",
      "rating": "4.6 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71sBtM3Yi5L.jpg",
      "url": "https://www.amazon.in/Power-Your-Subconscious-Mind/dp/8194790832/ref=sr_1_5?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-5",
      
      "prices_url": "https://www.amazon.in/Power-Your-Subconscious-Mind/dp/8194790832/ref=sr_1_5?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-5",
     
     },
     {
        "id":"6",
        "title":"One Day, Life Will Change",
        "prices": "129",
      "description": "One Day, Life Will Change: A story of love and inspiration to win life when it hits you hard . . .",
      "author":"Saranya Umakanthan",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71G2QY75OWL.jpg",

      "url": "https://www.amazon.in/One-Day-Life-Will-Change/dp/9389717841/ref=sr_1_6?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-6",
      
      "prices_url": "https://www.amazon.in/One-Day-Life-Will-Change/dp/9389717841/ref=sr_1_6?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-6",
      
     },
     {
        "id":"7",
        "title":"The Wife Upstairs",
        "prices": "396",
      "description": "The Wife Upstairs: An addictive new 2021 psychological crime thriller with a twist - a New York Times bestseller!",
      "url": "https://www.amazon.in/Wife-Upstairs-Rachel-Hawkins/dp/0008377510/ref=sr_1_7?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-7",
      "author":"Rachel Hawkins",
      "rating": "4.3 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81fjvCmxNWL.jpg",
      "prices_url": "https://www.amazon.in/Wife-Upstairs-Rachel-Hawkins/dp/0008377510/ref=sr_1_7?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-7",
     
     },
     {
        "id":"8",
        "title":"Pride & Prejudice",
        "prices": "275",
      "description": "Pride & Prejudice",
      "author":"Jane Austen",
      "rating": "Be the first to Review This Product",
      "image":"https://m.media-amazon.com/images/I/819HSIKiWdS.jpg",
      "url": "https://www.amazon.in/Pride-Prejudice-Jane-Austen/dp/8172344503/ref=sr_1_8?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-8",
      
      "prices_url": "https://www.amazon.in/Pride-Prejudice-Jane-Austen/dp/8172344503/ref=sr_1_8?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-8",
     
     },
     {
        "id":"9",
        "title":"Crime and Punishment ",
        "prices": "251",
      "description": "Crime and Punishment (Deluxe Hardbound Edition)",
      "author":"Fyodor Dostoevksy",
      "rating": "4.4 out of 5 stars",
        "image":"https://m.media-amazon.com/images/I/81vTpOYpwOL.jpg",
      "url": "https://www.amazon.in/Punishment-Deluxe-Hardbound-Fyodor-Dostoevsky/dp/9354403794/ref=sr_1_9?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-9",
      
      "prices_url": "https://www.amazon.in/Punishment-Deluxe-Hardbound-Fyodor-Dostoevsky/dp/9354403794/ref=sr_1_9?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-9",
      
     },
     {
        "id":"10",
        "title":"The Diary of a Young Girl",
        "prices": "300",  
      "decsription": "The Diary of a Young Girl",
      "author":"Anne Frank",
      "rating": "Be the first to review this product",
      "image":"https://m.media-amazon.com/images/I/81lZ-9E4F-S.jpg",
      "url": "https://www.amazon.in/Diary-Young-Girl-Anne-Frank/dp/8172345194/ref=sr_1_10?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-10",
    
      "prices_url": "https://www.amazon.in/Diary-Young-Girl-Anne-Frank/dp/8172345194/ref=sr_1_10?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-10",
      
     },
     {
      "id":"11",
      "title":"The Power of A Positive Attitude",
      "prices": "140",
      "description": "The Power of A Positive Attitude: Your Road To Success",
      "author":"Roger Fritz",
      
      "rating": "4.4 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81JByBEqw+S.jpg",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfbXRmOjIwMDUwNzI2MzYyNjAyOjowOjo&url=%2FPower-Positive-Attitude-Your-Success%2Fdp%2F9389432642%2Fref%3Dsr_1_11_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
     
      "prices_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfbXRmOjIwMDUwNzI2MzYyNjAyOjowOjo&url=%2FPower-Positive-Attitude-Your-Success%2Fdp%2F9389432642%2Fref%3Dsr_1_11_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      
     },
     {
      "id":"12",
      "title":"As a Man Thinketh",
      "prices": "69",
      "description": "As a Man Thinketh",
      "author":"James Allen",
      "rating": "4.4 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81tEgsxpNZS.jpg",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfbXRmOjIwMDMzMzAyNzgzOTAyOjowOjo&url=%2FAs-Man-Thinketh-James-Allen%2Fdp%2F9386538172%2Fref%3Dsr_1_12_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-12-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      
      "prices_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfbXRmOjIwMDMzMzAyNzgzOTAyOjowOjo&url=%2FAs-Man-Thinketh-James-Allen%2Fdp%2F9386538172%2Fref%3Dsr_1_12_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-12-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1",
      
     },
     {
      "id":"12",
      "title":"That Night",
      "prices": "199",
      "description": "That Night: Four Friends, Twenty Years,",
      "author":"Nidhi Upadhyay",
      "rating": "4.4 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/81b1PP4RK1L.jpg",
      "url": "https://www.amazon.in/That-Night-Friends-Haunting-Secret/dp/0143451871/ref=sr_1_13?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-13",
     
      "prices_url": "https://www.amazon.in/That-Night-Friends-Haunting-Secret/dp/0143451871/ref=sr_1_13?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-13",
      
     },
     {
      "id":"13",
      "title":"You Can",
      "prices": "99",
      "description": "You Can",
      "author":"Adams George Matthew ",
      "rating": "4.4 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/813uPMOnskL.jpg",
      "url": "https://www.amazon.in/You-Can-George-Matthew-Adams/dp/9389931843/ref=sr_1_14?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-14",
      
      "prices_url": "https://www.amazon.in/You-Can-George-Matthew-Adams/dp/9389931843/ref=sr_1_14?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-14",
     
     },
     {
      "id":"14",
      "title":"Oliver Twist",
      "prices": "189",
      "description": "Oliver Twist : Illustrated Abridged Children Classics English Novel with Review Questions",
      "author":"Charles Dickens",
      "rating": "4.6 out of 5 stars",
      "images":"https://m.media-amazon.com/images/I/81nisX6qgJL.jpg",
      "url": "https://www.amazon.in/Oliver-Twist-Kids-illustrated-Questions/dp/9354402267/ref=sr_1_15?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-15",
      
      "prices_url": "https://www.amazon.in/Oliver-Twist-Kids-illustrated-Questions/dp/9354402267/ref=sr_1_15?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-15",
      
     },
     {
      "id":"15",
      "title":"The Alchemist",
      "prices": "249",
      "description": "The Alchemist",
      "author":"Paulo Coelho",
      "rating": "4.6 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
      "url": "https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988/ref=sr_1_16?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-16",
     
      "prices_url": "https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988/ref=sr_1_16?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-16",
      
     },
     {
      "id":"16",
      "title":"You Only Live Once",
      "prices": "177",
      "description": "You Only Live Once",
      "author":"Stuto Changle",
      "rating": "4.5 out of 5 stars",
      
      "image":"https://m.media-amazon.com/images/I/71dNsRuYL7L.jpg",
      "url": "https://www.amazon.in/You-Only-Live-Once-Friendship/dp/0143453580/ref=sr_1_17?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-17",
     
      "prices_url": "https://www.amazon.in/You-Only-Live-Once-Friendship/dp/0143453580/ref=sr_1_17?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-17",
      
     },
     {
      "id":"17",
      "title":"A Touch of Eternity by Durjoy Datta",
      "prices": "129",
      "description": "A Touch of Eternity by Durjoy Datta: Book on Love by Durjoy Datta | Fictional Book for Young Adults, Penguin Book",
      "author":"Durjoy Datta",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/61ZRWLIH8oL.jpg",
      "url": "https://www.amazon.in/Touch-Eternity-Datta-Durjoy/dp/014344834X/ref=sr_1_18?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-18",
      
      
      "prices_url": "https://www.amazon.in/Touch-Eternity-Datta-Durjoy/dp/014344834X/ref=sr_1_18?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-18",
      
     },
     {
      "id":"18",
      "title":"The Time Machine ",
      "prices": "99",
      "description": "The Power of Your Subconscious Mind (PREMIUM PAPERBACK, PENGUIN INDIA)",
      "author":"H.G.Wells",
      "rating": "4.5 out of 5 stars",
      "images":"https://m.media-amazon.com/images/I/51DlDekQ5-L.jpg",
      "url": "https://www.amazon.in/Power-Subconscious-Premium-Paperback-Penguin/dp/0143453602/ref=sr_1_19?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-19",
     
      "prices_url": "https://www.amazon.in/Power-Subconscious-Premium-Paperback-Penguin/dp/0143453602/ref=sr_1_19?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-19",
      
     },
     {
      "id":"19",
      "title":"The Highlander’s Temporary Wife",
      "prices": "91",
      "description": "The Highlander’s Temporary Wife: A Medieval Historical Romance Novel (English Lasses in Scotland Book 1)",
      "author":"Eloise Madigan",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/41rXv8jqzOL.jpg",
      "url": "https://www.amazon.in/Highlanders-Temporary-Wife-Medieval-Historical-ebook/dp/B0C24QDLR9/ref=sr_1_20?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-20",
   
      "prices_url": "https://www.amazon.in/Highlanders-Temporary-Wife-Medieval-Historical-ebook/dp/B0C24QDLR9/ref=sr_1_20?crid=2FC8JZAPGAKL4&keywords=english+novels&qid=1681534104&sprefix=henglish+novel%2Caps%2C225&sr=8-20",
      
     },
    
     {
      "id":"20",
      "title":"Metamorphosis",
      "prices": "77",
      "description": "Metamorphosis",
      "author":"Franz Kafka",
      "rating": "4.5 out of 5 stars",
      "image":"https://m.media-amazon.com/images/I/91h14raE85S.jpg",
      "url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfYnRmOjIwMDUwNzU5NzMyNjAyOjowOjo&url=%2FMetamorphosis-Franz-Kafka%2Fdp%2F8172345135%2Fref%3Dsr_1_22_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
     
      "prices_url": "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MzkwNDEyMjUxMDc3MTkwOjE2ODE1MzQxMDQ6c3BfYnRmOjIwMDUwNzU5NzMyNjAyOjowOjo&url=%2FMetamorphosis-Franz-Kafka%2Fdp%2F8172345135%2Fref%3Dsr_1_22_sspa%3Fcrid%3D2FC8JZAPGAKL4%26keywords%3Denglish%2Bnovels%26qid%3D1681534104%26sprefix%3Dhenglish%2Bnovel%252Caps%252C225%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9idGY%26psc%3D1",
      
     },
    ];
   });