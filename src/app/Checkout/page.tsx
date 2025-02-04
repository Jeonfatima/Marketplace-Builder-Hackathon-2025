/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Product } from '@/types/product'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import CheckOut from '@/actions/CheckOut'
import { createOrderInSanity, createCustomerInSanity } from '@/actions/CheckOut'

const Page = () => {
  interface ShipmentDetails {
    orderId: { _id: string; _createdAt: string; _updatedAt: string }; // Update the structure of orderId
    totalAmount: number;
    eta: string;
    trackingNumber: string;
  }
  

  const [checkoutStatus, setCheckoutStatus] = useState<string | null>(null);
  
  const [shipmentDetails, setShipmentDetails] = useState<ShipmentDetails | null>(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: ""
  })

  useEffect(() => {
    if (shipmentDetails) {
      console.log(shipmentDetails);
    }
  }, [shipmentDetails]); // Inspect the structure of the object

  const handlePlaceOrder = async () => {
    const addressFrom = {
      name: "Furniro",
      street: "123 store lane",
      city: "Karachi",
      state: "CA",
      zip: "12345",
      country: "Pakistan",
    };

    const addressTo = {
      name: customerInfo.name,
      street: "456 user street",
      city: "Karachi",
      state: "NY",
      zip: "12983",
      country: "Pakistan",
    };

    const parcels = cartItems.map(() => ({
      length: "10",
      width: "10",
      height: "10",
      distance_unit: "in",
      weight: "5",
      mass_unit: "lb",
    }));

    try {
      // Step 1: Create the customer in Sanity
      const customerResponse = await createCustomerInSanity(customerInfo);
      const customer_id = customerResponse._id; // Extract the ID of the created customer

      // Step 2: Create the order in Sanity using the customer_id
      const orderId = await createOrderInSanity(cartItems, customer_id);

      // Step 3: Use the orderId in the Shippo API call
      const response = await fetch("/api/ShippoOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addressFrom,
          addressTo,
          parcels,
          orderId,
          totalAmount: totalPrice,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setShipmentDetails({
          orderId: data.orderId,
          totalAmount: data.totalAmount,
          eta: data.eta,
          trackingNumber: data.trackingNumber,
        });
       

       
        setCheckoutStatus("Order placed successfully!");
      } else {
        setCheckoutStatus("Failed to place order. Please try again.");
      }

    } catch (error) {
      console.error("Checkout Error", error);
      setCheckoutStatus("An error occurred. Please try again later.");
    }
  };

  const handleCheckout = () => {
    CheckOut(cartItems, customerInfo);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
    console.log(`Updated ${name}:`, value);
  };

  const { cartItems, totalPrice }: any = useContext(CartContext);

  return (
    <div>
    <div className="mx-auto max-w-[1440px] p-6 grid grid-cols-1 lg:grid-cols-[3fr_2fr]">

      {/* Left Section - Billing Details Form */}
      <div className="lg:max-w-[608px] m-[10%]">
        <h2 className="text-3xl font-semibold mb-6">Billing details</h2>
        <form className="space-y-6">
          {/* Name Fields - Side-by-Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="text-3xl font-bold">
              <label htmlFor="firstName" className="block text-xl font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xl font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="streetAddress" className="block text-xl font-medium text-gray-700">
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="House number and street name"
            />
          </div>

          <div>
            <label htmlFor="zip" className="block text-xl font-medium text-gray-700">
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xl font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={customerInfo.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={customerInfo.email}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sxl font-medium text-gray-700">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={4}
            />
          </div>
        </form>
      </div>

      {/* Right Section - Order Summary */}
      <div className="p-6 rounded-md self-start m-[10%]">
        <h2 className="text-2xl font-semibold mb-6">Your Order</h2>
        <div className="border-b pb-4 mb-4">
          <div className="flex flex-col justify-between text-sm">
            {cartItems.map((product: Product) => (
              <div key={product._id}>
                <div className="flex items-center flex-1 py-2 px-4">
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    width={50}
                    height={50}
                    className="w-[108px] h-[108px] object-cover rounded mr-4"
                  />
                  <div className="flex flex-col gap-2">
                    <span><div className="font-bold">Name: </div>{product.title}</span>
                    <span><div className="font-bold">Quantity: </div>{product.quantity}</span>
                  </div>
                </div>

                <div className="flex-1 py-2 px-4"><div className="font-bold">Price:</div> Rs:{product.price}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm border-b pb-4 mb-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{totalPrice}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg pt-6">
            <span>Total</span>
            <span className="text-xl text-yellow-600 font-bold">{totalPrice}</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <div className="space-y-2">
            <div>
              <input
                type="radio"
                id="bankTransfer"
                name="paymentMethod"
                className="mr-2"
                defaultChecked
              />
              <label htmlFor="bankTransfer" className="text-sm text-gray-700">
                Direct Bank Transfer
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Make your payment directly into our bank account. Please use your Order ID as the
                payment reference.
              </p>
            </div>
            <div>
              <input
                type="radio"
                id="cashOnDelivery"
                name="paymentMethod"
                className="mr-2"
              />
              <label htmlFor="cashOnDelivery" className="text-sm text-gray-700">
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>
        <button
          className="w-[300px] h-[64px] text-black font-medium py-3 border border-black items-center rounded-md hover:bg-gray-100"
          onClick={async () => {
            setCheckoutStatus("Processing your order...");
            await handlePlaceOrder();
            handleCheckout();
          }}
        >
          Place order
        </button>
      </div>

<div className='flex flex-col mx-auto'>
      {/* Shipment Details */}
      {checkoutStatus && <p className="text-blue-300 mt-4 text-3xl">{checkoutStatus}</p>}
      {shipmentDetails && shipmentDetails.orderId && (
  <div className="mt-8 bg-green-100 hover:bg-green-400 p-6 rounded-lg">
    <h3 className="text-xl font-bold">Shipment Details</h3>
    <p>Order Id: {shipmentDetails.orderId._id}</p>
    <p>Total Amount: Rs {shipmentDetails.totalAmount}</p>
    <p>ETA: {shipmentDetails.eta}</p>
    <p>Tracking Number: {shipmentDetails.trackingNumber || "Tracking information is not available yet"}</p>
  </div>
)}

</div>



    </div>
    </div>
  );
};

export default Page;
