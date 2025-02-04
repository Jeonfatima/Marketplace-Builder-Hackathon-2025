// schemas/customer.js
export const Customer = {
    name: "customer",
    type: "document", // type should be "document" instead of "customer"
    title: "Customer",
    fields: [
      { name: "name", type: "string", title: "Name" },
      { name: "email", type: "string", title: "Email" },
      { name: "phone", type: "string", title: "Phone" },
    ],
  }
  
  