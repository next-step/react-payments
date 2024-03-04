import { useEffect } from "react";
import Text from "../../Text/Text";
import useFlexibleInputContext from "../provider/useFlexibleInputContext";

const Count = () => {
	const { totalCurrentLength, totalMaxLength, onChangeMode } =
		useFlexibleInputContext();

	useEffect(() => {
		onChangeMode("count");
	}, [onChangeMode]);

	return (
		<Text.P>
			{totalCurrentLength}/{totalMaxLength}
		</Text.P>
	);
};

export default Count;
