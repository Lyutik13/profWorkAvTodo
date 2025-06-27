import React from "react";
import { Link } from "react-router-dom";

import AppContext from "../AppContext";

const BoardsPage: React.FC = () => {
	const { boards, isLoadingBoards, isErrorBoards } = React.useContext(AppContext);

	if (isLoadingBoards) {
		return <div>Loading boards...</div>;
	}

	if (isErrorBoards) {
		return <div>Error: {isErrorBoards}</div>;
	}

	return (
		<div>
			{boards?.length === 0 && <div>Нет доступных досок</div>}
			{boards?.map((board) => (
				<div className="boardItem" key={board.id}>
					<div>{board.name}</div>
					<Link style={{ width: 113 }} to={`/boards/${board.id}`}>
						Перейти к доске
					</Link>
				</div>
			))}
		</div>
	);
};

export default BoardsPage;
