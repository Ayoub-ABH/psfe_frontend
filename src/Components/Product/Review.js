import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { deleteReview, getReviews, reset } from '../../features/review/reviewSlice';

function Review() {
  
  const {productReviews,isError,isSuccess,message} = useSelector(state => state.reviews);
  const {user} = useSelector(state => state.users);
  const dispatch = useDispatch();
  const {id} = useParams()


  const HandleDeleteReview = (idReview)=>{
    dispatch(deleteReview(idReview))
  }

 const HandlePageClick = (e)=>{
   dispatch(getReviews({idProduct:id,page:e.target.value}))
   
 }
  

  return (
    <div>
        <div className="col-md-6">
                  <div id="reviews">
                    <ul className="reviews">

                      {isSuccess? (productReviews.docs.map((review)=>
                      
                      <li style={{display:"flex",justifyContent:"space-between"}}>
                        <div className="review-heading">
                          <h5 className="name">{review.name}</h5>
                          <p className="date">{review.createdAt}</p>
                          <div className="review-rating">
                          {Array.from(Array(5), (i, k) => {
                              if (k >= review.rating) {
                                return <i className="fa fa-star-o empty" />
                              }
                              return <i className="fa fa-star" />
                            })}
                          </div>
                        </div>
                        <div className="review-body">
                          <p>
                            {review.comment}
                          </p>
                        </div> 
                        { (user && user._id === review.user) ? (
                          <div >
                          <button type="button" onClick={()=> HandleDeleteReview(review._id)} style={{padding:"1px 5px"}} class="btn btn-danger">delete</button>
                        </div>
                        ):(
                          < >
                          </>
                        )}
                        
                      </li>

                      )):(<></>)}

                    </ul>
                    <ul className="reviews-pagination">
                      {Array.from(Array(productReviews.totalPages), (v, k) => {
                          k++;
                          if (k == 1) {
                            return (
                              <li >
                                <button
                                  value={k}
                                  name="page"
                                  onClick={HandlePageClick}
                                  className='input-page-review in-active'

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
                                  onClick={HandlePageClick}
                                  className='input-page-review'
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
                </div>
    </div>
  )
}

export default Review