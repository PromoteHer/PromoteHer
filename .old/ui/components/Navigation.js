import Link from 'next/link';

const Navigation = () => (
    <nav>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/search">
            <a>Search</a>
        </Link>
        <Link href="/submit">
            <a>Submit</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
    </nav>
)

export default Navigation;