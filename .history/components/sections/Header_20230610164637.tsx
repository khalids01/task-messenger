import { NAME } from "@/constants"
import Container from "../layout/Container"
import Flex from "../layout/Flex"
import { Input } from "../ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "../ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/Form'
import { useForm } from "react-hook-form"


const Header = () => {
    return (
        <header>
            <Container>
                <Flex align="items-center" justify="justify-center">
                    <h1
                        className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 w-max"
                    >
                        {NAME}
                    </h1>

                    <Flex>
                        {/* <Search /> */}
                    </Flex>

                </Flex>
            </Container>
        </header>
    )
}

export default Header