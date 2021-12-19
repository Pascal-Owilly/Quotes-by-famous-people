const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("#btn");

button.addEventListener("click", famousQuotes);

function famousQuotes(){
    let random = Math.floor(Math.random()*quotes.length);
    author.innerHTML = quotes[random].author;
    quote.innerHTML = quotes[random].quote;

  }

const quotes = [{
        author: "Barack obama",
        quote: "Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we've been waiting for. We are the change that we seek."
    },
    {
        author: "Barack obama",
        quote: "Yes we can!",
    },
    {
        author: "Barack obama",
        quote: "In the unlikely story that is America, there has never been anything false about hope.",
    },
    {
        author: "Barack obama",
        quote: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    },
    {
        author: "Barack obama",
        quote: "There's not a liberal America and a conservative America - there's the United States of America.",
    },
    {
        author: "Barack obama",
        quote: "We don't ask you to believe in our ability to bring change, rather, we ask you to believe in yours.",
    },
    {
        author: "Barack obama",
        quote: " it’s important to make sure that we’re talking with each other in a way that heals, not in a way that wounds.",
    },
    {
        author: "Barack obama",
        quote: "Making your mark on the world is hard. If it were easy, everybody would do it. But it's not. It takes patience, it takes commitment, and it comes with plenty of failure along the way. The real test is not whether you avoid this failure, because you won't. it's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
    },
    {
        author: "Barack obama",
        quote: "Nothing can stand in the way of the power of millions of voices calling for change.",
    },
    {
        author: "Barack obama",
        quote: "Why can't I just eat my waffle?",
    },
    {
        author: "Barack obama",
        quote: "I have always believed that hope is that stubborn thing inside us that insists, despite all the evidence to the contrary, that something better awaits us so long as we have the courage to keep reaching, to keep working, to keep fighting.",
    },
    {
        author: "Barack obama",
        quote: "Our stories may be singular, but our destination is shared.",
    },
    {
        author: "Barack obama",
        quote: "While we breathe, we will hope.",
    },
    {
        author: "Barack obama",
        quote: "You can put lipstick on a pig. It's still a pig.",
    },
    {
        author: "Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
        author: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing.",
    },
    {
        author: "Steve Jobs",
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    },
    {
        author: "Barack obama",
        quote: "And yet somehow, given the dizzying pace of globalization, the cultural leveling of modernity, it perhaps comes as no surprise that people fear the loss of what they cherish in their particular identities -- their race, their tribe, and perhaps most powerfully their religion.  In some places, this fear has led to conflict.  At times, it even feels like we're moving backwards.  We see it in the Middle East, as the conflict between Arabs and Jews seems to harden.  We see it in nations that are torn asunder by tribal lines.",
    },
    {
        author: "Barack obama",
        quote: "We can admit that there will be war and still strive for peace",
    },
    {
        author: "Barack obama",
        quote: "We acknowledge the intractability of depravation and still strive for dignity ",
    },
    {
        author: "Isaac Newton",
        quote: "Have no fear of perfection, you'll never reach it.",
    },
    {
        author: "Barack obama",
        quote: "I came, I saw, I conquered.",
    },
    {
        author: "Barack obama",
        quote: "To say that force may sometimes be necessary is not a call to sinicism it is a recognition of history, the impafections of men and limits of reason",
    },
    {
        author: "Isaac Newton",
        quote: "I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me.",
    },
    {
        author: "Isaac Newton",
        quote: "This most beautiful system of the sun, planets and comets, could only proceed from the counsel and dominion of an intelligent and powerful Being,  This Being governs all things, not as the soul of the world, but as Lord over all; and on account of his dominion he is wont, to be called Lord God παντοκρατωρ or Universal Ruler.",
       
    },
    {
        author: "Isaac Newton",
        quote: "Gravity explains the motions of the planets, but it cannot explain who sets the planets in motion.",
    },
    {
        author: "Isaac Newton",
        quote: "Truth is ever to be found in the simplicity, and not in the multiplicity and confusion of things.",
    },
    {
        author: "Isaac Newton",
        quote: "What we know is a drop, what we don't know is an ocean.",
    },
    
        {
            author: "Isaac Newton",
            quote: "We lose ourselves when we compromise the very ideals that we fight to defend.",
        },

];

