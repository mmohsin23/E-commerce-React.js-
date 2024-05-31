import React from 'react'
import Hero from '../components/Hero/Hero'
import ProductIcon from '../pages/products'
import ProductSlider from '../components/productSlider'

const shopPage = () => {
  return (
    <div style={{paddingBottom: 100+'px'}}>
      <Hero />
      <h2 className="StrokeTitle transparent">
        BEST SELLER
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <ProductIcon productName={'First Product'} 
            lastPrice={'10,000'}
            newPrice={'4,500'}
            imgSrc={'/Assets/Images/media-01.png'}
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <ProductIcon productName={'Second Product'} 
            lastPrice={'12,000'}
            newPrice={'7,500'}
            imgSrc={'/Assets/Images/media-slide-two.png'}
            />
          </div>
          <div className="col-lg-4 col-sm-6">
            <ProductIcon productName={'Third Product'} 
            lastPrice={'10,000'}
            newPrice={'4,500'}
            imgSrc={'/Assets/Images/media-01.png'}
            />
          </div>
        </div>
      </div>
      <h2 className="StrokeTitle normal">
        Our Products
      </h2>
      <ProductSlider />

    </div>
  )
}

export default shopPage