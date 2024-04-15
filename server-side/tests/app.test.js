const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../ms-app/app'); // Update the path if necessary

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('API Tests', () => {
  // Test for GET request to /api/cities
  describe('GET /api/cities', () => {
    it('it should return status 200 and an array of cities', (done) => {
      chai.request(app)
        .get('/api/cities')
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.an('array');
          done();
        });
    });
  });

  // Test for POST request to /api/vehicles
  describe('GET /api/vehicles', () => {
    it('it should return status 200 and an array of vehicles', (done) => {
      chai.request(app)
        .get('/api/vehicles')
        .end((err, res) => {
          if (err) done(err);
          res.should.have.status(200);
          res.body.should.be.an('array');
          done();
        });
    });
  });


  describe('POST /api/capture', () => {
    it('it should return status 200 and capture result data', async () => {
      const formData = {
        Cop1City: 'Lihaspur',
        Cop1Bike: 'EV Car',
        Cop2City: 'Narmis City',
        Cop2Bike: 'EV SUV',
        Cop3City: 'Shekharvati',
        Cop3Bike: 'EV Bike 1'
      };
      const cityMap = {
        Yapkashnagar: 60,
        Lihaspur: 50,
        'Narmis City': 40,
        Shekharvati: 30,
        Nuravgram: 20
      }; 
      const vehicleMap = { 'EV Bike 1': 60, 'EV Bike 2': 60, 'EV Car': 100, 'EV SUV': 120 }; 

      const postData = {
        formData: formData,
        cityMap: cityMap,
        vehicleMap: vehicleMap,
      };

      // Send POST request to the Express app
      const res = await chai.request(app)
        .post('/api/capture')
        .set('Content-Type', 'application/json')
        .send(postData);

      // Assert status code and response body
      res.should.have.status(200);
      res.body.should.be.an('array');
    });
  });

  // Add more test cases for other routes as needed
});
