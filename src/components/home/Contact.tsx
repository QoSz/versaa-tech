'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import Link from 'next/link'
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from 'react'
import { toast } from 'sonner'

const cardHoverVariant = {
    hover: {
        scale: 1.02,
        transition: {
            type: "spring",
            stiffness: 300,
        }
    }
}

// Update the FormData interface to include form-specific fields
interface JobSeekersFormData {
    jobSeekersFirstName: string;
    jobSeekersLastName: string;
    jobSeekersEmail: string;
    jobSeekersPhone?: string;
    jobSeekersMessage: string;
    jobSeekersPrivacy: boolean;
}

interface EmployersFormData {
    employersFirstName: string;
    employersLastName: string;
    employersEmail: string;
    employersPhone?: string;
    employersMessage: string;
    employersPrivacy: boolean;
}

export function Contact() {
    const [isLoadingJobSeekers, setIsLoadingJobSeekers] = useState(false);
    const [isLoadingEmployers, setIsLoadingEmployers] = useState(false);

    // Update form hooks with separate types
    const { 
        register: registerJobSeekers, 
        handleSubmit: handleSubmitJobSeekers, 
        formState: { errors: errorsJobSeekers, isValid: isValidJobSeekers },
        setValue: setValueJobSeekers    } = useForm<JobSeekersFormData>({ mode: 'onChange' });

    const { 
        register: registerEmployers, 
        handleSubmit: handleSubmitEmployers, 
        formState: { errors: errorsEmployers, isValid: isValidEmployers },
        setValue: setValueEmployers    } = useForm<EmployersFormData>({ mode: 'onChange' });

    const onSubmitJobSeekers = async (data: JobSeekersFormData) => {
        try {
            setIsLoadingJobSeekers(true);
            const formData = {
                ...data,
                access_key: "b1f9505c-237c-42b3-aacb-bcde90f8b2ea",
                from_name: `${data.jobSeekersFirstName} ${data.jobSeekersLastName}`,
                subject: "New Job Seeker Contact Form Submission",
                form_type: "job_seeker"
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (result.success) {
                toast.success("Thank you for your submission! We'll be in touch soon.");
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.");
            console.error(error);
        } finally {
            setIsLoadingJobSeekers(false);
        }
    };

    const onSubmitEmployers = async (data: EmployersFormData) => {
        try {
            setIsLoadingEmployers(true);
            const formData = {
                ...data,
                access_key: "b1f9505c-237c-42b3-aacb-bcde90f8b2ea",
                from_name: `${data.employersFirstName} ${data.employersLastName}`,
                subject: "New Employer Contact Form Submission",
                form_type: "employer"
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (result.success) {
                toast.success("Thank you for your submission! We'll be in touch soon.");
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.");
            console.error(error);
        } finally {
            setIsLoadingEmployers(false);
        }
    };

    return (
        <section className="py-12">
            <div className="px-4 md:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.h2
                        className="text-3xl font-bold text-center mb-12 text-blue-600"
                    >
                        Lets Have a Conversation ...
                    </motion.h2>

                    {/* Forms Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Job Seekers Form */}
                        <Card className="rounded-2xl shadow-md border-blue-100">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-6">
                                    Job Seekers
                                </h3>
                                <form onSubmit={handleSubmitJobSeekers(onSubmitJobSeekers)} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="jobSeekersFirstName">First Name</Label>
                                            <Input
                                                id="jobSeekersFirstName"
                                                {...registerJobSeekers("jobSeekersFirstName", { required: true })}
                                                className={errorsJobSeekers.jobSeekersFirstName ? "border-red-500" : ""}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="jobSeekersLastName">Last Name</Label>
                                            <Input
                                                id="jobSeekersLastName"
                                                {...registerJobSeekers("jobSeekersLastName", { required: true })}
                                                className={errorsJobSeekers.jobSeekersLastName ? "border-red-500" : ""}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="jobSeekersEmail">Email</Label>
                                        <Input
                                            id="jobSeekersEmail"
                                            type="email"
                                            {...registerJobSeekers("jobSeekersEmail", { required: true })}
                                            className={errorsJobSeekers.jobSeekersEmail ? "border-red-500" : ""}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="jobSeekersPhone">Phone</Label>
                                        <Input
                                            id="jobSeekersPhone"
                                            type="tel"
                                            {...registerJobSeekers("jobSeekersPhone")}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="jobSeekersMessage">Message</Label>
                                        <Textarea
                                            id="jobSeekersMessage"
                                            {...registerJobSeekers("jobSeekersMessage", { required: true })}
                                            className={errorsJobSeekers.jobSeekersMessage ? "border-red-500" : ""}
                                        />
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox
                                            id="jobSeekersPrivacyCheckbox"
                                            {...registerJobSeekers("jobSeekersPrivacy", { 
                                                required: "You must accept the privacy policy to continue",
                                                validate: (value) => value === true || "You must accept the privacy policy"
                                            })}
                                            onCheckedChange={(checked) => {
                                                setValueJobSeekers("jobSeekersPrivacy", checked === true, { 
                                                    shouldValidate: true,
                                                    shouldDirty: true 
                                                });
                                            }}
                                            aria-label="Job Seekers Privacy Policy Checkbox"
                                        />
                                        <label
                                            htmlFor="jobSeekersPrivacyCheckbox"
                                            className={`text-sm font-medium leading-none ${
                                                errorsJobSeekers.jobSeekersPrivacy ? "text-red-500" : "text-gray-700"
                                            }`}
                                        >
                                            I have read and agree to the{' '}
                                            <Link href="/privacy" className="text-blue-600 hover:underline">
                                                Privacy Policy
                                            </Link>
                                        </label>
                                    </div>
                                    {errorsJobSeekers.jobSeekersPrivacy && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {errorsJobSeekers.jobSeekersPrivacy.message?.toString()}
                                        </p>
                                    )}
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 mt-4"
                                        disabled={!isValidJobSeekers || isLoadingJobSeekers}
                                    >
                                        {isLoadingJobSeekers ? "Submitting..." : "Submit"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Employers Form */}
                        <Card className="rounded-2xl shadow-md border-green-100">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent mb-6">
                                    Employers
                                </h3>
                                <form onSubmit={handleSubmitEmployers(onSubmitEmployers)} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="employersFirstName">First Name</Label>
                                            <Input
                                                id="employersFirstName"
                                                {...registerEmployers("employersFirstName", { required: true })}
                                                className={errorsEmployers.employersFirstName ? "border-red-500" : ""}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="employersLastName">Last Name</Label>
                                            <Input
                                                id="employersLastName"
                                                {...registerEmployers("employersLastName", { required: true })}
                                                className={errorsEmployers.employersLastName ? "border-red-500" : ""}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="employersEmail">Email</Label>
                                        <Input
                                            id="employersEmail"
                                            type="email"
                                            {...registerEmployers("employersEmail", { required: true })}
                                            className={errorsEmployers.employersEmail ? "border-red-500" : ""}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="employersPhone">Phone</Label>
                                        <Input
                                            id="employersPhone"
                                            type="tel"
                                            {...registerEmployers("employersPhone")}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="employersMessage">Message</Label>
                                        <Textarea
                                            id="employersMessage"
                                            {...registerEmployers("employersMessage", { required: true })}
                                            className={errorsEmployers.employersMessage ? "border-red-500" : ""}
                                        />
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox
                                            id="employersPrivacyCheckbox"
                                            {...registerEmployers("employersPrivacy", { 
                                                required: "You must accept the privacy policy to continue",
                                                validate: (value) => value === true || "You must accept the privacy policy"
                                            })}
                                            onCheckedChange={(checked) => {
                                                setValueEmployers("employersPrivacy", checked === true, { 
                                                    shouldValidate: true,
                                                    shouldDirty: true 
                                                });
                                            }}
                                            aria-label="Employers Privacy Policy Checkbox"
                                        />
                                        <label
                                            htmlFor="employersPrivacyCheckbox"
                                            className={`text-sm font-medium leading-none ${
                                                errorsEmployers.employersPrivacy ? "text-red-500" : "text-gray-700"
                                            }`}
                                        >
                                            I have read and agree to the{' '}
                                            <Link href="/privacy" className="text-green-600 hover:underline">
                                                Privacy Policy
                                            </Link>
                                        </label>
                                    </div>
                                    {errorsEmployers.employersPrivacy && (
                                        <p className="text-sm text-red-500 mt-1">
                                            {errorsEmployers.employersPrivacy.message?.toString()}
                                        </p>
                                    )}
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 mt-4"
                                        disabled={!isValidEmployers || isLoadingEmployers}
                                    >
                                        {isLoadingEmployers ? "Submitting..." : "Submit"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Existing Email Card */}
                    <div className="flex justify-center">
                        <motion.div
                            className="max-w-md mx-auto w-full"
                            variants={cardHoverVariant}
                            whileHover="hover"
                        >
                            <Card className="rounded-2xl shadow-md h-full">
                                <CardContent className="p-7 flex flex-col items-center">
                                    <div className="p-2.5 bg-[#08314e]/10 rounded-full mb-3">
                                        <Mail className="h-7 w-7 text-red-500" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 text-lg mb-1">
                                        Email
                                    </h3>
                                    <a
                                        href="mailto:info@versaatech.com"
                                        className="text-gray-600 hover:text-gray-600/80 transition-colors text-center"
                                    >
                                        info@VersaaTech.com
                                    </a>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
