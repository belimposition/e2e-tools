# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.9.1](https://github.com/CSSSR/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.9.0...@csssr/e2e-tools-nightwatch@1.9.1) (2020-04-07)


### Bug Fixes

* добавил возможность передавать несколько тест файлов при запуске ([02d3df7](https://github.com/CSSSR/e2e-tools/commit/02d3df7f02a3525c8f344a540a76120033ee0293))





# [1.9.0](https://github.com/CSSSR/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.8.1...@csssr/e2e-tools-nightwatch@1.9.0) (2020-03-23)


### Features

* Добавил eslint ([e72f13c](https://github.com/CSSSR/e2e-tools/commit/e72f13cbb3d6b0eaadaf32e3cd3eed3aedb85105))





## [1.8.1](https://github.com/CSSSR/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.8.0...@csssr/e2e-tools-nightwatch@1.8.1) (2020-03-18)


### Bug Fixes

* Исправил сохранение скриншота при падающем тесте ([a006ba7](https://github.com/CSSSR/e2e-tools/commit/a006ba7c15d8d2365d1638a88598df3c62c79f5d))





# [1.8.0](https://github.com/CSSSR/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.7.3...@csssr/e2e-tools-nightwatch@1.8.0) (2020-03-17)


### Features

* Обновление зависимостей ([#5](https://github.com/CSSSR/e2e-tools/issues/5)) ([493ad12](https://github.com/CSSSR/e2e-tools/commit/493ad12fdf0346f44d98cb874257b30d6000c442))





## [1.7.3](https://github.com/CSSSR/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.7.2...@csssr/e2e-tools-nightwatch@1.7.3) (2020-03-17)

**Note:** Version bump only for package @csssr/e2e-tools-nightwatch





## [1.7.2](https://github.com/CSSSR/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.7.1...@csssr/e2e-tools-nightwatch@1.7.2) (2020-03-16)

**Note:** Version bump only for package @csssr/e2e-tools-nightwatch





## [1.7.1](https://github.com/CSSSR/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.7.0...@csssr/e2e-tools-nightwatch@1.7.1) (2020-03-16)


### Bug Fixes

* Убрал удаление контейнера сразу после остановки ([2bfbc94](https://github.com/CSSSR/e2e-tools/commit/2bfbc94691d444deabcff6ce9b4c74583def9f0e))





# [1.7.0](https://github.com/CSSSR/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.6.13...@csssr/e2e-tools-nightwatch@1.7.0) (2020-02-25)


### Features

* **jenkins:** force remove docker container in post script ([f4bf074](https://github.com/CSSSR/e2e-tools/commit/f4bf074d1ef1ce293a8002416d505f14522709e0))





## [1.6.13](https://github.com/CSSSR/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.6.12...@csssr/e2e-tools-nightwatch@1.6.13) (2020-02-25)


### Bug Fixes

* Исправил приведение числа к bool в Jenkinsfile ([fb40381](https://github.com/CSSSR/e2e-tools/commit/fb4038147522bdcd0d98b71e6909ef68ce15806d))





## [1.6.12](https://github.com/CSSSR/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.6.10...@csssr/e2e-tools-nightwatch@1.6.12) (2020-02-25)


### Bug Fixes

* добавил способ задания адреса selenium сервера через url ([6df64db](https://github.com/CSSSR/e2e-tools/commit/6df64db0705e3cb34b57352317883c9d8f5c7b05))
* Используем ssl, если selenium сервер на порту 443 ([68e7e0d](https://github.com/CSSSR/e2e-tools/commit/68e7e0d4d11fe7cc07ccdc07dbeb30144fe436a8))
* Не спрашиваем ssh адрес репозитория при старте, так как он больше не нужен ([e3bd77d](https://github.com/CSSSR/e2e-tools/commit/e3bd77d1deb8938db71207640495ab82a33dc2dd))
* Сделал, чтобы время прогона тестов можно было конфигурировать ([3f9598a](https://github.com/CSSSR/e2e-tools/commit/3f9598a04ad518abcc797c84cf7e83cedb67ebf5))





## [1.6.11](https://github.com/CSSSR/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.6.10...@csssr/e2e-tools-nightwatch@1.6.11) (2020-02-19)


### Bug Fixes

* добавил способ задания адреса selenium сервера через url ([6df64db](https://github.com/CSSSR/e2e-tools/commit/6df64db0705e3cb34b57352317883c9d8f5c7b05))
* Используем ssl, если selenium сервер на порту 443 ([68e7e0d](https://github.com/CSSSR/e2e-tools/commit/68e7e0d4d11fe7cc07ccdc07dbeb30144fe436a8))





## [1.6.10](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.6.9...@csssr/e2e-tools-nightwatch@1.6.10) (2019-12-23)

**Note:** Version bump only for package @csssr/e2e-tools-nightwatch





## [1.6.9](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.6.6...@csssr/e2e-tools-nightwatch@1.6.9) (2019-12-19)


### Bug Fixes

* add dockerignore ([8a6a914](https://github.com/csssr-team/e2e-tools/commit/8a6a914ebecb003ef4b651f57f07fbb3bc8c3b3b))





## [1.6.6](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.6.5...@csssr/e2e-tools-nightwatch@1.6.6) (2019-12-09)

**Note:** Version bump only for package @csssr/e2e-tools-nightwatch





## [1.6.5](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.6.4-alpha.0...@csssr/e2e-tools-nightwatch@1.6.5) (2019-10-28)

**Note:** Version bump only for package @csssr/e2e-tools-nightwatch





## [1.6.4-alpha.0](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.6.3...@csssr/e2e-tools-nightwatch@1.6.4-alpha.0) (2019-10-24)


### Bug Fixes

* Убрал фикс путь к вебдрайверу для Windows ([7f0dec4](https://github.com/csssr-team/e2e-tools/commit/7f0dec4))





## [1.6.3](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.6.2...@csssr/e2e-tools-nightwatch@1.6.3) (2019-10-14)


### Bug Fixes

* Исправил проверку на необходимость завершения браузерной сессии ([cfcac7c](https://github.com/csssr-team/e2e-tools/commit/cfcac7c))





## [1.6.2](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.6.1...@csssr/e2e-tools-nightwatch@1.6.2) (2019-10-11)


### Bug Fixes

* Переделал очистку браузера в конце теста, чтобы это работало с Firefox ([d017f2c](https://github.com/csssr-team/e2e-tools/commit/d017f2c))





## [1.6.1](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.6.0...@csssr/e2e-tools-nightwatch@1.6.1) (2019-10-11)

**Note:** Version bump only for package @csssr/e2e-tools-nightwatch





# [1.6.0](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.5.1...@csssr/e2e-tools-nightwatch@1.6.0) (2019-10-11)


### Features

* Запуск тестов в Firefox в дженкинсе ([d6c4ba6](https://github.com/csssr-team/e2e-tools/commit/d6c4ba6))





## [1.5.1](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.5.0...@csssr/e2e-tools-nightwatch@1.5.1) (2019-10-10)


### Bug Fixes

* Исправил автогенерацию gitattributes (фича прошлого релиза) ([4fd2512](https://github.com/csssr-team/e2e-tools/commit/4fd2512))





# [1.5.0](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.4.3...@csssr/e2e-tools-nightwatch@1.5.0) (2019-10-10)


### Features

* Сделал, чтобы скриншоты коммитились в git lfs — это сделает репозиторий меньше ([7c9cc0b](https://github.com/csssr-team/e2e-tools/commit/7c9cc0b))





## [1.4.3](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.4.2...@csssr/e2e-tools-nightwatch@1.4.3) (2019-10-07)


### Bug Fixes

* Исправил добавление nightwatch (неправильный путь до шаблонов) ([ac2d075](https://github.com/csssr-team/e2e-tools/commit/ac2d075))





## [1.4.2](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.4.1...@csssr/e2e-tools-nightwatch@1.4.2) (2019-10-07)

**Note:** Version bump only for package @csssr/e2e-tools-nightwatch





## [1.4.1](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.4.0...@csssr/e2e-tools-nightwatch@1.4.1) (2019-10-04)


### Bug Fixes

* Добавил потерянную зависимость от e2e-tools в e2e-tools-nightwatch ([7fcce51](https://github.com/csssr-team/e2e-tools/commit/7fcce51))
* Запуск тестов в Firefox локально ([21e061a](https://github.com/csssr-team/e2e-tools/commit/21e061a))





# [1.4.0](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.3.2...@csssr/e2e-tools-nightwatch@1.4.0) (2019-09-27)


### Bug Fixes

* Переспрашивать вопросы, если прервать добавление nightwatch на середине, а потом запустить ([6d86968](https://github.com/csssr-team/e2e-tools/commit/6d86968))
* Улучшение UX при инициализации проекта ([f0da514](https://github.com/csssr-team/e2e-tools/commit/f0da514))


### Features

* Пофиксил добавление новых тасков в vscode при обновлении ([07f2118](https://github.com/csssr-team/e2e-tools/commit/07f2118))





## [1.3.2](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.3.1...@csssr/e2e-tools-nightwatch@1.3.2) (2019-09-25)


### Bug Fixes

* Более умный парсинг адреса репозитория ([74dfb8e](https://github.com/csssr-team/e2e-tools/commit/74dfb8e))





## [1.3.1](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.3.0...@csssr/e2e-tools-nightwatch@1.3.1) (2019-09-25)


### Bug Fixes

* удалил browser.end() из примера теста, так как он больше не необходим ([4bee94c](https://github.com/csssr-team/e2e-tools/commit/4bee94c))





# [1.3.0](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.2.0...@csssr/e2e-tools-nightwatch@1.3.0) (2019-09-12)


### Features

* **vscode:** Добавил таск для обновления зависимостей ([4ea92fe](https://github.com/csssr-team/e2e-tools/commit/4ea92fe))





# [1.2.0](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.0.0...@csssr/e2e-tools-nightwatch@1.2.0) (2019-09-12)


### Features

* **jenkins:** Теперь скриншоты с дифами изображений линкуются к результатам билда в дженкинсе ([1be6d4c](https://github.com/csssr-team/e2e-tools/commit/1be6d4c))





# [1.1.0](https://github.com/csssr-team/e2e-tools/compare/@csssr/e2e-tools-nightwatch@1.0.0...@csssr/e2e-tools-nightwatch@1.1.0) (2019-09-12)


### Features

* **jenkins:** Теперь скриншоты с дифами изображений линкуются к результатам билда в дженкинсе ([9302a48](https://github.com/csssr-team/e2e-tools/commit/9302a48))





# 1.0.0 (2019-09-03)


* chore!: Rename to @csssr/e2e-tools, and autopublishing (#1) ([7931d7f](https://github.com/csssr-team/e2e-tools/commit/7931d7f)), closes [#1](https://github.com/csssr-team/e2e-tools/issues/1)


### BREAKING CHANGES

* Renamed into @csssr/e2e-tools

GAZ-1946





## 0.3.2 (2019-09-03)

**Note:** Version bump only for package @csssr/e2e-tools-nightwatch





## 0.3.1 (2019-09-02)

**Note:** Version bump only for package @csssr/e2e-tools-nightwatch
