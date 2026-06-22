export type Lesson = {
  id: string;
  title: string;
  description: string;
  notes: string;
  order: number;
  durationMinutes: number;
  completed: boolean;
  resources: {
    title: string;
    type: "zip" | "pdf" | "link";
  }[];
};

export type CourseModule = {
  id: string;
  title: string;
  locked?: boolean;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  progress: number;
  modules: CourseModule[];
};

export const courses: Course[] = [
  {
    id: "ai-product-engineering",
    title: "AI Product Engineering",
    subtitle: "Build production-ready AI products with RAG, agents, and evaluation workflows.",
    progress: 76,
    modules: [
      {
        id: "fundamentals",
        title: "Module 1: Fundamentals",
        lessons: [
          {
            id: "intro-to-llms",
            title: "Introduction to LLMs",
            description: "Understand model capabilities, constraints, and common product patterns.",
            notes:
              "Large language models are best treated as probabilistic reasoning engines. Strong products pair them with retrieval, evaluation, and human-centered workflow design.",
            order: 1,
            durationMinutes: 28,
            completed: true,
            resources: [{ title: "LLM Product Checklist", type: "pdf" }],
          },
        ],
      },
      {
        id: "rag-systems",
        title: "Module 2: RAG Systems",
        lessons: [
          {
            id: "context-engine",
            title: "Building the Context Engine",
            description:
              "Learn how to retrieve and inject context into the LLM prompt dynamically to create highly accurate RAG outputs.",
            notes:
              "The context engine is the heart of a RAG system. It takes the user query, converts it into a vector embedding, and queries the vector database for semantically similar chunks of text.",
            order: 4,
            durationMinutes: 42,
            completed: false,
            resources: [
              { title: "Source Code", type: "zip" },
              { title: "Architecture Diagram", type: "pdf" },
            ],
          },
          {
            id: "vectorizing-data",
            title: "Vectorizing Data",
            description: "Prepare, chunk, embed, and index learning content for retrieval.",
            notes:
              "Good retrieval starts before the vector database. Clean chunk boundaries, metadata, and evaluation examples make the system easier to debug.",
            order: 5,
            durationMinutes: 36,
            completed: false,
            resources: [{ title: "Chunking Strategy Guide", type: "pdf" }],
          },
        ],
      },
      {
        id: "agents",
        title: "Module 3: Agents",
        locked: true,
        lessons: [
          {
            id: "agentic-workflows",
            title: "Agentic Workflows",
            description: "Design tool-using agents with clear boundaries and reliable recovery paths.",
            notes:
              "Agents are most useful when their goals, tools, and failure modes are explicit. Start narrow, measure outcomes, and expand carefully.",
            order: 6,
            durationMinutes: 48,
            completed: false,
            resources: [{ title: "Agent Design Worksheet", type: "pdf" }],
          },
        ],
      },
    ],
  },
];

export function getCourse(courseId: string) {
  return courses.find(course => course.id === courseId);
}

export function getLesson(courseId: string, lessonId: string) {
  const course = getCourse(courseId);

  if (!course) {
    return null;
  }

  for (const courseModule of course.modules) {
    const lesson = courseModule.lessons.find(item => item.id === lessonId);

    if (lesson) {
      return {
        course,
        module: courseModule,
        lesson,
      };
    }
  }

  return null;
}
