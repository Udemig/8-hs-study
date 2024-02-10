import { useEffect, useState } from 'react';
import CustomFilter from '../components/CustomFilter';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import { fetchCars } from '../utils/fetchCars';
import { CarType } from '../types';
import Card from './../components/Card/index';

const MainPage = () => {
  // useState bizden state'de tutucağımız verinin tipini ister
  // bizde "generic" yardımıyla ya bir CarType dizisi yada henüz
  // api'dan veri gelmediyse null tipinde olabileceğini söyledik
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchCars()
      // istek başarılı olursa:
      .then((data) => setCars(data))
      // istek başarısız olursa:
      .catch(() => setIsError(true));
  }, []);

  return (
    <div>
      <Hero />

      <div
        id="catalogue"
        className="mt-12 padding-x padding-y max-width"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>

        {/* Filtreme Alanı */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {/* 
          * Araba Listesi
          1) Veri nullsa > henüz api'dan cevap gelmemiştir
          2) isError true ise > api'dan cevap alınırken hata oluşmuştur
          3) Veri Boş Diziyse > Aranan kriterler uygun eleman bulunamamıştır
          4) Veri Dolu Diziyse > Api'dan veriler başarıyla geldi
        */}

        {!cars ? (
          <div className="warn-container">
            <h2>Yükleniyor...</h2>
          </div>
        ) : isError ? (
          <div className="warn-container">
            <h2>Üzgünüz. Verileri alırken bir hata oluştu</h2>
          </div>
        ) : cars.length < 1 ? (
          <div className="warn-container">
            <h2>Aradığınız kriterler uygun araba bulunamadı</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;