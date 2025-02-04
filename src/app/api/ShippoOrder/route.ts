import { NextResponse } from 'next/server';
import axios from 'axios';

// Named export for POST method
export async function POST(req: Request) {
    try {
        // Get request body
        const { addressFrom, addressTo, parcels, orderId, totalAmount } = await req.json();

        // Validate request body
        if (!addressFrom || !addressTo || !parcels || !orderId || !totalAmount) {
            return NextResponse.json(
                { message: "Missing required fields in request body." },
                { status: 400 }
            );
        }

        // Shippo API request
        const response = await axios.post(
            "https://api.goshippo.com/shipments/",
            {
                address_from: addressFrom,
                address_to: addressTo,
                parcels,
                async: false,
            },
            {
                headers: {
                    Authorization: `ShippoToken shippo_test_183986b3faff1e66d7eeca18abadf3c5044424e8`,  // Make sure this is a valid token
                    "Content-Type": "application/json",
                },
            }
        );

        // Debug full response
        console.log("Full shipment response:", response.data);

        // Extract shipment details
        const shipment = response.data;
        const trackingNumber = shipment.object_id; // Assuming object_id is the tracking number
        const eta = shipment.eta || "3-5 business days";

        // Respond with the relevant details
        return NextResponse.json({
            orderId,
            totalAmount,
            trackingNumber,
            eta,
            status: "Shipment created successfully!",
        }, { status: 200 });

    } catch (error: any) {
        console.error("Error creating shipment:", error.response?.data || error.message);

        // Handle different types of errors
        const errorMessage = error.response?.data || { message: "Failed to create shipment" };
        return NextResponse.json({
            message: "Error creating shipment",
            error: errorMessage,
        }, { status: 500 });
    }
}
