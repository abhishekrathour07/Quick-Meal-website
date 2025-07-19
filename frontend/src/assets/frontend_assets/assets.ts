import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_21 from './food_21.png'
import food_22 from './food_22.png'
import food_23 from './food_23.png'
import food_24 from './food_24.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

import add_icon_white from './add_icon_white.png'
import remove_icon_red from './remove_icon_red.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_white,
    remove_icon_red,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export interface MenuItem {
    menu_name: string;
    menu_image: string;
}
export const menu_list: MenuItem[] = [
    {
        menu_name: "Salad",
        menu_image: menu_1
    },
    {
        menu_name: "Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Deserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Noodles",
        menu_image: menu_8
    }]

export const food_list = [
    {
        _id: "1",
        name: "Greek salad",
        image: "food_1.png",
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Veg salad",
        image: food_2,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "3",
        name: "Clover Salad",
        image: food_3,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "4",
        name: "Chicken Salad",
        image: food_4,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "5",
        name: "Lasagna Rolls",
        image: food_5,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "6",
        name: "Peri Peri Rolls",
        image: food_6,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "7",
        name: "Chicken Rolls",
        image: food_7,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "8",
        name: "Veg Rolls",
        image: food_8,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    }, {
        _id: "9",
        name: "Ripple Ice Cream",
        image: food_9,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        _id: "10",
        name: "Fruit Ice Cream",
        image: food_10,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        _id: "11",
        name: "Jar Ice Cream",
        image: food_11,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    }, {
        _id: "12",
        name: "Vanilla Ice Cream",
        image: food_12,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
        _id: "13",
        name: "Chicken Sandwich",
        image: food_13,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    },
    {
        _id: "14",
        name: "Vegan Sandwich",
        image: food_14,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        _id: "15",
        name: "Grilled Sandwich",
        image: food_15,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        _id: "16",
        name: "Bread Sandwich",
        image: food_16,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    }, {
        _id: "17",
        name: "Cup Cake",
        image: food_17,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        _id: "18",
        name: "Vegan Cake",
        image: food_18,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        _id: "19",
        name: "Butterscotch Cake",
        image: food_19,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        _id: "20",
        name: "Sliced Cake",
        image: food_20,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }, {
        _id: "21",
        name: "Garlic Mushroom ",
        image: food_21,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        _id: "22",
        name: "Fried Cauliflower",
        image: food_22,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        _id: "23",
        name: "Mix Veg Pulao",
        image: food_23,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    }, {
        _id: "24",
        name: "Rice Zucchini",
        image: food_24,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg"
    },
    {
        _id: "25",
        name: "Cheese Pasta",
        image: food_25,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    },
    {
        _id: "26",
        name: "Tomato Pasta",
        image: food_26,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    }, {
        _id: "27",
        name: "Creamy Pasta",
        image: food_27,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    }, {
        _id: "28",
        name: "Chicken Pasta",
        image: food_28,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta"
    }, {
        _id: "29",
        name: "Buttter Noodles",
        image: food_29,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }, {
        _id: "30",
        name: "Veg Noodles",
        image: food_30,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }, {
        _id: "31",
        name: "Somen Noodles",
        image: food_31,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    }, {
        _id: "32",
        name: "Cooked Noodles",
        image: food_32,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles"
    },
    {
        _id: "303",
        name: "Greek Salad masala",
        image: "https://www.italianbellavita.com/wp-content/uploads/2022/08/739C7136-CBA2-4DDC-8D56-ECA409F69AB9.jpeg",
        price: 12,
        description: "A fresh mix of lettuce, olives, feta cheese, and cucumbers.",
        category: "Salad"
    },
    {
        _id: "312",
        name: "Spaghetti Carbonara",
        image: "https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/spaghetti-carbonara.png",
        price: 15,
        description: "Classic Italian pasta with creamy sauce, pancetta, and parmesan.",
        category: "Pasta"
    },
    {
        _id: "322",
        name: "Paneer Tikka Roll",
        image: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/ananya-gupta020170809164355977.jpeg",
        price: 10,
        description: "Smoky marinated paneer wrapped in a soft tortilla.",
        category: "Rolls"
    },
    {
        _id: "33",
        name: "Brownie Sundae",
        image: "https://www.sugardishme.com/wp-content/uploads/2019/09/The-Best-Brownie-Sundaes-Square.jpg",
        price: 8,
        description: "Warm brownie topped with vanilla ice cream and chocolate syrup.",
        category: "Desserts"
    },
    {
        _id: "34",
        name: "Grilled Chicken Sandwich",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgsaEgyt_7JzB0DGrzSoE2vOOmJUpyAw_yQ&s",
        price: 9,
        description: "A wholesome sandwich with grilled chicken and fresh lettuce.",
        category: "Sandwich"
    },
    {
        _id: "35",
        name: "Vanilla Sponge Cake",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5gNMN4hQMpXCnAcJ050s9VfQK1WGrUzI9g&s",
        price: 18,
        description: "Soft vanilla sponge cake topped with a creamy butter frosting.",
        category: "Cake"
    },
    {
        _id: "36",
        name: "Vegetable Biryani",
        image: "https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg",
        price: 14,
        description: "Aromatic rice dish with mixed vegetables and Indian spices.",
        category: "Pure Veg"
    },
    {
        _id: "37",
        name: "Mac and Cheese",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F19%2F238691-Simple-Macaroni-And-Cheese-mfs_006.jpg&w=160&q=60&c=sc&poi=auto&orient=true&h=90",
        price: 16,
        description: "Creamy macaroni pasta with a cheesy sauce.",
        category: "Pasta"
    },
    {
        _id: "38",
        name: "Chili Garlic Noodles",
        image: "https://www.connoisseurusveg.com/wp-content/uploads/2022/12/chili-garlic-noodles-sq.jpg",
        price: 13,
        description: "Spicy noodles stir-fried with chili and garlic sauce.",
        category: "Noodles"
    },
    {
        _id: "39",
        name: "Egg Roll",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFat3iIA7IiCLdBKLKJRrMsEXSWqbU-xWzA&s",
        price: 7,
        description: "A crispy wrap filled with spiced eggs and chutneys.",
        category: "Rolls"
    },
    {
        _id: "40",
        name: "Chocolate Mousse",
        image: "https://laneandgreyfare.com/wp-content/uploads/2024/07/Easy-Chocolate-Mousse-Eggless-1.jpg",
        price: 20,
        description: "Rich and creamy chocolate mousse topped with whipped cream.",
        category: "Desserts"
    },
    {
        _id: "41",
        name: "Club Veg Sandwich",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/05/vegetarian-club-sandwich-recipe.jpg",
        price: 12,
        description: "Triple-layer sandwich with fresh vegetables and tangy sauce.",
        category: "Sandwich"
    },
    {
        _id: "42",
        name: "Carrot Cake",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pX5D3MYwJyOOnMMNxk8Ue2CnkkCBEMDe1w&s",
        price: 15,
        description: "Moist carrot cake topped with cream cheese frosting.",
        category: "Cake"
    },
    {
        _id: "43",
        name: "Paneer Butter Masala",
        image: "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
        price: 11,
        description: "Paneer cubes cooked in rich, creamy butter masala sauce.",
        category: "Pure Veg"
    },
    {
        _id: "44",
        name: "Pesto Penne Pasta",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-Eo5f_GMVEWZ9j8c3MAW3OKdGS7oioG2Og&s",
        price: 17,
        description: "Penne pasta tossed with fresh basil pesto sauce.",
        category: "Pasta"
    },
    {
        _id: "45",
        name: "Hakka Noodles",
        image: "https://pupswithchopsticks.com/wp-content/uploads/hakka-noodles-5.jpg",
        price: 14,
        description: "Chinese-style stir-fried noodles with vegetables and soy sauce.",
        category: "Noodles"
    },
    {
        _id: "46",
        name: "Chicken Kathi Roll",
        image: "https://spicecravings.com/wp-content/uploads/2020/12/Chicken-Kathi-Roll-Featured-1.jpg",
        price: 10,
        description: "Juicy chicken pieces rolled in a flaky paratha.",
        category: "Rolls"
    },
    {
        _id: "47",
        name: "Fruit Tart",
        image: "https://www.culinaryhill.com/wp-content/uploads/2023/07/Fresh-Fruit-Tart-Culinary-Hill-1200x-800.jpg",
        price: 22,
        description: "Fresh fruit tart with a buttery crust and creamy custard.",
        category: "Desserts"
    },
    {
        _id: "48",
        name: "Grilled Cheese Sandwich",
        image: "https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg",
        price: 8,
        description: "Golden grilled sandwich oozing with melted cheese.",
        category: "Sandwich"
    },
    {
        _id: "49",
        name: "Chocolate Cake",
        image: "https://www.labonelfinebaking.shop/wp-content/uploads/2021/02/CLASSIC-CHOCOLATE-CAKE.jpg",
        price: 15,
        description: "Classic chocolate cake with a rich and moist texture.",
        category: "Cake"
    }
]
