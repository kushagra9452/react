import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Compare, ProductList} from '../../components'
import * as productActions from '../../actions/product'
import {connect} from 'react-redux'

class Home extends Component {
  componentWillMount() {
    this.props.actions.getProducts()
  }

  render() {
    const {products, actions} = this.props;
    const compareProducts = products.filter(product => product.compare);

    return (
      <div className="home mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">__communityT("Two labels in one line. This is First-one.") xyz__text __communityT("This is second-label")</h2>
            <h2 className="mb-3">__commonT("Two different namespace labels in one line. This is First-one with __commonT.") xyz__text __("This is second-label with __")</h2>
            <h2 className="mb-3">
              <CommunityTrans i18nKey="ToughestTestcase" count={toughness}>
                  Hello <strong>{{name}}</strong>, you have {{count}} unread message. <link>Got the message.</link>
              </CommunityTrans>
            </h2>
          </div>
        </div>
        <ProductList products={products} compare={actions.compare}/>
        {compareProducts.length >= 2 &&
          <Compare products={compareProducts}/>
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.product.products
  }),
  dispatch => ({
    actions: bindActionCreators(productActions, dispatch)
  })
)(Home)
