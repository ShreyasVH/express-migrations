module.exports = {
  async up(db, client) {
    await db.createCollection('books');

    await db.createCollection('counters');

    await db.collection('counters').insertOne({
      _id: 'books',
      sequenceValue: 0
    });
  },

  async down(db, client) {

  }
};
