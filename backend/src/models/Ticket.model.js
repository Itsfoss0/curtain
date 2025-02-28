const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema({
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  availableUntil: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ticketSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
