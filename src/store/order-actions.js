import axios from "axios";
import { authActions } from "./auth";
import { setTokenId } from "./auth-actions";


export const createOrder = (Razorpay,token) => {
    return async(dispatch) => {
       
        try {
            const response = await axios.get(`http://16.171.194.246:4000/purchase/premiummembership`, { headers: {"Authorization" : token } });
           
            var options = {
                "key": response.data.key_id,
                "order_id": response.data.response.id,
                "handler": async function(response) {
                 const res = await axios.post('http://16.171.194.246:4000/purchase/updatetransactionstatus', {
                        order_id: options.order_id,
                        payment_id:response.razorpay_payment_id, 
                }, { headers: {"Authorization" : token } }) 
               
                dispatch(setTokenId(res.data))
                   alert('You are Premium User Now');
                   window.location.reload();
                }
            }
            const rzp1 = new Razorpay(options);
            rzp1.open();

            rzp1.on('payment.failed', async function(response){
                alert('Transaction Failed');
               try {
                await axios.post('http://16.171.194.246:4000/purchase/updatetransactionstatus', {
                    order_id: options.order_id,
                    payment_id:response.razorpay_payment_id, 
            }, { headers: {"Authorization" : token } }) 
               
        }catch(err) {
            throw new Error(err);
        }
            })
        }
    catch(error) {
               
                alert('Something went wrong');
            
        };
    };
}
