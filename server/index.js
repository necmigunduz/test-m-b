import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

let products = [
    {
        name: 'IPhone11',
        brand: 'Apple',
        desc: 'This product is sold in Apple Stores!',
        color: 'red',
        price: 300,
        amount: 0
    },
    {
        name: 'IPhone9',
        brand: 'Apple',
        desc: 'This product is sold in Apple Stores!',
        color: 'red',
        price: 300,
        amount: 0
    },
    {
        name: 'IPhone12',
        brand: 'Apple',
        desc: 'This product is sold in Apple Stores!',
        color: 'red',
        price: 300,
        amount: 0
    },
    {
        name: 'IPhone8',
        brand: 'Apple',
        desc: 'This product is sold in Apple Stores!',
        color: 'red',
        price: 300,
        amount: 0
    },
    {
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