import React from "react";
import "./App.css";

export const App = () => {
	// 1 - Como carregar um conteudo da web usando fetch?
	// 2 - Como usar dados da web no react?
	// 3 - O que é useState?
	// 4 - O que é array.map em javascript?
	// https://jsonplaceholder.typicode.com/todos/

	// dicas
	const meuNome = "Samuel Andrade"; // var bind
	const item1e2 = ["Item 1", "Item 2"]; // array map

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
							{item1e2.map((item) => (
								<li>{item}</li>
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
