const mongoose = require('mongoose');
const { Schema } = mongoose;

const registrationSchema = new Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  attendee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ticketType: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    default: 1,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'attended'],
    default: 'pending'
  },
  totalAmount: {
    type: Number,
    required: true
  },
  paymentInfo: {
    paymentMethod: String,
    transactionId: String,
    paymentDate: Date,
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    }
  },
  checkedIn: {
    type: Boolean,
    default: false
  },
  checkinTime: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

registrationSchema.set('toJSON', {
  transform: (doc, returnedDoc) => {
    returnedDoc.id = returnedDoc._id.toString();
    delete returnedDoc._id;
    delete returnedDoc.__v;
  }
});

const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
