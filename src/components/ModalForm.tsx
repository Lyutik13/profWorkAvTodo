import React from "react";
import { Modal } from "antd";

import AppContext from "../AppContext";


const App: React.FC = () => {
	const { selectedTaskForModal, setSelectedTaskForModal, isModalOpen, setIsModalOpen } =
		React.useContext(AppContext);

	const handleOk = () => {
		setIsModalOpen?.(false);
    setSelectedTaskForModal?.(null)
	};

	const handleCancel = () => {
	setIsModalOpen?.(false);
	setSelectedTaskForModal?.(null);
	};

  console.log('modal');
  

	return (
		<>
			<Modal
				title={selectedTaskForModal?.title}
				closable={{ "aria-label": "Custom Close Button" }}
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}>
				<p>Some contents...</p>
			</Modal>
		</>
	);
};

export default App;
