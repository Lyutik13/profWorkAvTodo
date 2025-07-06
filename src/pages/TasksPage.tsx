import React from "react";

import AppContext from "../AppContext";
import Search from "../components/Search";

const TasksPage: React.FC = () => {
	const { tasks, isLoadingTasks, isErrorTasks, filters, handleOpenModal } =
		React.useContext(AppContext);

	const filtersTasks =
		tasks &&
		tasks.filter((task) => {
			const taskNameAndAssignee =
				task.title.toLowerCase().includes(filters.sortTaskNameAndAssignee.toLowerCase()) ||
				task.assignee.fullName
					.toLowerCase()
					.includes(filters.sortTaskNameAndAssignee.toLowerCase());

			const inProgressStatus = task.status
				.toLowerCase()
				.includes(filters.sortStatus?.toLowerCase() || "");

			const inBoardId =
				Number(task.boardId) === Number(filters.sortBoardId) || !filters.sortBoardId;
			const inAssigneeId =
				Number(task.assignee.id) === Number(filters.sortAssigneeId) || !filters.sortAssigneeId;

			return taskNameAndAssignee && inProgressStatus && inBoardId && inAssigneeId;
		});

	if (isLoadingTasks) {
		return <div>Loading tasks ...</div>;
	}

	if (isErrorTasks) {
		return <div>Error: {isErrorTasks}</div>;
	}

	return (
		<>
			<Search />
			{filtersTasks?.length === 0 && <div>Нет доступных задач. Измените ввод или фильтры.</div>}
			{filtersTasks?.map((task) => (
				<div className="taskItem" key={task.id} onClick={() => handleOpenModal(task)}>
					{task.title}
				</div>
			))}
		</>
	);
};

export default TasksPage;
