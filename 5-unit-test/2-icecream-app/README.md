# Kütüphanelerin Sürüm

- axios@^0.27.2
- @testing-library/user-event@14.0
- json-server
- bootstrap

# Test Geliştirme SÜreçleri

## TDD (Test Driven Development)

- Red to Green test
- Önce özelliğin / bileşenin testi yazılır ardından bileşen / özellik kodlanır
- Artısı, testler bir yük gibi gelmez. Geliştirme sürecenin bir parçası olur.

## BDD (Behaviour Driven Developmnet)

- Önce özellik / bileşen geliştirili sonra testleri yapılır

# Kullanıcı Etkileşimi tetikleme

- Unit test yzaarken kulalnıcı etkileşimi tetiklemnin 2 yolu bulunuyor

## FireEvent

- rtl içerisnde gelen olay tetikleme methodu
- gerçek kullanıcıdan uzak tepkiler verdiği için artık yerini userEvente bırkamıştır
- tetiklenen olaylar gerçek bir insanın tepkimesinden çok daha hızlı bir şekilde gerçekleşir.

## UserEvent

- bu yolu kullanmak için userEvent paketi indirlmeli
- fireEvent'in modern çözümü
- tetiklediğimiz olaylar gerçek kullanıncın yapıcağı gibi belirli bir gecikemeniin ardından gerçekleşir
- gecikme olduğu için async await kullanılır
