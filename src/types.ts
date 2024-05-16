export type MenuItemType = 'Home' | 'Details' | 'Contacts'
export type UrlType = '/' | '/details' | '/contacts'
export interface MenuType {
  menuItem: MenuItemType
  url: UrlType
}
export type SelectedMenuType = 'selected__menu__item' | ''
