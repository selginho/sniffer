import dotenv from 'dotenv'

dotenv.config()

const environment = {
  APP_PORT: process.env.APP_PORT,
  MONGO_DATABASE: process.env.MONGO_DATABASE,
  MONGO_HOST: process.env.MONGODB_HOST,
  MONGO_PORT: process.env.MONGODB_PORT,
  VI_ACCOUNT_ID: process.env.VI_ACCOUNT_ID
}

export default environment
