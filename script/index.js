const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
        .then(res => res.json()) //promise of json dada
        .then(json => displayLessons(json.data));
};

const removeActive = () => {
    const lessonButtons = document.querySelectorAll(".lesson-btn");
    // console.log(lessonButtons);
    lessonButtons.forEach((btn) => {
        btn.classList.remove("active");
    });
}

/*
UI te data dekhanor jnno amra 4 ta step follow kore thaki
1. Get the container & empty
2. Get into every lessons
3. Create element
4. Append into container
*/

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(clickBtn);
            removeActive(); //Remove all active class.
            const clickBtn = document.getElementById(`lesson-btn-${id}`);
            clickBtn.classList.add("active"); //add active class.
            displayLevelWord(data.data);
        });
}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    if (words.length == 0) {
        wordContainer.innerHTML = `
            <div class="text-center col-span-full rounded-xl py-10 space-y-6">
                <img class="mx-auto" src = "./assets/alert-error.png" />
                <p class="hind-siliguri text-xl font-medium text-gray-400 ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি!</p>
                <h1 class="hind-siliguri font-bold text-4xl">নেক্সট Lesson এ যান</h1>
            </div>`;
        return;
    }

    //     {
    //     "id": 5,
    //     "level": 1,
    //     "word": "Eager",
    //     "meaning": "আগ্রহী",
    //     "pronunciation": "ইগার"
    // }

    words.forEach(word => {
        // console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
            <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
                <h2 class="text-2xl font-bold">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
                <p class="font-semibold">Meaning / Pronunciation</p>
                <div class="hind-siliguri font-medium text-2xl">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : " Pronunciation পাওয়া যায়নি"}"</div>
                <div class="flex justify-between items-center">
                    <button onclick="my_modal_5.showModal()" class="btn bg-[rgb(26,145,255)]/10 hover:bg-[rgb(26,145,255)]/40"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn bg-[rgb(26,145,255)]/10 hover:bg-[rgb(26,145,255)]/40"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        `;

        wordContainer.append(card);
    });
}

const displayLessons = (lessons) => {

    // 1. Get the container & empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // 2. Get into every lessons
    for (let lesson of lessons) {

        // 3. Create element
        // console.log(lesson);
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
            <ifa-circle-question"></i>Lesson - ${lesson.level_no}
            </button>`;

        // 4. Append into container
        levelContainer.append(btnDiv);
    };
}
loadLessons();