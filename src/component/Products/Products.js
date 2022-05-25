import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom'

const Products = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    const componentMounted = true

    useEffect(() => {

        const getProducts = async () => {
            setLoading(true)
            const res = await fetch('https://fakestoreapi.com/products')
            if (componentMounted) {
                setData(await res.clone().json())
                setFilter(await res.json())
                setLoading(false)
            }
            return () => {
                componentMounted = false
            }
        }

        getProducts()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const filterProducts = (ctgy) => {
        const updateList = data.filter(val => val.category === ctgy)
        setFilter(updateList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>Men`s Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>Women`s Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts('electronics')}>Electronic</button>
                </div>
                {
                    filter.map((val) => {
                        return (

                            <div className="col-md-3 mb-4" key={val.id}>
                                <div className="card h-100 text-center p-4">
                                    <img src={val.image} className="card-img-top h-75" alt={val.title} />
                                    <div className="card-body h-25 object-cover">
                                        <h5 className="card-title mb-0">{val.title[0] + val.title.toLowerCase().substring(1, 12)} ...</h5>
                                        <p className="card-text lead fw-bold">$ {val.price}</p>
                                        <NavLink to={`/products/${val.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </>
        )
    }

    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        loading ? <Loading /> : <ShowProducts />
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
