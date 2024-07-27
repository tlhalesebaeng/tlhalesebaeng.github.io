function setLinkDeco(className, op){
    var element = document.getElementsByClassName(className)[0];
    element.style.opacity = op;
}

function setLinkStyles(className){
    var element = document.getElementsByClassName(className)[0];
    element.style.color = "white";
    element.style.fontWeight = "600";
}

//run this after DOM content has been loaded
document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname.split('/').pop(); // Get the current page filename
    
    if(currentPage === "index.html" || currentPage === "index" || currentPage === ""){
        setLinkStyles("home-link");

        setLinkDeco("home-link-deco", 1);
        setLinkDeco("cv-link-deco", 0);
        setLinkDeco("contact-link-deco", 0);

    } else if(currentPage === "cv" || currentPage === "cv.html"){
        setLinkStyles("cv-link");
        
        setLinkDeco("home-link-deco", 0);
        setLinkDeco("cv-link-deco", 1);
        setLinkDeco("contact-link-deco", 0);

    } else if(currentPage === "contact" || currentPage === "contact.html"){
        setLinkStyles("contact-link");

        setLinkDeco("home-link-deco", 0);
        setLinkDeco("cv-link-deco", 0);
        setLinkDeco("contact-link-deco", 1);
    }
});

function showSidebar() {
    const sidebar = document.querySelector(".right-nav-side");
    var computedStyle = window.getComputedStyle(sidebar);
    var displayValue = computedStyle.getPropertyValue("display");

    const header = document.querySelector("header");
    if (displayValue === "none") {
        header.style.position = "fixed"
        header.style.right = "0"
        header.style.left = "0"
        sidebar.style.display = "flex";

        //Disable scrolling
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

    } else {
        sidebar.style.display = "none";
        header.style.position = "relative"
        // Enable scrolling
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }
}

// Contact form submission 
const scriptURL = 'https://script.google.com/macros/s/AKfycbySDc3ectgpABHgwh4V1Umtmh-fImwnJCXVjq7wvk_SY-MldLx4A6kFVANIM8jwAeym/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("sub-message")

form.addEventListener('submit', e => {
    form.reset();
    var btnSubmitText = document.getElementsByClassName("btn-submit-text")[0];
    btnSubmitText.style.display = "none";
    var progressBar = document.getElementsByClassName("progress-bar")[0];
    progressBar.style.display = "flex";

    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            message.innerHTML = "Message sent"
            progressBar.style.display = "none";
            btnSubmitText.style.display = "flex";

            setTimeout(function(){
                message.innerHTML = ""
            }, 5000)
        })
        .catch(error => console.error('Error!', error.message))
})

