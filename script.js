function getFormvalue() {
    //Write your code here
	const fname = document.querySelector("input[name='fname']");
	const lname = document.querySelector("input[name='lname']");
	return fname.value +" " +lname.value;
}



const submit = document.querySelector('#form1 input[type="submit"]');

submit.addEventListener("click", ()=>{
	alert(getFormvalue());
})
