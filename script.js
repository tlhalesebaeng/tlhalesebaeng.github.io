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
    if(currentPage === "index.html"){
        setLinkStyles("home-link");

        setLinkDeco("home-link-deco", 1);
        setLinkDeco("cv-link-deco", 0);
        setLinkDeco("contact-link-deco", 0);

    } else if(currentPage === "cv.html"){
        setLinkStyles("cv-link");
        
        setLinkDeco("home-link-deco", 0);
        setLinkDeco("cv-link-deco", 1);
        setLinkDeco("contact-link-deco", 0);

    } else if(currentPage === "contact.html"){
        setLinkStyles("contact-link");

        setLinkDeco("home-link-deco", 0);
        setLinkDeco("cv-link-deco", 0);
        setLinkDeco("contact-link-deco", 1);
    }
});
