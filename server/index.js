import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

let products = [
    {
        id: 1,
        name: 'IPhone11',
        brand: 'Apple',
        desc: 'This product is sold in Apple Stores!',
        color: 'red',
        price: 300,
        amount: 0
    },
    {
        id: 2,
        name: 'IPhone9',
        brand: 'Apple',
        desc: 'This product is sold in Apple Stores!',
        color: 'red',
        price: 300,
        amount: 0
    },
    {
        id: 3,
        name: 'IPhone12',
        brand: 'Apple',
        desc: 'This product is sold in Apple Stores!',
        color: 'red',
        price: 300,
        amount: 0
    },
    {
        id: 4,
        name: 'IPhone8',
        brand: 'Apple',
        desc: 'This product is sold in Apple Stores!',
        color: 'red',
        price: 300,
        amount: 0
    },
    {
        id: 5,
        name: 'IPhone7',
        brand: 'Apple',
        desc: 'This product is sold in Apple Stores!',
        color: 'red',
        price: 300,
        amount: 0
    },
    
];

app.get('/products', (req, res) => {
    console.log("GET From SERVER");
    res.send(products)
});

app.get('/', (req, res) => {
    res.send('Go to http://localhost:3001/products to see the list of products.')
});

app.listen(3010);