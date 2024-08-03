'use client'

import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

import {
    RoomProvider,
    ClientSideSuspense,
  } from "@liveblocks/react/suspense";
import ActiveCollaborators from './ActiveCollaborators';

const CollaborativeRoom = ({roomId, roomMetadata}: CollaborativeRoomProps) => {
  return (
    <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <div className="collaborative-room">
          <Header className="sticky left-0 top-0">
        <div className="flex w-fit items-center gap-2 justify-center">
          <p className='document-title'>Share</p>
          </div>
          <div className="flex w-full flex-1 justify-end gap-2 lg:gap-3">
            <ActiveCollaborators/>
          
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