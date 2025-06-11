type Priority = "Low" | "Medium" | "High";
type InProgress = "Backlog" | "InProgress" | "Done";

export interface ITask {
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
}

export interface IBoards {
	id: number;
	name: string;
	description: string;
	taskCount: number;
}
