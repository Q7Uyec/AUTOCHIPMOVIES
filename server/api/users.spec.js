
/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const User = db.model('user')

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com'

    beforeEach(() => {
      return User.create({
        email: codysEmail
      })
    })

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].email).to.be.equal(codysEmail)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')

// Route Examples for Tests

// xdescribe('Login route:', () => {
//   /**
//    * First we clear the database before beginning each run
//    */
//   before(() => {
//     return db.sync({ force: true });
//   });

//   describe('GET /articles', () => {
//     /**
//      * Problem 1
//      * We'll run a GET request to /articles
//      *
//      * 1.  It should return JSON (i.e., use res.json)
//      * 2.  Because there isn't anything in the DB, it should be an empty array
//      *
//      * **Extra Credit**: Consider using app.param to automatically load
//      * in the Article whenever a param :id is detected
//      */
//     it('responds with an array via JSON', async () => {
//       const res = await agent
//         .get('/articles')
//         .expect('Content-Type', /json/)
//         .expect(200);

//       // res.body is the JSON return object
//       expect(res.body).to.be.an.instanceOf(Array);
//       expect(res.body).to.have.length(0);
//     });

//     /**
//      * Problem 2
//      * Save an article in the database using our model and then retrieve it
//      * using the GET /articles route
//      *
//      */
//     it('returns an article if there is one in the DB', async () => {
//       await Article.create({
//         title: 'Test Article',
//         content: 'Test body'
//       });

//       const res = await agent.get('/articles').expect(200);

//       expect(res.body).to.be.an.instanceOf(Array);
//       expect(res.body[0].content).to.equal('Test body');
//     });

//     /**
//      * Problem 3
//      * Save a second article in the database using our model, then retrieve it
//      * using the GET /articles route
//      *
//      */
//     it('returns another article if there is one in the DB', async () => {
//       await Article.create({
//         title: 'Test Article',
//         content: 'Test body'
//       });
//       await Article.create({
//         title: 'Another Test Article',
//         content: 'Another test body'
//       });

//       const res = await agent.get('/articles').expect(200);

//       expect(res.body).to.be.an.instanceOf(Array);
//       expect(res.body[0].content).to.equal('Test body');
//       expect(res.body[1].content).to.equal('Another test body');
//     });
//   });

//   /**
//    * Search for articles by ID
//    */
//   xdescribe('GET /articles/:id', () => {
//     let coolArticle;

//     beforeEach(async () => {
//       const creatingArticles = [