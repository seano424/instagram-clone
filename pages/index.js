import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
    </div>
  )
}
