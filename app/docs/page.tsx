import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Under Development',
  description: 'This page is currently under development.',
}

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">Page Under Development</h1>
    </div>
  )
}