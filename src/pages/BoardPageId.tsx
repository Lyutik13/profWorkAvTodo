import React from "react";
import { useParams } from "react-router-dom";

import AppContext from "../AppContext";
import useFetch from "../hooks/useFetch";
import type { IAllTasks } from "../types/types";
import Column from "../components/Column";

const BoardPageId: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const { boards } = React.useContext(AppContext);

	const {
		data: boardPageId,
		isLoading: isLoadingPageId,
		isError: isErrorPageId,
	} = useFetch<IAllTasks[]>({ url: `/boards/${id}`, axiosMethod: "get" });

	const boardName = boards?.find((board) => Number(board.id) === Number(id))?.name || "";
	const boardIdAndBoardNameAddInBoardPageId = boardPageId?.map((item) => {
		item.boardId = Number(id);
		item.boardName = boardName;
		return item;
	});

	const todoTasks = boardIdAndBoardNameAddInBoardPageId?.filter((task) => task.status === "Backlog");
	const inProgressTasks = boardIdAndBoardNameAddInBoardPageId?.filter((task) => task.status === "InProgress");
	const doneTasks = boardIdAndBoardNameAddInBoardPageId?.filter((task) => task.status === "Done");

	// const paramsForSelectedTaskForModal =

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
				<Column title="To do" colorCard="red" tasks={todoTasks} />
				<Column title="In progress" colorCard="yellow" tasks={inProgressTasks} />
				<Column title="Done" colorCard="green" tasks={doneTasks} />
			</div>
		</div>
	);
};

export default BoardPageId;
