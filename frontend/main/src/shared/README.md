# Shared Components

Данный слой содержит переиспользуемые модули без привязки к бизнес-логике, которые предназначены для использования между различными проектами. Эти компоненты помогают облегчить разработку и повторно использовать код без необходимости дублирования.

## Сущности:

- **ui**: Модули и компоненты, связанные с пользовательским интерфейсом, такие как стили, компоненты интерфейса и макеты.
- **configs**: Файлы конфигурации, которые могут быть общими для нескольких проектов, например, настройки баз данных или параметры среды.
- **lib**: Вспомогательные функции и утилиты, которые могут быть полезны в разных частях программы или проекта(библиотечный код).
- **api**: Данные о соеденении с сервером, например инстанс axios.
