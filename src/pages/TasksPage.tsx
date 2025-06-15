import React from "react";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { api } from "../api/client";
import type { IAllTasks } from "../types/types";

const TasksPage: React.FC = () => {
	const [tasks, setTasks] = useState<IAllTasks[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// const navigate = useNavigate();

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const { data: response } = await api.get<{ data: IAllTasks[] }>("/tasks");
				setTasks(response.data);
			} catch (error) {
				setError("Failed to get Tasks");
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchTasks();
	}, []);

	if (loading) {
		return <div>Loading tasks ...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

  console.log(tasks);
  

	return (
		<div>
      {tasks.length === 0 &&  <div>Нет доступных задач</div>}
			{tasks.map((task) => (
				<div className="taskItem" key={task.id}>
					{task.title}
				</div>
			))}
		</div>
	);
};

export default TasksPage;
