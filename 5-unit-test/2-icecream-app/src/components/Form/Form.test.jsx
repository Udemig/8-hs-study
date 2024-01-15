import { fireEvent, render, screen } from '@testing-library/react';
import Form from '.';
import userEvent from '@testing-library/user-event';

test('Koşulların onaylanmasına göre buton aktifliği', async () => {
  // user kurulumu yap
  const user = userEvent.setup();

  // test edilecek bileşni ekran bas
  render(<Form />);

  // gerekli elemaları çağır
  const checkBox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  //1) checkbox tiksizdir
  expect(checkBox).not.toBeChecked();

  //2) buton inaktiftir
  expect(button).toBeDisabled();

  //3) checboxa tıkla
  await user.click(checkBox);

  //4) buton aktiftir
  expect(button).toBeEnabled();

  //5) chebox'tan tiki kaldır
  await user.click(checkBox);

  //6) butona inaktiftir
  expect(button).toBeDisabled();
});

test('Onay butonu hover durumuna göre bildirim gözükür', () => {
  const user = userEvent.setup();

  render(<Form />);

  const checkBox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  // normal şartlarda getByText'e çağıcağımız elemanın içindeki yaznın tamamnı veririz
  //   const popup = screen.getByText(
  //     'Size gerçekten bir şey teslim etmeyeceğiz'
  //   );

  // eğerki exact değerini true yaparsak buna gerek kalmas
  //   const popup2 = screen.getByText('Size gerçekten', { exact: false });

  // exact false mantığında çalışır ama regex tanımı
  const popup = screen.getByText(/size gerçekten/i); // i > insensetive

  // 1) checkbox tikle
  // 2) bildirim gözükmüyor mu?
  // 3) mouse butonuna üzerine götür
  // 4) bildiirim gözükuyor mu?
  // 5) mouse'u butonun üzerinden götür
});
