let input = document.getElementsByTagName("input")[0];

input.addEventListener("keypress", keyPress);
this.value = this.value.replace(/[^A-Za-z]/, '');
val = input.value