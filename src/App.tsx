// import React from "react";
import "./App.scss";
import "@ant-design/v5-patch-for-react-19";

import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import AppProvider from "./AppProvider";
import HeaderMenu from "./components/Header";
import TasksPage from "./pages/TasksPage";
import BoardsPage from "./pages/BoardsPage";
import BoardPageId from "./pages/BoardPageId";
import ModalForm from "./components/ModalForm";
import NotFoundPage from "./pages/NotFoundPage";

const { Content } = Layout;

export default function App() {
	return (
		<AppProvider>
			<Layout>
				<ModalForm />
				<HeaderMenu />

				<Content style={{ padding: "1rem", marginTop: 64 }}>
					<Routes>
						<Route path="/tasks" element={<TasksPage />} />
						<Route path="/boards" element={<BoardsPage />} />
						<Route path="/boards/:id" element={<BoardPageId />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Content>
			</Layout>
		</AppProvider>
	);
}
