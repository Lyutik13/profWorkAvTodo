import React from "react";
import { useParams } from "react-router-dom";

import AppContext from "../AppContext";
import useFetch from "../hooks/useFetch";
import type { ITaskInBoard } from "../types/types";
import Column from "../components/Column";

const BoardPageId: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const { boards } = React.useContext(AppContext);

	const {
		data: boardPageId,
		isLoading: isLoadingPageId,
		isError: isErrorPageId,
	} = useFetch<ITaskInBoard[]>({ url: `/boards/${id}`, axiosMethod: "get" });

	const boardName = boards?.find((board) => Number(board.id) === Number(id))?.name || "";
	const todoTasks = boardPageId?.filter((task) => task.status === "Backlog");
	const inProgressTasks = boardPageId?.filter((task) => task.status === "InProgress");
	const doneTasks = boardPageId?.filter((task) => task.status === "Done");

	if (isLoadingPageId) {
		return <div>Loading board...</div>;
	}

	if (!boardPageId) {
		return <div>Нет доступных задач</div>;
	}

	if (isErrorPageId) {
		return <div>Error: {isErrorPageId}</div>;
	}

	return (
		<div className="boardPageId">
			<h2 className="boardPageId__title">{boardName ? boardName : "Нет такой доски"}</h2>
			<div className="boardPageId__columns">
				<Column title="To do" tasks={todoTasks} />
				<Column title="In progress" tasks={inProgressTasks} />
				<Column title="Done" tasks={doneTasks} />
			</div>
		</div>
	);
};

export default BoardPageId;
