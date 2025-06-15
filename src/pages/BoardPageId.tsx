import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { api } from "../api/client";
import type { ITaskInBoard } from "../types/types";
import Column from "../components/Column";

const BoardPageId: React.FC = () => {
	const location = useLocation();
	const { id } = useParams<{ id: string }>();
	const { name } = location.state || { name: "" }; //Проблема если я вручную вставлю URL в Link не будет state (BoardPageId)

	const [boardPageId, setBoardPageId] = useState<ITaskInBoard[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const todoTasks = boardPageId.filter((task) => task.status === "Backlog");
	const inProgressTasks = boardPageId.filter((task) => task.status === "InProgress");
	const doneTasks = boardPageId.filter((task) => task.status === "Done");

	useEffect(() => {
		const fetchBoardById = async () => {
			try {
				const { data: response } = await api.get<{ data: ITaskInBoard[] }>(`/boards/${id}`);
				setBoardPageId(response.data);
			} catch (error) {
				setError("Failed to get Board by ID");
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchBoardById();
	}, []);

	if (loading) {
		return <div>Loading boards ...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	console.log(boardPageId);
	console.log(location.state);

	return (
		<div className="boardPageId">
			<h2 className="boardPageId__title">{name}</h2>
			<div className="boardPageId__columns">
				<Column title="To do" tasks={todoTasks} />
				<Column title="In progress" tasks={inProgressTasks} />
				<Column title="Done" tasks={doneTasks} />
			</div>
		</div>
	);
};

export default BoardPageId;
