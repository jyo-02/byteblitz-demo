// import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { register } from "@/lib/api/auth";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Loader2, Eye, EyeOff } from "lucide-react";

// export default function RegisterPage() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ username: "", email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setError("");
//       setLoading(true);
//       await register(form);
//       navigate("/login");
//     } catch (err) {
//       setError(err?.response?.data?.message || "Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: 0.15, type: "spring" }}
//     >
//       <div className="flex flex-col md:flex-row h-screen w-screen font-sans text-white">
//         {/* Left Side - Image */}
//         <div className="w-full md:w-1/2 relative h-56 md:h-auto">
//           <img
//             src="/loginimg2.jpg"
//             alt="Register Visual"
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full md:w-1/2 flex items-center justify-center relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 overflow-hidden p-6 md:p-10">
//           {/* Gradient blobs */}
//           <div className="absolute top-[-20%] left-[-10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-rose-400 opacity-30 blur-[120px] rounded-full z-0" />
//           <div className="absolute bottom-[-10%] right-[-10%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-orange-600 opacity-20 blur-[100px] rounded-full z-0" />

//           <div className="z-10 w-full max-w-md backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl space-y-6">
//             <h2 className="text-2xl md:text-3xl font-bold text-white">
//               Create your account
//             </h2>

//             {error && (
//               <p className="text-sm text-red-400 bg-red-900/20 px-3 py-2 rounded">
//                 {error}
//               </p>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <Label htmlFor="username" className="text-zinc-300 mb-2 block">
//                   Username
//                 </Label>
//                 <Input
//                   id="username"
//                   name="username"
//                   placeholder="Your name"
//                   value={form.username}
//                   onChange={handleChange}
//                   className="bg-white/10 text-white placeholder-zinc-400 border border-white/10 focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="email" className="text-zinc-300 mb-2 block">
//                   Email
//                 </Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="you@example.com"
//                   value={form.email}
//                   onChange={handleChange}
//                   className="bg-white/10 text-white placeholder-zinc-400 border border-white/10 focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>
//               <div className="relative">
//                 <Label htmlFor="password" className="text-zinc-300 mb-2 block">
//                   Password
//                 </Label>
//                 <Input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="********"
//                   value={form.password}
//                   onChange={handleChange}
//                   className="bg-white/10 text-white placeholder-zinc-400 border border-white/10 focus:ring-2 focus:ring-orange-500 pr-10"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-0 top-2/3 -translate-y-1/2 text-zinc-400 hover:text-white"
//                   tabIndex={-1}
//                   aria-label={showPassword ? "Hide password" : "Show password"}
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>

//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-gradient-to-r from-rose-500 to-orange-700  hover:from-orange-600 hover:to-rose-600 text-white font-semibold shadow-lg flex items-center justify-center"
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                     Signing up...
//                   </>
//                 ) : (
//                   "Sign Up"
//                 )}
//               </Button>
//             </form>

//             <p className="text-sm text-zinc-400 text-center">
//               Already have an account?{" "}
//               <a href="/login" className="underline hover:text-white">
//                 Login
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }












import React from "react";
import { motion } from "framer-motion";

export default function RegisterPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, type: "spring" }}
    >
      <div className="flex flex-col md:flex-row h-screen w-screen font-sans text-white">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 relative h-56 md:h-auto">
          <img
            src="/loginimg2.jpg"
            alt="Register Visual"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 overflow-hidden p-6 md:p-10">
          <div className="absolute top-[-20%] left-[-10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-rose-400 opacity-30 blur-[120px] rounded-full z-0" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-orange-600 opacity-20 blur-[100px] rounded-full z-0" />

          <div className="z-10 w-full max-w-md backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Sign Up Paused
            </h2>
            <p className="text-zinc-300">
              New account registrations are currently paused.  
              Please contact the owner to get signed up.
            </p>
            <a
              href="mailto:bosejyotiska@gmail.com"
              className="inline-block px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-700 hover:from-orange-600 hover:to-rose-600 text-white font-semibold rounded-lg shadow-lg"
            >
              Contact Owner
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
