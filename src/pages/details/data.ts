import pc_img from '../../assets/pc.jpg'
import people_img from '../../assets/people.jpg'
import plane_img from '../../assets/plane.jpg'
import travel_img from '../../assets/travel.jpg'
import house_img from '../../assets/house.jpg'

export interface CardType {
  image: string
  title: string
  description: string
}

export const Cards: CardType[] = [
  {
    image: pc_img,
    title: 'Datortehnika',
    description:
      'Apdrošinām Jūsu datortehniku pret bojājumiem un zādzībām. Izbaudiet drošību un mieru, zinot, ka Jūsu dārgākie IT resursi ir aizsargāti.',
  },
  {
    image: people_img,
    title: 'Dzīvība un labsajūta',
    description:
      'Apdrošinām Jūsu veselību un labklājību. Nodrošiniet sev un saviem mīļajiem visaptverošu aizsardzību un atbalstu dažādās dzīves situācijās.',
  },
  {
    image: plane_img,
    title: 'Lidaparāti',
    description:
      'Apdrošinām Jūsu lidaparātus pret avārijām un bojājumiem. Nodrošiniet drošu un uzticamu lidojumu ar mūsu apdrošināšanas pakalpojumiem.',
  },
  {
    image: travel_img,
    title: 'Ceļojumi',
    description:
      'Apdrošinām Jūsu ceļojumus pret neparedzētiem notikumiem. Ceļojiet bez raizēm, zinot, ka esat aizsargāts pret iespējamām nepatikšanām.',
  },
  {
    image: house_img,
    title: 'Mājokļi',
    description:
      'Apdrošinām Jūsu mājokli pret dažādiem riskiem, piemēram, ugunsgrēkiem un zādzībām. Aizsargājiet savu māju un iedzīvi ar mūsu uzticamo apdrošināšanu.',
  },
]
