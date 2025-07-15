import React from "react";
import { useForm, Controller } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Button, Form, Input, Select } from "antd";
import { Link, useMatch } from "react-router-dom";
// import type { FormProps } from "antd";

import AppContext from "../AppContext";
import type { IAllTasks } from "../types/types";
import { statusArr, priorityArr } from "../types/types";

export const FormTask = () => {
	const { selectedTaskForModal, boards, users, tasks, setIsModalOpen, setSelectedTaskForModal } =
		React.useContext(AppContext);
	const matchBoard = useMatch("/boards/:id");
	const matchTasks = useMatch("/tasks");

	const { control, handleSubmit } = useForm<IAllTasks>({
		defaultValues: {
			boardId: selectedTaskForModal?.boardId,
			boardName: selectedTaskForModal?.boardName,
			title: selectedTaskForModal?.title,
			description: selectedTaskForModal?.description,
			id: selectedTaskForModal?.id,
			priority: selectedTaskForModal?.priority,
			status: selectedTaskForModal?.status,
			assignee: selectedTaskForModal?.assignee,
		},
	});

	const onSubmit: SubmitHandler<IAllTasks> = (data: IAllTasks) => {
		const boardIdInData = boards?.find((item) => item.name.includes(data.boardName))?.id;
		const idData = tasks ? Number(tasks[tasks.length - 1]?.id) + 1 : 1;
		data.boardId = data.boardId ?? boardIdInData;
		data.id = data.id ?? idData;

		setSelectedTaskForModal?.(data);

		setTimeout(() => {
			setIsModalOpen?.(false);
		}, 2000);

		console.log(data);
		return data;
	};

	// Обработчики для формы
	// const onFinish: FormProps<IFormTask>["onFinish"] = (values) => {
	// 	console.log("Success:", values);
	// };

	// const onFinishFailed: FormProps<IFormTask>["onFinishFailed"] = (errorInfo) => {
	// 	console.log("Failed:", errorInfo);
	// };

	return (
		<Form
			onFinish={handleSubmit(onSubmit)}
			name="taskForm"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			// onFinish={onFinish}
			// onFinishFailed={onFinishFailed}
			autoComplete="off">
			<Controller
				name="title"
				control={control}
				render={({ field }) => (
					<Form.Item>
						<Input
							{...field}
							value={field.value}
							onChange={field.onChange}
							placeholder="Название"
							allowClear
						/>
					</Form.Item>
				)}
			/>

			<Controller
				name="description"
				control={control}
				render={({ field }) => (
					<Form.Item>
						<Input.TextArea
							{...field}
							value={field.value}
							onChange={field.onChange}
							allowClear
							showCount
							maxLength={500}
							placeholder="Описание"
							style={{ minHeight: 100 }}
						/>
					</Form.Item>
				)}
			/>

			<Controller
				name="boardName"
				control={control}
				render={({ field }) => (
					<Form.Item>
						<Select
							{...field}
							disabled={!!matchBoard && !!selectedTaskForModal}
							value={field.value}
							onChange={field.onChange}
							placeholder="Проект"
							allowClear>
							{boards?.map((board) => (
								<Select.Option key={board.id} value={`${board.name}`}>
									{board.name}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
				)}
			/>

			<Controller
				name="priority"
				control={control}
				render={({ field }) => (
					<Form.Item>
						<Select
							{...field}
							value={field.value}
							onChange={field.onChange}
							placeholder="Приоритет"
							allowClear>
							{priorityArr?.map((priority, i) => (
								<Select.Option key={i} value={`${priority}`}>
									{priority}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
				)}
			/>

			<Controller
				name="status"
				control={control}
				render={({ field }) => (
					<Form.Item rules={[{ required: true }]}>
						<Select
							{...field}
							value={field.value}
							onChange={field.onChange}
							placeholder="Статус"
							allowClear>
							{statusArr?.map((status, i) => (
								<Select.Option key={i} value={`${status}`}>
									{status}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
				)}
			/>

			<Controller
				name="assignee"
				control={control}
				render={({ field }) => (
					<Form.Item>
						<Select
							{...field}
							value={field.value?.fullName}
							onChange={field.onChange}
							placeholder="Исполнитель"
							allowClear>
							{users?.map((user) => (
								<Select.Option key={user.id} value={`${user.fullName}`}>
									{user.fullName}
								</Select.Option>
							))}
						</Select>
					</Form.Item>
				)}
			/>

			<div className="formBtn">
				{matchTasks && (
					<Link to={`/boards/${selectedTaskForModal?.boardId}`}>
						<Button disabled={!selectedTaskForModal}>Перейти на доску</Button>
					</Link>
				)}
				<Button type="primary" htmlType="submit">
					{selectedTaskForModal ? "Обновить задачу" : "Создать задачу"}
				</Button>
			</div>
		</Form>
	);
};

export default FormTask;
