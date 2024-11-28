const OrderSummary = ({ cartTotal }) => {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Resumen del pedido</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${cartTotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Envío</span>
            <span className="font-medium">Gratis</span>
          </div>
          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">${cartTotal}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OrderSummary;