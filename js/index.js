const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//Nav
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let services = document.getElementsByTagName("a")[0];
services.innerHTML = "Services";

let product = document.getElementsByTagName("a")[1];
product.innerHTML = "Product";

let vision = document.getElementsByTagName("a")[2];
vision.innerHTML = "Vision";

let features = document.getElementsByTagName("a")[3];
features.innerHTML = "Features";

let about = document.getElementsByTagName("a")[4];
about.innerHTML = "About";

let contact = document.getElementsByTagName("a")[5];
contact.innerHTML = "Contact";


let navBar = document.querySelectorAll('a');

navBar.forEach(function(curr){
  curr.style.color = 'green'
})

let nav = document.querySelector('nav')

const home = document.createElement('a');
home.textContent = 'Home'
nav.prepend(home);

home.style.color = 'green';
home.style.cursor = 'pointer';

const faq = document.createElement('a');
faq.textContent = 'FAQ'
nav.append(faq);

faq.style.color = 'green';
faq.style.cursor = 'pointer';



//CTA
let h1 = document.getElementsByTagName("h1")[0];
h1.innerHTML = "DOM Is Awesome";

let button = document.getElementsByTagName("button")[0];
button.innerHTML = "Get Started";

let codeCircle = document.getElementById("cta-img");
codeCircle.setAttribute('src', siteContent["cta"]["img-src"]);

//main-content

let get = document.getElementsByTagName;
let getImg = document.getElementById

let featuresTitle = document.getElementsByTagName("h4")[0];
featuresTitle.innerHTML = "Features";

let featuresContent = document.getElementsByTagName("p")[0];
featuresContent.innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let aboutTitle = document.getElementsByTagName("h4")[1];
aboutTitle.innerHTML = "About";

let aboutContent = document.getElementsByTagName('p')[1];
aboutContent.innerHTML =  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let codeBanner = document.getElementById('middle-img');
codeBanner.setAttribute('src', "img/mid-page-accent.jpg");

let servicesTitle = document.getElementsByTagName("h4")[2];
servicesTitle.innerHTML = "Services";

let servicesContent = document.getElementsByTagName('p')[2];
servicesContent.innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let productTitle = document.getElementsByTagName("h4")[3];
productTitle.innerHTML = "Product";

let productContent = document.getElementsByTagName('p')[3];
productContent.innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let visionTitle = document.getElementsByTagName("h4")[4];
visionTitle.innerHTML = "Vision";

let visionContent = document.getElementsByTagName('p')[4];
visionContent.innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//contact

let contactTitle = document.getElementsByTagName("h4")[5];
contactTitle.innerHTML = "Contact";

let address = document.getElementsByTagName('p')[5];
address.innerHTML = "123 Way 456 Street Somewhere, USA";

let phone = document.getElementsByTagName('p')[6];
phone.innerHTML = "1 (888) 888-8888";

let email = document.getElementsByTagName('p')[7];
email.innerHTML = "sales@greatidea.io";

//footer

let footer = document.getElementsByTagName('p')[8];
footer.innerHTML = "Copyright Great Idea! 2018";






