export default function NavBar() {
    return <nav className="nav">
        <a href="/" className="home-parge">Home Page</a>
        <ul>
            <li>
                <a href="/login">Login</a>
                <li><a href="/my-receipes">Meine Rezepte</a>
                    <a href="/my-pantry">Meine Vorratskammer</a>
                    <a href="/meal-schedule">Mein Essensplaner</a></li>
            </li>
        </ul>
    </nav>
}