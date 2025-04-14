# 🧠 Brain Training API

A powerful NestJS backend service for cognitive training applications focused on developing both left and right brain capabilities.

## 📋 Overview

This enterprise-grade API powers comprehensive brain training applications with adaptive exercises, personalized training programs, and advanced analytics. Built with scalability in mind, it supports both basic cognitive exercises and advanced AI-driven training regimens.

## 🚀 Features

- **Comprehensive Exercise Library**: Support for various cognitive domains
- **User Progress Tracking**: Detailed analytics on cognitive performance
- **Adaptive Difficulty**: Intelligent adjustment based on user performance
- **Personalization Engine**: Custom training programs for individual users
- **Enterprise Features**: Team management and organizational analytics
- **AI Integration**: Machine learning models for advanced personalization

## 🛠️ Technology Stack

- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL with TypeORM
- **Authentication**: JWT-based auth with role-based access control
- **Documentation**: Swagger/OpenAPI
- **Testing**: Jest for unit and integration tests
- **Container**: Docker & Docker Compose
- **CI/CD**: GitHub Actions

## 🔧 Installation

### Prerequisites

- Node.js (v16+)
- PostgreSQL
- Docker (optional)

### Standard Setup

```bash
# Clone the repository
git clone https://github.com/azizizaidi/brain-training-api.git

# Navigate to project directory
cd brain-training-api

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run start:dev
```

### Docker Setup

```bash
# Build and start services
docker-compose up -d

# API will be available at http://localhost:3000
```

## 📊 API Documentation

Once the server is running, access the Swagger documentation at:
```
http://localhost:3000/api/docs
```

## 📦 Key Modules

- **Users**: Authentication, profiles, and preferences
- **Exercises**: Core cognitive training activities
- **Training**: Programs and personalized regimens
- **Analytics**: Performance tracking and insights
- **Admin**: System management and configuration

## 🔄 Database Schema

![Database Schema](https://via.placeholder.com/800x400?text=Database+Schema+Diagram)

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:e2e

# Generate test coverage
npm run test:cov
```

## 🌐 API Endpoints

| Method | Endpoint               | Description                         | Auth Required |
|--------|------------------------|-------------------------------------|---------------|
| POST   | /auth/login            | User authentication                 | No            |
| POST   | /auth/register         | User registration                   | No            |
| GET    | /exercises             | List available exercises            | Yes           |
| POST   | /training/session      | Start a training session            | Yes           |
| GET    | /analytics/performance | Get user performance metrics        | Yes           |
| GET    | /users/profile         | Get user profile                    | Yes           |

## 🚧 Development Roadmap

- [x] Core API architecture
- [x] User authentication system
- [ ] Basic exercise modules
- [ ] Performance tracking
- [ ] Personalization algorithms
- [ ] AI/ML integration
- [ ] Enterprise features

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Azizi Zaidi** - *Backend Engineer* - [GitHub](https://github.com/azizizaidi)

---

*This project is part of a larger brain training platform that includes a React frontend application.*