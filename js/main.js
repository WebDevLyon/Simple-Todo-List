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
	let start =dateDuJour.getFullYear()+'-'+('0'+(dateDuJour.getMonth()+1)).slice(-2)+'-'+('0'+dateDuJour.getDate()).slice(-2)
	let delta = 3
	let end =dateDuJour.getFullYear()+'-'+('0'+(dateDuJour.getMonth()+1)).slice(-2)+'-'+('0'+(dateDuJour.getDate()+delta)).slice(-2)
	console.log(end);
	let todos = []

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

	// Création des Events
	function getTodos (start, end ) {
		const events = []
		const min = new Date(`${start}T00:00:00`)
		console.log(min);
		const max = new Date(`${end}T23:59:59`)
		console.log(max);
		const days = (max.getTime() - min.getTime()) / 86400000
		console.log(days);
		function rnd (a, b) {
			return Math.floor((b - a + 1) * Math.random()) + a
		}
		const eventCount = rnd(days, days + 20)
		console.log(eventCount);
		for (let i = 0; i < eventCount; i++) {
			const firstTimestamp = rnd(min.getTime(), max.getTime())
			const first = new Date(firstTimestamp - (firstTimestamp % 900000))

			events.push({
				nom: 'event '+i,
				date: first,
				description: 'description de la tâche '+i
			})
		}
		todos = events
		console.log(todos);
	}
	console.log(new Date().getFullYear());
	// Fonctions à lancer au chargement
	getTodos (start, end )
	sortTodo()
	MAJList()

})
