import React from "react";
import { Modal } from "antd";

import AppContext from "../AppContext";
import FormTask from "./FormTask";

const ModalForm: React.FC = () => {
	const { isModalOpen, setIsModalOpen, selectedTaskForModal } = React.useContext(AppContext);

	// Обработчики для кнопок "ОК" и "Отмена модального окна"
	// const handleOk = () => {
	// 	setIsModalOpen?.(false);
	//   console.log("ModalForm: handleOk called");

	// 	// setSelectedTaskForModal?.(null);
	// };

	const handleCancel = () => {
		setIsModalOpen?.(false);
		// setSelectedTaskForModal?.(null);
	};

	return (
		<>
			<Modal
				// title={"Создание/Редактирование задачи"}
				title={selectedTaskForModal ? "Редактирование задачи": "Создание задачи"}
				closable={{ "aria-label": "Custom Close Button" }}
				open={isModalOpen}
				// onOk={handleOk}
				onCancel={handleCancel}>
				<FormTask />
			</Modal>
		</>
	);
};

export default ModalForm;
