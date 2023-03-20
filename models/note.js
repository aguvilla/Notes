const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

const noteSchema = new mongoose.Schema({
	content: { type: String, minlength: 5, required: true },
	date: { type: Date,		required: true },
	important: Boolean,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
})

noteSchema.set('toJSON', { transform: (document, returnedObject) => {
	const temporalObject = returnedObject
	temporalObject.id = temporalObject._id.toString()
	delete temporalObject._id
	delete temporalObject.__v
} })

module.exports = mongoose.model('Note', noteSchema)
