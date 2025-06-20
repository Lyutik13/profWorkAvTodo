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

import type { IBoards, IAllTasks } from "./types/types";

const { Content } = Layout;

export default function App() {
  const { data: boards, isLoading: isLoadingBoards, isError: isErrorBoards } = useFetch<IBoards[]>({ url: "/boards", axiosMethod: "get" });
  const { data: tasks, isLoading: isLoadingTasks, isError: isErrorTasks } = useFetch<IAllTasks[]>({ url: "/tasks", axiosMethod: "get" });

	const value = { boards, isLoadingBoards, isErrorBoards, tasks, isLoadingTasks, isErrorTasks };

	return (
		<AppContext.Provider value={value}>
			<BrowserRouter>
				<Layout>
					<HeaderMenu />

					<Content style={{ padding: "1.5rem" }}>
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
