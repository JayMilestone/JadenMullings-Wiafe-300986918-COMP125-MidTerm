// setup your IIFE (Immediately Invoked Function Expression)
(function () {
"use strict";


// YOUR CODE GOES HERE

    // User input capture function
    function OutputFormDataToConsole()
    {
        // User input variables
        let firstName = document.getElementById("firstName");
        let lastName = document.getElementById("lastName");
        let contactNumber = document.getElementById("contactNumber");
        let emailAddress = document.getElementById("email");
        let yourMessage = document.getElementById("yourMessage");

        // Output to console
        console.log("Form Data");
        console.log('%c_________________________________', "color: blue;");
        console.log('%cFirst Name: ' + firstName.value, "font-weight: bold; color: green");
        console.log('%cLast Name: ' + lastName.value, "font-weight: bold; color: black");
        console.log('%cContact Number: ' + contactNumber.value, "font-weight: bold; color: orange");
        console.log('%cEmail Address: ' + email.value, "font-weight: bold; color: red");
        console.log('%cMessage: ' + yourMessage.value, "font-weight: bold; color: purple");
        console.log('%c_________________________________', "color: blue;");

    }
    // Main Function for page
    function MainPage()
    {
        //Intro Paragraph String
        let introParagraph = document.getElementById("IntroParagraph");

        introParagraph.setAttribute('style', 'white-space: pre;');

        introParagraph.textContent = "Now is the time to travel to Greece. The country may be going through an economic crisis, but many";
        introParagraph.textContent += "\r\n travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals.";
        introParagraph.textContent += "Greece has 1,400 islands, though only 230 of them are inhabited.";
        introParagraph.textContent += "\r\n\r\nAnd while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in";
        introParagraph.textContent += "\r\nGreece, too.";

        //Folegandros String
        let folegandros = document.getElementById("Folegandros");

        folegandros.setAttribute('style', 'white-space: pre;');

        folegandros.textContent = "Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining";
        folegandros.textContent += "\r\n cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not";
        folegandros.textContent += "\r\n even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades,\r\n secluded beaches, and incredible sunsets.";
        
        //Alonissos String
        let alonissos = document.getElementById("Alonissos");

        alonissos.setAttribute('style', 'white-space: pre;');

        alonissos.textContent = "Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and ";
        alonissos.textContent += "\r\ndolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are";
        alonissos.textContent += "\r\nperfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock ";
        alonissos.textContent += "\r\nfull of indigenous herbs, it's also known for its traditional medicine, and home of the International";
        alonissos.textContent += "\r\nAcademy of Homeopathy.";

        //Spetses String
        let spetses = document.getElementById("Spetses");

        spetses.setAttribute('style', 'white-space: pre;');

        spetses.textContent = "This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it";
        spetses.textContent += "\r\nhosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens'";
        spetses.textContent += "\r\nglitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a"; 
        spetses.textContent += "\r\nhandful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly";
        spetses.textContent += "\r\n19th-century vibe, with horse-drawn carriages being a common sight.";

        //Amorgos String
        let amorgos = document.getElementById("Amorgos");

        amorgos.setAttribute('style', 'white-space: pre;');

        amorgos.textContent = "Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the";
        amorgos.textContent += "\r\nmountainous island is the perfect compromise between unwinding and adventure, boasting beautiful";
        amorgos.textContent += "\r\nbeaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the";
        amorgos.textContent += "\r\n11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.";

        //Syros String
        let syros = document.getElementById("Syros");

        syros.setAttribute('style', 'white-space: pre;');

        syros.textContent = "A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little";
        syros.textContent += "\r\nknown to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its";
        syros.textContent += "\r\ncapital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre,";
        syros.textContent += "\r\nand boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.";

        //Milos String
        let milos = document.getElementById("Milos");

        milos.setAttribute('style', 'white-space: pre;');

        milos.textContent = "This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, ";
        milos.textContent += "\r\nand famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot";
        milos.textContent += "\r\nsprings, the ancient Venus De Milo statue that was found here, and for its diversity of incredible";
        milos.textContent += "\r\nbeaches. Known as 'the island of colours' it's home to around 80 beaches — some only accessible by";
        milos.textContent += "\r\nboat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each";
        milos.textContent += "\r\nbeach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.";

        //Hydra String
        let hydra = document.getElementById("Hydra");

        hydra.setAttribute('style', 'white-space: pre;');

        hydra.textContent = "The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other";
        hydra.textContent += "\r\nwheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions,";
        hydra.textContent += "\r\nchurches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by";
        hydra.textContent += "\r\ndonkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia";
        hydra.textContent += "\r\nLoren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic";
        hydra.textContent += "\r\nyet almost rural island paradise more or less to themselves.";

        //Ithaca String
        let ithaca = document.getElementById("Ithaca");

        ithaca.setAttribute('style', 'white-space: pre;');

        ithaca.textContent = "Most famous for being the home of Odysseus, and a prominent figure in Homer's \"The Odyssey,\" Ithaca";
        ithaca.textContent += "\r\nis said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow";
        ithaca.textContent += "\r\nstrip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than";
        ithaca.textContent += "\r\nits mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and";
        ithaca.textContent += "\r\nsleepy fishing villages full of Byzantine churches and monasteries.";

        //Gavdos String
        let gavdos = document.getElementById("Gavdos");

        gavdos.setAttribute('style', 'white-space: pre;');

        gavdos.textContent = "Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most";
        gavdos.textContent += "\r\nsouthern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only";
        gavdos.textContent += "\r\nabout 50 permanent residents, and can feel like your private playground. Local legend has it that the";
        gavdos.textContent += "\r\nisland was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist";
        gavdos.textContent += "\r\nactivity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here.";
        gavdos.textContent += "\r\nWhile the romantically under-developed, super laid back island has a number of rooms for rent, those";
        gavdos.textContent += "\r\nare limited, as the real draw here for many is the free, seaside camping.";
        
        // Send Button
        let SendButton = document.getElementById("sendButton");
        SendButton.addEventListener("click", (event) => {
            event.preventDefault();
            // Calling the output data function for information entered
            OutputFormDataToConsole();
            ValidateForm();
        })
    }
    function SmoothScrolling()
    {
        // scroll
            window.scroll({
                top: 2500, 
                left: 0, 
                behavior: 'smooth' 
                });
            
                // Scroll certain amounts from current position 
                window.scrollBy({ 
                top: 100, // could be negative value
                left: 0, 
                behavior: 'smooth' 
                });
            
                // Scroll to a certain element
                document.querySelector('.hello').scrollIntoView({ 
                behavior: 'smooth' 
                });
        }        
    }
    function ValidateForm() {
        let firstNameAlert = document.forms["contactForm"]["firstName"].value;
        if (firstNameAlert == "") {
            alert("Your first name must be filled out");
            return false;
        }
        let lastNameAlert = document.forms["contactForm"]["lastName"].value;
        if (lastNameAlert == "") {
            alert("Your last name must be filled out");
            return false;
        }
        let contactNumberAlert = document.forms["contactForm"]["contactNumber"].value;
        if (contactNumberAlert == "") {
            alert("Contact number must be filled out");
            return false;
        }
        let emailAlert = document.forms["contactForm"]["email"].value;
        if (emailAlert == "") {
            alert("Email address must be filled out");
            return false;
        }
    }
    // Use this function when the window loads
    window.onload = MainPage;

    window.onscroll = SmoothScrolling;


})();

