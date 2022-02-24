type ISlide = {
  [index: number]: {
    TITLE: string,
    DESCRIPTION: string,
  }
};

export const Slides: ISlide = {
  1: {
    TITLE: 'Бесплатная парковка',
    DESCRIPTION: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, '
    + 'а также в аэропортах.',
  },
  2: {
    TITLE: 'Страховка',
    DESCRIPTION: 'Полная страховка автомобиля.',
  },
  3: {
    TITLE: 'Бензин',
    DESCRIPTION: 'Полный бак на любой заправке города за наш счёт.',
  },
  4: {
    TITLE: 'Обслуживание',
    DESCRIPTION: 'Автомобиль проходит еженедельное ТО.',
  },
};

export const LEFT_ARROW = 'left';
export const RIGHT_ARROW = 'right';
