import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import UserRoutes from './routes/user.route'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json());

app.use('/api', UserRoutes);

app.get('/', (req, res) => {
  res.json({ status: "ok" });
})

const PORT = parseInt(process.env.PORT || "3000", 10);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
