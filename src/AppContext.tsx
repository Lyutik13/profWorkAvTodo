import React from "react";

import type { IBoards, IAllTasks } from "./types/types";

interface IAppContext {
	boards: IBoards[] | undefined;
	isLoadingBoards?: boolean;
	isErrorBoards?: string;
  tasks: IAllTasks[] | undefined;
  isLoadingTasks?: boolean;
  isErrorTasks?: string;
}

const appContextValue: IAppContext = {
	boards: undefined,
	isLoadingBoards: false,
	isErrorBoards: undefined,
  tasks: undefined,
  isLoadingTasks: false,
  isErrorTasks: undefined,
};

const AppContext = React.createContext<IAppContext>(appContextValue);

export default AppContext;
