import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Layout } from "antd";

const { Header } = Layout;

const HeaderMenu: React.FC = () => {
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
				<Button type="primary" style={{ marginRight: "0.5rem" }}>
					Создать задачу
				</Button>
			</nav>
		</Header>
	);
};

export default HeaderMenu;
