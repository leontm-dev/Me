window.onload = () => {
    if (window.location.href.includes("#token_type")) {
        let TOKEN = window.location.href.replace("https://me.leontm-official.repl.co/bots/connected#token_type=Bearer&access_token=", "");
        let token = TOKEN.replace("&expires_in=604800&scope=guilds.join+guilds.members.read+guilds+connections+identify", "")
        fetch("https://discord.com/api/v10/users/@me",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then(res => {
            if (res.status == 200) {
                return res.json();
            } else {
                window.location.href = "https://Me.leontm-official.repl.co/bots";
            }
        })
        .then(data => {
            console.log(data.id);
            let ID = data.id
            fetch(`https://me.leontm-official.repl.co/intern/discord_bots/allgemein/users/new/${ID}/${token}`,
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
                } else {
                    window.location.href = "https://Me.leontm-official.repl.co/bots"
                }
            })
            .then(data => {
                window.location.href = `https://Me.leontm-official.repl.co/bots/accounts/${ID}`;
            })
        })
    }
}