let business_profiles = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addBusiness_profile = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let business_profile = {
        id: Date.now(),
        full_name_aliases: document.getElementById('full_name_aliases').value,
        email: document.getElementById('email').value,
        rep_phone: document.getElementById('rep_phone').value,
        nationality: document.getElementById('nationality').value,
        relationship_title: document.getElementById('relationship_title').value,
        
    }
    business_profiles.push(business_profile);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {business_profiles} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(business_profiles, '\t', 2);

    //saving to localStorage
    localStorage.setItem('FormFilled', JSON.stringify(business_profiles) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addBusiness_profile);
});