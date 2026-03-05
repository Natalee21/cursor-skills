import { articles } from "@/lib/articles";
import ArticleLayout from "@/app/components/ArticleLayout";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ArticlePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) return { title: "Article Not Found" };

    return {
        title: `${article.title} | Borisova Natali`,
        description: article.desc,
    };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return <ArticleLayout article={article} />;
}

