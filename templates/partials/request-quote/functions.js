function submitForm() {

    let baseUrl = document.getElementById("baseUrl").value;
    let service = document.getElementById("service").value;
    let postcode = document.getElementById("postcode").value;
    let newUrl = baseUrl+'services/'+toKebabCase(service)+'/'+postcode;
    setTimeout(() => {
        window.location.href = newUrl;
    }, 0);
}

function toKebabCase(string){
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()
}        