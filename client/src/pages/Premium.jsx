import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LucideShieldCheck,
  LucideBolt,
  LucideSearch,
  LucideSettings2,
  Star,
} from "lucide-react";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ritabrato Pani",
    role: "Software Engineer @Chubb",
    feedback:
      "Hands down the best platform I've ever used for coding practice. The AI hints are a game-changer!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sneha Rajput",
    role: "SDE-2 @Amazon",
    feedback:
      "I’ve never seen a platform so intuitive and elegant. Feels like solving problems in another galaxy.",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Preetam Kumar",
    role: "ML Engineer @MathCo",
    feedback:
      "From the editor to the test cases to the UI—everything just *flows*. This isn’t just a platform; it’s an experience.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const features = [
  {
    title: "Real-world Challenges",
    description:
      "Solve curated problems that resemble actual engineering scenarios. No fluff.",
    icon: LucideShieldCheck,
  },
  {
    title: "AI-Powered Hints",
    description:
      "Get non-spoiler AI-generated hints based on your code or the problem statement.",
    icon: LucideBolt,
  },
  {
    title: "Blazing Fast IDE",
    description:
      "Integrated Monaco Editor with auto-test cases, AI review, and instant feedback.",
    icon: LucideSettings2,
  },
  {
    title: "Smart Search & Filters",
    description:
      "Quickly find problems by tag, difficulty, topic, and even company interviews.",
    icon: LucideSearch,
  },
];

export default function Premium() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, type: "spring" }}
    >
      <div className="min-h-screen w-screen pt-40 text-black dark:text-white bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Header Section */}
          <section className="max-w-6xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r  from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent animate-fade-in">
              Unlock Premium Power
            </h1>
            <p className="text-lg md:text-xl dark:text-gray-300 text-black max-w-2xl mx-auto animate-fade-in delay-100">
              Go beyond limits. Exclusive content, enhanced tools, and the
              ultimate coding experience.
            </p>
            <div className="flex justify-center gap-4 mt-6 animate-fade-in delay-200">
              <Button
                size="lg"
                className="rounded-full bg-indigo-600 hover:bg-indigo-700 transition text-white"
              >
                Upgrade Now
              </Button>
              <a href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-indigo-400 dark:text-indigo-300 text-black hover:bg-indigo-900/20 transition"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </section>
          {/* Features Section */}

          <section id="features" className="py-20 px-4 md:px-8  backdrop-blur">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                Next-Gen Problem Solving
              </h2>
              <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                Everything you need to become a world-class coder—crafted with
                real feedback from top engineers.
              </p>

              <div className="grid md:grid-cols-2 gap-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="relative bg-white/60 dark:bg-white/90 border border-slate-200 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                      <h3 className="text-xl font-semibold text-slate-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-slate-700">{feature.description}</p>
                    <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                      Premium
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center space-y-10">
            <div className=" text-center space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                What Others Say About Us
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-16">
                Trusted by engineers at top companies. Here’s how we’ve helped
                them go from good to legendary.
              </p>

              <div className="px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-14 h-14 rounded-full border-2 border-blue-500/50"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-lg">{t.name}</h3>
                        <p className="text-sm text-slate-400">{t.role}</p>
                      </div>
                    </div>
                    <p className="dark:text-slate-200 text-black text-md italic mb-4">
                      “{t.feedback}”
                    </p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          {/* <section className="space-y-10 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-left pb-52">
            {[
              {
                question: "Is this platform suitable for beginners?",
                answer:
                  "Absolutely! We guide you from the basics to expert-level problem solving with AI-based hints and explanations.",
              },
              {
                question: "Can I use it for free?",
                answer:
                  "Yes! You’ll get access to curated problems. Premium unlocks more advanced tools and experiences.",
              },
              {
                question: "How often are new problems added?",
                answer:
                  "Every week! We ship fresh content frequently so you never run out of challenges.",
              },
            ].map((faq, i) => (
              <Accordion
                type="single"
                collapsible
                key={i}
                className="border-b border-white/20"
              >
                <AccordionItem value={`faq-${i}`}>
                  <AccordionTrigger className="dark:text-white text-black text-lg hover:text-pink-400 transition">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-black dark:text-white/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </section>
         */}

          <section className="space-y-10 text-center animate-fade-in">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 dark:from-purple-400 dark:via-pink-500 dark:to-yellow-400 text-transparent bg-clip-text tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="max-w-2xl mx-auto space-y-6 text-left pb-52 rounded-xl   p-6">
              {[
                {
                  question: "Is this platform suitable for beginners?",
                  answer:
                    "Absolutely! We guide you from the basics to expert-level problem solving with AI-based hints and explanations.",
                },
                {
                  question: "Can I use it for free?",
                  answer:
                    "Yes! You’ll get access to curated problems. Premium unlocks more advanced tools and experiences.",
                },
                {
                  question: "How often are new problems added?",
                  answer:
                    "Every now and then! We ship fresh content frequently so you never run out of challenges.",
                },
              ].map((faq, i) => (
                <Accordion type="single" collapsible key={i} className="">
                  <AccordionItem value={`faq-${i}`}>
                    <AccordionTrigger className="text-lg font-semibold text-black dark:text-white transition-colors duration-300 py-2 no-underline hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-700 dark:text-gray-300 leading-relaxed pt-2 px-7">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
}
