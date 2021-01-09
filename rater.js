export function Rater(ratingElement) {
    const stars = ratingElement.querySelectorAll('.star');

    const setRating = (event) => {
        const starRating = event.currentTarget.getAttribute('data-value');
        ratingElement.setAttribute('data-rating', starRating);
    }

    const ratingHover = (event) => {
        const currentHover = event.currentTarget.getAttribute('data-value');
        highlightRating(currentHover);
    };

    const resetRating = () => {
        const currentRating = ratingElement.getAttribute('data-rating');

        console.log(`CurrentRating is: ${currentRating}`);

        highlightRating(currentRating);
    };

    const highlightRating = (rating) => {

        console.log(`Rating passed is: ${rating}`)

        stars.forEach(star => {
            star.style.color = 
                rating >= star.getAttribute('data-value') ? 'yellow' : 'gray';
        });
    }

    resetRating();

    stars.forEach(star => {
        star.addEventListener('click', setRating);
        star.addEventListener('mouseover', ratingHover);
    });

    ratingElement.addEventListener('mouseout', resetRating);
}