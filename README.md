#  SmartDonate

 Xây dựng SmartDonate – Website thiện nguyện thông minh sử dụng trí tuệ nhân tạo trong ghép nối và định hướng nhu cầu

---

##  Giới thiệu

**SmartDonate** là nền tảng hỗ trợ kết nối nhu cầu và nguồn lực từ thiện một cách thông minh, minh bạch và hiệu quả.

Hệ thống ứng dụng trí tuệ nhân tạo (AI) để:

* Gợi ý bài đăng phù hợp
* Phát hiện hành vi gian lận
* Tối ưu phân phối nguồn lực

---

## Tính năng chính

* 🔐 Đăng ký / đăng nhập (Google OAuth)
* 👥 Phân quyền: `ADMIN`, `NGUOI_DUNG`, `TO_CHUC`
* 📝 CRUD bài đăng (CHO / NHẬN)
* 🤖 AI Matching (semantic + keyword)
* 💰 Thanh toán qua VNPay
* 💬 Chat realtime (tin nhắn + trạng thái đã xem)
* 🚨 Phát hiện gian lận (AI + rule-based)
* 📊 Dashboard quản trị

---

## Kiến trúc hệ thống

Frontend (React + Vite) -> Backend (Laravel API) -> AI Service (FastAPI)

### Luồng hoạt động:

1. Người dùng thao tác trên Frontend
2. Frontend gọi API đến Backend
3. Backend xử lý nghiệp vụ và gọi AI Service
4. AI trả kết quả (matching / fraud detection)
5. Backend trả dữ liệu về Frontend

---

## Công nghệ sử dụng

### Backend

* PHP 8.2 + Laravel 11
* Laravel Sanctum (Authentication)
* Socialite (Google OAuth)
* VNPay Integration
* Reverb / Pusher (Realtime)

### Frontend

* React 19 + Vite
* Ant Design
* Zustand
* Axios
* Mapbox GL
* Recharts

### AI Service

* FastAPI + Uvicorn
* sentence-transformers
* scikit-learn (Isolation Forest)
* numpy, pydantic

---

## Cài đặt và chạy dự án

### 1. Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

---

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

### 3. AI Service

```bash
cd ai_service
python -m venv .venv

# Windows
.venv\Scripts\activate

pip install -r requirements.txt
uvicorn main:app --host 127.0.0.1 --port 8001 --reload
```

---

## Cấu hình môi trường quan trọng

```env
APP_URL=http://127.0.0.1:8000

DB_CONNECTION=mysql
DB_DATABASE=smart_donate

AI_MATCHING_URL=http://127.0.0.1:8001

VNP_TMNCODE=
VNP_HASH_SECRET=

BROADCAST_CONNECTION=reverb
```

---

## API tiêu biểu

### Auth

* POST `/api/register`
* POST `/api/login`
* GET `/api/me`

### Posts

* GET `/api/posts`
* POST `/api/posts`
* GET `/api/posts/{id}/matches`

### Donation

* POST `/api/donate`
* POST `/api/donate/confirm`

### Chat

* POST `/api/tro-chuyen/tao-hoac-lay`
* GET `/api/tro-chuyen/{id}/tin-nhan`

### Admin Fraud

* POST `/api/admin/fraud-check/auto`
* GET `/api/admin/fraud-alerts`

---

## AI Logic (trọng tâm đồ án)

### 1. Matching bài đăng

Áp dụng Hybrid Approach:

* TF-IDF → so khớp từ khóa
* Sentence Transformers → hiểu ngữ nghĩa

Kết hợp giúp:

* Tăng độ chính xác
* Hiểu được nội dung tương đồng, không chỉ giống từ


### 2. Phát hiện gian lận

Kết hợp:

* Isolation Forest (Machine Learning)
* Rule-based system

Dựa trên các yếu tố:

* Tần suất hoạt động bất thường
* Hành vi ủng hộ không hợp lý
* IP trùng lặp
* Nội dung đáng nghi

---

## Kiểm thử

```bash
cd backend
php artisan test
php artisan db:seed
```

---

## Hướng phát triển

* Tích hợp CI/CD
* Cải thiện mô hình AI 
* Dashboard realtime nâng cao
* Tối ưu phát hiện gian lận

---

##  Thông tin dự án

**Tên đề tài:**
Xây dựng SmartDonate – Website thiện nguyện thông minh sử dụng trí tuệ nhân tạo trong ghép nối và định hướng nhu cầu



**Giảng viên hướng dẫn:**
Th.S Hồ Lê Viết Nin



**Thành viên thực hiện:**

* Nguyễn Thảo Nguyên – 27202202175
* Đoàn Thị Thảo Ly – 28201101597
* Nguyễn Thảo Như Bình – 28201202650
* Nguyễn Quang Khải – 28211104617
* Nguyễn Đình Nhật Tân – 28218305424

---

**Năm thực hiện:** 2026
