import {
  setProducts,
  setLoading,
  setError,
  getProducts,
} from './../redux/actions/productActions';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import Card from '../components/Card';

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {/* veirler yükleniyorsa */}
      {state.isLoading && <Loading />}

      {/* hata olduysa hatayı ekrana bas */}
      {state.isError && (
        <p className="text-center my-5 fw-bold">
          Üzgünüz verileri alırken bir hata oluştu: <br />
          {state.isError}
        </p>
      )}

      <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
        {/* verileri yüklendiyse ve hata yoksa ekrana bas */}
        {state.products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
