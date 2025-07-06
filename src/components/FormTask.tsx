import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Select } from "antd";
import { Link } from "react-router-dom";

import AppContext from "../AppContext";
import type { Priority, InProgress } from "../types/types";
import { statusArr, priorityArr } from "../types/types";

export const FormTask = () => {
	const { selectedTaskForModal, boards, users } = React.useContext(AppContext);

	type FieldType = {
		taskName?: string;
		description?: string;
		projectName?: string;
		priority?: Priority;
		progress?: InProgress;
		taskUserName?: string;
	};

	// Обработчики для формы
	const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			name="taskForm"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off">
			<Form.Item<FieldType> name="taskName" rules={[{ required: true }]}>
				<Input placeholder="Название" allowClear value={selectedTaskForModal?.title} />
			</Form.Item>

			<p>{selectedTaskForModal?.title}</p>

			<Form.Item<FieldType> name="description" rules={[{ required: true }]}>
				<Input.TextArea
					allowClear
					showCount
					maxLength={300}
					placeholder="Описание"
					style={{ minHeight: 100 }}
				/>
			</Form.Item>

			<Form.Item<FieldType> name="projectName" rules={[{ required: true }]}>
				<Select placeholder="Проект" allowClear>
					{boards?.map((board) => (
						<Select.Option key={board.id} value={`${board.name}`}>
							{board.name}
						</Select.Option>
					))}
				</Select>
			</Form.Item>

			<Form.Item<FieldType> name="priority" rules={[{ required: true }]}>
				<Select placeholder="Приоритет" allowClear>
					{priorityArr?.map((priority, i) => (
						<Select.Option key={i} value={`${priority}`}>
							{priority}
						</Select.Option>
					))}
				</Select>
			</Form.Item>

			<Form.Item<FieldType> name="progress" rules={[{ required: true }]}>
				<Select placeholder="Статус" allowClear>
					{statusArr?.map((status, i) => (
						<Select.Option key={i} value={`${status}`}>
							{status}
						</Select.Option>
					))}
				</Select>
			</Form.Item>

			<Form.Item<FieldType> name="taskUserName" rules={[{ required: true }]}>
				<Select placeholder="Исполнитель" allowClear>
					{users?.map((user) => (
						<Select.Option key={user.id} value={`${user.fullName}`}>
							{user.fullName}
						</Select.Option>
					))}
				</Select>
			</Form.Item>

			<div className="formBtn">
				{selectedTaskForModal && "boardId" in selectedTaskForModal && (
					<Link to={`/boards/${selectedTaskForModal.boardId}`}>
						<Button>Перейти на доску</Button>
					</Link>
				)}
				<Button type="primary" htmlType="submit">
					Создать/Обновить задачу
				</Button>
			</div>
		</Form>
	);
};

export default FormTask;
