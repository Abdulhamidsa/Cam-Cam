export default function FavoriteProductsList({ favoriteProducts }) {
  return (
    <div>
      <h2>Favorite Products</h2>
      {favoriteProducts.length > 0 ? (
        <ul>
          {favoriteProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No favorite products found</p>
      )}
    </div>
  );
}
