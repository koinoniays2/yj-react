import React from 'react'
import NavPage from './NavPage'
import Footer from './Footer'
// 헤더 레이아웃
export default function Layout({children}) {
  return (
    <div>     
        {/* 네비게이션 */}
        <NavPage />
        {children}
        <Footer />
    </div>
  )
}
