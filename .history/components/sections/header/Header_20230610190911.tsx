import { NAME } from "@/constants"
import Container from "@/layout/Container"
import Flex from "@/layout/Flex"
import Search from './SearchForm'



const Header = () => {
    return (
        <header className='py-3'>
            <Container>
                <Flex align="items-center" justify="justify-center">
                    <h1
                        className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 w-max"
                    >
                        {NAME}
                    </h1>

                    <Flex>
                        <Search />
                    </Flex>

                </Flex>
            </Container>
        </header>
    )
}

export default Header