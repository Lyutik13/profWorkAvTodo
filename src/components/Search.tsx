import React from "react";
import { Input, Select, Button } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";

import AppContext from "../AppContext";

const { Option } = Select;

const Search: React.FC = () => {
	const { filters, setFilters } = React.useContext(AppContext);

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
				<Select placeholder="Статус" style={{ width: 140 }} allowClear>
					<Option value="open">Открыта</Option>
					<Option value="in_progress">В работе</Option>
					<Option value="done">Завершена</Option>
				</Select>

				<Select placeholder="Доска" style={{ width: 140 }} allowClear>
					<Option value="board1">Доска 1</Option>
					<Option value="board2">Доска 2</Option>
				</Select>

				<Select
					placeholder="Исполнитель"
					style={{ width: 140 }}
					allowClear
					showSearch
					optionFilterProp="children">
					<Option value="user1">Иван Иванов</Option>
					<Option value="user2">Петр Петров</Option>
				</Select>

				<Button icon={<DeleteOutlined />}></Button>
			</div>
		</div>
	);
};

export default Search;
