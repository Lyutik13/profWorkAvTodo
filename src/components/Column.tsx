import React from "react";

import type { ITaskInBoard } from "../types/types";
import AppContext from "../AppContext";

type ColumnProps = {
	title: string;
	colorCard?: string;
	tasks: ITaskInBoard[] | undefined;
};

const Column: React.FC<ColumnProps> = (props: ColumnProps) => {
	const { title, colorCard = "", tasks } = props;
	const { handleOpenModal } = React.useContext(AppContext);

	return (
		<div className="boardPageId__column">
			<h3>{title}</h3>
			{tasks && tasks.length === 0 ? (
				<div>Нет задач в этом статусе</div>
			) : (
				tasks?.map((task) => (
					<div
						className={`cardItem ${colorCard}`}
						key={task.id}
						onClick={() => handleOpenModal(task)}>
						<h4>{task.title}</h4> <p>{task.description}</p>
					</div>
				))
			)}
		</div>
	);
};
export default Column;
