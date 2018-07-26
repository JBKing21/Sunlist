melbourne = {
    climate: "Temperate",
    politics: "Left-leaning",
    population: 4900000,
    suburbs: [
        {
            name: "Footscray"
        },
        {
            name: "Caulfield"
        },
        {
            name: "CBD",
            restaurants: [
                {
                    name: "Gypsy and Pig",
                    cuisine: "Japanese",
                    dishes: [
        
                    ]
                },
                {
                    name: "Biryani House",
                    cuisine: "Indian",
                    dishes: [
                        {
                            name: "Chicken Malai Kebab",
                            price: 950,
                            ingredients: [

                            ]
                        },
                        {
                            name: "Lamb Biryani",
                            price: 1150,
                            ingredients: [
                                {
                                    ingredient: "rice",
                                    amount: "500g",
                                },
                                {
                                    ingredient: "lamb",
                                    amount: "300g"
                                },
                                {
                                    ingredient: "cloves, cardimom, garam masala",
                                    amount: "20g"
                                }
                            ]
                        },
                        {
                            name: "Lamb Palak",
                            price: 1150,
                            ingredients: [

                            ]
                        }
                    ]
                },
                {
                    name: "Bebu",
                    cuisine: "Korean",
                    dishes: [

                    ]
                }
            ] 
        }
    ]
}

// Use this start to get back the string "20g"
// save this into a file and run 'node <filename>' to get the output
console.log(melbourne.suburbs[2].restaurants[1].dishes[1].ingredients[2].amount)