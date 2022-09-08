import * as React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap'
import {remove} from './store/cartAction'
import './simplecart.css'

const CartItem = props => {
console.log(props,"111111props")
    return (
      <>
         <Button   style={{float: "right"}} color="warning" size="lg" >
      <FontAwesomeIcon icon={faCartArrowDown} />
      
      <span className="icon-button-text-right">{ props.count }</span>
    </Button>
      <section className="container">
      <ul className="products">
        {props.cartItem.map((product, index) => {
          return (
            <li className="row" key={index}>
              <div className="col left">
                <div className="thumbnail">
                  <a href="#">
                    <img src={product.images} alt={product.title} />
                  </a>
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="#">{product.title}</a>
                  </div>
                  <div className="description">{product.description}</div>
                  <div className="price">{product.price}</div>
                </div>
              </div>

              <div className="col right">
                <div className="quantity">
                  <input
                    type="text"
                    className="quantity"
                    step="1"
                    value={product.quantity}
                   
                  />
                </div>

                <div className="remove">
                  <svg
                    onClick={() => props.remove(product.id)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  > 
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                  <button
              type="button"
            //   className={classNames({ disabled: items && items.length === 0 })}
            //   onClick={handleProceedCheckout}
            >
              PROCEED TO CHECKOUT
    //         </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      
    </section>
    </>
  );
   
   
}

const mapStateToProps = state => ({
    products: state.products.products,
    catagories : state.catagories.catagories,
    cartItem : state.cartReducer.cartItem,
    count : state.cartReducer.itemCount
});

const mapDispatchToProps = {remove}
export default connect(mapStateToProps,mapDispatchToProps)(CartItem)



 //     // <div className={classNames("cart-preview", { active: isCartOpen })}>
    //     <div>
    //           <Button   style={{float: "right"}} color="warning" size="lg" >
    //   <FontAwesomeIcon icon={faCartArrowDown} />
      
    //   <span className="icon-button-text-right">{ props.count }</span>
    // </Button>
    //       <ul className="cart-items">
    //         {console.log(props.cartItem,"this is from kartpage")}
           
    //         { props.cartItem.map((product,idx) => {
    //           return (
    //             <li className="cart-item" key={idx}>
    //                 <button
    //                 className="product-remove"
    //                 onClick={() => props.remove(product.id)}
    //               >
    //                 × remove
    //               </button>
    //               <img className="product-image" width="100px" height="100px" src={product.images} />
    //               <div className="product-info">
    //                 <p className="product-name"> name : {product.title}</p>
    //                 <p className="product-price">price : {product.price}</p>
    //               </div>
    //               <div className="product-total">
    //                 <p className="quantity">
    //                   {`${product.inventory} ${
    //                     product.inventory > 1 ? "Nos." : "No."
    //                   }`}
    //                 </p>
    //                 <p className="amount">In stock</p>
    //               </div>
    //               <button
    //           type="button"
    //         //   className={classNames({ disabled: items && items.length === 0 })}
    //         //   onClick={handleProceedCheckout}
    //         >
    //           PROCEED TO CHECKOUT
    //         </button>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //       <div className="action-block">
           
    //       </div>
    //     </div>
    //   );