# E-commerce API with Swagger Documentation

A comprehensive e-commerce backend API built with Node.js, Express, TypeScript, and MongoDB. Features complete CRUD operations for products, user authentication, shopping cart, orders, and newsletter subscriptions.

## 🚀 Features

- **Authentication System** - JWT-based user authentication with role management
- **Product Management** - Complete CRUD operations with image upload support
- **Shopping Cart** - Add, update, remove items with persistent storage
- **Order Management** - Create, track, and manage orders with shipping addresses
- **Newsletter Subscription** - Email subscription management
- **API Documentation** - Interactive Swagger UI documentation
- **TypeScript** - Full type safety and modern development experience

## 📚 API Documentation

The API includes comprehensive Swagger documentation accessible at:
- **Development**: `http://localhost:3000/api-docs`
- **Production**: `https://your-app.onrender.com/api-docs`

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Email**: Nodemailer
- **Documentation**: Swagger UI
- **Password Hashing**: bcryptjs

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jennifernyangoma/backend.git
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   Edit `.env` file with your configuration:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=development
   PORT=3000
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Build and run**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm run build
   npm start
   ```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/users` - Get all users (Admin)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove` - Remove item from cart

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order by ID
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order
- `DELETE /api/orders/:id` - Delete order

### Subscriptions
- `GET /api/subscribe` - Get all subscribers
- `POST /api/subscribe` - Subscribe to newsletter
- `DELETE /api/subscribe/:id` - Unsubscribe

## 🚀 Deployment on Render

### Prerequisites
- GitHub repository with your code
- MongoDB Atlas database
- Render account

### Deployment Steps

1. **Prepare your MongoDB Atlas database**
   - Create a MongoDB Atlas cluster
   - Get your connection string
   - Whitelist all IP addresses (0.0.0.0/0)

2. **Deploy to Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - **Name**: `your-ecommerce-api`
     - **Environment**: `Node`
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
     - **Node Version**: `18`

3. **Set Environment Variables in Render**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
   JWT_SECRET=your-super-secret-jwt-key-here
   NODE_ENV=production
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   FRONTEND_URL=https://your-frontend-app.onrender.com
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Your API will be available at: `https://your-app.onrender.com`

### Post-Deployment

1. **Access your API documentation**:
   - Visit: `https://your-app.onrender.com/api-docs`
   - Test all endpoints using the interactive Swagger UI

2. **Health Check**:
   - Visit: `https://your-app.onrender.com/health`
   - Should return: `{"status":"OK","timestamp":"...","environment":"production"}`

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | ✅ |
| `JWT_SECRET` | Secret key for JWT tokens | ✅ |
| `NODE_ENV` | Environment (development/production) | ❌ |
| `PORT` | Server port (default: 3000) | ❌ |
| `EMAIL_USER` | Gmail address for sending emails | ❌ |
| `EMAIL_PASS` | Gmail app password | ❌ |
| `FRONTEND_URL` | Frontend application URL for CORS | ❌ |

## 📝 API Usage Examples

### Register a new user
```bash
curl -X POST https://your-app.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123",
    "role": "user"
  }'
```

### Get all products
```bash
curl -X GET https://your-app.onrender.com/api/products
```

### Add item to cart (requires authentication)
```bash
curl -X POST https://your-app.onrender.com/api/cart/add \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "productId": "product_id_here",
    "quantity": 2
  }'
```

## 🏥 Health Check

The API includes a health check endpoint at `/health` that returns:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "production"
}
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support, email support@example.com or create an issue in the repository.
