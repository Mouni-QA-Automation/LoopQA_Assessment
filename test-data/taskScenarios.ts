export type TaskScenario = {
  name: string;
  application: "Web Application"|"Mobile Application";
  taskTitle: string;
  column: "To Do" | "In Progress" | "Review" |"Done";
  tags: string[];
};

export const taskScenarios: TaskScenario[] = [
  {
    name: "Web Application - Implement user authentication is in To Do with Feature and High Priority tags",
    application: "Web Application",
    taskTitle: "Implement user authentication",
    column: "To Do",
    tags: ["Feature", "High Priority"],
  },
  {
    name: "Web Application - Fix navigation bug is in To Do with Bug tag",
    application: "Web Application",
    taskTitle: "Fix navigation bug",
    column: "To Do",
    tags: ["Bug"],
  },
  {
    name: "Web Application - Design system updates is in In Progress with Design tag",
    application: "Web Application",
    taskTitle: "Design system updates",
    column: "In Progress",
    tags: ["Design"],
  },
  {
    name: "Mobile Application - Push notification system is in To Do with Feature tag",
    application: "Mobile Application",
    taskTitle: "Push notification system",
    column: "To Do",
    tags: ["Feature"],
  },
  {
    name: "Mobile Application - Offline mode is in In Progress with Feature and High Priority tags",
    application: "Mobile Application",
    taskTitle: "Offline mode",
    column: "In Progress",
    tags: ["Feature", "High Priority"],
  },
  {
    name: "Mobile Application - App icon design is in Done with Design tag",
    application: "Mobile Application",
    taskTitle: "App icon design",
    column: "Done",
    tags: ["Design"],
  },
];