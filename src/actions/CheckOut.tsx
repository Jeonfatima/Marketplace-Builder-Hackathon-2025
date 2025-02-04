import { client } from "@/sanity/lib/client";
import { Customer } from "@/types/customer";
import { Product } from "@/types/product";

export const createCustomerInSanity = async (customerInfo:Customer) =>
{
    try {
        const customerObject = {
            _type: "customer",
            name: customerInfo.name,
            email: customerInfo.email,
            phone: customerInfo.phone
        }

        const response = await client.create(customerObject)
        console.log("user created in sanity", response)
        return response
    }
    catch (error) {
        console.log("error created user in snaity", error)
        throw error
    }
}


export const createOrderInSanity = async (cartItems:Product[],customer_id:string) =>
    {
        try {
            const orderObject = {
                _type: "order",
                customer:{
                    _type:"reference",
                    _ref:customer_id
                },
                items:cartItems.map((item:Product)=>({
                    _type:"items",
                    _id:item._id,
                    product_name:item.title,
                    product_price:item.price,
                    product_quantity:item.quantity

                })),
                order_date:new Date().toISOString()
            
            }
    
            const response = await client.create(orderObject)
            console.log("order created in sanity", response)
            return response
        }
        catch (error) {
            console.log("error created order in snaity", error)
            throw error
        }
    }


export default async function CheckOut(cartData:Product[],customerInformation:Customer){
  try{
   const customer = await createCustomerInSanity(customerInformation)
   await createOrderInSanity(cartData,customer._id)
   console.log("checkout completed")
  }
  catch(error)
  {
  console.log("error created order and customer in sanity",error)
  }

}