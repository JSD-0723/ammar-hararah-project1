let currentYear = new Date().getYear()+1900;
document.querySelector("footer>p>b").append(currentYear);


function loadData(){
    const SortedArray = sortData(cardData);

    SortedArray.forEach(card => {
        let rating = (parseFloat(card.rating)/5) * 100;
        const template = `
            <div class="card">
            <a class="nostyle" href="details.html">
                <div class="card-image" style="background-image: url('imgs/${card.img}');">
                </div>
                <div class="card-details">
                    <div class="card-title">
                        <p>${card.type}</p>
                        <h3>${card.title}</h3>
                    </div>
                    <div class="card-info">
                        <div class="rating-box">
                            <div class="star-ratings">
                                <div class="fill-ratings" style="width: ${rating}%;">
                                    <span>★★★★★</span>
                                </div>
                                <div class="empty-ratings">
                                    <span>★★★★★</span>
                                </div>
                        </div>
                        </div>
                        <p>Author: ${card.author}</p>
                    </div>
                </div>
                </a>
            </div>
    `
        document.querySelector(".container-items").appendChild(createElementFromHTML(template));

    });
    

}

loadData();
loadFavourites();