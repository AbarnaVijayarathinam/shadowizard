function shadowizard(options) {
    let components  = document.querySelectorAll('.shadowizard');

    if (options.shadow_type === "hard") {
        options.shadow_type = "0px";
    }
    else{
        options.shadow_type = "15px";
    }

    components.forEach(component => {
        component.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if( options.padding) {
            component.style.padding= "1em";
        }
        else {
            component.style.padding= "0px";
        }
    })
}

module.exports.shadowizard = shadowizard;