import LoadingRelease from 'components/loading/loadingRelease'
import LoadingRecommend from '@/content/recommend/loadingRecommend'
import React from 'react'

export function Loading() {
  return (
    <>
      <div className='w-full bg-base-100 shadow-xl'>
        <h1 className="text-lg font-bold my-2">Recommend</h1>
        <div className="flex gap-2 overflow-hidden">

          <LoadingRecommend />
          <LoadingRecommend />
          <LoadingRecommend />
          <LoadingRecommend />
        </div>

      </div>
      <div className="lg:flex  w-full gap-2 ">
        <div className="flex flex-col w-full gap-2">
          <h1 className="text-lg font-bold my-2">Rilisan Terbaru</h1>
          <LoadingRelease />
          <LoadingRelease />
          <LoadingRelease />
          <LoadingRelease />
          <LoadingRelease />

        </div>
        {/* <ContentList data={release} loading={release} /> */}
        {/* <Listkomik data={komikList} loading={loading} /> */}
        {/* <SeriesList /> */}
      </div>
    </>
  )
}
