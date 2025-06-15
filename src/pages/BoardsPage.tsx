import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { api } from "../api/client";
import type { IBoards } from "../types/types";

const BoardsPage: React.FC = () => {
	const [boards, setBoards] = useState<IBoards[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchBoards = async () => {
			try {
				const { data: response } = await api.get<{ data: IBoards[] }>("/boards");
				setBoards(response.data);
			} catch (error) {
				setError("Failed to get Boards");
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchBoards();
	}, []);

	if (loading) {
		return <div>Loading boards ...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	console.log(boards);

	return (
		<div>
			{boards.length === 0 && <div>Нет доступных досок</div>}
			{boards.map((board) => (
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
