const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

const { Clientes } = require('../../model/models');
const dataMock = require('../mocks/client.mock');

const app = require('../../../app');

chai.use(chaiHttp);

describe('Testes na rota GET:/cliente', () => {
  describe('Verifica se os usuários iniciais estão cadastrados no BD', () => {
    beforeEach(async () => {
      sinon
        .stub(Clientes, 'findAll')
        .resolves(dataMock.findAll);
    });

    afterEach(() => {
      Clientes.findAll.restore();
    });

    it('deveria retornar os usuários cadastrados no banco de dados', async () => {
      const clients = await chai.request(app).get('/cliente');

      expect(clients).have.status(200);
      expect(clients.body).to.be.deep.equal(dataMock.findAll);
    });
  });
});

describe('Testes na rota GET:/cliente/id', () => {
  describe('Verifica se é possível consultar um usuário por id', () => {
    before(async () => {
      sinon
        .stub(Clientes, 'findOne')
        .resolves(dataMock.findOne);
    });

    after(() => {
      Clientes.findOne.restore();
    });

    it('deveria retornar os dados do usuário cadastrado no banco de dados', async () => {
      const clients = await chai.request(app).get('/cliente/1');

      expect(clients).have.status(200);
      expect(clients.body).to.be.deep.equal(dataMock.findOne);
    });
  });

  describe('Verifica se é possível consultar um usuário com id inválido', () => {
    before(async () => {
      sinon
        .stub(Clientes, 'findOne')
        .resolves(null);
    });

    after(() => {
      Clientes.findOne.restore();
    });

    it('deveria retornar os dados do usuário cadastrado no banco de dados', async () => {
      const clients = await chai.request(app).get('/cliente/3');

      expect(clients).have.status(401);
      expect(clients.body).to.be.deep.equal({ error: 'Client not found' });
    });
  });
});

describe('Testes na rota POST:/cliente', () => {
  describe('Verifica se é possível cadastrar um usuário com dados válido', () => {
    before(async () => {
      sinon
        .stub(Clientes, 'create')
        .resolves(dataMock.created);

      sinon
        .stub(Clientes, 'findOne')
        .resolves(null);
    });

    after(() => {
      Clientes.create.restore();
      Clientes.findOne.restore();
    });

    it('deveria retornar os dados do usuário cadastrado no banco de dados', async () => {
      const clients = await chai.request(app).post('/cliente').send(dataMock.create);
      expect(clients).have.status(201);
      expect(clients.body).to.be.deep.equal(dataMock.created);
    });

    describe('Verifica se é possível cadastrar um usuário com dados faltando', () => {
      it('deveria retornar um erro: "nome" is required', async () => {
        const clients = await chai.request(app).post('/cliente').send(dataMock.error.missingName);
        expect(clients).have.status(400);
        expect(clients.body).to.have.a.property('message');
        expect(clients.body.message).to.be.equal('"nome" is required');
      });

      it('deveria retornar um erro: "documento" is required', async () => {
        const clients = await chai.request(app).post('/cliente').send(dataMock.error.missingDocument);
        expect(clients).have.status(400);
        expect(clients.body).to.have.a.property('message');
        expect(clients.body.message).to.be.equal('"documento" is required');
      });
    });
  });

  describe('Verifica se não é possível cadastrar um usuário já existente no banco de dados', () => {
    before(async () => {
      sinon
        .stub(Clientes, 'create')
        .resolves(dataMock.created);

      sinon
        .stub(Clientes, 'findOne')
        .resolves(dataMock.created);
    });

    after(() => {
      Clientes.create.restore();
      Clientes.findOne.restore();
    });

    it('deveria retornar um erro 409 de "Client already exists"', async () => {
      const clients = await chai.request(app).post('/cliente').send(dataMock.create);
      expect(clients).have.status(409);
      expect(clients.body.error).to.be.equal('Client already exists');
    });
  });
});

describe('Testes na rota PUT:/cliente/id', () => {
  describe('Verifica se é possível atualizar um usuário cadastrado', () => {
    before(async () => {
      sinon
        .stub(Clientes, 'update')
        .resolves([1]);
    });

    after(() => {
      Clientes.update.restore();
    });

    it('deveria retornar que "1" registro foi atualizado e o status 201', async () => {
      const clients = await chai.request(app).put('/cliente/1').send(dataMock.update);
      expect(clients).have.status(201);
      expect(clients.body).to.be.deep.equal([1]);
    });
  });

  describe('Verifica se é possível atualizar um usuário que não existe', () => {
    before(async () => {
      sinon
        .stub(Clientes, 'update')
        .resolves([0]);
    });

    after(() => {
      Clientes.update.restore();
    });

    it('deveria retornar que "0" registro foi atualizado e o status 201', async () => {
      const clients = await chai.request(app).put('/cliente/100').send(dataMock.update);
      expect(clients).have.status(201);
      expect(clients.body).to.be.deep.equal([0]);
    });
  });
});

describe('Testes na rota DELETE:/cliente/id', () => {
  describe('Verifica se é possível atualizar um usuário cadastrado', () => {
    before(async () => {
      sinon
        .stub(Clientes, 'destroy')
        .resolves(null);
    });

    after(() => {
      Clientes.destroy.restore();
    });

    it('deveria deletar o usuário no banco de dados e retornar o status 204 sem mensagem', async () => {
      const clients = await chai.request(app).delete('/cliente/4').send(dataMock.update);
      expect(clients).have.status(204);
      expect(clients.body).to.be.deep.equal({});
    });
  });
});
