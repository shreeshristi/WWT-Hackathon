# 🌸 SampannAI – Empowering Women through Financial Inclusion 💰

SampannAI is a voice-first, WhatsApp-integrated AI assistant designed to bridge the financial literacy and accessibility gap for women in underserved communities. It enables simplified access to government schemes, financial literacy, and assistance through multiple input modes: voice, chat, and SMS fallback.

---

## 🚀 Features

- 🎙️ **Voice Input** (offline support coming soon)
- 💬 **WhatsApp Chat UI Mock**
- 🔎 **Smart Scheme Matching** using NLP + AI
- 🗂️ **Scheme Cards** with eligibility and next steps
- 🌐 **Lite Web Views** for mobile access
- 📱 **SMS Fallback** for low-end phones

---

## 🖥️ Tech Stack

| Layer        | Technologies Used                                 |
|-------------|---------------------------------------------------|
| **Frontend** | React, TailwindCSS, Lucide Icons, Vite            |
| **Backend**  | FastAPI, Python 3.10, Redis, PostgreSQL           |
| **AI/ML**    | PyTorch Lightning, HuggingFace Transformers, ONNX Runtime, MLflow |
| **DevOps**   | Docker, GitHub Actions (optional for CI/CD)       |

---

## 🧠 AI Capabilities

- Fine-tuned transformer models on regional Indian languages
- Semantic intent recognition
- Scheme classification and match scoring
- Multi-turn response recommendation

---

## 🖼️ Screenshots

<img src="public/preview.png" alt="UI Preview" width="800"/>

---

## 📁 Project Structure


---

## ⚙️ Local Setup Instructions

### 📦 Frontend (React + Tailwind)

```bash
cd frontend
npm install
npm run dev
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn api:app --reload
