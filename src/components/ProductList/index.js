import React from 'react'
import {Product} from '../'

const ProductList = ({products, compare}) =>
  <div className="row mt-3">
      {products.map(product =>
        <Product key={product.id} product={__communityT("MoreNewlabels")} compare={compare} />
      )}
      <CommunityTrans>
        Hello there this is Trans label.
      </CommunityTrans>
  </div>;

export default ProductList
