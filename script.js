 const localQuotes = [
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
            { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
            { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
            { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
            { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
            { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
            { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
            { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
            { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
            { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
            { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
            { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
            { text: "May you live all the days of your life.", author: "Jonathan Swift" },
            { text: "Life is a succession of lessons which must be lived to be understood.", author: "Ralph Waldo Emerson" },
            { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
            { text: "The unexamined life is not worth living.", author: "Socrates" },
            { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
            { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
            { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
            { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
            { text: "Eighty percent of success is showing up.", author: "Woody Allen" },
            { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
            { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
            { text: "The person who says it cannot be done should not interrupt the person who is doing it.", author: "Chinese Proverb" },
            { text: "There are no traffic jams along the extra mile.", author: "Roger Staubach" },
            { text: "It is never too late to be what you might have been.", author: "George Eliot" },
            { text: "You become what you believe.", author: "Oprah Winfrey" },
            { text: "I would rather die of passion than of boredom.", author: "Vincent van Gogh" },
            { text: "A truly rich man is one whose children run into his arms when his hands are empty.", author: "Unknown" },
            { text: "Build your own dreams, or someone else will hire you to build theirs.", author: "Farrah Gray" },
            { text: "The battles that count aren't the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that's where it's at.", author: "Jesse Owens" },
            { text: "Education costs money. But then so does ignorance.", author: "Sir Claus Moser" },
            { text: "I have learned over the years that when one's mind is made up, this diminishes fear.", author: "Rosa Parks" },
            { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
            { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
            { text: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
            { text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.", author: "Johann Wolfgang von Goethe" },
            { text: "The best revenge is massive success.", author: "Frank Sinatra" },
            { text: "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.", author: "Zig Ziglar" },
            { text: "Life shrinks or expands in proportion to one's courage.", author: "Anais Nin" },
            { text: "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.", author: "Vincent Van Gogh" },
            { text: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", author: "Aristotle" },
            { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
            { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
            { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
            { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
            { text: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", author: "Plato" },
            { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
            { text: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
            { text: "Everything has beauty, but not everyone can see.", author: "Confucius" },
            { text: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", author: "Anne Frank" },
            { text: "When I let go of what I am, I become what I might be.", author: "Lao Tzu" },
            { text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou" },
            { text: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
            { text: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply.", author: "Leonardo da Vinci" },
            { text: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", author: "Jamie Paolinetti" },
            { text: "What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.", author: "Bob Dylan" },
            { text: "I didn't fail the test. I just found 100 ways to do it wrong.", author: "Benjamin Franklin" },
            { text: "In order to succeed, your desire for success should be greater than your fear of failure.", author: "Bill Cosby" },
            { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
            { text: "The mind is everything. What you think you become.", author: "Buddha" },
            { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
            { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
            { text: "The successful warrior is the average man with laser-like focus.", author: "Bruce Lee" },
            { text: "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea.", author: "Swami Vivekananda" },
            { text: "A goal is not always meant to be reached, it often serves simply as something to aim at.", author: "Bruce Lee" },
            { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
            { text: "Try not to become a person of success, but rather try to become a person of value.", author: "Albert Einstein" },
            { text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
            { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" },
            { text: "A winner is a dreamer who never gives up.", author: "Nelson Mandela" },
            { text: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
            { text: "Trust because you are willing to accept the risk, not because it's safe or certain.", author: "Anonymous" },
            { text: "All our dreams can come true if we have the courage to pursue them.", author: "Walt Disney" },
            { text: "Good things happen to those who hustle.", author: "Anais Nin" },
            { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
            { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
            { text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.", author: "Unknown" },
            { text: "If you are working on something exciting that you really care about, you don't have to be pushed.", author: "Steve Jobs" },
            { text: "Experience is a hard teacher because she gives the test first, the lesson afterward.", author: "Vernon Law" },
            { text: "Knowing is not enough; we must apply. Wishing is not enough; we must do.", author: "Johann Wolfgang von Goethe" },
            { text: "Imagine your life is perfect in every respect; what would it look like?", author: "Brian Tracy" },
            { text: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
            { text: "Whether you think you can or think you can't, you're right.", author: "Henry Ford" },
            { text: "Security is mostly a superstition. Life is either a daring adventure or nothing.", author: "Helen Keller" },
            { text: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
            { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
            { text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
            { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
            { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
            { text: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.", author: "Charles Darwin" },
            { text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.", author: "Mark Twain" },
            { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
            { text: "Life is what we make it, always has been, always will be.", author: "Grandma Moses" },
            { text: "The question isn't who is going to let me; it's who is going to stop me.", author: "Ayn Rand" },
            { text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", author: "Henry Ford" },
            { text: "It's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
            { text: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
            { text: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin" },
            { text: "The only way out is through.", author: "Robert Frost" },
            { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
            { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
            { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
            { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
            { text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
            { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
            { text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", author: "Martin Luther King Jr." },
            { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" }
        ];
let currentQuote = null;
const themes = {
    1: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    2: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    3: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    4: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    5: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
};

// Theme switching functionality with background change
function setTheme(themeNumber) {
const root = document.documentElement;
const bgAnimation = document.querySelector('.bg-animation');
            
// Update CSS custom property
root.style.setProperty('--current-theme', themes[themeNumber]);
            
// Update background animation class
bgAnimation.className = `bg-animation theme-${themeNumber}`;
            
// Update active theme button with smooth transition
document.querySelectorAll('.theme-btn').forEach(btn => {
btn.classList.remove('active');});
            
const activeBtn = document.querySelector(`[data-theme="${themeNumber}"]`);
activeBtn.classList.add('active');
            
// Add ripple effect
createRippleEffect(activeBtn);
            
// Show theme change notification
const themeNames = {
    1: 'Purple Nebula',
    2: 'Sunset Dream', 
    3: 'Ocean Breeze',
    4: 'Forest Glow',
    5: 'Cosmic Fire'
};
            
showToast(`Theme changed to ${themeNames[themeNumber]} ✨`);
}

// Create ripple effect on theme button click
function createRippleEffect(button) {
const ripple = document.createElement('div');
const rect = button.getBoundingClientRect();
const size = Math.max(rect.width, rect.height);
            
ripple.style.cssText = `
position: absolute;
top: 50%;
left: 50%;
width: ${size}px;
height: ${size}px;
border-radius: 50%;
background: rgba(255, 255, 255, 0.5);
transform: translate(-50%, -50%) scale(0);
animation: ripple 0.6s ease-out;
pointer-events: none;
z-index: 1;`;
            
// Add ripple animation keyframes if not exists
if (!document.querySelector('#ripple-styles')) {
const style = document.createElement('style');
style.id = 'ripple-styles';
style.textContent = `
@keyframes ripple { to { transform: translate(-50%, -50%) scale(2); opacity: 0;}} `;
document.head.appendChild(style); }
            
button.style.position = 'relative';
button.appendChild(ripple);
            
// Remove ripple after animation
setTimeout(() => {
if (ripple.parentNode) {
ripple.parentNode.removeChild(ripple);}
}, 600); }

// Dark/Light mode toggle
function toggleMode() {
const body = document.body;
const modeToggle = document.querySelector('.mode-toggle');
            
if (body.getAttribute('data-theme') === 'light') {
body.setAttribute('data-theme', 'dark');
modeToggle.textContent = '☀️';
} else {
body.setAttribute('data-theme', 'light');
modeToggle.textContent = '🌙';
}}

// Fetch new quote (with API fallback)
async function getNewQuote() {
const loading = document.getElementById('loading');
const quoteContent = document.getElementById('quoteContent');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
            
// Show loading animation
loading.style.display = 'block';
quoteContent.style.opacity = '0.3';
            
try {
// Try to fetch from Quote API
const response = await fetch('https://api.quotable.io/random?minLength=50');
                
if (response.ok) {
const data = await response.json();
currentQuote = {
text: data.content,
author: data.author
                    };
                } else {
                    throw new Error('API request failed');
                }
            } catch (error) {
                // Fallback to local quotes
                console.log('Using local quotes as fallback');
                const randomIndex = Math.floor(Math.random() * localQuotes.length);
                currentQuote = localQuotes[randomIndex];
            }
            
// Simulate loading delay for smooth UX
setTimeout(() => {
loading.style.display = 'none';
quoteText.textContent = currentQuote.text;
quoteAuthor.textContent = currentQuote.author;quoteContent.style.opacity = '1';
                
// Add entrance animation
quoteContent.style.transform = 'translateY(20px)';
setTimeout(() => {
quoteContent.style.transform = 'translateY(0)';}, 10);}, 800);
        }

// Copy quote to clipboard
async function copyQuote() {
if (!currentQuote) {
showToast('Please generate a quote first! ✨');
return;
}
            
const quoteText = `"${currentQuote.text}" — ${currentQuote.author}`;
            
try {
    await navigator.clipboard.writeText(quoteText);
    showToast('Quote copied to clipboard! 📋');
    } catch (error) {
// Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = quoteText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showToast('Quote copied to clipboard! 📋');
    }
}

// Share quote
async function shareQuote() {
if (!currentQuote) {
    showToast('Please generate a quote first! ✨');
return;
}
const shareData = {
title: 'Inspiring Quote from Quotopia',
text: `"${currentQuote.text}" — ${currentQuote.author}`, url: window.location.href };
            
try {
if (navigator.share) {
await navigator.share(shareData);
showToast('Quote shared successfully! 🔗');
} else {
// Fallback: copy to clipboard
const shareText = `${shareData.text}\n\nShared from Quotopia: ${shareData.url}`;
await navigator.clipboard.writeText(shareText);
showToast('Quote copied for sharing! 🔗');
}
} catch (error) {
if (error.name !== 'AbortError') {
// Fallback: copy to clipboard
const shareText = `${shareData.text}\n\nFrom Quotopia`;
try {
await navigator.clipboard.writeText(shareText);
showToast('Quote copied for sharing! 🔗');} 
catch (clipboardError) {showToast('Unable to share quote 😞');
            }
        }
    }
}

// Show toast notification
function showToast(message) {
const toast = document.getElementById('toast');
toast.textContent = message;
toast.classList.add('show');
            
setTimeout(() => {toast.classList.remove('show');}, 3000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
// Initialize theme switchers
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
    setTheme(btn.getAttribute('data-theme'));
    });
});
// Load initial quote
getNewQuote();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && e.target === document.body) {
                e.preventDefault();
                getNewQuote();
            } else if (e.ctrlKey && e.key === 'c' && e.target === document.body) {
                e.preventDefault();
                copyQuote();
            } else if (e.ctrlKey && e.key === 's' && e.target === document.body) {
                e.preventDefault();
                shareQuote();
            }
});

// Prevent default behavior for body clicks
document.body.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
     e.preventDefault();
   }
});