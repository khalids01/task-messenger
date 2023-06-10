import { NAME } from "@/constants"
import Container from "../layout/Container"

const Header = () => {
    return (
        <header>
            <Container>
                <div className="flex items-center">
                    <h1
                        className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 w-max"
                    >
                         {NAME}
                    </h1>
                </div>
            </Container>
        </header>
    )
}

export default Header