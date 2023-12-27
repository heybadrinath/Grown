function pop(){
    let name = prompt("Please Enter Name", "Name Here")
    if(name!="Name Here"){
        document.getElementById("confirm").innerHTML = `Hi ${name} <br>`
    }   
    let email = prompt("Please Enter Your E-Mail", "E-mail")
    if (email!="E-mail"){
        document.getElementById('confirm').innerHTML += `Your Email ${email} is Linked with our Website`;
    }

}


function show() {
    alert(`"Grown has provided pristine, revitalizing water. Our commitment to purity and sustainability defines us. From untouched springs to advanced purification, every drop is refreshingly natural. We prioritize eco-friendly practices, using recyclable materials. Grown isn’t just water; it’s a lifestyle choice promoting wellness and sustainability. Join us in creating a healthier planet. Choose Grown for pure hydration, every time."`)
}
