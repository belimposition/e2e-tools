# Как ревьюить e2e тесты

## Проверяйте тесты на отказоустойчивость

Следите, чтобы в случае прерывания теста он не ломался.

Например, есть такой тест для интернет магазина:

1. Логинимся
1. Добавляем товар в корзину
1. Проверяем, что в хедере теперь есть надпись «В корзине 1 товар»
1. Удаляем товар из корзины

Что не так с этим тестом? Если прервать его после второго шага, он начнёт падать при последующих прогонах, так как на момент добавления в корзине уже будет товар. Чтобы предотвратить это, нужно удалять товар из корзины до добавления товара, а не после.

## Проверяйте скриншоты

При ревью нужно открывать скриншоты и проверять две вещи:

- Сами изменения правильные
- Скриншоты соотвествуют своим названиям

![Скриншот, как ревьюить скриншоты](http://s.csssr.ru/U09LGPMEU/20200211110244.png)

## Игнорируйте ненадёжные css селекторы

Когда вы начнёте писать тесты, скорей всего в проекте не будут расставлены [data-testid](./DATA_TESTID.md), поэтому QA будут использовать обычные css селекторы. Они могут быть ненадёжными, например, вот такими `.Submenu-left_3GtUZ > div > span`. Об этом не стоит беспокоиться, так как после написания тестов создаётся задача на разработчиков на добавление `data-testid`. После её выполнения обычные селекторы заменяются на селекторы по data-testid.

## Помогайте QA

Есть три основные вещи, с которыми QA нужна помощь:

1. **Написание хелперов.** Например, вы хотите тестировать попадание событий в аналитику. Напишите функцию, при помощи которой можно проверить, что событие было отправленно, передав его имя
1. **Git.** Расскажите QA про гит-флоу у вас на проекте и помогите с трудностями и решением мёрж конфликтов
1. **Селекторы и data-testid.** Иногда бывает довольно сложно подобрать селектор для элемента. Помогите с этим QA, или добавьте data-testid
