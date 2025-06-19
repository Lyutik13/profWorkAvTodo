import "./App.scss";
import "@ant-design/v5-patch-for-react-19";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import AppContext from "./AppContext";
import HeaderMenu from "./components/Header";
import TasksPage from "./pages/TasksPage";
import BoardsPage from "./pages/BoardsPage";
import BoardPageId from "./pages/BoardPageId";

import type { IBoards, IAllTasks } from "./types/types";

const { Content } = Layout;

export default function App() {
	const [boards, setBoards] = useState<IBoards[] | null>(null);
	const [tasks, setTasks] = useState<IAllTasks[] | null>(null);

	const value = { boards, setBoards, tasks, setTasks };

  console.log(tasks);
  

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
