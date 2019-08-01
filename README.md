# Инструменты для e2e тестирования

## Старт

1. Установить [Git LFS](https://git-lfs.github.com)
1. Установить [Node.js LTS](https://nodejs.org/en/). На момент написания документации это версия 10.16.1
1. Установить [Yarn](https://yarnpkg.com/lang/en/docs/install/)
1. Склонировать репозиторий и перейти в терминале в папку `e2e-tests`
1. Установить зависимости `yarn install` (именно в `e2e-tests`)
1. Открыть папку `e2e-tests` в редакторе кода

## Доступы

| Сервис                                              | Описание                         | У кого просить доступ |
| --------------------------------------------------- | -------------------------------- | --------------------- |
| [Jenkins](jenkins.csssr.ru)                         | сервер для запуска тестов        | В #servers в Слаке    |
| [Тестовый TestRail](https://csssrtest2.testrail.io) | сюда выгружаются отчёты о тестах | Максим Самойлов       |

## Запуск тестов

Тесты запускаются в [Дженкинсе](https://jenkins.csssr.ru/).

### Как запускать

1. Выбираем ветку, в которой находятся тесты
1. Жмём «Build with Parameters» слева
1. Указываем параметры, жмём Build

### Как смотреть на результат

#### В Дженкинсе

1. Выбираем ветку, в которой запускались тесты
1. Выбираем билд в «Build History» слева
1. Жмём «Console Output» слева

#### В Тестрейле

1. Заходим в [Тестрейл](https://csssrtest2.testrail.io/)
1. Выбираем нужный проект
1. Выбираем сверху «Test Runs & Results», там будут логироваться все запуски тестов, новые — сверху

В целом интерфейс Тестрейла довольно понятен, проблем возникнуть не должно.

## Разработка тестов

### Nightwatch

#### Дев режим

Запускать тесты удобней всего из VSCode нажатием `Ctrl+Shift+B` или `Cmd+Shift+B`, там будут различные преопределённые таски
Так же можно запустить _все_ тесты из консоли:
`yarn et nightwatch:run`: запустить тесты локально
`yarn et nightwatch:run --browser remote_chrome`: запустить тесты на selenium сервере

#### Тесты скриншотами

В тестах можно заскриншотить любой элемент или всю страницу.
Для этого используются функции `browser.assert.screenshotElement('селектор', 'описание')` и `browser.assert.screenshotPage('описание')`.

Скриншоты сохраняются в папку `e2e-tests/nightwatch/screenshots`:
`base/`: скриншоты, по которым идёт сравнение
`actual/`: скриншоты, сгенерированные во время последнего запуска тестов
`diff/`: разница между первыми и вторыми скриншотами

Перед запуском тестов все скриншоты, кроме `base/`, удаляются.
Если в base/ пока нет скриншота, то он создастся при первом запуске тестов.

Скриншоты на разных операционных системах могут отличаться, поэтому их создание автоматически отключается везде, кроме selenium сервера.
Чтобы создать скриншоты, нужно запустить `yarn et nightwatch:run --browser remote_chrome` или запустить файл на удалённом сервере через VSCode.

## Настройка редактора

Для разработки рекомендуется использовать [VSCode](https://code.visualstudio.com) и следующий список расширений:

- [Автоматический форматер кода Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Линтер ESLint для поиска частых ошибок в коде](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig, чтобы подхватить настройки редактора для проекта](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Быстро установить все экстеншены можно, скопировав и запустив эти команды

```
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension EditorConfig.EditorConfig
```

### Автоматическое форматирование кода

При сохранении файла код автоматически форматируется, не пугайтесь, так и задумано :)

### Запуск тестов из редактора

При нажатии `Ctrl+Shift+B` или `Cmd+Shift+B` появляются различные предопределённые таски для запуска тестов и не только.
При запуске таска VSCode может писать «Task is already active», тогда из предложенных действий выбираем «Restart Task».

## Генерация тестов

Генерации тестов пока нет :(
