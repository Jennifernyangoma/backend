import dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import cors from "cors";
import connectDB from "./config/db";
import { setupSwagger } from "./config/swagger";

import productRoutes from "./routes/product.routes";
import authRoutes from "./routes/auth.routes";
import orderRoutes from "./routes/orderRoutes"; 
import cartRoutes from "./routes/cart.routes";
import subscribeRoutes from "./routes/subscribeRoutes";

const app: Application = express();

// CORS configuration for production
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL || 'https://your-frontend.onrender.com']
    : true,
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Setup Swagger documentation
setupSwagger(app);

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

 app.use("/api/cart", cartRoutes);
 app.use("/api/subscribe", subscribeRoutes);

const PORT = parseInt(process.env.PORT || '3000', 10);

// Connect to database
connectDB();

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📚 API Documentation available at: http://localhost:${PORT}/api-docs`);
  console.log(`🏥 Health check available at: http://localhost:${PORT}/health`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
