# TPS-Test Backend

## Описание

Этот проект представляет собой серверную часть приложения, разработанную с использованием фреймворка NestJS и базы данных PostgreSQL. Он включает в себя функционал для управления пользователями и расписанием.

### Основные функции:

- **Авторизация и регистрация пользователей**: Пользователи могут зарегистрироваться и войти в систему.
- **Управление расписанием**: Администраторы могут создавать, редактировать и удалять расписания.
- **Проверка доступности сервиса**: Пользователи могут проверять, доступен ли сервис в текущий момент времени.

## Установка

1. Клонируйте репозиторий:
    ```sh
    git clone <URL репозитория>
    cd TPS-Test
    ```

2. Создайте файл `.env` в корне проекта и добавьте следующие переменные окружения:
    ```env
    DATABASE_HOST=localhost
    DATABASE_PORT=5432
    DATABASE_PORT_OUT=5432
    DATABASE_USER=postgres
    DATABASE_PASSWORD=yourpassword
    DATABASE_DB=tps_test
    JWT_SECRET=your_jwt_secret
    JWT_EXPIRES=1h
    ```

3. Запустите Docker Compose для запуска базы данных и приложения:
    ```sh
    docker compose up -d
    ```

4. Установите зависимости:
    ```sh
    npm install
    ```

5. Сбилдите проект:
    ```sh
    npm run build
    ```

6. Примените миграции для создания таблиц в базе данных:
    ```sh
    npm run migration
    ```
    Это создаст админского пользователя со следующими данными для входа:
    - email: admin@admin.com
    - password: admin

7. Запустите приложение:
    ```sh
    npm run start
    ```


## Скрипты

- `npm run build` - Сборка проекта
- `npm run start` - Запуск проекта
- `npm run start:dev` - Запуск проекта в режиме разработки
- `npm run start:prod` - Запуск проекта в режиме продакшн
- `npm run lint` - Запуск линтера
- `npm run test` - Запуск тестов
- `npm run test:watch` - Запуск тестов в режиме наблюдения
- `npm run test:cov` - Запуск тестов с покрытием
- `npm run test:debug` - Запуск тестов в режиме отладки
- `npm run test:e2e` - Запуск end-to-end тестов

## API Документация

API документация доступна по адресу: `http://localhost:3000/api-docs`

## Структура проекта

- `src/app.module.ts` - Главный модуль приложения
- `src/database` - Конфигурация базы данных и миграции
- `src/system` - Основные модули системы (пользователи, расписание)
- `src/common` - Общие утилиты, декораторы, ошибки и т.д.
