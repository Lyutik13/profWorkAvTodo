import React from "react";

import type { IBoards, IAllTasks } from "./types/types";

interface IAppContext {
	boards: IBoards[] | null;
	setBoards: (boards: IBoards[]) => void;
	tasks: IAllTasks[] | null;
	setTasks: (tasks: IAllTasks[] | []) => void;
}

const appContextValue: IAppContext = {
	boards: null,
	setBoards: () => {},
	tasks: null,
	setTasks: () => {},
};

const AppContext = React.createContext<IAppContext>(appContextValue);

export default AppContext;
