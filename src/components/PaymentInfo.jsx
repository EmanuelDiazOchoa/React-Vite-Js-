const PaymentInfo = ({ formData, handleInputChange }) => {
    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Nombre en la tarjeta</label>
                <input
                    type="text"
                    id="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Número de tarjeta</label>
                <input
                    type="text"
                    id="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    maxLength="16"
                    required
                />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Mes</label>
                    <select
                        id="cardExpMonth"
                        value={formData.cardExpMonth}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        {Array.from({ length: 12 }, (_, i) => {
                            const month = String(i + 1).padStart(2, '0');
                            return (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Año</label>
                    <select
                        id="cardExpYear"
                        value={formData.cardExpYear}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        {Array.from({ length: 10 }, (_, i) => {
                            const year = new Date().getFullYear() + i;
                            return (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">CVC</label>
                    <input
                        type="text"
                        id="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        maxLength="4"
                        required
                    />
                </div>
            </div>
        </div>
    );
};

export default PaymentInfo;