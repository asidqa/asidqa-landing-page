import { useState } from 'react';
import { Button, Input, Textarea } from '@/components/ui/';
import AsidqaLogo from '@/components/logo';

export default function LaunchingSoon() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');


    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black-background text-white-foreground mx-2">
            <AsidqaLogo width={256} height={256} />
            <h1 className="text-5xl font-bold mb-2 text-center">Tick-Tock, Tech Unlocked Soon!</h1>
            <p className="text-xl mb-6">Be the first to experience our cutting-edge IT solutions.</p>
            <form action={"mailto:contact@asidqa.com"} className="flex flex-col gap-4 lg:w-1/3">
                <div className='flex flex-row items-center gap-1'>
                    <Input required type="text" placeholder="Name" name={"Name"} value={name} onChange={(e) => setName(e.target.value)} />
                    <Input
                        required
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        name={"Email"}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <Textarea
                    required
                    placeholder="Your inquiries or comments"
                    value={message}
                    name={"Message"}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <span className="text-sm text-gray-400">We respect your privacy. Your email address will never be shared or sold.</span>
                <Button type="submit" variant="default">Stay Updated</Button>
                <span className="text-sm text-gray-400 text-center">You can also email us directly at <a href='mailto:contact@asidqa.com'>contact@asidqa.com</a></span>
            </form>
        </div>
    );
}
