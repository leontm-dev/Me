// Funktionen
function signUpDiscord() {
    window.location.href = "https://discord.com/api/oauth2/authorize?client_id=1070781003519500399&redirect_uri=http%3A%2F%2Flocalhost%3A2000%2Fbots%2Fconnected%2F&response_type=token&scope=identify%20guilds%20email%20guilds.join%20connections%20guilds.members.read%20messages.read";
};
function scrollToNextSection() {
    window.scrollBy({"behavior": "smooth", "top": window.innerHeight})
}