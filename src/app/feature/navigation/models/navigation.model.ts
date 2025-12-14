export type Menu = MenuItems[]

export interface MenuList {
  id: number
  name: string
} 

export interface InnerList {
  type: string;
  subtype: string[]
}

export interface MenuItems {
  id: number
  name: string
  description: any
  url: string
  categoryId?: number
  imageId: number
  imageUrl: string
  iconId: number
  iconUrl: string
  parentItemId: any
  isNew: boolean
  forMain: boolean
  isActive: boolean
  order: number
  isExpanded: boolean
  childItems: ChildItem[]
}

export interface ChildItem {
  id: number
  name: string
  description: any
  url?: string
  categoryId?: number
  imageId?: number
  imageUrl?: string
  iconId: any
  iconUrl: any
  parentItemId: number
  isNew: boolean
  forMain: boolean
  isActive: boolean
  order: number
  isExpanded: boolean
  childItems: InnerChild[]
}

export interface InnerChild {
  id: number
  name: string
  description: any
  url: string
  categoryId?: number
  imageId: number
  imageUrl: string
  iconId: any
  iconUrl: any
  parentItemId: number
  isNew: boolean
  forMain: boolean
  isActive: boolean
  order: number
  isExpanded: boolean
  childItems: any
}
