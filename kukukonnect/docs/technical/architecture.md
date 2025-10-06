# 🏗️ System Architecture

KukuKonnect is an end-to-end IoT system that connects poultry coops to the cloud for real-time climate control.

## 🔄 Data Flow

1. **ESP32 Device** reads temperature/humidity every ~10 seconds using a **DHT22 sensor**  
2. Device publishes data to **HiveMQ Cloud** via **MQTT** on topic:  
   `kukukonnect/{device_id}/sensor`  
3. **Django backend** subscribes to HiveMQ, processes the data, and stores it in **PostgreSQL**  
4. **PWA Dashboard** (Next.js) fetches data via REST API (`/api/sensor-data/`) and displays live + historical readings  
5. Farmers can adjust **temperature thresholds** via the dashboard (future: updates sent back to device)


## 📦 Core Components

| Component | Technology | Role |
|--------|-----------|------|
| **IoT Device** | ESP32 + DHT22 | Reads environment, publishes to MQTT |
| **Message Broker** | HiveMQ Cloud | Handles MQTT communication |
| **Backend API** | Django REST Framework | Receives sensor data, serves API |
| **Database** | PostgreSQL | Stores users, devices, and time-series sensor data |
| **Frontend** | Next.js PWA | Real-time dashboard for farmers |

## 📊 Key Data Models

### Sensor Data (from live API)
```json
{
  "sensor_data_id": 470,
  "temperature": "25.90",
  "humidity": "59.50",
  "timestamp": "2025-09-16T12:53:53.657834Z",
  "device_id": "ESP32-TempCtrl-000000000000"
}