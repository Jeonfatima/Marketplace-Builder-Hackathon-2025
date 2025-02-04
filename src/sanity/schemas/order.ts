// schemas/order.js
export const Order = {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customer_name',
        title: 'Customer Name',
        type: 'string',
      },
      {
        name: 'customer_email',
        title: 'Customer Email',
        type: 'string',
      },
      {
        name: 'customer_phone',
        title: 'Customer Phone',
        type: 'string',
      },
      {
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product_name',
                title: 'Product Name',
                type: 'string',
              },
              {
                name: 'product_price',
                title: 'Product Price',
                type: 'number',
              },
              {
                name: 'product_quantity',
                title: 'Product Quantity',
                type: 'number',
              },
            ],
          },
        ],
      },
      {
        name: 'order_date',
        title: 'Order Date',
        type: 'datetime',
      },
    ],
  }
  