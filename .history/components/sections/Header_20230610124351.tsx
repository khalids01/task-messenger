import Container from "../layout/Container"

const Header = () => {
    return (
        <header>
            <Container>
                <div className="flex items-center">
                    <h1
                        className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 w-max"
                    >
                        TM
                    </h1>

                    <h1 className="text-xl font-semibold">
                        Text Messenger
                    </h1>
                </div>
            </Container>
        </header>
    )
}

export default Header