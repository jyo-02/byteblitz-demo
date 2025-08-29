import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Rocket, Brain, Star, DollarSign, Infinity } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const code = `function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  const missing = expectedSum - actualSum;
  console.log(\`Expected: \${expectedSum}, Actual: \${actualSum}\`);
  return missing;
}

const numbers = [0, 1, 2, 4, 5];
const result = findMissingNumber(numbers);
console.log('Missing Number:', result);`;

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, type: "spring" }}
    >
      <div
        className="min-h-screen w-screen  from-background to-zinc-950 bg-white overflow-x-hidden pt-7
                 dark:bg-zinc-950 dark:text-gray-900"
      >
        {/* Hero Section */}
        <section
          className="min-h-screen flex flex-col justify-center items-center
                    bg-gradient-to-b dark:from-black dark:via-neutral-900 dark:to-black dark:text-white px-4 relative overflow-hidden
                    from-white via-gray-200 to-white text-gray-900"
        >
          {/* Tagline */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1 bg-white text-black rounded-full text-xs sm:text-sm font-medium shadow-md backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer select-none max-w-[90vw] text-center">
            ✨ Join ByteBlitz built for real-world problem solvers
          </div>

          {/* Heading and Subheading */}
          <div className="relative z-10 pt-28 text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              A platform to{" "}
              <span
                className="bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-500







  bg-clip-text text-transparent animate-gradient"
              >
                master coding
              </span>{" "}
              & shape your future.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Solve challenges, level up your skills, and stand out. Dive into a
              clean, powerful coding experience made for true developers.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4 pt-4">
              <Button
                asChild
                className="px-6 py-3 rounded-xl font-semibold text-white dark:text-black bg-black dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-300 transition-all duration-200 shadow-xl"
              >
                <Link to="/problemset">Start Solving</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-black dark:text-white border border-black  dark:border-white/40 bg-white/5 dark:bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-200"
              >
                <Link to="/register">Create New Account</Link>
              </Button>
            </div>
          </div>

          {/* Code Block */}
          <Card className="h-80 mt-20 w-full max-w-3xl shadow-2xl border border-white/10 bg-[#1e1e1e] text-sm font-mono text-left rounded-xl overflow-hidden p-0">
            <div className="flex items-center space-x-2 px-4 py-2 bg-[#2e2e2e] border-b border-white/10">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <CardContent className="p-0">
              <SyntaxHighlighter
                language="javascript"
                style={vscDarkPlus}
                wrapLines
                showLineNumbers
                customStyle={{
                  margin: 0,
                  padding: "1rem",
                  background: "#1e1e1e",
                  fontSize: "0.15rem",
                }}
              >
                {code}
              </SyntaxHighlighter>
            </CardContent>
          </Card>
        </section>

        {/* About Section */}
        <section className="py-32 px-4 relative bg-black dark:bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('/path-to-stripe-image.png')] bg-repeat"></div>

          <div className="absolute inset-0 dark:bg-black bg-white"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 px-6">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black drop-shadow-xl dark:text-gray-200 dark:drop-shadow-none">
              About Us
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-black/80 leading-relaxed dark:text-white">
              We believe every coder deserves a platform that inspires,
              educates, and evolves with them. Built by developers, for
              developers, our mission is to democratize elite problem-solving
              and make it breathtakingly accessible.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 dark:bg-background bg-white text-center">
          <h2 className="text-4xl text-black dark:text-white font-bold mb-12">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                Icon: Rocket,
                title: "AI-Powered Guidance",
                desc: "Stuck? Get context-aware hints powered by next-gen language models.",
                color: "text-purple-500",
              },
              {
                Icon: Brain,
                title: "Intelligent Test Cases",
                desc: "Submit your code with confidence using dynamic and real-world test cases.",
                color: "text-pink-500",
              },
              {
                Icon: Star,
                title: "Progress Tracking",
                desc: "Track solved problems, view submission history, and monitor your mastery arc.",
                color: "text-yellow-500",
              },
            ].map(({ Icon, title, desc, color }, i) => (
              <Card
                key={i}
                className="bg-card/70 backdrop-blur-md border border-border shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              >
                <CardHeader>
                  <Icon className={`h-10 w-10 ${color} mb-4 mx-auto`} />
                  <CardTitle className="text-xl font-semibold">
                    {title}
                  </CardTitle>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-4 bg-background">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-black dark:text-white mb-20">
            Pricing Plans
          </h2>
          <div className="flex flex-col md:flex-row gap-20 justify-center items-stretch">
            {[
              {
                icon: <DollarSign className="h-10 w-10 text-black dark:text-white mb-6" />,
                title: "Free Forever",
                desc: "Access hundreds of problems and submit solutions anytime.",
                features: [
                  "✔️ Unlimited submissions",
                  "✔️ No AI solutions",
                  "✔️ AI-based hints (up to 3 per day)",
                ],
                className:
                  "border border-border hover:shadow-lg transition-shadow",
              },
              {
                icon: <Infinity className="h-10 w-10 text-orange-500 mb-6" />,
                title: "Pro Access",
                desc: "Everything in Free + next-gen AI capabilities.",
                features: [
                  "✔️ Priority code execution",
                  "✔️ AI-based Solutions",
                  "✔️ AI-based hints (up to 5 per day)",
                ],
                className:
                  "border border-yellow-500 hover:border-yellow-400 shadow-lg bg-orange-100/10 transition-shadow",
              },
            ].map(({ icon, title, desc, features, className }, i) => (
              <Card
                key={i}
                className={`w-full max-w-[23rem] px-6 py-8 text-left rounded-xl ${className}`}
              >
                <CardHeader className="space-y-2 text-center items-center">
                  <div className="flex justify-center">{icon}</div>
                  <CardTitle className="text-2xl font-semibold">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-base flex justify-center">
                    {desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-6">
                  <ul className="text-sm text-center text-muted-foreground space-y-2 list-disc list-inside">
                    {features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-6 w-full text-base font-medium bg-gray-100"
                  >
                    <Link
                      to={title === "Free Forever" ? "/register" : "/premium"}
                    >
                      {title === "Free Forever" ? "Join Free" : "Upgrade Now"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 dark:bg-zinc-950 bg-white text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl font-extrabold text-black dark:text-white">
              Ready to build something extraordinary?
            </h2>
            <p className="text-muted-foreground">
              Start solving problems. Learn, grow, and unlock your coding
              potential.
            </p>
            <Button
              asChild
              size="lg"
              className="shadow-lg bg-white rounded-2xl "
            >
              <Link to="/problemset">Start Coding</Link>
            </Button>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-background dark:bg-zinc-900 text-muted-foreground border-t border-border py-12 px-6 mt-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-y-8 gap-x-12">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent select-none">
              BYTEBLITZ
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-x-6 text-sm">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/premium"
                className="hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                to="/premium"
                className="hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/about"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Social Icons */}
            <div className="flex space-x-5">
              {/* Twitter */}
              <a
                href="https://x.com/posiedonincrocs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.96-2.48 9.07 9.07 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.7 4.13A12.84 12.84 0 0 1 1.64 2.16 4.5 4.5 0 0 0 3.16 9a4.44 4.44 0 0 1-2.05-.57v.06a4.52 4.52 0 0 0 3.63 4.43 4.53 4.53 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.15 9.07 9.07 0 0 1-5.61 1.94A9.32 9.32 0 0 1 0 18.56 12.8 12.8 0 0 0 7 21c8.3 0 12.84-6.89 12.84-12.84 0-.2 0-.42-.02-.63A9.19 9.19 0 0 0 23 3z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/jyo-02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.01c-3.34.73-4.04-1.61-4.04-1.61a3.17 3.17 0 0 0-1.33-1.75c-1.09-.75.08-.74.08-.74a2.51 2.51 0 0 1 1.83 1.23 2.55 2.55 0 0 0 3.48 1 2.55 2.55 0 0 1 .76-1.6c-2.67-.3-5.47-1.34-5.47-5.95a4.66 4.66 0 0 1 1.24-3.23 4.32 4.32 0 0 1 .12-3.19s1-.32 3.3 1.23a11.39 11.39 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23a4.32 4.32 0 0 1 .12 3.19 4.66 4.66 0 0 1 1.24 3.23c0 4.62-2.8 5.65-5.48 5.95a2.86 2.86 0 0 1 .81 2.21c0 1.6-.01 2.89-.01 3.28 0 .32.21.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/jyotiskab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7 19H4V9h3v10zM5.5 7.5C4.67 7.5 4 6.83 4 6s.67-1.5 1.5-1.5S7 5.17 7 6s-.67 1.5-1.5 1.5zM20 19h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96V19h-3V9h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6V19z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-xs text-muted-foreground select-none">
            © 2025 Byteblitz. All rights reserved.
          </div>
        </footer>
      </div>
    </motion.div>
  );
}
