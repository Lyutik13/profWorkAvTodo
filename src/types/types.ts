export type InProgress = "Backlog" | "InProgress" | "Done";
type Priority = "Low" | "Medium" | "High";

export interface IUser {
	id: number;
	fullName: string;
	email: string;
	avatarUrl: string;
}

export interface ITaskInBoard {
	id: number;
	title: string;
	description: string;
	priority: Priority;
	status: InProgress;
	assignee: IUser;
}

export interface IAllTasks extends ITaskInBoard {
	boardId: number;
	boardName: string;
}

export interface IBoards {
	id: number;
	name: string;
	description: string;
	taskCount: number;
}

export interface IFilterObject {
	sortTaskNameAndAssignee: string;
}
