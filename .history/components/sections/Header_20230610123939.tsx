import Container from "../layout/Container"

const Header = () => {
    return (
        <header>
            <Container>
                <h1
                    className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"
                >
                    TM
                </h1>
            </Container>
        </header>
    )
}

export default Header