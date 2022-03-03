var ProjectImgID = 0
function UpdateProjectImg() {
    var img = document.getElementById("hot-project-image")
    var title = document.getElementById("hot-project-title")
    var text = document.getElementById("hot-project-text")
    switch (ProjectImgID) {
        case 0:
            img.src = "./02.png";
            title.innerHTML = "02"
            break;
        case 1:
            img.src = "./project-img01.png";
            title.innerHTML = "01";
            break;
    }
    if (ProjectImgID == 1) {
        ProjectImgID = 0;
    }else {
        ProjectImgID += 1;
    }
}
setInterval("UpdateProjectImg()", 3000);