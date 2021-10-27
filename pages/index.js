import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Home() {
  const open = useRecoilValue(modalState)
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
