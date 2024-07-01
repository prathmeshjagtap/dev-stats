const getUserNameFromEmail = (email: string): string => {
	let name = email.split("@");
	return name[0];
};

export { getUserNameFromEmail };
