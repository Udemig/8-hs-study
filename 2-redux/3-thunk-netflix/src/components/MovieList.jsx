const MovieList = ({ genre }) => {
  // Gelen prop'taki kategorini bilgiisne göre
  // kategoriye ait film verisini çek ardından
  // bunları slider içerisnde listele
  return (
    <div>
      <h1>{genre.name}</h1>
    </div>
  );
};

export default MovieList;
