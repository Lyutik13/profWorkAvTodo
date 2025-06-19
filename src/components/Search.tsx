import React from "react";
import { Input, Dropdown, Space, Button, Checkbox } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

import AppContext from "../AppContext";

const Search: React.FC = () => {
	const inProgress = ["Backlog", "InProgress", "Done"];
	const { boards} = React.useContext(AppContext);

	const items: MenuProps["items"] = [
		// {
		// 	key: "menuProps0",
		// 	label: "Сбросить фильтры",
		// 	disabled: true,
		// },
		{
			key: "1",
			label: "Статус задачи",
			children: inProgress.map((progress, i) => ({
				key: `${progress + i}`,
				label: <Checkbox>{progress}</Checkbox>,
			})),
		},
		{
			key: "2",
			label: "Доски",
			children: boards?.map((board) => ({
				key: `${board.id}`,
				label: <Checkbox>{board.name}</Checkbox>,
			})),
		},
		{
			key: "3",
			label: "asc/desc",
			// disabled: true,
			children: [
				{
					key: 1,
					label: <Checkbox>asc</Checkbox>,
				},
				{
					key: 2,
					label: <Checkbox>desc</Checkbox>,
				},
			],
		},
	];

	// const stopCloseItem = (e) => {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// };

	const menuProps = {
		items,
		// onClick: stopCloseItem,
	};

	return (
		<div className="search">
			<Input.Search
				placeholder="Type keywords"
				style={{ width: "20%" }}
				onSearch={(value) => console.log(value)}
				enterButton
			/>

			<Dropdown menu={menuProps}>
				<Button>
					<Space>
						Фильтры
						<DownOutlined />
					</Space>
				</Button>
			</Dropdown>
		</div>
	);
};

export default Search;
