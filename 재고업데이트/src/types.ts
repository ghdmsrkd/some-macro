
//재고
export type Inventory = {
  index: string
  product: {
      name: string
      id: string
      color: string
      size: string
  }
  amount: number
}