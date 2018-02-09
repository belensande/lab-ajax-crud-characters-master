const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready( () => {
	document.getElementById('fetch-all').onclick = function (event) {
		clearPage();

		charactersAPI.getFullList().then(response => {
			response.data.forEach((char) => {
				$('.characters-container:first').append(
					$(`<div class="character-info">
						<div class="name">Id: <span>${char.id}</span></div>
						<div class="name">Name: <span>${char.name}</span></div>
						<div class="occupation">Occupation: <span>${char.occupation}</span></div>
						<div class="debt">Debt:<span>${char.debt}</span></div>
						<div class="weapon">Weapon:<span>${char.weapon}</span></div>
					  </div>`)
				);
			});
		});
	}
  
	document.getElementById('fetch-one').onclick = function (event) {
		const id = $(".operations input[name='character-id']").val();
		clearPage();

		charactersAPI.getOneRegister(id).then(response => {
			const char = response.data;
			
			$('.characters-container').append(
				$(`<div class="character-info">
					<div class="name">Id: <span>${char.id}</span></div>
					<div class="name">Name: <span>${char.name}</span></div>
					<div class="occupation">Occupation: <span>${char.occupation}</span></div>
					<div class="debt">Debt:<span>${char.debt}</span></div>
					<div class="weapon">Weapon:<span>${char.weapon}</span></div>
					</div>`)
			);
		});
	}
  
	document.getElementById('delete-one').onclick = function (event) {
		const id = $(".operations input[name='character-id-delete']").val();
		clearPage();

		charactersAPI.deleteOneRegister(id).then(success => {
			$(event.target).addClass(success ? "active" : "error");
		});
	}
  
	document.getElementById('edit-character-form').onsubmit = function(event){
		event.preventDefault();
		const characterId = $("#edit-character-form input[name='chr-id']").val();

		const characterInfo = {
			name: $("#edit-character-form input[name='name']").val(),
			occupation: $("#edit-character-form input[name='occupation']").val(),
			weapon: $("#edit-character-form input[name='weapon']").val(),
			debt: $("#edit-character-form input[name='debt']").is(":checked")
		};

		clearPage();
		charactersAPI.updateOneRegister(characterId, characterInfo).then(success => {
			$(event.target).find('button').addClass(success ? "active" : "error");
		});
	}
  
	document.getElementById('new-character-form').onsubmit = function (event) {
		event.preventDefault();
		
		const characterInfo = {
			name: $("#new-character-form input[name='name']").val(),
			occupation: $("#new-character-form input[name='occupation']").val(),
			weapon: $("#new-character-form input[name='weapon']").val(),
			debt: $("#new-character-form input[name='debt']").is(":checked")
		};    

		clearPage();
		charactersAPI.createOneRegister(characterInfo).then(success => {
			$(event.target).find('button').addClass(success ? "active" : "error");
		});
	}

	function clearPage() {
		$('.characters-container').empty();
		$('input').val("");
		$('button').removeClass("active error");
		$("form").trigger("reset");
		$('form').find('input:checkbox').prop('checked', false);
	}
})
