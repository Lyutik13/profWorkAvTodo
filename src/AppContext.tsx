import React from "react";

import type { IBoards, IAllTasks, IFilterObject, IUserFullDesc, ITaskInBoard } from "./types/types";

// setBoards: (boards: IBoards[]) => void;

interface IAppContext {
	boards: IBoards[] | null;
	isLoadingBoards?: boolean;
	isErrorBoards?: string | null;
	tasks: IAllTasks[] | null;
	isLoadingTasks?: boolean;
	isErrorTasks?: string | null;
  users: IUserFullDesc[] | null

  filters: IFilterObject;
	setFilters: (filters: IFilterObject) => void;

  selectedTaskForModal?: IAllTasks | ITaskInBoard | null;
  setSelectedTaskForModal?: (task: IAllTasks | ITaskInBoard | null) => void;
  isModalOpen?: boolean;
  setIsModalOpen?: (isOpen: boolean) => void;
  handleOpenModal: (task?: IAllTasks | ITaskInBoard) => void
}

const appContextValue: IAppContext = {
	boards: null,
	isLoadingBoards: false,
	isErrorBoards: null,
	tasks: null,
	isLoadingTasks: false,
	isErrorTasks: null,
  users: null,

	filters: {
		sortTaskNameAndAssignee: '',
    sortStatus: null,
    sortBoardId: null,
    sortAssigneeId: null,
	},
	setFilters: () => {},
  
  selectedTaskForModal: null,
  setSelectedTaskForModal: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
  handleOpenModal: () => {}
};

const AppContext = React.createContext<IAppContext>(appContextValue);

export default AppContext;
