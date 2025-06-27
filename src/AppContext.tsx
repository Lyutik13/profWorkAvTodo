import React from "react";

import type { IBoards, IAllTasks, IFilterObject } from "./types/types";

// setBoards: (boards: IBoards[]) => void;

interface IAppContext {
	boards: IBoards[] | undefined;
	isLoadingBoards?: boolean;
	isErrorBoards?: string;
	tasks: IAllTasks[] | undefined;
	isLoadingTasks?: boolean;
	isErrorTasks?: string;
  filters: IFilterObject;
	setFilters: (filters: IFilterObject) => void;
}

const appContextValue: IAppContext = {
	boards: undefined,
	isLoadingBoards: false,
	isErrorBoards: undefined,
	tasks: undefined,
	isLoadingTasks: false,
	isErrorTasks: undefined,
	filters: {
		sortTaskNameAndAssignee: '',
	},
	setFilters: () => {},
};

const AppContext = React.createContext<IAppContext>(appContextValue);

export default AppContext;
