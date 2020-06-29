require('dotenv').config({ path: '.env.test' })

module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['./jest.setup.js']
}
