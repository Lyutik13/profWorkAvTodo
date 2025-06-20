import { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../AppContext";

const BoardsPage: React.FC = () => {
	const { boards, isLoadingBoards, isErrorBoards } = useContext(AppContext);

	if (isLoadingBoards) {
		return <div>Loading tasks ...</div>;
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
					<Link to={`/boards/${board.id}`} state={board}>
						Перейти к доске
					</Link>
				</div>
			))}
		</div>
	);
};

export default BoardsPage;
