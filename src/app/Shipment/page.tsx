// src/app/Shipment/page.tsx or any relevant component file

"use client";

import {useState } from "react";

const ShipmentPage = async() => {
    const [shipmentId, setShipmentId] = useState<string | null>(null);

    const createShipment= async ()=>{
    
    const addressFrom = {
        name: "Sender Name",
        street1: "123 Sender St.",
        city: "San Francisco",
        state: "CA",
        zip: "94187",
        country: "US",
    };
    const addressTo= {
        name: "Recipient Name",
        street1: "456 Recipient St.",
        city: "New York",
        state: "NY",
        zip: "10001",
        country: "US",
    };
    const parcels= [
        {
            length: "5",
            width: "5",
            height: "5",
            distance_unit: "in",
            weight: "2",
            mass_unit: "lb",
        },];


        try {
          const response = await fetch("/api/ShippoOrder", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  addressFrom,
                  addressTo,
                  parcels,
              }),
          });
      
          const textResponse = await response.text();  // Read response as text to inspect
      
          console.log(textResponse);  // Log the raw response to check
      
          const data = JSON.parse(textResponse);  // Manually parse the JSON
      
          if (response.ok) {
              setShipmentId(data.object_id);
          } else {
              console.log(data.message);
          }
      } catch (error) {
          console.log("Error creating shipment:", error);
      }
      
    
      }
    return (
        <div className="bg-purple-468 mx-auto p-6 text-center">
            <h1>Shippo Shipment Generator</h1>
            <button
                onClick={createShipment}
                className="bg-pink-580 p-4 rounded-md mx-auto"
            >
                Create Shipment
            </button>
            {shipmentId && (
                <p className="text-center font-bold text-2xl">
                    Shipment ID: {shipmentId}
                </p>
            )}
        </div>
    );
  }

export default ShipmentPage