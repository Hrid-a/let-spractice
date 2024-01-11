import Card from "./Card";
import { useState, useEffect } from "react";
const Body = () => {
    const [productsArr, setProductsArr] = useState([])
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://pink-clever-greyhound.cyclic.app/api/v1/products/all_products")
            const data = await response.json();
            setProductsArr(data.products);
        }
        fetchData();
    }, [])

    

    return !productsArr.length ? <h1>Looding....</h1> : (
        <>
            <div>

                <input type="text" value={searchValue} onChange={(event)=> setSearchValue(event.target.value)} />
                <button onClick={()=> {
                    const filterdata = productsArr.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
                    console.log(filterdata);
                    setProductsArr(filterdata);
                }}>search</button>
            </div>
            <div>
                <button onClick={() => {
                    const filterdProducts = productsArr.filter(product => product.price <= 5000);
                    setProductsArr(filterdProducts);
                    // setProductsArr([...filterdProducts]);
                }}>Cheapest products</button>
            </div>
            <section className="cards-container">
                {productsArr.map((product, index) => <Card key={product._id} data={product} />)}
            </section>
        </>
    )
}

export default Body;

/*

-- 3 senario
1==> elements are the same
2 => element has changed : React updates the properties or the attributes in the actual dom
3 => element is different : if the element is present in one of the Virtual doms , React adds or removes the element 

*/
// if (!productsArr.length) return <h1>Looding....</h1>
    /*
    // return a ? 1: 0 => if(a){
        return 1
    }else {
        return 0
    }
     */

     // const [variable , setVariable] = useState("initial value")
    // productsArr = new value
    // https://pink-clever-greyhound.cyclic.app/api/v1/products/all_products
    // axios / fetch 
    // fetch(url).then() => async await 