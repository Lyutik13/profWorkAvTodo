import { api } from "./client";

type Priority = ["Low" | "Medium" | "High"];
type InProgress = ["Backlog" | "InProgress" | "Done"];

export type Issue = {
	id: number;
	title: string;
	description: string;
	priority: Priority;
	status: InProgress;
	assignee: {
		id: number;
		fullName: string;
		email: string;
		avatarUrl: string;
	};
	boardId: number;
	boardName: string;
};

export type Board = {
	id: number;
	name: string;
	description: string;
	taskCount: number;
};

// Запросы к API
export const Api = {
	// Получить все задачи
	getIssues: () => api.get<Issue[]>("/tasks"),
  
	// Получить все доски
	getBoards: () => api.get<Board[]>("/boards"),

	// Получить задачи доски
	getBoardIssues: (boardId: number) => api.get<Issue[]>(`/boards/${boardId}`),

	// // Создать задачу
	// createIssue: (data: Omit<Issue, "id">) => api.post<Issue>("/issue", data),

	// // Обновить задачу
	// updateIssue: (id: number, data: Partial<Issue>) => api.put<Issue>(`/issue/${id}`, data),
};
