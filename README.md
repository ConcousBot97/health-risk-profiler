
#  Health Risk Profiler

A simple Node.js/Express app that builds a **health risk profile** from either:

* **JSON input**  or
* **OCR parsed survey form** (uploaded as an image).

It assigns a risk score and gives personalized recommendations.

---

## 📂 Project Structure

```
health-risk-profiler/
│── src/
│   ├── controllers/     # Route logic
│   ├── routes/          # Express routes
│   ├── services/        # Risk analysis logic
│   ├── utils/           # OCR utility
│   └── app.js           # Main server entry
│── uploads/             # Temporary uploaded files
│── package.json
│── README.md
```

---

##  Getting Started

### 1. Clone Repo & Install

```bash
git clone <repo-url>
cd health-risk-profiler
npm install
```

### 2. Run Server

Development (auto-restart on changes):

```bash
npm run dev
```

Production:

```bash
npm start
```

Server runs on 👉 `https://dividable-crowncapping-willetta.ngrok-free.dev`

---

## API Endpoints

### **POST /profile**

Builds a health risk profile.

####  Option 1: JSON Input

Send answers directly in the request body.

**Request:**

```bash
curl -X POST https://dividable-crowncapping-willetta.ngrok-free.dev/profile \
  -H "Content-Type: application/json" \
  -d '{
    "age": 42,
    "smoker": true,
    "exercise": "rarely",
    "diet": "high sugar"
  }'
```

**Response:**

```json
{
  "answers": {
    "age": 42,
    "smoker": true,
    "exercise": "rarely",
    "diet": "high sugar"
  },
  "factors": ["smoking","poor diet","low exercise","age risk"],
  "risk_level": "high",
  "score": 85,
  "recommendations": [
    "Quit smoking",
    "Reduce sugar intake",
    "Walk 30 mins daily"
  ],
  "status": "ok"
}
```

---

####  Option 2: Image Upload (OCR Mode)

Upload a scanned survey form.
Form fields like `"Age: 42"` / `"Smoker: yes"` / `"Exercise: rarely"` / `"Diet: high sugar"` will be parsed automatically.

**Request (using curl):**

```bash
curl -X POST https://dividable-crowncapping-willetta.ngrok-free.dev/profile \
  -F "file=@./sample-form.png"
```

**Response:**

```json
{
  "answers": {
    "age": 42,
    "smoker": true,
    "exercise": "rarely",
    "diet": "high sugar"
  },
  "factors": ["smoking","poor diet","low exercise","age risk"],
  "risk_level": "high",
  "score": 85,
  "recommendations": [
    "Quit smoking",
    "Reduce sugar intake",
    "Walk 30 mins daily"
  ],
  "status": "ok"
}
```

---

Sample Images
<img width="1536" height="1024" alt="SampleImage" src="https://github.com/user-attachments/assets/86872969-639a-4e16-a1ab-5172569dbfd4" />
<img width="1163" height="415" alt="Screenshot 2025-10-04 at 11 09 33 PM" src="https://github.com/user-attachments/assets/79831d8a-8825-4d14-aa1f-c9d3267d03d6" />
<img width="1346" height="873" alt="Screenshot 2025-10-04 at 11 10 03 PM" src="https://github.com/user-attachments/assets/d75faeb5-6d22-44b8-afa5-26185dc23af3" />


## 🛠 Tech Stack

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Multer](https://github.com/expressjs/multer) (file uploads)
* (Simulated OCR) – can be replaced with [Tesseract.js](https://github.com/naptha/tesseract.js)

---

##  Future Improvements

* Integrate real OCR (Tesseract.js / Google Vision API)
* Add database (MongoDB/Postgres) for saving profiles
* Expand scoring system with more medical rules
* Add frontend (React/Next.js) for uploading and viewing results

---

 **Ready to run & test with Postman, curl, or any REST client.**

---

