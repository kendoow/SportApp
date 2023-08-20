# Используем официальный образ Node.js
FROM node:14

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

RUN npm install -g typescript
RUN npm i ts-node-dev --save-dev
# Копируем package.json и package	-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install
# Копируем файл tsconfig.json
COPY tsconfig.json ./

# Копируем исходный код приложения
COPY . .

# Компилируем TypeScript код в JavaScript
RUN npm run build

# Открываем порт, на котором будет работать приложение
EXPOSE 5000

# Запускаем приложение при старте контейнера
CMD npm run dev
