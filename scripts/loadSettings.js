// Конфигурация меню, потом будет вынесено во внешний JSON
//     level: - уровень вложенности, верхний - 0
//     id: "price" - идентификатор пункта меню
//     caption: "Цены", - видимый текст пункта меню
//     href: "#" - ссылка на страницу, если вложенные, то - null
//     parentId: "services", - идентификатора родительского меню
//     label: "none" - отметка, может быть: none, new, hot

const menuItems = [
  {
    level: 0,
    id: "about",
    caption: "О компании",
    href: "#"
  },
  {
    level: 0,
    id: "services",
    caption: "Услуги",
    href: "#"
  },
  {
    level: 1,
    id: "services",
    caption: "ИТ-аутсорсинг",
    parentId: "services",
    href: "#",
    label: "none"
  },
  {
    level: 1,
    id: "services",
    caption: "Проектирование",
    parentId: "services",
    href: "#",
    label: "none"
  },
    {
      level: 1,
      id: "services",
      caption: "Мониторинг",
      parentId: "services",
      href: "#",
      label: "new"
    },
  {
    level: 1,
    id: "services",
    caption: "Криптозащита",
    parentId: "services",
    href: "#",
    label: "hot"
  },
    {
      level: 1,
      id: "services",
      caption: "Виртуализация",
      parentId: "services",
      href: "#",
      label: "none"
    },

  {
    level: 0,
    id: "price",
    caption: "Цены",
    href: "#"
  }
]
