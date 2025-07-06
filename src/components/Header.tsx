import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Layout } from "antd";

import AppContext from "../AppContext";

const { Header } = Layout;

const HeaderMenu: React.FC = () => {
	const { handleOpenModal } = React.useContext(AppContext);

	return (
		<Header className="header">
			<nav className="nav">
				<Menu
					style={{ flex: 1 }}
					theme="dark"
					mode="horizontal"
					items={[
						{
							key: "/tasks",
							label: <Link to="/tasks">Все задачи</Link>,
						},
						{
							key: "boards",
							label: <Link to="/boards">Проекты</Link>,
						},
					]}
				/>
				<Button type="primary" style={{ marginRight: "0.5rem" }} onClick={() => handleOpenModal()}>
					Создать задачу
				</Button>
			</nav>
		</Header>
	);
};

export default HeaderMenu;
