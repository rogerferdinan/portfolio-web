const skillObserver = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if(entry.isIntersecting) {
            entry.target.classList.add("skill-slide");
        }
    }
})
const experienceObserver = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if(entry.isIntersecting) {
            entry.target.classList.add("experience-slide");
        }
    }
})

window.onload = () => {
    var items = document.querySelectorAll(".skill-content");
    items.forEach((item) => {
        skillObserver.observe(item);
    })
    items = document.querySelectorAll(".experience-content");
    items.forEach((item) => {
        skillObserver.observe(item);
    })
}