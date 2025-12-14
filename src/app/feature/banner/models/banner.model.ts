export interface Root {
  banners: Banner[]
}

export interface Banner {
  title: string
  bannerType: number
  productId: any
  promotionId: any
  route: string
  categoryId: any
  categoryName: any
  orderNo: number
  webImageUrl: string
  mobileImageUrl: string
  position: number
  largeBanner: boolean
  isAbsoluteUrl: boolean
  webDimensions: any
  mobileDimensions: any
}
