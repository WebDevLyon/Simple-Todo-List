$(function () {
	// Declaration des variables
	let mois = [
		"Janvier",
		"Fevrier",
		"Mars",
		"Avril",
		"Mai",
		"Juin",
		"Juillet",
		"Aout",
		"Septembre",
		"Octobre",
		"Novembre",
		"Decembre",
	]
	let jour = [
		"Dimanche",
		"Lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
	]
	let dateDuJour = new Date()
	
	// !Liste de taches pour les tests
	let todos = [
		{
			nom: "tache 1",
			description: "faire ceci",
			date: new Date("2021-03-09T13:00:00"),
		},
		{
			nom: "tache 2",
			description: "faire cela",
			date: new Date("2021-03-09T12:00:00"),
		},
	]

	// Affichage du jour dans le header
	$(".dateJ__jour-number").text(dateDuJour.getDate())
	$(".dateJ__mois").text(mois[dateDuJour.getMonth()])
	$(".dateJ__annee").text(dateDuJour.getFullYear())
	$(".jour").text(jour[dateDuJour.getDay()])

	// Fonctions

	//Tris des todos selon le date
	function sortTodo() {
		todos.sort(function compare(a, b) {
			if (a.date < b.date) return -1
			if (a.date > b.date) return 1
			return 0
		})
	}

	// Todo:Récupération des todos

	// Todo:Ajout des todos du jour dans la liste
	function MAJList() {
		todos.forEach((todo) => {
			if (
				todo.date.getDay() == dateDuJour.getDay() &&
				todo.date.getMonth() == dateDuJour.getMonth() &&
				todo.date.getFullYear() == dateDuJour.getFullYear()
			) {
				// Création de la structure de la card
				let structureCard =
					'<div class="card"><div class="card__left"><h2 class="card__left__title">' +
					todo.nom +
					'</h2><p class="card__left__describe">' +
					todo.description +
					'</p></div><div class="card__right"><p class="card__right__time">' +
					todo.date.getHours() +
					":" +
					todo.date.getMinutes()
				;("</p></div></div>")
				$(".list__todo").append(structureCard)
			}
		})
	}

	$(".btn-add").on("click", () => {
		let newTodo = {
			nom: "New tache",
			description: "nouvelle tache ajoutée",
			date: new Date(),
		}
		todos.push(newTodo)
		$(".list__todo").empty()
		sortTodo()
		MAJList()
	})

	// Fonctions à lancer au chargement
	sortTodo()
	MAJList()
})
