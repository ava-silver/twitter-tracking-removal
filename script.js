
// https://twitter.com/user/status/id?random_tracking_bs


document.addEventListener('copy', (evt) => {
    const text = evt.target.innerText;
    if (text.includes("status") && text.includes("?")) {
        navigator.clipboard.writeText(text.split("?")[0]).then(
            () => console.log('stripped share link of tracking params'),
            () => console.log('oof')
        );
    }
});

