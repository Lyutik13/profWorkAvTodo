import React from "react";

import type { ITaskInBoard } from "../types/types";

type ColumnProps = {
	title: string;
	tasks: ITaskInBoard[];
};

const Column: React.FC<ColumnProps> = (props: ColumnProps) => {
	const { title, tasks } = props;

	return (
		<div className="boardPageId__column">
			<h3>{title}</h3>
			{tasks.length === 0 ? (
				<div>Нет задач в этом статусе</div>
			) : (
				tasks.map((task) => (
					<div className="taskItem" key={task.id}>
						<h4>{task.title}</h4> <p>{task.description}</p>
					</div>
				))
			)}
		</div>
	);
};
export default Column;
