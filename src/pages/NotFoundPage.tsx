import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="notFoundPage">
			<Button onClick={() => navigate("/tasks")}>На главную</Button>
			<div>404 Not Found</div>
		</div>
	);
};

export default NotFoundPage;
