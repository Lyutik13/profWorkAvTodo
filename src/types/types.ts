export type InProgress = "Backlog" | "InProgress" | "Done";
export type Priority = "Low" | "Medium" | "High";

export const statusArr = ["Backlog", "InProgress", "Done"];
export const priorityArr = ["Low", "Medium", "High"];

export interface IUser {
	id: number;
	fullName: string;
	email: string;
	avatarUrl: string;
}

export interface IUserFullDesc extends IUser {
	description: string;
	tasksCount: number;
	teamId: number;
	teamName: string;
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
  sortStatus?: InProgress | null;
  sortBoardId?: number | null;
  sortAssigneeId?: number | null;
}
