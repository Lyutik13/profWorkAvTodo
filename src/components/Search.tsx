import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";

import AppContext from "../AppContext";

const { Option } = Select;

const Search: React.FC = () => {
	const { filters, setFilters, boards, users } = React.useContext(AppContext);
	const statusArr = ["Backlog", "InProgress", "Done"];

	return (
		<div className="search">
			<div className="search__input">
				<Input.Search
					value={filters.sortTaskNameAndAssignee}
					placeholder="Введите название задачи..."
					allowClear
					enterButton={<SearchOutlined />}
					size="large"
					onChange={(e) => setFilters({ sortTaskNameAndAssignee: e.target.value })} //Сделай debounce
				/>
			</div>

			<div className="search__filters">
				<Select
					value={filters.sortStatus}
					placeholder="Статус"
					style={{ width: 140 }}
					allowClear
					onChange={(value) => setFilters({ ...filters, sortStatus: value })}>
					{statusArr.map((status) => (
						<Option value={`${status}`}>{status}</Option>
					))}
				</Select>

				<Select
					value={filters.sortBoardId}
					placeholder="Доска"
					style={{ width: 140 }}
					allowClear
					onChange={(value) => setFilters({ ...filters, sortBoardId: value })}>
					{boards?.map((board) => <Option value={`${board.id}`}>{board.name}</Option>)}
				</Select>

				<Select
					value={filters.sortAssigneeId}
					placeholder="Исполнитель"
					style={{ width: 140 }}
					allowClear
					onChange={(value) => setFilters({ ...filters, sortAssigneeId: value })}>
					{users?.map((user) => <Option value={`${user.id}`}>{user.fullName}</Option>)}
				</Select>

				<Button
					onClick={() =>
						setFilters({
							sortTaskNameAndAssignee: "",
							sortStatus: undefined,
							sortBoardId: undefined,
							sortAssigneeId: undefined,
						})
					}
					icon={<DeleteOutlined />}></Button>
			</div>
		</div>
	);
};

export default Search;
