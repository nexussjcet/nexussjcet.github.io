import React from "react";
import { Rocket, Users, Trophy, Zap, ArrowRight } from "lucide-react";

export default function ProductHuntLanding() {
	return (
		<div className="min-h-screen bg-black text-white">
			{/* Hero Section */}
			<div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20">
				{/* Gradient Orb Background */}
				<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

				<div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
						<Zap className="w-4 h-4 text-orange-400" />
						<span className="text-sm font-medium">
							SJCET's Innovation Platform
						</span>
					</div>

					{/* Main Heading */}
					<h1 className="text-5xl md:text-7xl font-bold leading-tight">
						Discover & Launch
						<br />
						<span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
							Student Projects
						</span>
					</h1>

					{/* Subheading */}
					<p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
						The ultimate platform for SJCET students to showcase their
						innovations, get feedback, and discover what peers are building.
					</p>

					{/* CTA Buttons */}
					<div className="flex justify-center items-center pt-8">
						<a href="/sjcet-product-hunt/register">
							<button className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70">
								Get Started
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</button>
						</a>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="px-6 py-20 border-t border-white/10">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
						Why <span className="text-orange-400">Product Hunt</span> at SJCET?
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Feature 1 */}
						<div className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300">
							<div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Rocket className="w-6 h-6 text-orange-400" />
							</div>
							<h3 className="text-xl font-semibold mb-3">Launch Your Ideas</h3>
							<p className="text-gray-400">
								Share your projects with the SJCET community. Get instant
								visibility and feedback from fellow students and faculty.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
							<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Users className="w-6 h-6 text-purple-400" />
							</div>
							<h3 className="text-xl font-semibold mb-3">Build Community</h3>
							<p className="text-gray-400">
								Connect with makers, designers, and developers. Find
								collaborators and grow your network within SJCET.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300">
							<div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
								<Trophy className="w-6 h-6 text-pink-400" />
							</div>
							<h3 className="text-xl font-semibold mb-3">Get Recognition</h3>
							<p className="text-gray-400">
								Showcase your work to potential recruiters, mentors, and
								investors. Build your portfolio with real feedback.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="px-6 py-8 border-t border-white/10">
				<div className="max-w-6xl mx-auto text-center text-gray-500">
					<p>© 2025 SJCET Product Hunt. Built by students, for students.</p>
				</div>
			</footer>
		</div>
	);
}
