import styled from "styled-components";

export const LeaderBoardContainer = styled.div`
	width: 100%;
	overflow-x: auto;
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 3rem;
	max-width: 850px;
`;

export const TableHead = styled.thead`
	background-color: #f2f2f2;
`;

export const TableRow = styled.tr`
	&:nth-child(even) {
		background-color: #90cdf4;
	}
`;

export const TableCell = styled.td`
	padding: 12px 6px;
	text-align: left;
	border-bottom: 1px solid #ddd;
`;

export const Cell = styled.div`
	padding: 12px 6px;
	text-align: left;
	cursor: pointer;
	transition: background-color 0.3s ease;
	border-bottom: 2px solid black;
	&:hover {
		border-bottom-color: #3333ff; /* Darker shade on hover */
	}
`;

export const TableHeaderCell = styled.th`
	padding: 12px 6px;
	text-align: left;
	border-bottom: 1px solid #ddd;
`;
