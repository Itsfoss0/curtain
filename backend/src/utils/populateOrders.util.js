const Order = require('../models/Order.model');
const { MONGO_URL } = require('../config/env.config');
const connectDBInstance = require('../db/connection');

connectDBInstance(MONGO_URL);

const randomName = () => {
  const names = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Bob Brown',
    'Charlie Williams'
  ];
  return (
    names[Math.floor(Math.random() * names.length)] +
    `_${Math.floor(Math.random() * 1000)}`
  );
};

const populateOrders = async () => {
  const orders = [];
  const statuses = ['pending', 'shipped', 'delivered', 'cancelled'];
  const sizes = ['small', 'medium', 'large'];

  for (let i = 0; i < 1000; i++) {
    const order = {
      status: statuses[Math.floor(Math.random() * statuses.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)],
      price: Math.random() * 100,
      name: randomName(),
      quantity: Math.floor(Math.random() * 10) + 1,
      date: new Date(
        new Date().getTime() - Math.floor(Math.random() * 1000000000)
      )
    };
    orders.push(order);
  }

  try {
    await Order.insertMany(orders);
    console.log('Sample orders inserted successfully');
  } catch (err) {
    console.error('Error inserting sample orders:', err);
  }
};

populateOrders();

module.exports = populateOrders;
