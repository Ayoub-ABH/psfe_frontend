import axios from "axios";

const PayButton = ({ cartItems }) => {

    const handleCheckout =  () => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if(userInfo === null){
            console.log('no user')
        }else{
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        axios.post(`http://localhost:5000/api/order/create-checkout-session`,{cartItems},config)
            .then((response) => {
                 if (response.data.url) {
                        window.location.href = response.data.url;
                }
            })
            .catch((err) => console.log(err.message));
        }

    };

    return (
        <>
            <button onClick={() => handleCheckout()} className="btn btn-success nr-l" >
                Checkout with <strong>stripe</strong> <i className="fa fa-arrow-circle-right" />
            </button>
        </>
    );
};

export default PayButton;