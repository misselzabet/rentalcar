# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
RentalCar 🚗

Опис проєкту

RentalCar - це сучасний веб-додаток для оренди автомобілів, який дозволяє користувачам переглядати каталог автомобілів, фільтрувати їх за різними критеріями, переглядати детальну інформацію про кожен автомобіль та здійснювати бронювання онлайн.

🚀 Основні функції

📌 Головна сторінка: Зручний банер із закликом до дії.

🚗 Каталог автомобілів: Перегляд списку доступних автомобілів з можливістю фільтрації:

Фільтрація за брендом, ціною та пробігом.

Додавання автомобілів до списку обраних.

Завантаження додаткових автомобілів через кнопку "Load More".

📝 Детальна сторінка автомобіля:

Інформація про автомобіль: марка, модель, ціна, пробіг.

Форма бронювання автомобіля з підтвердженням успішної оренди.

⭐ Обрані автомобілі: Збереження обраних автомобілів навіть після оновлення сторінки.

🚀 Використання

Локальне встановлення:

Склонуйте репозиторій:

git clone https://github.com/misselzabet/rentalcar.git
cd rentalcar

Встановіть залежності:

npm install

Запустіть проєкт:

npm run dev

🚀 Запуск у продакшн:

Створіть продакшн збірку:

npm run build

Запустіть попередній перегляд:

npm run preview

📌 Технології

React, Vite, React Router, Redux Toolkit

CSS Modules, Styled Components

Axios, React Hook Form, Yup

React Hot Toast, React Icons

📌 Автор

👩‍💻 Авторка: Lisa Kovalevska

🌐 GitHub: misselzabet

🌍 Розташування: Варшава, Польща

💼 Позиція: Frontend Developer

📈 Досвід: Спеціалізується на розробці веб-додатків із використанням React, Redux, Vite та сучасних технологій.

🚀 Інтереси: Веб-розробка, UI/UX дизайн, оптимізація продуктивності.

