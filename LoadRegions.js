const gallery = document.getElementById("gallery");
const priceList = document.getElementById("price-list");
const contact = document.getElementById("contact");

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
        gallery.classList.add('visible');
        priceList.classList.add('visible');
        contact.classList.add('visible');
        
    }
}, false);
