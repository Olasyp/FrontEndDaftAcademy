export const Surprise = () => {

    const joke = fetch('https://api.jokes.one/jod?category=animal')
        .then((response) => response.json())
        .then((user) => {
            return user.contents.jokes[0].joke.text;
        });

    const showJoke = () => {
        joke.then((a) => {
            alert(a);
        });
    };

    showJoke();

    return <div style={{display: "flex", flexDirection: 'column'}}>
        <div>Surprise page</div>
        <div>You have just read a joke of the day!</div>
    </div>
}