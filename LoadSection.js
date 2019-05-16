const galleryButton = document.getElementById("gallery");
const priceListButton = document.getElementById("price-list");
const contactButton = document.getElementById("contact");

const changableSection = document.getElementById('changable-section');


function DeleteAllChilds()
{

}

galleryButton.addEventListener('click', LoadGallery);
priceListButton.addEventListener('click', LoadPriceList);
contactButton.addEventListener('click', LoadContact);

function LoadGallery()
{
    changableSection.classList.add('add-red');
    changableSection.classList.remove('add-blue');
    changableSection.classList.remove('add-green');
}

function LoadPriceList()
{
    changableSection.classList.add('add-blue');
    changableSection.classList.remove('add-red');
    changableSection.classList.remove('add-green');
}

function LoadContact()
{
    changableSection.classList.add('add-green');
    changableSection.classList.remove('add-red');
    changableSection.classList.remove('add-blue');
}
