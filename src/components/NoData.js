import React from "react";

export const NoData = ({ msg }) => {
	return <div>{msg}</div>;
};

NoData.defaultProps = {
	msg: "NO Data To Display--"
};
