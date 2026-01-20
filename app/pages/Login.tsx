import React from 'react'
import { Asterisk, ArrowRight, Mail, Lock } from 'lucide-react'

const Login = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#FAFAFA] text-neutral-900 selection:bg-primary selection:text-black font-[panchang,sans-serif]">
      <main className="w-full max-w-[420px] bg-white border border-neutral-200 rounded-[32px] p-8 md:p-10 shadow-xl shadow-black/5 mx-4 flex flex-col gap-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center rotate-3 hover:rotate-6 transition-transform duration-300 shadow-lg shadow-primary/20">
            <Asterisk className="text-primary w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className='font-[Panchang] font-bold text-2xl tracking-tight'>Welcome Back</h2>
            <p className='text-neutral-500 text-sm leading-relaxed max-w-[280px] mx-auto'>
              Enter your credentials to access the voting platform dashboard.
            </p>
          </div>
        </div>

        {/* Form */}
        <form action="" className="flex flex-col gap-5">
          <div className="space-y-3">
            <div className="group relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-black transition-colors" />
              <input
                type="email"
                placeholder='Email Address'
                className='w-full h-14 pl-12 pr-4 rounded-2xl border border-neutral-200 bg-neutral-50 outline-none focus:bg-white focus:border-black transition-all placeholder:text-neutral-400 font-medium'
              />
            </div>
            <div className="group relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-black transition-colors" />
              <input
                type="password"
                placeholder='Password'
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

          <button type="submit" className='w-full h-14 bg-primary rounded-2xl flex items-center justify-center gap-2 font-[Panchang] font-bold text-sm tracking-wide text-black hover:brightness-95 active:scale-[0.98] transition-all group shadow-sm'>
            <span>LOGIN</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

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

export default Login