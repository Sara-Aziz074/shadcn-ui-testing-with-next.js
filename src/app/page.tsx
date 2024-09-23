import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { ChevronRight, Mail, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProfileModle from "@/components/profileModle";

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-28">



<Link href={"/blog"} className='text-xl font-bold  '> Blog</Link>
<Link href={"/todo"} className='text-xl font-bold  p-24'>Todo App</Link>
      <div >hello i'm shadcn-ui</div>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error of
        his ways and repealed the joke tax.

      </p>

      <div className='mt-5 flex gap-5'>
        <Button >Hi look here i'm Button</Button>
        <Button variant="secondary">button</Button>
        <Button variant="destructive" >Destructive</Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4 bg-black text-white" />
        </Button>

        <Button className='bg-blue-500'>
          <Mail className="mr-2 h-4 w-4 " /> Login with Email
        </Button>

        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>

      </div >

      <div className='mt-5'>
        <Input type="email" placeholder="Email" />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
      <div> <ProfileModle />

      </div>
    </main>
  )
}
