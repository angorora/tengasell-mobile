export interface Product {
  id?: string
  title: string
  description: string
  price: number
  sku?: string
  created_at?: string
  updated_at?: string
  taxable?: boolean
  barcode?: string
  grams?: number
  image_id?: string
  image_url?: string
  weight?: number
  weight_unit?: string
  inventory_item_id?: number
  inventory_quantity?: number
  old_inventory_quantity?: number
  requires_shipping?: true
}
export interface ProductDisplayFilter {
  name: string
  handle: string
  displayOrder: number
  filterId: number
}
export const PRODUCTS_MOCK: Product[] = [
  {
    title: 'SAMSUNG GT WATCH 2020',
    description:
      'At some point during development of a project, you will have to mock some data and this one is no exception.',
    price: 100,
    image_url: 'assets/images/unnamed.jpg',
  },
  {
    title: 'Test Product 2',
    description:
      'At some point during development of a project, you will have to mock some data and this one is no exception.',
    price: 100,
    image_url: 'assets/images/iphone.png',
  },
  {
    title: 'Test Product 3',
    description:
      'At some point during development of a project, you will have to mock some data and this one is no exception.',
    price: 100,
    image_url: 'assets/images/iphone.png',
  },
  {
    title: 'Test Product 4',
    description:
      'At some point during development of a project, you will have to mock some data and this one is no exception.',
    price: 100,
    image_url: 'assets/images/iphone.png',
  },
  {
    title: 'Test Product 5',
    description:
      'At some point during development of a project, you will have to mock some data and this one is no exception.',
    price: 100,
    image_url: 'assets/images/iphone.png',
  },
  {
    title: 'Test Product 6',
    description:
      'At some point during development of a project, you will have to mock some data and this one is no exception.',
    price: 100,
    image_url: 'assets/images/iphone.png',
  },
  {
    title: 'Test Product 7',
    description:
      'At some point during development of a project, you will have to mock some data and this one is no exception.',
    price: 100,
    image_url: 'assets/images/iphone.png',
  },
  {
    title: 'Test Product 8',
    description:
      'At some point during development of a project, you will have to mock some data and this one is no exception.',
    price: 100,
    image_url: 'assets/images/iphone.png',
  },
  {
    title: 'Test Product 9',
    description:
      'At some point during development of a project, you will have to mock some data and this one is no exception.',
    price: 100,
    image_url: 'assets/images/iphone.png',
  },
  {
    title: 'Test Product 10',
    description:
      'At some point during development of a project, you will have to mock some data and this one is no exception.',
    price: 100,
    image_url: 'assets/images/iphone.png',
  },
  {
    title: 'Test Product 11',
    description:
      'At some point during development of a project, you will have to mock some data and this one is no exception.',
    price: 100,
    image_url: 'assets/images/iphone.png',
  },
  {
    title: 'Test Product 12',
    description:
      'At some point during development of a project, you will have to mock some data and this one is no exception.',
    price: 100,
    image_url: 'assets/images/iphone.png',
  },
]
export const PRODUCT_FILTER_MOCKS: ProductDisplayFilter[] = [
  {
    name: 'Suggestions',
    handle: 'default',
    displayOrder: 1,
    filterId: 1,
  },
  {
    name: 'New',
    handle: 'new',
    displayOrder: 2,
    filterId: 2,
  },
  {
    name: 'Popular',
    handle: 'popular',
    displayOrder: 3,
    filterId: 3,
  },
  {
    name: 'On Discount',
    handle: 'discount',
    displayOrder: 4,
    filterId: 4,
  },
  {
    name: 'Delivered',
    handle: 'deliver',
    displayOrder: 5,
    filterId: 5,
  },
  {
    name: 'Collect',
    handle: 'collect',
    displayOrder: 6,
    filterId: 6,
  },
  {
    name: 'Near You',
    handle: 'near',
    displayOrder: 7,
    filterId: 7,
  },
]
