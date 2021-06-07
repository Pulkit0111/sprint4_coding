function showMenu() {
    var dishes = [
        {
            image: "https://sandinmysuitcase.com/wp-content/uploads/2020/04/Indian-food.jpg",
            des: "Rajma Thali",
            price: 200,
            prep: "10 Minutes"
        },
        {
            image: "https://www.cookwithkushi.com/wp-content/uploads/2021/01/IMG_7765.jpg",
            des: "Chole Bhature",
            price: 250,
            prep: "15 Minutes"
        },
        {
            image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/matar-paneer-2-500x500.jpg",
            des: "Matar Paneer",
            price: 300,
            prep: "10 Minutes"
        },
    ];
    localStorage.setItem('items', JSON.stringify(dishes));
    var food = JSON.parse(localStorage.getItem('items'));
    var parent = document.getElementById("parent");
    parent.innerHTML = null;
    for (var i = 0; i < food.length; i++) {
        var fo_div = document.createElement('div');
        var fo_des = document.createElement('p');
        fo_des.innerHTML = food[i].des;
        var fo_price = document.createElement('p');
        fo_price.innerHTML = food[i].price;
        var fo_prep = document.createElement('p');
        fo_prep.innerHTML = food[i].prep;
        var fo_img = document.createElement('img');
        fo_img.src = food[i].image;
        var btn_cart = document.createElement('button');
        btn_cart.innerHTML = "Add to Cart";
        btn_cart.setAttribute('id', 'cartBtn');
        fo_div.append(fo_des, fo_price, fo_prep, fo_img, btn_cart);
        parent.append(fo_div);
    }
}
showMenu();