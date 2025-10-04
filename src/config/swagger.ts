import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express, Application } from 'express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-commerce API',
      version: '1.0.0',
      description: 'A comprehensive e-commerce API with authentication, products, cart, orders, and subscription management',
      contact: {
        name: 'API Support',
        email: 'support@example.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'User ID'
            },
            username: {
              type: 'string',
              description: 'Username'
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'User email'
            },
            role: {
              type: 'string',
              enum: ['user', 'admin'],
              description: 'User role'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'User creation date'
            }
          }
        },
        Product: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Product ID'
            },
            name: {
              type: 'string',
              description: 'Product name'
            },
            description: {
              type: 'string',
              description: 'Product description'
            },
            price: {
              type: 'number',
              format: 'float',
              description: 'Product price'
            },
            category: {
              type: 'string',
              description: 'Product category'
            },
            image: {
              type: 'string',
              description: 'Product image URL or base64'
            },
            stock: {
              type: 'integer',
              description: 'Available stock quantity'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Product creation date'
            }
          }
        },
        Cart: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Cart ID'
            },
            userId: {
              type: 'string',
              description: 'User ID'
            },
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  productId: {
                    type: 'string',
                    description: 'Product ID'
                  },
                  quantity: {
                    type: 'integer',
                    description: 'Quantity'
                  },
                  price: {
                    type: 'number',
                    format: 'float',
                    description: 'Price per unit'
                  }
                }
              }
            },
            totalAmount: {
              type: 'number',
              format: 'float',
              description: 'Total cart amount'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Cart creation date'
            }
          }
        },
        Order: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Order ID'
            },
            userId: {
              type: 'string',
              description: 'User ID'
            },
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  productId: {
                    type: 'string',
                    description: 'Product ID'
                  },
                  quantity: {
                    type: 'integer',
                    description: 'Quantity'
                  },
                  price: {
                    type: 'number',
                    format: 'float',
                    description: 'Price per unit'
                  }
                }
              }
            },
            totalAmount: {
              type: 'number',
              format: 'float',
              description: 'Total order amount'
            },
            status: {
              type: 'string',
              enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
              description: 'Order status'
            },
            shippingAddress: {
              type: 'object',
              properties: {
                street: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
                zipCode: { type: 'string' },
                country: { type: 'string' }
              }
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Order creation date'
            }
          }
        },
        Subscriber: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Subscriber ID'
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Subscriber email'
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Subscription date'
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Error message'
            }
          }
        },
        AuthResponse: {
          type: 'object',
          properties: {
            token: {
              type: 'string',
              description: 'JWT token'
            },
            user: {
              $ref: '#/components/schemas/User'
            }
          }
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts']
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Application): void => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'E-commerce API Documentation'
  }));
};

export default specs;
