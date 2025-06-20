import React from "react";

import AppContext from "../AppContext";
import Search from "../components/Search";

const TasksPage: React.FC = () => {
  const { tasks, isLoadingTasks, isErrorTasks } = React.useContext(AppContext);

	if (isLoadingTasks) {
		return <div>Loading tasks ...</div>;
	}

	if (isErrorTasks) {
		return <div>Error: {isErrorTasks}</div>;
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
