import moment from 'moment'

export const makeDate = (date) => {
  const newDate = new Date(0)
  newDate.setUTCSeconds(date)
  return moment(newDate)
}

export const buttonsMap = {
  all: 'Все',
  favorites: 'Избранное',
  infographics: 'Инфографика',
  illustrations: 'Иллюстрации',
  ui: 'UI',
  restore: 'Реставрации',
  scrapbooking: 'Скрапбукинг',
  drawings: 'Живопись',
  smm: 'SMM',
  ads: 'Реклама',
  printed: 'Печатная продукция',
  logos: 'Логотипы',
}

export const techsMap = {
  vector: 'Вектор',
  raster: 'Растр',
  photoshop: 'Adobe Photoshop',
  affinity: 'Affinity Designer',
  corel: 'Corel Draw',
  sai: 'Paint Tool Sai',
  powerpoint: 'Microsoft PowerPoint',
  keynote: 'Apple Keynote'
}
