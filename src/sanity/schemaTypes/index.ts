import { type SchemaTypeDefinition } from 'sanity'
import { Customer } from '@/sanity/schemas/customer'
import { Order } from '@/sanity/schemas/order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Customer, Order],
}
