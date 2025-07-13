import React from "react";

import "./App.scss";
import "@ant-design/v5-patch-for-react-19";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import useFetch from "./hooks/useFetch";
import AppContext from "./AppContext";
import HeaderMenu from "./components/Header";
import TasksPage from "./pages/TasksPage";
import BoardsPage from "./pages/BoardsPage";
import BoardPageId from "./pages/BoardPageId";
import ModalForm from "./components/ModalForm";

import type { IBoards, IAllTasks, IFilterObject, IUserFullDesc } from "./types/types";

const { Content } = Layout;

export default function App() {
  const { data: boards, isLoading: isLoadingBoards, isError: isErrorBoards } = useFetch<IBoards[]>({ url: "/boards", axiosMethod: "get" });
  const { data: tasks, isLoading: isLoadingTasks, isError: isErrorTasks } = useFetch<IAllTasks[]>({ url: "/tasks", axiosMethod: "get" });
  const { data: users } = useFetch<IUserFullDesc[]>({ url: "/users", axiosMethod: "get" });
  // Promise.allSettled([boards, tasks, users]) вынести в кастомный хук
  
  const [ filters, setFilters ] = React.useState<IFilterObject>({
    sortTaskNameAndAssignee: '',
    sortStatus: null,
    sortBoardId: null,
    sortAssigneeId: null,
  });
  
  const [ selectedTaskForModal, setSelectedTaskForModal ] = React.useState<IAllTasks| null>(null);
  const [ isModalOpen, setIsModalOpen ] = React.useState<boolean>(false);

  const handleOpenModal = (task?: IAllTasks) => {
    setSelectedTaskForModal?.(null);
		setIsModalOpen?.(true);
    if (task) {
      setSelectedTaskForModal?.(task);
    }
	};
  
	const valueContext = { boards, isLoadingBoards, isErrorBoards, tasks, isLoadingTasks, isErrorTasks, users, filters, setFilters, selectedTaskForModal, setSelectedTaskForModal, isModalOpen, setIsModalOpen, handleOpenModal };

  // вынеси всё в AppProvider, чтобы не было лишнего контекста
	return (
		<AppContext.Provider value={valueContext}>
			<BrowserRouter>
				<Layout>
					<HeaderMenu />

					<Content style={{ padding: "1rem", marginTop: 64 }}>
            {isModalOpen && <ModalForm/>}
						<Routes>
							<Route path="/tasks" element={<TasksPage />} />
							<Route path="/boards" element={<BoardsPage />} />
							<Route path="/boards/:id" element={<BoardPageId />} />
							<Route path="*" element={<div>404 Not Found</div>} />
						</Routes>
					</Content>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>                
	);
}
