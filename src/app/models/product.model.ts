export interface Product {
  id: string
  product_id: string
  title: string
  price: number
  sku: string
  position: number
  option1: 'Green'
  option2: null
  option3: null
  created_at: string
  updated_at: string
  taxable: boolean
  barcode: string
  grams: number
  image_id: string
  weight: number
  weight_unit: string
  inventory_item_id: number
  inventory_quantity: number
  old_inventory_quantity: 30
  requires_shipping: true
}
