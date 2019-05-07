const galleryButton = document.getElementById("gallery");
const priceListButton = document.getElementById("price-list");
const contactButton = document.getElementById("contact");

const mainSection = document.getElementById('main-section');

var isInViewport = function (elem)
{
    var bounding = elem.getBoundingClientRect();
    return(

        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth));

};


window.addEventListener('scroll', function(event)
                        {
    if(isInViewport(mainSection))
    {
        galleryButton.classList.add('visible');
        priceListButton.classList.add('visible');
        contactButton.classList.add('visible');
        
    }
}, false);
