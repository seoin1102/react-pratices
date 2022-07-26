import fs from 'fs';

//fs.readFile('./json/data.json', 'utf-8',(err,data) => {console.log(data)});
// const o = JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'));

// console.log(typeof(o));
// console.log(o);

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

const updateOrderProducts = state.order.products;
updateOrderProducts.push({
    no: "p002-003",
    name: "블루 양말",
    price: 2000,
    amount: 1
})

console.log(state.order.proucts, updateOrderProducts, state.order.proucts === updateOrderProducts)

console.log('===================================');

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

const updateOrderProducts2 = state.order.products.concat({
    no: "p002-003",
    name: "블루 양말",
    price: 2000,
    amount: 1
})

console.log(state.order.proucts, updateOrderProducts2, state.order.proucts === updateOrderProducts2)
console.log('===================================');
 
const updateOrderProducts3 = [... state.order.products,{
    no: "p002-003",
    name: "블루 양말",
    price: 2000,
    amount: 1
}]
console.log(state.order.proucts, updateOrderProducts3, state.order.proucts === updateOrderProducts3)
