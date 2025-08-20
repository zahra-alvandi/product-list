import "./cart.css"

function Cart() {
    return (
        <div className="container">
            <div className="cart-title">
                <h2>Your Cart (0)</h2>
            </div>
            <div className="cart-items-box"> 
               <div className="empty-cart-img">
                 <img src="images/illustration-empty-cart.svg" alt="" />
               </div>
               <div>
                <p className="empty-cart-text">Your added items will appers here</p>
               </div>
            </div>
        </div>
    )
}

export default Cart