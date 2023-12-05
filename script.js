// Good Luck 💪🏾
// 1 bottle of milk:
function getTotalPrice(drink){
    let totalPrice = 0
    for (const itme of drink){
    totalPrice =totalPrice +itme.price;
    }
    console.log(totalPrice)
}
getTotalPrice([
 {product: "Milk", quantity:1, price: 1.50},
])

// 2 bottle of milk & 1 box of cereals:
 function getTotalPrice(meal){
    let totalPrice = 0
    for(const item of meal){
       totalPrice =totalPrice + item.price;
    }
   console.log(totalPrice)
 }
 getTotalPrice([
{ product: "Milk", quantity: 1, price: 1.50 },
{ product: "Cereals", quantity: 1, price: 2.50 },
 ]
 )
 // 3 bottles of milk:
function getTotalPrice(milk){
    let totalPrice = 0
    for(const item of milk){
        totalPrice =totalPrice + item.price;
    }
}
getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
]   
)


    