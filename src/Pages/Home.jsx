import React from 'react'
import { useState, useEffect } from 'react';
import Spinner from '../Components/Spinner';
import Products  from '../Components/Products';

const Home = () => {
   
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItem] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setItem(data);
    }
    catch(error) {
      console.log("Error");
      setItem([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  },[])


  return (
    <div>
      {
        loading ? <Spinner /> :
        items.length>0 ? (
          <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {items.map((item) => (
              <Products item={item} key={item.id}/>
            ))}
          </div>
        ):
        (
          <div>No products found</div>
        )
      }

      
    </div>
  )
}

export default Home
