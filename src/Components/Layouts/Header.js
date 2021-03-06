import HeaderCart from "./HeaderCart";
import Navigation from "./Navigation";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import { getAllProducts, getSomeProducts } from "../../features/product/productSlice";
import { useEffect, useState } from "react";
import { getAllSettings } from "../../features/settings/settingsSlice";

function Header() {
  const [searchQuery,setSearchQuery] = useState({
    category:"",
    name:""
  })
  const { user } = useSelector((state) => state.users);
  const { categories, isSuccess, isError, message } = useSelector((state) => state.products);
  const { allSettings } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onchange = (e)=>{
    setSearchQuery({   
      ...searchQuery,   
      [e.target.name]:e.target.value
    })

 }

  const onLogout = ()=>{
    dispatch(logout())
    navigate('/')
  }
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getAllProducts());
    
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getAllSettings());
    
  }, []);

  const onsubmit = (e)=>{
    e.preventDefault();
    dispatch(getSomeProducts(searchQuery))
    navigate('/shop')
  }


  const handleMenuClick = (e)=>{
    e.preventDefault();
    const menu = document.querySelector('#responsive-nav')
    if(menu.className == 'active')
     menu.className=''
     else
     menu.className = 'active'
  }

  return (
    <header>
      {/*<!-- TOP HEADER -->*/}
      <div id="top-header">
        <div className="container">
          
            {allSettings.map(setting =>
            <ul className="header-links pull-left hl-mt">
              <li>
              <Link to='/'>
                <i className="fa fa-phone" /> {setting.phone}
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="fa fa-envelope-o" /> {setting.email}
              </Link>
            </li>
            <li>
              <Link to='/'>
                <i className="fa fa-map-marker" />  {setting.address}
              </Link>
            </li>
          </ul>
            )}
            
          <ul className="header-links pull-right ">
            <li>
              <Link to='/'>
                <i className="fa fa-dollar" /> USD
              </Link>
            </li>
            <li>
              {user ? (
                <div class="dropdown">
                  <button
                    class="btn btn-default dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <i className="fa fa-user-o" /> Hi, {user.name}   
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    {user.role == "user" ? (
                      <li>
                        <Link to="/profile" className="drd-links-1">
                          <i class="fa fa-id-card" aria-hidden="true" />
                          profile
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link to="/admin" className="drd-links-1">
                          <i class="fa fa-id-card" aria-hidden="true" />
                          Admin
                        </Link>
                      </li>
                    )}

                    <li>
                      <a onClick={onLogout} className="drd-links-2">
                        <i class="fa fa-sign-out" aria-hidden="true" />
                        logout
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/*<!-- /TOP HEADER -->*/}

      {/*<!-- MAIN HEADER -->*/}
      <div id="header">
        <div className="container">
          <div className="row">
            {/*<!-- LOGO -->*/}
            <div className="col-md-3">
              <div className="header-logo">
                <Link to="/" className="logo">
                  <img src="./img/logo.png" alt />
                </Link>
              </div>
            </div>

            {/*<!-- /LOGO -->*/}

            {/*<!-- SEARCH BAR -->*/}
            <div className="col-md-6">
              <div className="header-search">
                <form onSubmit={onsubmit}>
                  <select className="input-select" name="category" onChange={onchange}>
                  <option value={""}>allCategories</option>
                    {categories.map((category)=>
                    <option value={category}>{category}</option>
                    )}
                    
                  </select>
                  <input className="input" name="name" onChange={onchange} placeholder="Search here" />
                  <button className="search-btn">Search</button>
                </form>
              </div>
            </div>

            {/*<!-- /SEARCH BAR -->*/}

            {/*<!-- ACCOUNT -->*/}
            <div className="col-md-3 clearfix">
              <div className="header-ctn">
                {/*<!-- Wishlist -->*/}
                {/* <div>
                  <Link to="/wishlist">
                    <i className="fa fa-heart-o" />
                    <span>Your Wishlist</span>
                    <div className="qty">2</div>
                  </Link>
                </div> */}

                {/*<!-- /Wishlist -->*/}

                {/*<!-- Cart -->*/}
                <HeaderCart />
                {/*<!-- /Cart -->*/}

                {/*<!-- Menu Toogle -->*/}
                <div className="menu-toggle">
                  <a onClick={handleMenuClick} href="#">
                    <i className="fa fa-bars" />
                    <span>Menu</span>
                  </a>
                </div>

                {/*<!-- /Menu Toogle -->*/}
              </div>
            </div>
            {/*<!-- /ACCOUNT -->*/}
          </div>
        </div>
      </div>
      {/*<!-- /MAIN HEADER -->*/}

      {/*<!-- NAVIGATION -->*/}
      <Navigation />
      {/*<!-- /NAVIGATION -->*/}
    </header>
  );
}

export default Header;
