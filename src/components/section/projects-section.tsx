import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

const CATEGORY_LABELS: Record<string, string> = {
    flagship: "Flagship",
    grad: "Graduate School",
    undergrad: "Undergraduate (Penn State Abington)",
    personal: "Personal Projects",
};

const CATEGORY_ORDER = ["flagship", "grad", "undergrad", "personal"] as const;

export default function ProjectsSection() {
    const grouped = CATEGORY_ORDER.map((category) => ({
        category,
        projects: DATA.projects.filter((p) => p.category === category),
    })).filter((group) => group.projects.length > 0);

    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">My Projects</span>
                        </div>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Projects</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            From freelance client work to undergrad coursework to
                            personal builds — here&apos;s what I&apos;ve shipped.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-10 max-w-[900px] mx-auto w-full">
                    {grouped.map((group, groupIndex) => (
                        <div key={group.category} className="flex flex-col gap-y-4">
                            <BlurFade delay={BLUR_FADE_DELAY * 12 + groupIndex * 0.1}>
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                    {CATEGORY_LABELS[group.category]}
                                </h3>
                            </BlurFade>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 auto-rows-fr">
                                {group.projects.map((project, id) => (
                                    <BlurFade
                                        key={project.title}
                                        delay={BLUR_FADE_DELAY * 13 + groupIndex * 0.1 + id * 0.05}
                                        className="h-full"
                                    >
                                        <ProjectCard
                                            href={project.href}
                                            title={project.title}
                                            description={project.description}
                                            dates={project.dates}
                                            tags={project.technologies}
                                            image={project.image}
                                            video={project.video}
                                            links={project.links}
                                        />
                                    </BlurFade>
                                ))}
                            </div>
                        </div>
                    ))}
                    <BlurFade delay={BLUR_FADE_DELAY * 20}>
                        <p className="text-sm text-muted-foreground text-center italic">
                            Graduate school projects in progress — check back as coursework ships.
                        </p>
                    </BlurFade>
                </div>
            </div>
        </section>
    );
}
