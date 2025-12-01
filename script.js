const bugs = [
  {
    id: 1,
    title: "Текст книги отображается узким столбиком в мобильной версии",
    brief: "Текст не использует всю ширину экрана, неудобно читать.",
    category: "UI/UX",
    section: "Карточка книги/Текст книги (мобильная версия)",
    link: "https://zelluloza.ru/catalog/sort/bestsellers/",
    steps: "Открыть страницу книги в мобильной версии. Затем пролистать до текста книги.",
    expected: "Текст занимает всю ширину экрана и удобен для чтения.",
    actual: "Текст отображается узким столбиком слева, не использует всю ширину экрана.",
    solution: "В CSS исправить ширину текстового блока: задать width: 100%, убрать ограничивающие max-width, padding или margin.",
    priority: "P2",
    impact: "Удобство чтения (UX)",
    effort: "2",
    environment: "Мобильный Chrome, инкогнито",
    image: "image/1.jpg"
  },
  {
    id: 2,
    title: "Кнопки не одинаковые по размеру",
    brief: "Кнопки на странице книги 'Jane Eyre' имеют разный размер.",
    category: "UI/UX. Кнопки",
    section: "Все книги",
    link: "",
    steps: "Перейти на главную страницу, нажать на 'Поиск' далее на 'Все книги' ищем книгу по название 'Jane Eyre'.",
    expected: "Кнопки должны быть одинаковые по размеру.",
    actual: "Кнопки не по размеру",
    solution: "Отредактировать размер кнопок",
    priority: "P1",
    impact: "",
    effort: "2",
    environment: "Десктоп, Windows 10",
    image: "image/2.jpg"
  },
  {
    id: 3,
    title: "Повторное объявление переменной qrScriptLoaded",
    brief: "В консоли появляются синтаксические ошибки.",
    category: "Ошибка",
    section: "Страница/рейтинг книг",
    link: "https://zelluloza.ru/catalog/free/",
    steps: "Открыть страницу 'Бесплатные'. Затем открыть консоль (F12 → Console).",
    expected: "консоль пустая или служебные сообщения.",
    actual: "в консоли куча синтаксических ошибок(SyntaxError)это мешает работе скрипта",
    solution: "Переменная qrScriptLoaded уже была объявлена ранее — нельзя объявлять её снова.",
    priority: "P1",
    impact: "надежность",
    effort: "2",
    environment: "Desktop, windows 11, Firefox, режим инкотинго",
    image: "image/3.jpg"
  },
  {
    id: 4,
    title: "Переменная qrScriptLoaded объявлена дважды",
    brief: "Ошибка в консоли на странице автора.",
    category: "Ошибка",
    section: "Страница автора",
    link: "https://zelluloza.ru/search/details/11855-Aksyuta-Yansen/",
    steps: "Перейти на страницу любого автора. Открыть консоль (F12 → Console).",
    expected: "Ошибок в консоли нет.",
    actual: "Появляется повторяющаяся ошибка: Uncaught SyntaxError: Identifier 'qrScriptLoaded' has already been declared",
    solution: "Убедиться, что скрипт с переменной qrScriptLoaded подключается на странице только один раз — без дублирования.",
    priority: "P1",
    impact: "Надёжность",
    effort: "2",
    environment: "Desktop, Windows,Firefox, инкогнито",
    image: "image/4.jpg"
  },
  {
    id: 5,
    title: "Скрипт qrScriptLoaded объявлен дважды",
    brief: "Ошибка в консоли на странице рейтинга книг.",
    category: "Ошибка",
    section: "Рейтинг книг",
    link: "https://zelluloza.ru/catalog/sort/sales_per_week/",
    steps: "1. Открыть страницу «Рейтинг книг». 2. Открыть DevTools (консоль браузера) через F12.",
    expected: "Консоль пуста или содержит только служебные (неошибочные) сообщения.",
    actual: "В консоли отображается множество ошибок (красные сообщения), в том числе: Переменная qrScriptLoaded уже была объявлена ранее — повторное объявление недопустимо. Это нарушает работу скриптов на странице.",
    solution: "Убедиться, что скрипт с переменной qrScriptLoaded подключается на странице только один раз — без дублирования.",
    priority: "P1",
    impact: "Надёжность",
    effort: "2",
    environment: "Windows 11, Chrome 128, гость",
    image: "потеряно"
  },
  {
    id: 7,
    title: "Ссылка 'Подробнее о конкурсе' ведёт на 404",
    brief: "Кнопка ведёт на несуществующую страницу.",
    category: "Ошибка",
    section: "Кнопка «Подробнее о конкурсе» на карточке книги",
    link: "https://zelluloza.ru/contest/view/13/",
    steps: "Зайти на карточку книги с конкурсом. Нажать «Подробнее о конкурсе».",
    expected: "Открывается страница с информацией о конкурсе.",
    actual: "Failed to load resource: the server responded with a status of 404 ().",
    solution: "Поправить ссылку — сейчас она ведёт на несуществующую страницу — заменить на рабочую",
    priority: "P1",
    impact: "Понимание",
    effort: "1",
    environment: "Десктоп, Windows 10, Chrome, режим инкогнито",
    image: "image/7.jpg"
  },
  {
    id: 8,
    title: "Отписка не срабатывает сразу",
    brief: "Кнопка 'Отписаться' не обновляет состояние без перезагрузки.",
    category: "Ошибка",
    section: "Карточка книги -> Подписка",
    link: "https://zelluloza.ru/dictionary/igei-dlya-igr/",
    steps: "Перейти на страницу книги. Нажать «Подписаться» — кнопка срабатывает сразу. Нажать «Отписаться» — состояние меняется только после обновления страницы.",
    expected: "Подписка и отписка должны срабатывать мгновенно, без перезагрузки страницы.",
    actual: "Подписка срабатывает сразу, а отписка — только после обновления страницы.",
    solution: "Исправить обработчик кнопки «Отписаться» — сделать обновление состояния на фронтенде сразу после клика (без перезагрузки).",
    priority: "P1",
    impact: "UX, Надёжность",
    effort: "2",
    environment: "ПК, Linux Mint, Chrome 138, гость",
    image: "потеряно"
  },
  {
    id: 9,
    title: "Фильтры в каталоге не работают",
    brief: "При выборе фильтра список не обновляется.",
    category: "Ошибка",
    section: "Фильтры в каталоге",
    link: "https://zelluloza.ru/catalog/",
    steps: "Перейти в каталог. В правой панели отметить любой фильтр — например, «Бесплатные» или «Аудиокниги».",
    expected: "Список книг обновляется — показываются только те, что соответствуют выбранному фильтру.",
    actual: "Ничего не меняется. Фильтры не работают. Книги остаются прежними.",
    solution: "Поправить логику фильтрации — сейчас она не срабатывает. Нужно проверить JS-код, который должен обновлять список при выборе фильтров.",
    priority: "P1",
    impact: "Конверсия, Понимание",
    effort: "3",
    environment: "Десктоп, Windows, Chrome, инкогнито",
    image: "потеряно"
  },
  {
    id: 10,
    title: "Лайк убирается сразу после нажатия",
    brief: "Невозможно оставить лайк под рецензией.",
    category: "UI/UX. Кнопки",
    section: "раздел 'рецензии'",
    link: "https://zelluloza.ru/forum/5812/",
    steps: "открыл главную страницу - перешел в раздел 'рецензии' с помощью меню в верхней части сайта. попытался изменить оценить рецензию",
    expected: "при нажатии на лайк он должен добавится или убраться из счетчика слева",
    actual: "после нажатия лайк сразу убирается",
    solution: "Исправить обработчик кнопки лайка — сделать обновление состояния на фронтенде сразу после клика.",
    priority: "P2",
    impact: "пользователь не сможет оценить рецензию, что осложнит выбор произведения другим людям",
    effort: "",
    environment: "Windows 11, Yandex десктоп, неавторизованный пользователь",
    image: "потеряно"
  }
];

const bugsContainer = document.getElementById('bugsContainer');

bugs.forEach(bug => {
  const card = document.createElement('div');
  card.className = 'bug-card';
  card.innerHTML = `
    <h3>${bug.title}</h3>
    <p>${bug.brief}</p>
    <div class="bug-meta">
      <span class="bug-severity">${bug.priority}</span>
      <span>${bug.category}</span>
    </div>
  `;
  card.addEventListener('click', () => openModal(bug));
  bugsContainer.appendChild(card);
});

function openModal(bug) {
  document.getElementById('modalTitle').textContent = bug.title;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-content-wrapper">
      <div class="modal-text">
        <p><strong>Категория:</strong> ${bug.category}</p>
        <p><strong>Раздел:</strong> ${bug.section || 'Не указан'}</p>
        ${bug.link ? `<p><strong>Ссылка:</strong> <a href="${bug.link}" target="_blank">${bug.link}</a></p>` : ''}
        <p><strong>Шаги воспроизведения:</strong></p>
        <p>${bug.steps}</p>
        <p><strong>Ожидаемый результат:</strong></p>
        <p>${bug.expected}</p>
        <p><strong>Фактический результат:</strong></p>
        <p>${bug.actual}</p>
        <p><strong>Конкретное решение:</strong></p>
        <p>${bug.solution}</p>
        <div class="modal-meta">
          <div class="meta-item"><strong>Приоритет:</strong> ${bug.priority}</div>
          ${bug.impact ? `<div class="meta-item"><strong>Влияние:</strong> ${bug.impact}</div>` : ''}
          ${bug.effort ? `<div class="meta-item"><strong>Оценка усилий:</strong> ${bug.effort}</div>` : ''}
          <div class="meta-item"><strong>Среда:</strong> ${bug.environment}</div>
        </div>
      </div>
      <div class="modal-image">
        <img src="${bug.image}" alt="потеряно" />
      </div>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('active');
}

const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');

closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    modalOverlay.classList.remove('active');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const starsContainer = document.querySelector('.stars');
  for (let i = 0; i < 30; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    starsContainer.appendChild(star);
  }
});