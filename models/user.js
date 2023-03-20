const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
	username: {	type: String, minlength: 4, required: true, unique: true },
	name: String,
	passwordHash: String,
	notes: [
		{	type: mongoose.Schema.Types.ObjectId,
			ref: 'Note' }],
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', { transform: (document, returnedObject) => {
	const temporalObject = returnedObject
	temporalObject.id = returnedObject._id.toString()
	delete temporalObject._id
	delete temporalObject.__v
	delete temporalObject.passwordHash
} })

const User = mongoose.model('User', userSchema)

module.exports = User
