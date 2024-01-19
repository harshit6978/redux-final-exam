import axios, { Axios } from 'axios'
import React, { useEffect, useRef, useState } from 'react';
import "./product.css";

const Product = () => {

    const [data, setdata] = useState([]);
    const [update, setupdate] = useState({});

    const product = useRef();
    const price = useRef();

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((res) => {
            setdata(res.data)
        })
    }, [])


    const handleSubmit = () => {
        const productAdd = {
            ProductName: product.current.value,
            Price: price.current.value,
        }
        axios.post("http://localhost:3001/posts", productAdd).then((res) => {

            setdata([...data, res.data]);
        })
    }

    const handlDelete = (id) => {
        axios.delete(`http://localhost:3001/posts/${id}`).then((res) => {
            setdata(data.filter((val) => val.id !== id));
        })
    }

    const updateid = (val, ind) => {
        const update = data[ind];
        setupdate(update);
        console.log(update);
    }

    const updateValue = (e) => {
        setupdate({ ...update, [e.target.name]: e.target.value });
    }

    const finalupdate = () => {
        axios.put(`http://localhost:3001/posts/${update.id}`, update).then((res) => {
            const updata = [...data];
            updata[data.indexOf(data.find(x => x.id === update.id))] = update;
            setdata(updata);
            // const updatedArr = [...update];
            // updatedArr[update.index] = update;
            // setupdate(updatedArr);
        }); 
    }

    return (
        <div>
            <>

                <input type='text' name='productname' placeholder='Enter a Product name' ref={product} ></input>
                <input type='number' name='price' placeholder='Enter a price' ref={price} ></input>
                <button onClick={handleSubmit}>Add</button><br />


                <input type='text' name='productname' placeholder='Enter a Product name' value={update.ProductName} onChange={updateValue}></input>
                <input type='number' name='price' placeholder='Enter a price' value={update.Price} onChange={updateValue}></input>
                <button onClick={finalupdate}>update</button>



                <div className='flex'>
                    {
                        data?.map((val, ind) => {
                            return (
                                <>
                                    <div class="Card">
                                        <div class="car">
                                            <h1 class="card-titl">{val.id}</h1>
                                            <h2 class="card-tex">{val.ProductName}</h2>
                                            <h4>{val.Price}</h4>
                                            <button href="#" class="btn btn-primary" onClick={() => handlDelete(val.id)}>Delete</button>
                                            <button onClick={() => updateid(val, ind)} >update</button>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </>
        </div>
    )
}

export default Product