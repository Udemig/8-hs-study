import { render } from '@testing-library/react';
import Card from '.';

const item = {
  name: 'Chocolate',
  imagePath: '/images/chocolate.png',
};

const basket = [
  {
    name: 'Chocolate',
    imagePath: '/images/chocolate.png',
    id: 'c3ad',
  },
  {
    name: 'Chocolate',
    imagePath: '/images/chocolate.png',
    id: 'c3ad',
  },
  {
    name: 'Vanilla',
    imagePath: '/images/vanilla.png',
    id: 'ad58',
  },
];

// Prop olarak veri alan bileşenleri test ediyorsak
// Aldıkları propların benzerini göndermemiz gerekir
test('', async () => {
  render(<Card item={item} basket={basket} setBasket={() => {}} />);
});
