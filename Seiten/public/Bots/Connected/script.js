window.onload = () => {
    if (window.location.href.includes("#token_type")) {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [TOKEN, token_type] = [fragment.get("access_token"), fragment.get("token_type")];
        console.log(TOKEN);
        fetch("https://discord.com/api/v10/users/@me",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }
        ).then(res => {
            if (res.status == 200) {
                return res.json();
            } else {
                document.getElementById("title").innerText = "Da ist etwas schiefgelaufen!";
                document.getElementById("image-middle").src = "/Images/Black/Warnung.png";
                setTimeout(() => {
                    setTimeout(() => {
                        window.location.href = "https://Me.leontm-official.repl.co/bots";
                    }, 3000)
                }, 3000)
            }
        })
        .then(data => {
            console.log(data.id);
            let ID = data.id
            fetch(`https://me.leontm-official.repl.co/intern/discordbots/allgemein/users/new/${ID}/${TOKEN}`,
                {
                    method: "POST",
                    headers: {
                        authorization: "NJ295Kix9M88ghaDVFqYrtQ72P3lXR"
                    }
                }
            )
            .then(res => {
                if (res.status == 200) {
                    return res.json()
                }
            })
            .then(data => {
                window.location.href = `https://Me.leontm-official.repl.co/bots/accounts/${ID}`;
            })
        })
    }
}