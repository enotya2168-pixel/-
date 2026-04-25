# EduQuest Platform

Простой стартовый проект образовательной платформы на Next.js + Tailwind + NextAuth + Prisma.

## Установка

1. Перейдите в папку проекта:
   ```bash
   cd edu-platform
   ```
2. Установите зависимости:
   ```bash
   npm install
   ```

## Настройка базы данных

1. Убедитесь, что PostgreSQL запущен и доступен по адресу из `.env`.
2. Сгенерируйте Prisma Client и примените схему:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
3. Заполните базу начальными данными:
   ```bash
   npm run seed
   ```

## Настройка email

Для восстановления пароля настройте SMTP в `.env`:
- `EMAIL_SERVER_HOST` — хост SMTP (например, smtp.gmail.com)
- `EMAIL_SERVER_PORT` — порт (587 для TLS)
- `EMAIL_SERVER_USER` — ваш email
- `EMAIL_SERVER_PASS` — пароль приложения (для Gmail)
- `EMAIL_FROM` — от кого отправлять

## Запуск

```bash
npm run dev
```

Откройте http://localhost:3000.

## Тестовые аккаунты

- Учитель: `anna.teacher@example.com` / `Teacher123`
- Ученик: `ivan.student@example.com` / `Student123`

## Основные маршруты

- `/login` — вход
- `/register` — регистрация
- `/forgot` — восстановление пароля
- `/reset-password?token=...` — сброс пароля
- `/profile` — редактирование профиля
- `/dashboard` — редирект по роли
- `/teacher/dashboard` — дашборд учителя
- `/teacher/classes` — классы
- `/teacher/bank` — банк заданий
- `/teacher/work-builder` — конструктор работ
- `/student/dashboard` — дашборд ученика
- `/student/quests` — квесты
- `/trainer/oge` — тренажёр ОГЭ

## Примечания

- Аутентификация через `next-auth` с провайдером `credentials`.
- Email отправка через Nodemailer.
- Дизайн с Tailwind CSS, градиентами, glassmorphism и анимациями.
- Middleware защищает маршруты по ролям.
- `/student/dashboard` — дашборд ученика
- `/student/quests` — квесты
- `/trainer/oge` — тренажёр ОГЭ

## Примечания

- Аутентификация реализована через `next-auth` с провайдером `credentials`.
- Для отправки реальных писем нужно подключить `Nodemailer` или внешний сервис и настроить SMTP.
- Дизайн построен на Tailwind CSS с градиентами, glassmorphism и тёмной темой.
