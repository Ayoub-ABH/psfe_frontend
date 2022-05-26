import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { addReview, getReviews, reset } from '../../features/review/reviewSlice';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import Review from './Review';
import { getOneProduct } from '../../features/product/productSlice';




function ProductTabs(props) {

  const { id } = useParams();
  const { isSuccess,isError, message } = useSelector(state => state.reviews)

  const [data, setData] = useState({
    idProduct: id,
    comment: "",
    rating: 0
  })
  const dispatch = useDispatch();


  const onchange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })

  }

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getReviews({idProduct:id}))
    
    dispatch(reset())
  }, [ message]);

  useEffect(() => {

    dispatch(getOneProduct(id))
    dispatch(reset())

   }, [message]);
  

  const handleAddReview = (e) => {
    e.preventDefault();
    dispatch(addReview(data))
    //dispatch(reset())
  }

  return (
    <div>
      {/*<!-- Product tab -->*/}
      <div className="col-md-12">
        <div id="product-tab">
          {/*<!-- product tab nav -->*/}
          <ul className="tab-nav">
            <li className="active">
              <a data-toggle="tab" href="#tab1">
                Description
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab2">
                Details
              </a>
            </li>
            <li>
              <a data-toggle="tab" href="#tab3">
                Reviews ({props.product.numReviews})
              </a>
            </li>
          </ul>

          {/*<!-- /product tab nav -->*/}

          {/*<!-- product tab content -->*/}
          <div className="tab-content">
            {/*<!-- tab1  -->*/}
            <div id="tab1" className="tab-pane fade in active">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    {props.product.description}
                  </p>
                </div>
              </div>
            </div>

            {/*<!-- /tab1  -->*/}

            {/*<!-- tab2  -->*/}
            <div id="tab2" className="tab-pane fade in">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    {props.product.details}

                  </p>
                </div>
              </div>
            </div>

            {/*<!-- /tab2  -->*/}

            {/*<!-- tab3  -->*/}
            <div id="tab3" className="tab-pane fade in">
              <div className="row">
                {/*<!-- Rating -->*/}
                <div className="col-md-3">
                  <div id="rating">
                    <div className="rating-avg">
                      <span>{props.product.rating}</span>
                      <div className="rating-stars">
                        {Array.from(Array(5), (i, k) => {
                          if (k >= props.product.rating) {
                            return <i className="fa fa-star-o" />
                          }
                          return <i className="fa fa-star" />
                        })}

                      </div>
                    </div>
                    {/* <ul className="rating">
                      <li>
                        <div className="rating-stars">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="rating-progress">
                          <div style={{ width: "80%" }} />
                        </div>
                        <span className="sum">3</span>
                      </li>
                      <li>
                        <div className="rating-stars">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="rating-progress">
                          <div style={{ width: "60%" }} />
                        </div>
                        <span className="sum">2</span>
                      </li>
                      <li>
                        <div className="rating-stars">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="rating-progress">
                          <div />
                        </div>
                        <span className="sum">0</span>
                      </li>
                      <li>
                        <div className="rating-stars">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="rating-progress">
                          <div />
                        </div>
                        <span className="sum">0</span>
                      </li>
                      <li>
                        <div className="rating-stars">
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="rating-progress">
                          <div />
                        </div>
                        <span className="sum">0</span>
                      </li>
                    </ul> */}
                  </div>
                </div>

                {/*<!-- /Rating -->*/}

                {/*<!-- Reviews -->*/}
                 
                 <Review />

                {/*<!-- /Reviews -->*/}

                {/*<!-- Review Form -->*/}
                <div className="col-md-3">
                  <div id="review-form">
                    <form onSubmit={handleAddReview} className="review-form">

                      <textarea
                        className="input"
                        placeholder="Your Review"
                        name="comment"
                        onChange={onchange}
                      />
                      <div className="input-rating">
                        <span>Your Rating: </span>
                        <div className="stars">
                          <input
                            id="star5"
                            name="rating"
                            defaultValue={5}
                            type="radio"
                            onChange={onchange}
                          />
                          <label htmlFor="star5" />
                          <input
                            id="star4"
                            name="rating"
                            defaultValue={4}
                            type="radio"
                            onChange={onchange}
                          />
                          <label htmlFor="star4" />
                          <input
                            id="star3"
                            name="rating"
                            defaultValue={3}
                            type="radio"
                            onChange={onchange}
                          />
                          <label htmlFor="star3" />
                          <input
                            id="star2"
                            name="rating"
                            defaultValue={2}
                            type="radio"
                            onChange={onchange}
                          />
                          <label htmlFor="star2" />
                          <input
                            id="star1"
                            name="rating"
                            defaultValue={1}
                            type="radio"
                            onChange={onchange}
                          />
                          <label htmlFor="star1" />
                        </div>
                      </div>
                      <button className="primary-btn">Submit</button>
                    </form>
                  </div>
                </div>

                {/*<!-- /Review Form -->*/}
              </div>
            </div>
            {/*<!-- /tab3  -->*/}
          </div>
          {/*<!-- /product tab content  -->*/}
        </div>
      </div>
      {/*<!-- /product tab -->*/}
    </div>
  );

}

export default ProductTabs;