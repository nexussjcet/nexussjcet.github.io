'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { getGithubAvatar } from "@/lib/github"
import { Github, Star } from 'lucide-react'
import { Linkedin } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react'

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim()
}

interface Project {
  title: string
  image: string
  deployedUrl: string
  description: string
  author: {
    name: string
    githubUsername: string
    linkedinUsername: string
  }
  technologies: string[]
  rating: number
}

interface ProjectOfTheWeekProps {
  project: Project
}

export default function ProjectOfTheWeek({ project }: ProjectOfTheWeekProps) {
  const { title, image, deployedUrl, description, author, technologies, rating } = project
  const [isExpanded, setIsExpanded] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState('/placeholder.svg?height=40&width=40')

  // Fetch avatar URL
  useEffect(() => {
    getGithubAvatar(author.githubUsername).then(setAvatarUrl)
  }, [author.githubUsername])

  const toggleExpand = () => setIsExpanded(!isExpanded)

  const truncatedDescription = truncateText(description, 350)
  const showReadMore = description.length > 350

  return (
    <Card className={`overflow-hidden bg-white w-[90vw] sm:w-[75vw] mx-auto transition-all duration-300 ease-in-out ${isExpanded ? 'h-auto' : 'h-[90vh] sm:h-[75vh]'}`}>
      <CardHeader>
        <h2 className="font-medium text-2xl text-gray-900 tracking-tight sm:text-3xl">
          {title}
        </h2>
        <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${
                    index < rating ? "fill-black text-black" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
          {/* Left section - Project Image/Video */}
          <Link 
            href={deployedUrl}
            className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 hover:opacity-90 transition-opacity"
          >
            <Image src={image} alt={title} fill className="object-cover hover:scale-110 duration-200 ease-in transition-all" />
          </Link>

          {/* Right section - Project Info */}
          <div className="flex flex-col gap-4">
            {/* Profile Section */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src={avatarUrl}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium leading-none">{author.name}</h3>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`https://github.com/${author.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>{author.githubUsername}</span>
                </Link>
      
                <Link
                  href={`https://www.linkedin.com/in/${author.linkedinUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>{author.linkedinUsername}</span>
                </Link>
            </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-md bg-gray-100 px-2 py-1"
                >
                  <span className="text-xs font-medium">{tech}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="border-gray-300 border-t py-2 text-gray-600 text-sm sm:py-4 sm:text-base">
              <p>
                {isExpanded ? description : truncatedDescription}
                {showReadMore && !isExpanded && '...'}
              </p>
              {showReadMore && (
                <Button 
                  variant="link" 
                  onClick={toggleExpand} 
                  className="mt-2 p-0 h-auto font-normal"
                  aria-expanded={isExpanded}
                  aria-controls="full-description"
                >
                  {isExpanded ? 'Read less' : 'Read more'}
                </Button>
              )}
            </div>

           
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

