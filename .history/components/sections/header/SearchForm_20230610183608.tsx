"use client"
import { Input } from "@/components/ui/input"
import { Button } from "../../ui/button"
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
                        <FormItem>
                            <FormControl>
                                <Input className='relative' placeholder="Search" {...field} />
                                <Button type="submit">
                                    <Icon icon='ion:search-outline' />
                                </Button>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export default Search