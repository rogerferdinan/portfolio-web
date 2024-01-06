function createAnimationObserver(targetQuerySelector, addClassName) {
    var items = document.querySelectorAll(targetQuerySelector);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add(addClassName);
            }
        })
    })
    items.forEach(item => {
        observer.observe(item);
    })
    return observer;
}

// About Change color
function createNavObserver(screenSelector, navSelector) {
    const item = document.querySelector(screenSelector);
    const observer = new IntersectionObserver((entries) => {
        const nav_headers = document.getElementsByClassName("nav_item");
        const nav_header = document.querySelector(navSelector);
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                for (nav of nav_headers) {
                    nav.classList.remove("blue");
                    nav.classList.add("black");
                }
                nav_header.classList.remove("black");
                nav_header.classList.add("blue");
            }
        })
    })
    observer.observe(item);
    return observer;
}

window.onload = () => {
    createAnimationObserver(".skill-content", "skill-slide");
    createAnimationObserver(".experience-content", "experience-slide");

    createNavObserver("#about", "#about_nav");
    createNavObserver("#skill", "#skill_nav");
    createNavObserver("#experiences", "#exp_nav");
    createNavObserver("#projects", "#project_nav");
    createNavObserver("#contact", "#contact_nav");
}