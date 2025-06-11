import "./App.scss";
import '@ant-design/v5-patch-for-react-19';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import TasksPage from "./pages/TasksPage";
import  BoardsPage  from "./pages/BoardsPage";
import { BoardPage } from "./pages/BoardPage";
import HeaderMenu from "./components/header";

const { Content } = Layout;

export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<HeaderMenu />

				<Content style={{ padding: "24px" }}>
					<Routes>
						<Route path="/tasks" element={<TasksPage />} />
						<Route path="/boards" element={<BoardsPage />} />
						<Route path="/boards/:id" element={<BoardPage />} />
						<Route path="*" element={<div>404 Not Found</div>} />
					</Routes>
				</Content>
			</Layout>
		</BrowserRouter>
	);
}
