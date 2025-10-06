# KukuKonnect – Technical Documentation

KukuKonnect is an IoT-powered temperature and humidity control system designed to reduce **thermal stress** in poultry farms across Kenya. By continuously monitoring temperature and humidity in chicken coops, the system helps farmers maintain optimal conditions for poultry health, growth, and productivity.

## How It Works
- An **ESP32 microcontroller** with a **DHT22 sensor** collects real-time environmental data.
- Data is sent via **MQTT** to a backend.
- Farmers view and manage conditions through a **Progressive Web App (PWA)** dashboard.
- The system **automatically activates fans or heaters** when thresholds are exceeded.

## Key Components
- **IoT Device**: ESP32 + DHT22 + relays for fans/heaters  
- **Backend**: Django REST API (hosted on Heroku)  
- **Frontend**: Next.js PWA (hosted on Vercel)  
- **Database**: PostgreSQL  
- **Messaging**: HiveMQ (MQTT)

## Target Users
- 🐔 **Poultry Farmers**: Monitor and control coop remotely  
- 🧑‍🌾 **Agrovets**: Onboard farmers and manage devices  
