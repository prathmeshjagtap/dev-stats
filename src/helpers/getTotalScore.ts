import { TotalActivityType } from "../typings";

const getTotalScore = (totalActivityData: TotalActivityType[]): Number =>
	// This can further be improved based of different  parameters such as 5 points for PR , 10 points for commnents and so on
	// For now keeping it simple

	totalActivityData.reduce(
		(acc, currentValue) => Number(acc) + Number(currentValue.value),
		0
	);

export { getTotalScore };
