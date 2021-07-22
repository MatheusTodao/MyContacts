const db = require('../../database');

class CategoriesRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.Query(`
      SELECT * FROM categories
      ORDER BY name ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.Query(`
      SELECT * FROM categories
      WHERE id = $1
    `, [id]);

    return row;
  }

  async create({ name }) {
    const [row] = await db.Query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.Query(`
      DELETE FROM categories
      WHERE id = $1
    `, [id]);
    return deleteOp;
  }
}

module.exports = new CategoriesRepository();
