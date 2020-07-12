import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = React.memo(({ todos, handleDelete, handleToggle }) => {
	console.log('Renderizado TodoList');
	return (
		<>
			{/**
			 * TodoList, todos, handleDelete, handleToggle
			 */}
			<ul className="list-group list-group-flush">
				{todos.map((todo, i) => (
					<TodoListItem
						key={todo.id}
						todo={todo}
						index={i}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				))}
			</ul>
		</>
	);
});
