import React from "react";
import AppContext from "./AppContext";
import useFetch from "./hooks/useFetch";
import type { IAllTasks, IBoards, IFilterObject, IUserFullDesc } from "./types/types";

interface AppProviderProps {
	children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	const {
		data: boards,
		isLoading: isLoadingBoards,
		isError: isErrorBoards,
	} = useFetch<IBoards[]>({ url: "/boards", axiosMethod: "get" });
	const {
		data: tasks,
		isLoading: isLoadingTasks,
		isError: isErrorTasks,
	} = useFetch<IAllTasks[]>({ url: "/tasks", axiosMethod: "get" });
	const { data: users } = useFetch<IUserFullDesc[]>({ url: "/users", axiosMethod: "get" });
	// Promise.allSettled([boards, tasks, users]) вынести в кастомный хук

	const [filters, setFilters] = React.useState<IFilterObject>({
		sortTaskNameAndAssignee: "",
		sortStatus: null,
		sortBoardId: null,
		sortAssigneeId: null,
	});

	const [selectedTaskForModal, setSelectedTaskForModal] = React.useState<IAllTasks | null>(null);
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

	const handleOpenModal = (task?: IAllTasks) => {
		setIsModalOpen?.(true);
		if (task) {
			setSelectedTaskForModal?.(task);
		} else {
			setSelectedTaskForModal(null);
		}
	};
  
	const valueContext = {
		boards,
		isLoadingBoards,
		isErrorBoards,
		tasks,
		isLoadingTasks,
		isErrorTasks,
		users,
		filters,
		setFilters,
		selectedTaskForModal,
		setSelectedTaskForModal,
		isModalOpen,
		setIsModalOpen,
		handleOpenModal,
	};

	return <AppContext.Provider value={valueContext}>{children}</AppContext.Provider>;
};

export default AppProvider;
