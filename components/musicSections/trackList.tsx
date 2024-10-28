import React from 'react'
import SingleTrackDisplay, { TableHead } from './singleTrackDisplay'

const TrackList = () => {
  // Get list of tracks from parent
  return (
    <div className='w-full'>
      <TableHead />
      <div className='flex gap-2 flex-col'>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Boobobobobob'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
      </div>
    </div>
  )
}

export default TrackList