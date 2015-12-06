// Order
module.exports = {
	attributes: {
		date: { type: 'date', required: false },
		client: { model: 'user' }, // 1 -> 1
		driver: { model: 'user' }, // 1 -> 1
		sourceAddress: { model: 'address' }, // 1 -> 1
		destinationAddress: { model: 'address' }, // 1 -> 1
		pickupTime: { type: 'string', required: false },
		orderStatus: { type: 'string', required: false },
		cost: { type: 'string', required: false },
	}
}
