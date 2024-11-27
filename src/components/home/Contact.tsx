'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send, Mail, Phone, Globe, MapPin, MessageSquare, MessageCircleMore, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
    confirmNoPersonalInfo: z.boolean().refine(val => val === true, {
        message: "You must confirm that your message contains no personal identifiable information.",
    }),
})

const cardHoverVariant = {
    hover: {
        scale: 1.02,
        transition: {
            type: "spring",
            stiffness: 300,
        }
    }
}

const contactInfo = [
    {
        icon: Globe,
        title: "Website",
        content: "www.versaatech.com",
        link: "https://www.versaatech.com"
    },
    {
        icon: Mail,
        title: "Email",
        content: "info@versaatech.com",
        link: "mailto:info@versaatech.com"
    },
    {
        icon: Phone,
        title: "Phone",
        content: [
            "US: +1 (555) 123-4567",
            "UAE: +44 20 7123 4567",
            "Kenya: +91 22 6123 4567"
        ]
    },
    {
        icon: MapPin,
        title: "Global Offices",
        content: [
            "US: Michigan, USA",
            "UAE: Dubai, UAE",
            "Africa: Nairobi, Kenya"
        ]
    }
]

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
            confirmNoPersonalInfo: false,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            console.log(values)
            setIsSubmitting(false)
            form.reset()
        }, 2000)
    }

    return (
        <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h2
                        className="text-3xl font-bold text-center mb-4 text-[#08314e]"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <MessageSquare className="h-8 w-8" />
                            Contact Us
                        </div>
                    </motion.h2>
                    <motion.p
                        className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
                    >
                        Ready to transform your business? Get in touch with our team of experts today.
                    </motion.p>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
                    >
                        {contactInfo.map((info) => (
                            <motion.div 
                                key={info.title} 
                                variants={cardHoverVariant} 
                                whileHover="hover"
                            >
                                <Card className="bg-white">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-2 bg-[#08314e]/10 rounded-lg">
                                                <info.icon className="h-6 w-6 text-[#08314e]" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-2">
                                                    {info.title}
                                                </h3>
                                                {Array.isArray(info.content) ? (
                                                    <div className="space-y-1">
                                                        {info.content.map((item, idx) => (
                                                            <p key={idx} className="text-gray-600 text-sm">
                                                                {item}
                                                            </p>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <a
                                                        href={info.link}
                                                        className="text-[#08314e] hover:text-[#08314e]/80 text-sm transition-colors"
                                                    >
                                                        {info.content}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-lg p-6 shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold text-[#08314e] mb-6 text-center">
                            <div className="flex items-center justify-center gap-2">
                                <MessageCircleMore className="h-6 w-6" />
                                Let&apos;s Start a Conversation
                            </div>
                        </h3>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-white text-gray-900" placeholder="John Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input className="bg-white text-gray-900" type="email" placeholder="john@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input className="bg-white text-gray-900" placeholder="Inquiry about services" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex items-center gap-2">
                                                <FormLabel>Message</FormLabel>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger>
                                                            <Info className="h-4 w-4 text-gray-500" />
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>Please do not include any sensitive personal information in your message.</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </div>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell us about your project or inquiry..."
                                                    className="min-h-[150px] bg-white text-gray-900"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmNoPersonalInfo"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    className="border-2 border-gray-300 data-[state=checked]:bg-[#2E7D32] data-[state=checked]:border-[#2E7D32]"
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>
                                                    I confirm that my message does not contain any personal identifiable information
                                                </FormLabel>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full bg-[#08314e] hover:bg-[#08314e]/80 text-white"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 h-4 w-4" />
                                            </>
                                        )}
                                    </Button>
                                </motion.div>
                            </form>
                        </Form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
