const paginationBullets = document.getElementsByClassName("bullet");
const sections = document.getElementsByClassName("section");

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function setPagination(){
    for(let i = 0;i < sections.length; i++){
        const isShown = isInViewport(sections[i]);
        if(isShown){
            paginationBullets[i].classList.add("active");
        }else{
            if(paginationBullets[i].classList.contains("active")){
                paginationBullets[i].classList.remove("active");
            }
        }
    }
    if(isInViewport(document.getElementById("header"))){
        paginationBullets[0].classList.add("active");
    }
}

setPagination();

window.onscroll = setPagination;