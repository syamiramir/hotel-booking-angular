# 🏨 Hotel Booking Angular App

A simple hotel booking web application built with **Angular 17**, **Bootstrap 5**, and **RxJS**.  
This project was developed as part of a technical assessment.

---

## 🚀 Features

- ✅ Room listing with filter/search  
- ✅ Book rooms using **Reactive Forms**  
- ✅ Custom reusable **RoomCardComponent**  
- ✅ Toast notifications for booking success  
- ✅ State persistence with **localStorage**  
- ✅ Responsive design (desktop + mobile) with Bootstrap Grid  

---

## 🛠️ Tech Stack

- **Angular 17+**
- **Bootstrap 5** (responsive layout + components)
- **RxJS** (state management + observables)
- **TypeScript** (strict mode enabled)
- **Angular HttpClient** (mock API simulation with `of(...)`)

---

📐 Design Decisions

Standalone Components (Angular 17 best practice)
No need for NgModule, keeps structure clean.

Reactive Forms for Booking
More scalable and testable than template-driven forms.

Toast Notifications
Replaces alert() with a better UX for confirmations.

Room Service with BehaviorSubject
State management with localStorage persistence.

Bootstrap Grid System
Ensures responsiveness without extra CSS frameworks.

---

## 📦 Installation & Setup

Run these commands in your terminal:

```bash
git clone https://github.com/syamiramir/hotel-booking-angular.git
cd hotel-booking-angular
npm install
ng serve -o
