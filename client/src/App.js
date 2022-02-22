import { useEffect, useState } from 'react';
import FetchData from './api/fetchData';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    let prdcts = await FetchData();
    setProducts(prdcts);
  };

  useEffect(() => {
    getData()
  }, [products])
  
  return (
    <div className="App">
      {
        <ol>
          {products.map(product => {
            return (
              <li key={product.id}>
                {product.brand} : {product.name}
                <button>Increase amount</button>      
              </li>
            )
          })}
        </ol>
      }
    </div>
  );
}

export default App;
