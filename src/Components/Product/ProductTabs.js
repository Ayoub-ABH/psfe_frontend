import React, { Component } from "react";

export default class ProductTabs extends Component {
  render() {
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
                  Reviews (3)
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
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
                        <span>4.5</span>
                        <div className="rating-stars">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                        </div>
                      </div>
                      <ul className="rating">
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
                      </ul>
                    </div>
                  </div>

                  {/*<!-- /Rating -->*/}

                  {/*<!-- Reviews -->*/}
                  <div className="col-md-6">
                    <div id="reviews">
                      <ul className="reviews">
                        <li>
                          <div className="review-heading">
                            <h5 className="name">John</h5>
                            <p className="date">27 DEC 2018, 8:0 PM</p>
                            <div className="review-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o empty" />
                            </div>
                          </div>
                          <div className="review-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="review-heading">
                            <h5 className="name">John</h5>
                            <p className="date">27 DEC 2018, 8:0 PM</p>
                            <div className="review-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o empty" />
                            </div>
                          </div>
                          <div className="review-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="review-heading">
                            <h5 className="name">John</h5>
                            <p className="date">27 DEC 2018, 8:0 PM</p>
                            <div className="review-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o empty" />
                            </div>
                          </div>
                          <div className="review-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua
                            </p>
                          </div>
                        </li>
                      </ul>
                      <ul className="reviews-pagination">
                        <li className="active">1</li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/*<!-- /Reviews -->*/}

                  {/*<!-- Review Form -->*/}
                  <div className="col-md-3">
                    <div id="review-form">
                      <form className="review-form">
                        <input
                          className="input"
                          type="text"
                          placeholder="Your Name"
                        />
                        <input
                          className="input"
                          type="email"
                          placeholder="Your Email"
                        />
                        <textarea
                          className="input"
                          placeholder="Your Review"
                          defaultValue={""}
                        />
                        <div className="input-rating">
                          <span>Your Rating: </span>
                          <div className="stars">
                            <input
                              id="star5"
                              name="rating"
                              defaultValue={5}
                              type="radio"
                            />
                            <label htmlFor="star5" />
                            <input
                              id="star4"
                              name="rating"
                              defaultValue={4}
                              type="radio"
                            />
                            <label htmlFor="star4" />
                            <input
                              id="star3"
                              name="rating"
                              defaultValue={3}
                              type="radio"
                            />
                            <label htmlFor="star3" />
                            <input
                              id="star2"
                              name="rating"
                              defaultValue={2}
                              type="radio"
                            />
                            <label htmlFor="star2" />
                            <input
                              id="star1"
                              name="rating"
                              defaultValue={1}
                              type="radio"
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
}
