'use client'

import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

import {
    RoomProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className="collaborative-room">
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
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollaborativeRoom