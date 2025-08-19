import "./products.css"

function Product() {
    return (
        <div>
      <div className='header-title'>
        <h2>Dessert</h2>
      </div>

      <div>
        <div>
          <div className="product-img">
            <img className="products-img" src="/images/image-waffle-mobile.jpg" alt="" />
          <div className='adding-btn'>
            <button className="add-to-cart-btn">
                <img src="images/icon-add-to-cart.svg" alt="" />
                <span>Add to Cart</span>
            </button>
          </div>
          </div>
        </div>

        <div>
          <span>Waffle</span>
          <p>Waffle with Berries</p>
          <p>$6.50</p>
        </div>

      </div>
    </div>
    )
}

export default Product