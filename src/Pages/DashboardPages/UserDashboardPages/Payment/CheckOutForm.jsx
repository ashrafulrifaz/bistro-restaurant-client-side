import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './common.css'
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCart from "../../../../Hooks/UseCart";
import useUserData from "../../../../Hooks/useUserData";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [showError, setShowError] = useState('')
    const [TransictionId, setTransictionId] = useState(null)
    const [clientSecret, setClientSecret] = useState("");
    const axiosSecure = useAxiosSecure()
    const user = useUserData()
    const [cartData] = useCart()
    const totalPrice = cartData?.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if(totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', {price: totalPrice})
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        console.log('card', card);
        if(card == null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('payment method error', error);
            setShowError(error.message)
        } else {
            console.log(paymentMethod);
            setShowError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.name || 'unknown'
                }
            }
        })

        if(confirmError){
            console.log('payment intent error', confirmError);
            setShowError(confirmError.message)
        } else {
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status === "succeeded"){
                setTransictionId(paymentIntent.id)
                setShowError('')

                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    TransictionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cartData?.map(item => item._id),
                    menuItemId: cartData?.map(item => item?.menu_id),
                    status: 'succeed'
                }

                const paymentResponce = await axiosSecure.post('/payment', payment)
                console.log(paymentResponce);
            }

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <p className="text-red-500 text-center">{showError}</p>
            {TransictionId && <p className="text-green-500 text-center">Your Transiction Id: {TransictionId}</p>}
            <div className="text-center" id="payment-field">
                <button className="bg-[#570DF8] w-2/6" type="submit" disabled={!stripe || !clientSecret}>
                Pay
                </button>
            </div>
        </form>
    );
};

export default CheckOutForm;