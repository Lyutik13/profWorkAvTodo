import { useState, useEffect, useContext } from "react";

import AppContext from "../AppContext";
import { api } from "../api/client";
import Search from "../components/Search";
import type { IAllTasks, IBoards } from "../types/types";

const TasksPage: React.FC = () => {
	const { tasks, setTasks, boards, setBoards } = useContext(AppContext);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchTasks = async () => {
			if (tasks && tasks.length > 0) {
				setLoading(false);
				return;
			}

			try {
				const { data: resTasks } = await api.get<{ data: IAllTasks[] }>("/tasks");
				setTasks(resTasks.data);
			} catch (error) {
				setError("Failed to get Tasks");
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchTasks();
	}, []);

	useEffect(() => {
		setLoading(false);
		const fetchBoards = async () => {
			if (boards && boards.length > 0) {
				return;
			}

			try {
				const { data: resBoards } = await api.get<{ data: IBoards[] }>("/boards");
				setBoards(resBoards.data);
			} catch (error) {
				setError("Failed to get Boards");
				console.log(error);
			}
		};
		fetchBoards();
	}, []);

	if (loading) {
		return <div>Loading tasks ...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			<Search />
			{tasks?.length === 0 && <div>Нет доступных задач</div>}
			{tasks?.map((task) => (
				<div className="taskItem" key={task.id}>
					{task.title}
				</div>
			))}
		</div>
	);
};

export default TasksPage;
