import { useParams, useLocation } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import type { ITaskInBoard } from "../types/types";
import Column from "../components/Column";

const BoardPageId: React.FC = () => {
	const location = useLocation();
	const { id } = useParams<{ id: string }>();
	const { name } = location.state || { name: "" }; //Проблема если я вручную вставлю URL в Link не будет state (BoardPageId)

	const {
		data: boardPageId,
		isLoading: isLoadingPageId,
		isError: isErrorPageId,
	} = useFetch<ITaskInBoard[]>({ url: `/boards/${id}`, axiosMethod: "get" });

	const todoTasks = boardPageId?.filter((task) => task.status === "Backlog");
	const inProgressTasks = boardPageId?.filter((task) => task.status === "InProgress");
	const doneTasks = boardPageId?.filter((task) => task.status === "Done");

	if (isLoadingPageId) {
		return <div>Loading boards ...</div>;
	}

	if (!boardPageId) {
		return <div>Нет доступных задач</div>;
	}

	if (isErrorPageId) {
		return <div>Error: {isErrorPageId}</div>;
	}
	console.log("boardPageId");

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
