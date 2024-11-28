const CartItems = ({ items }) => {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Productos en tu carrito</h3>
        {items.map((item) => (
          <div key={item.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
            <img 
              src={item.imageSrc || item.img} 
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="ml-4 flex-grow">
              <h4 className="font-medium text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CartItems;