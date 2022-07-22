const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;

const app = require('../../../app');

chai.use(chaiHttp);

describe('Verifica se o serviço está funcionando', () => {
  it('deveria retornar o status 418', async () => {
    const server = await chai.request(app).get('/coffee');
    expect(server).have.status(418);
  });
});
