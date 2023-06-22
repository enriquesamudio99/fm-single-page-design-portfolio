const worksGrid = document.getElementById("worksGrid");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

document.addEventListener("DOMContentLoaded", () => {

    leftArrow.addEventListener("click", () => scroll("left"));
    rightArrow.addEventListener("click", () => scroll("right"));
    document.addEventListener("keyup", (e) => scrollByKeyboard(e));

});

const scroll = (direction) => {

    if (direction === 'left') {
        worksGrid.scrollLeft -= 300;
    } else {
        worksGrid.scrollLeft += 300;
    }

}

const scrollByKeyboard = (e) => {

    if(e.key === "ArrowLeft" || e.key === "ArrowRight") {

        if (e.key === 'ArrowLeft') {
            worksGrid.scrollLeft -= 300;
        } else {
            worksGrid.scrollLeft += 300;
        }

    }

}