import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Navigation() {
  const { user } = useSelector((state) => state.users);

    return (
        <nav id="navigation">
            <div className="container">
                {/* <!-- responsive-nav -->*/}
                <div id="responsive-nav">
                {/*<!-- NAV -->*/} 
                    <ul class="main-nav nav navbar-nav">
                        <li className='active'><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/contact">Contact</Link></li>


                        {user ? 
                            <></>
                            :
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                            </>
                        }
                        
                    </ul>
                    {/*<!-- /NAV -->*/}
                </div>
                {/*<!-- /responsive-nav --> */}
            </div>
        </nav>
    )
  
}
export default Navigation;
