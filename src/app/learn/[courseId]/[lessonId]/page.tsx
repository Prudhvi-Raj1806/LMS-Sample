import { notFound } from "next/navigation";
import Link from "next/link";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { AICopilot } from "@/components/lms/AICopilot";
import { getLesson, type CourseModule, type Lesson } from "@/lib/lms-data";
import { ChevronLeft, PlayCircle, FileText, Download, CheckCircle2 } from "lucide-react";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  const { courseId, lessonId } = await params;
  const lessonContext = getLesson(courseId, lessonId);

  if (!lessonContext) {
    notFound();
  }

  const { course, lesson } = lessonContext;

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground lg:h-screen lg:flex-row lg:overflow-hidden">
      <aside className="w-full flex-shrink-0 border-b border-white/5 bg-card/50 backdrop-blur-xl lg:w-80 lg:border-b-0 lg:border-r">
        <div className="flex h-16 items-center px-4 border-b border-white/5">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-white"
          >
            <ChevronLeft size={16} /> Back to Dashboard
          </Link>
        </div>
        <div className="max-h-72 overflow-y-auto p-6 lg:max-h-none">
          <h2 className="mb-2 text-lg font-bold">{course.title}</h2>
          <p className="mb-6 text-sm text-muted-foreground">{course.subtitle}</p>

          <div className="space-y-6">
            {course.modules.map(courseModule => (
              <ModuleSection
                key={courseModule.id}
                courseId={course.id}
                module={courseModule}
                activeLessonId={lesson.id}
              />
            ))}
          </div>
        </div>
      </aside>

      <main className="relative flex-1 overflow-y-auto scroll-smooth">
        <div className="pointer-events-none absolute left-[20%] top-[-20%] h-[50%] w-[50%] rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-5xl space-y-8 p-4 sm:p-6 lg:p-8">
          <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl">
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-black/80 to-black/40">
              <button
                className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/50 bg-primary/20 text-white backdrop-blur-md transition-all group-hover:scale-110 group-hover:bg-primary/40"
                aria-label={`Play ${lesson.title}`}
              >
                <PlayCircle size={40} />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 z-20 h-1.5 w-full bg-white/20">
              <div className="h-full bg-primary" style={{ width: `${course.progress}%` }} />
            </div>
          </div>

          <div>
            <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="w-fit rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Lesson {lesson.order}
              </span>
              <h1 className="text-2xl font-bold sm:text-3xl">{lesson.title}</h1>
            </div>
            <p className="mb-8 max-w-3xl text-lg text-muted-foreground">{lesson.description}</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <GlassPanel className="p-6">
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <FileText size={18} className="text-accent" /> Lesson Notes
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{lesson.notes}</p>
              </GlassPanel>

              <GlassPanel className="p-6">
                <h3 className="mb-4 flex items-center gap-2 font-semibold">
                  <Download size={18} className="text-success" /> Resources
                </h3>
                <ul className="space-y-3">
                  {lesson.resources.map(resource => (
                    <li
                      key={`${resource.type}-${resource.title}`}
                      className="flex cursor-pointer items-center justify-between rounded-lg border border-white/5 bg-white/5 p-3 text-sm transition-colors hover:bg-white/10"
                    >
                      <span className="font-medium">
                        {resource.title} ({resource.type.toUpperCase()})
                      </span>
                      <Download size={14} className="text-muted-foreground" />
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            </div>
          </div>
        </div>
      </main>

      <AICopilot />
    </div>
  );
}

function ModuleSection({
  courseId,
  module,
  activeLessonId,
}: {
  courseId: string;
  module: CourseModule;
  activeLessonId: string;
}) {
  return (
    <div className={`space-y-3 ${module.locked ? "opacity-50 grayscale" : ""}`}>
      <h3 className={`text-sm font-semibold ${module.locked ? "text-muted-foreground" : "text-foreground"}`}>
        {module.title}
      </h3>
      <ul className="ml-2 space-y-2 border-l border-white/10 pl-4">
        {module.lessons.map(lesson => (
          <LessonNavItem
            key={lesson.id}
            courseId={courseId}
            lesson={lesson}
            active={lesson.id === activeLessonId}
            locked={module.locked}
          />
        ))}
      </ul>
    </div>
  );
}

function LessonNavItem({
  courseId,
  lesson,
  active,
  locked,
}: {
  courseId: string;
  lesson: Lesson;
  active: boolean;
  locked?: boolean;
}) {
  const content = (
    <>
      {active ? (
        <div className="flex h-4 w-4 items-center justify-center rounded-full border border-primary/50 bg-primary/20 shadow-[0_0_10px_rgba(99,102,241,0.5)]">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
      ) : (
        <CheckCircle2 size={16} className={lesson.completed ? "text-success" : "text-white/20"} />
      )}
      <span>{lesson.title}</span>
    </>
  );

  const className = `flex items-center gap-3 py-1 text-sm transition-colors ${
    active ? "font-medium text-white" : "text-muted-foreground hover:text-white"
  }`;

  if (locked) {
    return <li className={`${className} cursor-not-allowed`}>{content}</li>;
  }

  return (
    <li>
      <Link href={`/learn/${courseId}/${lesson.id}`} className={`${className} cursor-pointer`}>
        {content}
      </Link>
    </li>
  );
}
