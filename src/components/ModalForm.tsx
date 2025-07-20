import React from "react";
import { Modal } from "antd";

import AppContext from "../AppContext";
import FormTask from "./FormTask";

const ModalForm: React.FC = () => {
	const { isModalOpen, setIsModalOpen, selectedTaskForModal } = React.useContext(AppContext);

	const handleCancel = () => {
		setIsModalOpen?.(false);
	};

	return (
		<>
			<Modal
				title={selectedTaskForModal ? "Редактирование задачи" : "Создание задачи"}
				closable={{ "aria-label": "Custom Close Button" }}
				open={isModalOpen}
				onCancel={handleCancel}>
				<FormTask />
			</Modal>
		</>
	);
};

export default ModalForm;
