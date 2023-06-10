import Container from "../layout/Container"

const Header = () => {
    return (
        <header>
            <Container>
                <div className="flex">
                    <h1
                        className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"
                    >
                        TM
                    </h1>

                    <h1>
                        Text Messenger
                    </h1>
                </div>
            </Container>
        </header>
    )
}

export default Header