const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
        .then(res => res.json()) //promise of json dada
        .then(json => displayLessons(json.data));
};

/*
UI te data dekhanor jnno amra 4 ta step follow kore thaki
1. Get the container & empty
2. Get into every lessons
3. Create element
4. Append into container
*/

const displayLessons = (lessons) => {
// 1. Get the container & empty
const levelContainer = document.getElementById("level-container");
levelContainer.innerHTML = "";
// 2. Get into every lessons
for(let lesson of lessons){
    // 3. Create element
    // console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
            <button class="btn btn-outline btn-primary">
            <ifa-circle-question"></i>Lesson - ${lesson.level_no}
            </button>`;
    levelContainer.append(btnDiv);

};
// 4. Append into container
}
loadLessons();