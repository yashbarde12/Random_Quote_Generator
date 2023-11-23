
async function getRandomQuote() {
    
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
    
        
        document.getElementById('quote').innerHTML = `"${data.content}" - ${data.author}`;
    } 
    catch (error) {
        console.error('Error fetching quote:', error);
    }
    
}
