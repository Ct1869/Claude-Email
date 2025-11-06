import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { authRouter } from './routes/auth';
import { connectionsRouter } from './routes/connections';
import { emailsRouter } from './routes/emails';
import { errorHandler } from './middleware/error';

const app = express();
const PORT = process.env.PORT || 4000;
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5177', credentials: true }));
app.use(express.json());
app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));
app.use('/api/auth', authRouter);
app.use('/api/connections', connectionsRouter);
app.use('/api/emails', emailsRouter);
app.use(errorHandler);
app.listen(PORT, () => { console.log(`🚀 FluxEmail API running on http://localhost:${PORT}`); });