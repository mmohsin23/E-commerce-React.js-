import React from 'react'
import Hero from '../components/Hero/Hero'
import ProductIcon from '../pages/products'
import Title from '../pages/strokeTitles'
const shopPage = () => {
  return (
    <div style={{paddingBottom: 100+'px'}}>
      <Hero />
      <Title />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <ProductIcon />
          </div>
          <div className="col-lg-4 col-sm-6">
            <ProductIcon />
          </div>
          <div className="col-lg-4 col-sm-6">
            <ProductIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default shopPage