function ProductCard({ id, title, image, price }) {
    return (
      <>
   <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
    <div className="flex justify-center">
      <a className="block" href="#">
        <img
          alt="ecommerce"
          className="h-64 w-full object-cover"
          src={image}
        />
      </a>
    </div>
    <div className="py-4">
      <h2 className="text-lg font-bold mb-2">
        {title}
      </h2>
      <p className="text-gray-700 text-base">
        {price}$
      </p>
    </div>
  </div>
</div>
      </>
    );
  }
  
  export default ProductCard;