document.addEventListener("DOMContentLoaded", ()=>{
    //cards
    const cards =[
        {
            name: "car",
            path: "images/andriyko-podilnyk-iSyUe2vyOAg-unsplash.jpg"
        },
        {
            name: "car",
            path: "images/andriyko-podilnyk-iSyUe2vyOAg-unsplash.jpg"
        },
        {
            name:"camera",
            path:"images/benjamin-balazs-72hVnjtGxJQ-unsplash.jpg"
        },
        {
            name:"camera",
            path:"images/benjamin-balazs-72hVnjtGxJQ-unsplash.jpg"
        },
        {
            name:"time",
            path:"images/debby-hudson-GUUC719v9X8-unsplash.jpg"
        },
        {
            name:"time",
            path:"images/debby-hudson-GUUC719v9X8-unsplash.jpg"
        },
        {
            name:"phone",
            path:"images/eckhard-hoehmann-NKKvASHfrG4-unsplash.jpg"
        },
        {
            name:"phone",
            path:"images/eckhard-hoehmann-NKKvASHfrG4-unsplash.jpg"
        },
        {
            name:"music",
            path:"images/giorgio-trovato-_H4uyF7ZlV0-unsplash.jpg"
        },
        {
            name:"music",
            path:"images/giorgio-trovato-_H4uyF7ZlV0-unsplash.jpg"
        },
        {
            name:"camera2",
            path:"images/laura-boccola-HuwfMxB_8kU-unsplash.jpg"
        },
        {
            name:"camera2",
            path:"images/laura-boccola-HuwfMxB_8kU-unsplash.jpg"
        },
        {
            name:"city",
            path:"images/mihaela-holhos-ZktTrO0BB-E-unsplash.jpg"
        },
        {
            name:"city",
            path:"images/mihaela-holhos-ZktTrO0BB-E-unsplash.jpg"
        },
        {
            name:"gameboy",
            path:"images/mike-meyers-v8XaVfyo41Q-unsplash.jpg"
        },
        {
            name:"gameboy",
            path:"images/mike-meyers-v8XaVfyo41Q-unsplash.jpg"
        }
    ]

//game board
const grid = document.querySelector(".grid");
for(let i=0; i<cards.length; i++){
    const card = document.createElement("img");
    card.setAttribute("src", "images/andriyko-podilnyk-iSyUe2vyOAg-unsplash.jpg");
    card.setAttribute("id", i);
    card.style.width="100px";
    card.style.height="100px";

    /* card.addEventListener("click", flipCard); */
    grid.appendChild(card);
}
})


