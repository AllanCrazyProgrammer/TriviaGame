$("input[type='radio']").each(function (index, radioButton) {
	console.log($(radioButton).is(":checked"))
})

$("input[type='radio']").each(function (radioButton) {
	console.log(radioButton)
})