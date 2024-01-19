
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_PROGRESS } from '../../Redux-saga/Admin/action/action';

const Home = () => {
    // const data=useState();

    const product = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    console.log(product);

    const prod = product.product.slice(0, 5)

    // axios.get("http://localhost:3001/posts").then((res)=>{
    //     console.log(res.data,"dfdfd");
    //     setdata(res.data)

    // })

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROGRESS });
    }, [])



    return (

        <div className='flex'>
            {prod?.map((val) => {
                return (
                    <div class="Card">
                        <div class="car">
                            <h1 class="card-titl">{val.id}</h1>
                            <h2 class="card-tex">{val.ProductName}</h2>
                            <h4>{val.Price}</h4>
                           
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Home;