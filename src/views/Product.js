import React, { Component } from 'react'
import ProductDetail from '../Components/Product/ProductDetail'
import ProductTabs from '../Components/Product/ProductTabs'
import RelatedProds from '../Components/Product/RelatedProds'

export default class Product extends Component {
  
  render() {
    return (
      <div>
            {/*<!-- SECTION -->*/}
            <div className="section">
                {/*<!-- container -->*/}
                <div className="container">
                    {/*<!-- row -->*/}
                    <div className="row">
                    <ProductDetail/>
                    <ProductTabs/>
                    </div>
                    {/*<!-- /row -->*/}
                </div>
                {/*<!-- /container -->*/}
            </div> 
            <RelatedProds/>  
      </div>
    )
  }
}
