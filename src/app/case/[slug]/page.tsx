import { projects } from "@/lib/projects";
import CaseLayout from "@/app/components/CaseLayout";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface CasePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Кейс не найден",
            description: "Такого кейса на сайте нет.",
        };
    }

    return {
        title: `${project.title} | Кейс`,
        description: project.shortDesc ?? "Описание кейса",
    };
}

export default async function CasePage({ params }: CasePageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <CaseLayout project={project} />;
}