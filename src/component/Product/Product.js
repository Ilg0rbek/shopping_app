import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Product = () => {

    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await res.json())
            setLoading(false)
            console.log(id);
        }
        getProduct()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-6 py-5">
                    <Skeleton height={500} />
                </div>
                <div className="col-md-6 py-5">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <div className='d-flex mt-5'>
                        <Skeleton height={50} width={100} />
                        <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                    </div>
                </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <div className='my-5 row'>
                <div className="col-md-6" key={product.id}>
                    <img src={product.image} alt={product.title} width="400" height="400" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className="lead fw-bolder">Rating {product.rating && product.rating.rate}   <i className="fa fa-star"></i></p>
                    <h3 className='display-6 fw-bold my-4'>$ {product.price}</h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark me-2 px-4 py-2">Add to Cart</button>
                    <NavLink to={'/cart'} className="btn btn-dark px-3 py-2">Go to Cart</NavLink>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {
                    loading ? <Loading /> : <ShowProduct />
                }
            </div>
        </div>
    )
}

export default Product
