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
                                <Input  placeholder="Search" {...field} />
                            </FormControl>
                                <Button  type="submit" className={`absolute p-0 h-auto bg-transparent text-dark dark:text-light !m-0 right-6 top-1/2 -translate-x-1/2 `}>
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