let myBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 1000) {
        myBtn.style.cssText = "display: block;";
    } else {
        myBtn.style.display = "none";
    }
});

myBtn.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
});

// Customizing the progress width of Skills Section

let section = document.querySelector(".skills");

let progressSpans = document.querySelectorAll(".skills span");

// Customizing the Stats section to make it more dynamic

let statSection = document.querySelector(".stats");

let statProgress = document.querySelectorAll(".stats .stat-progress");

let started = false;

function startCount(element) {
    let goal = element.dataset.number;

    let counter = setInterval(() => {
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(counter);
        }
    }, 3000 / goal);
}

window.onscroll = () => {
    //Start the progress width of Skills Section
    if (window.scrollY >= section.offsetTop - 200) {
        progressSpans.forEach((ele) => {
            ele.style.width = ele.dataset.progress;
        });
    } else {
        progressSpans.forEach((ele) => {
            ele.style.width = "0";
        });
    }

    //Start the Stats section to make it more dynamic
    if (window.scrollY >= statSection.offsetTop - 200) {
        if (!started) {
            statProgress.forEach((ele) => startCount(ele));
        }
        started = true;
    } else {}
};