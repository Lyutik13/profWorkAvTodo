import React from "react";
import { Modal } from "antd";

import AppContext from "../AppContext";
import FormTask from "./FormTask";

const ModalForm: React.FC = () => {
	const { isModalOpen, setIsModalOpen } = React.useContext(AppContext);

	// Обработчики для кнопок "ОК" и "Отмена модального окна"
	// const handleOk = () => {
	// 	setIsModalOpen?.(false);
	//   console.log("ModalForm: handleOk called");

	// 	// setSelectedTaskForModal?.(null);
	// };

	const handleCancel = () => {
		setIsModalOpen?.(false);
		console.log("ModalForm: handleCancel called");

		// setSelectedTaskForModal?.(null);
	};

	return (
		<>
			<Modal
				title={"Создание/Редактирование задачи"}
				closable={{ "aria-label": "Custom Close Button" }}
				open={isModalOpen}
				// onOk={handleOk}
				onCancel={handleCancel}
				footer={[]}>
				<FormTask />
			</Modal>
		</>
	);
};

export default ModalForm;
