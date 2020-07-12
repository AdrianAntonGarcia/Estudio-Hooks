import React, { memo } from "react";

/**
 * Solo se vuelve a renderizar si las properties del componente
 * han cambiado
 */
// También se puede React.memo
export const Small = memo(({ value }) => {
	// console.log("Me volvi a llamar :(");
	return <small>{value}</small>;
});
