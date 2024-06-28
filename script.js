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
    if(currentPage === "index.html" || currentPage === "index"){
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

function showSidebar() {
    const sidebar = document.querySelector('.right-nav-side');
    var computedStyle = window.getComputedStyle(sidebar);
    var displayValue = computedStyle.getPropertyValue('display');

    const header = document.querySelector('header');
    // const target = document.querySelector('.blur-target');
    // target.style.filter = 'blur(5px)';
    // Compare the display value with a specific value
    if (displayValue === 'none') {
        header.style.position = "fixed"
        header.style.right = "0"
        header.style.left = "0"
        sidebar.style.display = 'flex';

    } else {
        sidebar.style.display = 'none';
        header.style.position = "relative"
    }
}
