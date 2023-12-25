import { useEffect, useState } from 'react';
import Header from './components/Header';
import ListView from './pages/ListView';
import MapView from './pages/MapView';
import { useDispatch } from 'react-redux';
import { getFlights } from './redux/actions/flightAction';

function App() {
  const [isMapView, setIsMapView] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <>
      <Header />

      <div className="view-buttons">
        <button
          className={isMapView ? 'active' : ''}
          onClick={() => setIsMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!isMapView ? 'active' : ''}
          onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {/* hangi bileşenin ekran ageliceğini belirleme */}
      {isMapView ? <MapView /> : <ListView />}
    </>
  );
}

export default App;
