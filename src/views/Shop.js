import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Store from "../Components/Shop/Store";
import {
  getAllProducts,
  getSomeProducts,
} from "../features/product/productSlice";

let query = {};

function Shop() {
  const dispatch = useDispatch();
  const { brands, categories, shopProducts, isSuccess, isError, message } =
    useSelector((state) => state.products);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getAllProducts());
  }, []);

  const HandleChange = (e) => {
    if (e.target.name == "brand") query.brand = e.target.value;
    if (e.target.name == "category") query.category = e.target.value;
    if (e.target.name == "price_min") query.min_price = e.target.value;
    if (e.target.name == "price_max") query.max_price = e.target.value;
    if (e.target.name == "sortBy") query.sortBy = e.target.value;
    if (e.target.name == "page") query.page = e.target.value;
    if (e.target.name == "reset") query = {};


    dispatch(getSomeProducts(query));
  };

  return (
    <div>
      {/*<!-- SECTION --> */}
      <div className="section">
        {/*<!-- container --> */}
        <div className="container">
          {/*<!-- row --> */}
          <div className="row">
            {/*<!-- ASIDE -->*/}
            <div id="aside" className="col-md-3">
              {/*<!-- aside Widget -->*/}
              <div className="aside">
                <h3 className="aside-title">Categories</h3>
                <div className="checkbox-filter">
                  {isSuccess ? (
                    categories.map((category) => (
                      <div>
                        <input
                          onClick={HandleChange}
                          value={category}
                          type="radio"
                          name="category"
                          className="input-radio-shop"
                        />
                        <label>
                          <span style={{ color: "#D10024" }}>{category}</span>
                          <small>(120)</small>
                        </label>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              {/*<!-- /aside Widget -->*/}

              {/*<!-- aside Widget -->*/}
              <div className="aside">
                <h3 className="aside-title">Price</h3>

                <div>
                  <label htmlFor="price-min" style={{ color: "#D10024" }}>
                    Min
                  </label>
                  <input
                    id="price-min"
                    name="price_min"
                    style={{ width: "80px", marginLeft: "11px" }}
                    onChange={HandleChange}
                    type="number"
                    placeholder=".."
                  />
                </div>

                <div>
                  <label htmlFor="price-max" style={{ color: "#D10024" }}>
                    Max
                  </label>
                  <input
                    id="price-max"
                    name="price_max"
                    style={{ width: "80px", marginLeft: "8px" }}
                    onChange={HandleChange}
                    type="number"
                    placeholder=".."
                  />
                </div>
              </div>

              {/*<!-- /aside Widget -->*/}

              {/*<!-- aside Widget -->*/}
              <div className="aside">
                <h3 className="aside-title">Brand</h3>
                <div className="checkbox-filter">
                  {isSuccess ? (
                    brands.map((brand) => (
                      <div>
                        <input
                          value={brand}
                          onClick={HandleChange}
                          type="radio"
                          name="brand"
                          className="input-radio-shop"
                        />
                        <label>
                          <span style={{ color: "#D10024" }}>{brand}</span>
                          <small>(120)</small>
                        </label>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              {/*<!-- /aside Widget -->*/}
            </div>
            {/*<!-- /ASIDE -->*/}

            {/*< !-- STORE -->*/}
            <div id="store" className="col-md-9">
              {/* <!-- store top filter -->*/}
              <div className="store-filter clearfix">
                <div className="store-sort">
                  <label>
                    Sort By:
                    <select
                      className="input-select"
                      name="sortBy"
                      onChange={HandleChange}
                    >
                      <option value={"name"}>Name</option>
                      <option value={"rating"}>rating</option>
                    </select>
                  </label>

                  <label>
                    Reset:
                    <button
                      name="reset"
                      className="btn btn-danger"
                      onClick={HandleChange}
                    >
                      reset
                    </button>
                  </label>
                </div>
                <ul className="store-grid">
                  <li className="active">
                    <i className="fa fa-th" />
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-th-list" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*<!-- /store top filter --> */}

              {isSuccess ? <Store products={shopProducts} /> : <></>}

              {/*<!-- store bottom filter --> */}
              <div className="store-filter clearfix">
                <span className="store-qty">
                  Showing {shopProducts.limit}-{shopProducts.totalDocs} products
                </span>
                <ul className="store-pagination">
                  {Array.from(Array(shopProducts.totalPages), (v, k) => {
                    k++;
                    if (k == 1) {
                      return (
                        <li >
                          <button
                            value={k}
                            name="page"
                            onClick={HandleChange}
                            className='input-page in-active'

                          >
                          {k}
                          </button>
                        </li>
                      );
                    } else
                      return (
                        <li>
                          <button
                            name="page"
                            value={k}
                            onClick={HandleChange}
                            className='input-page'
                          >
                          {k}
                          </button>
                        </li>
                      );
                  })}

                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- /store bottom filter -->*/}
            </div>
            {/*< !-- STORE -->*/}
          </div>
          {/* <!-- /row -->*/}
        </div>
        {/*<!-- /container --> */}
      </div>
      {/* <!-- /SECTION -->*/}
    </div>
  );
}

export default Shop;
