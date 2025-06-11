import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Layout } from "antd";

const { Header } = Layout;

const HeaderMenu: React.FC = () => {
	return (
		<Header>
			<div className="header">
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
				<Button type="primary" style={{ marginLeft: "auto" }}>
					Создать задачу
				</Button>
			</div>
		</Header>
	);
};

export default HeaderMenu;
