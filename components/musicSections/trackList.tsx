import React from 'react'
import SingleTrackDisplay, { TableHead } from './singleTrackDisplay'

const TrackList = () => {
  // Get list of tracks from parent
  return (
    <table className='table-auto border w-full'>
      <TableHead />
      
      <tbody className='border'>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
        <SingleTrackDisplay title='My Song is cool' artist='Ceejay, The first one' length={156} album='Kukin'/>
      </tbody>
    </table>
  )
}

export default TrackList