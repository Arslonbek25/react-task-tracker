import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: "Complete project proposal",
			day: "Monday, April 25",
			reminder: true,
		},
		{
			id: 2,
			text: "Attend team meeting",
			day: "Tuesday, April 26",
			reminder: true,
		},
		{
			id: 3,
			text: "Review project plan",
			day: "Wednesday, April 27",
			reminder: false,
		},
		{
			id: 4,
			text: "Submit project deliverables",
			day: "Thursday, April 28",
			reminder: false,
		},
	]);

	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

	return (
		<div className="container">
			<Header title="Task Tracker" />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} />
			) : (
				"No tasks. time to relax"
			)}
		</div>
	);
}

export default App;
