import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

// import companiesRouter from './companies/companies.controller'
import db from '../data/database'
const app = express()
const port = process.env.PORT || 3001

app.use(cors())

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`ACCESS LOG: ${req.url}`)
  next()
})

app.get('/health', (req, res) => {
  res.json({ isAlive: true })
})

// app.use('/companies', companiesRouter)

app.get('/customerss', (req, res) => {
  const limit = req.query.limit;
  let sql = "SELECT * FROM Customer";
  db.all(sql, [], (err, rows) => {
    console.log('rows ==> ', rows)
    res.send(rows);
  });
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Backend server started at http://localhost:${port}`)
  })
}

export default app
