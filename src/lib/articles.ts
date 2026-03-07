export interface Article {
    slug: string;
    title: string;
    type: string;
    desc: string;
    sections: {
        title: string;
        content: string;
        list?: string[];
    }[];
}

export const articles: Article[] = [
    {
        slug: "launching-system-7-niches",
        title: "Как я запускала продукты в 7 нишах и выстроила систему",
        type: "Кейс",
        desc: "Подробный разбор запуска экспертов в реальности: от отсутствия блога до стабильных продаж.",
        sections: []
    },
    {
        slug: "100-ideas-for-product",
        title: "100 идей, как создать свой продукт и сделать запуск в онлайн",
        type: "PDF / материал",
        desc: "Практическое руководство для тех, кто хочет выйти на рынок онлайн-образования.",
        sections: []
    },
    {
        slug: "digital-project-monetization",
        title: "Монетизация digital-проекта: продуктовая система",
        type: "Стратегия",
        desc: "Разбор воронки, где каждый элемент решает свою задачу: контент, мастер-класс, консультация.",
        sections: []
    }
];