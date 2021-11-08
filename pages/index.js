import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />

      {/* Modal */}
      <Modal />
    </div>
  )
}
