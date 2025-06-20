import React from "react";

import { api } from "../api/client";

interface IUseFetchProps {
	url: string;
	axiosMethod: "get" | "post" | "put" | "delete";
}

const useFetch = <T,>(props: IUseFetchProps) => {
	const { url, axiosMethod } = props;

	const [data, setData] = React.useState<T>();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [isError, setIsError] = React.useState<string>();

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const { data } = await api[axiosMethod]<{ data: T }>(url);
			setData(data.data);
		} catch (error) {
			setIsError("Failed to fetch data:" + error);
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	React.useEffect(() => {
		fetchData();
	}, []);

	return {
		data,
		isLoading,
		isError,
	};
};

export default useFetch;
