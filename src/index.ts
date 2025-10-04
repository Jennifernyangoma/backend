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

app.use(cors());
app.use(express.json());

// Setup Swagger documentation
setupSwagger(app);

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

 app.use("/api/cart", cartRoutes);
 app.use("/api/subscribe", subscribeRoutes);

const PORT = process.env.PORT || 3000;


connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
