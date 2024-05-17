export type MenuItemType = 'Home' | 'Details' | 'Contacts'
export type UrlType = '/' | '/details' | '/contacts'
export interface MenuType {
  menuItem: MenuItemType
  url: UrlType
}
export type SelectedMenuType = 'selected__menu__item' | ''
export type AppBarHideType = 'appbar__hide' | ''

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface TimezoneData {
  abbreviation: string
  client_ip: string
  datetime: string
  day_of_week: number
  day_of_year: number
  dst: boolean
  dst_from: string
  dst_offset: number
  dst_until: string
  raw_offset: number
  timezone: string
  unixtime: number
  utc_datetime: string
  utc_offset: string
  week_number: number
}

export enum MessageType {
  OPEN = 'Perfekti, esam atvērti un gaidām Tevi ciemos.',
  CLOSE = 'Ups! Šodien diemžēl esam ciet. Droši nāc rīt.',
  NONE = '',
}

export enum Device {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}
