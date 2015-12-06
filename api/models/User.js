// User
module.exports = {
	attributes: {
		name: { type: 'string', required: false },
		email: { type: 'string', required: false },
		userType: { type: 'string', required: false },
		dateJoined: { type: 'date', required: false },
		homeAddress: { model: 'address' }, // 1 -> 1
	}
}
