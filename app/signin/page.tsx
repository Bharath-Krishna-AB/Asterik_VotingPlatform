"use client"

import { Asterisk, ArrowRight, Mail, Lock, Sparkles } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'

interface SignInFormData {
  email: string,
  password: string,
}

const page: React.FC = () => {

  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  })


  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(formData);

  const handleSubmit = (e: FormEvent) => {
    try {

    } catch (error) {

    }
  }


  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#FAFAFA] text-neutral-900 selection:bg-primary selection:text-black font-[panchang,sans-serif]">
      <main className="w-full max-w-[420px] bg-white border border-neutral-200 rounded-[32px] p-8 md:p-10 shadow-xl shadow-black/5 mx-4 flex flex-col gap-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center -rotate-6 hover:rotate-12 transition-transform duration-500 shadow-2xl shadow-neutral-200 cursor-pointer">
            <Sparkles className="text-[#D5EF36] w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h2 className='font-[Panchang] font-bold text-2xl tracking-tight'>Welcome Back</h2>
            <p className='text-neutral-500 text-sm leading-relaxed max-w-[280px] mx-auto'>
              Enter your credentials to access the voting platform dashboard.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="space-y-3">
            <div className="group relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-black transition-colors" />
              <input
                type="email"
                placeholder='Email Address'
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                className='w-full h-14 pl-12 pr-4 rounded-2xl border border-neutral-200 bg-neutral-50 outline-none focus:bg-white focus:border-black transition-all placeholder:text-neutral-400 font-medium'
              />
            </div>
            <div className="group relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-black transition-colors" />
              <input
                type="password"
                placeholder='Password'
                value={formData.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("password", e.target.value)}
                className='w-full h-14 pl-12 pr-4 rounded-2xl border border-neutral-200 bg-neutral-50 outline-none focus:bg-white focus:border-black transition-all placeholder:text-neutral-400 font-medium'
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
              <span className="text-xs font-semibold text-neutral-500 group-hover:text-black transition-colors">Remember me</span>
            </label>
            <a href="#" className="text-xs font-semibold text-neutral-500 hover:text-black transition-colors">Forgot Password?</a>
          </div>

          <button type="submit" className='w-full h-14 bg-primary rounded-2xl flex items-center justify-center gap-2 font-[panchang,sans-serif] font-bold text-sm tracking-wide text-black hover:brightness-95 active:scale-[0.98] transition-all group shadow-sm'>
            <span>SIGN IN</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px bg-neutral-200 flex-1"></div>
          <span className="text-xs font-semibold text-neutral-400">OR</span>
          <div className="h-px bg-neutral-200 flex-1"></div>
        </div>

        {/* Social SignIn */}
        <div className="flex flex-col gap-3  select-none">
          <button className="w-full h-14 rounded-2xl border border-neutral-200 bg-white hover:border-black transition-colors flex items-center justify-center gap-3 group">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor" />
            </svg>
            <span className="font-semibold text-sm">Continue with Google</span>
          </button>
          <button className="w-full h-14 rounded-2xl bg-black text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-3">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="font-semibold text-sm">Continue with LinkedIn</span>
          </button>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-neutral-100 flex justify-center">
          <p className='text-sm text-neutral-500 font-medium'>
            Don't have an account? <a href="#" className="text-black underline underline-offset-4 decoration-2 decoration-primary hover:decoration-black transition-all">Sign Up</a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default page