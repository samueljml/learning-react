import React from "react";
import { useState } from "react";
import "./App.css";

export const App = () => {
	// 1 - Como carregar um conteudo da web usando fetch?

	// 2 - Como usar dados da web no react?

	// 3 - O que é useState?
	//is a function that allow to have state varibles.
	// declare a new variable of state named "pageState"
	const [todoData, setTodoData] = useState([{ title: "Gato" }]);

	fetch("https://jsonplaceholder.typicode.com/todos/")
		.then((response) => response.json())
		.then((json) => setTodoData(json));

	// 4 - O que é array.map em javascript?
	// Is a method that operate a function for each element of the the array

	// https://jsonplaceholder.typicode.com/todos/

	// dicas
	const meuNome = "Samuel Andrade"; // var bind

	/*

	*/

	return (
		<section>
			<div id="title-container">
				<h1>Title</h1>
			</div>
			<div id="content-container">
				<div id="sidebar">Sidebar</div>
				<div id="main-container">
					<div style={{ display: "flex", flexDirection: "column" }}>
						<h2>Main Container</h2>
						<ul>
							{todoData.map((item) => (
								<li>{item.title}</li>
							))}
							<li>Item 3</li>
							<li>Item 4</li>
							<li>{meuNome} dica!</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="footer">footer</div>
		</section>
	);
};
