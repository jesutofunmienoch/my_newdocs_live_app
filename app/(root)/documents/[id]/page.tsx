import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import Notifications from '@/components/Notifications'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const Document = () => {
  return (
    <div>
      <Header className="sticky left-0 top-0">
        <div className="flex items-center gap-2 lg:gap-4">
          <p className='document-title'>This is a fake test</p>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      <Editor/>

    </div>
  )
}

export default Document