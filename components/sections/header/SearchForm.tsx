"use client"
import { Input } from "@/components/ui/input"
import { Button  } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/Form'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from 'zod'
import { Icon } from '@iconify/react'

const Search = () => {
    const schema = z.object({
        search: z.string().min(2, {
            message: "Minimum 2 characters."
        })
    })

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            search: ""
        }
    })

    const onSubmit = (values: z.infer<typeof schema>) => {
        console.log(values)
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="search"
                    render={({ field }) => (
                        <FormItem className='relative'>
                            <FormControl className='relative'>
                                <Input className='bg-white dark:bg-transparent border-0 shadow-md transition-shadow duration-300 outline-none focus-within:shadow-sm pr-10 pl-5 rounded-full' placeholder="Search" {...field} />
                            </FormControl>
                                <Button  type="submit" className={`absolute !bg-transparent hover:text-gray-500 transition-all !p-0 h-auto text-gray-600 dark:text-light !m-0 right-4 top-1/2 -translate-y-1/2 text-lg `}>
                                    <Icon icon='ion:search-outline' />
                                </Button>
                            <FormMessage />
                        </FormItem>
                    )}
                />

            </form>
        </Form>
    )
}

export default Search