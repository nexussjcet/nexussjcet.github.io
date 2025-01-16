import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Instagram, Linkedin, ArrowUpCircle, Code2, Users, BookOpen, Youtube } from 'lucide-react'

interface FooterProps {
  scrollToSection?: (section: "home" | "history" | "events" | "teams" | "footer") => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="w-full bg-black text-white py-12 mt-64">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-6">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 leading-relaxed">
              The Nexus Project is a community for open-source enthusiasts, promoting learning, collaboration and innovation through FOSS projects, workshops and events.
            </p>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get Involved</h3>
            <nav className="space-y-2">
              <Link
                href="/soc"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Code2 className="w-4 h-4" />
                <span>Contribute Code</span>
              </Link>
              <Link
                href="/docs"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>Documentation</span>
              </Link>
              <Link
                href="/join"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Users className="w-4 h-4" />
                <span>Join the Community</span>
              </Link>
              <Link
                href="https://github.com/nexussjcet"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Organization</span>
              </Link>
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection?.('home')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection?.('teams')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                TEAM
              </button>
              <Link href="/history" className="block text-gray-400 hover:text-white transition-colors">
                HISTORY
              </Link>
              <Link href="/fossday" className="block text-gray-400 hover:text-white transition-colors">
                FOSSDAY
              </Link>
            </nav>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://github.com/nexussjcet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.instagram.com/nexussjcet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://youtube.com/@TheNexusProjectSjcet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-6 h-6" />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/nexussjcet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <div className="flex flex-row w-full gap-4 mt-4 mx-2 mb-4">
              <img className="w-20 h-auto object-cover select-none" src="/logo.svg" alt="Nexus Logo" />
              <img className="w-20 h-auto object-cover select-none" src="/sjcet-logo.webp" alt="SJCET Logo" />
            </div>
            <div className="flex flex-row w-full mx-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection?.('home')}
                className="text-white hover:text-black border-2 border-white "
              >
                <span className="mr-2">Back to top</span>
                <ArrowUpCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-0">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} The Nexus Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}