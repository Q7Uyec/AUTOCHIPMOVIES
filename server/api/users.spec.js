
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