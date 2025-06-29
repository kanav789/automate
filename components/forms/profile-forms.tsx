"use client"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { EditUserProfileSchema } from '@/lib/types'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader, Loader2 } from 'lucide-react'
type Props = {}

export const ProfileForm = (props: Props) => {
    const [isLoading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        mode: 'onChange',
        resolver: zodResolver(EditUserProfileSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    })
    const handleSubmit = async () => {
        console.log("wait")
    }
    return (
        <Form {...form}>
            <form className='flex flex-col gap-6' onSubmit={form.handleSubmit(handleSubmit)} >
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">User full name</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Name"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-lg">Email</FormLabel>
                            <FormControl>
                                <Input
                                    type='email'
                                    {...field}
                                    disabled={true}
                                    placeholder="Email"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit"
                    className="self-start hover:bg-black hover:text-white cursor-pointer "

                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving
                        </>
                    ) : (
                        'Save User Settings'
                    )}

                </Button>
            </form>
        </Form >
    )
}