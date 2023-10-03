const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    queryInterface.bulkInsert('users', [{
      nome: 'Luiz1',
      email: 'luizodandoa1@uol.com.br',
      password_hash: await bcryptjs.hash('987654321', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Luiz2',
      email: 'luizodandoa2@uol.com.br',
      password_hash: await bcryptjs.hash('987654321', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Luiz3',
      email: 'luizodandoa3@uol.com.br',
      password_hash: await bcryptjs.hash('987654321', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ], {});
  },

  down: () => {},
};
