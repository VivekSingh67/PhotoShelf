import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({ item }) => {
    const dispatch = useDispatch()

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id))
        dispatch(removeToast())
    }
    return (
        <div className="w-[22vw] relative h-80 bg-white rounded-xl overflow-hidden">
            <div className="h-full">
                <a target="_blank" href={item.url}>
                    {item.type === "photos" && (
                        <img
                            src={item.src}
                            className="h-full w-full object-cover object-center"
                            alt={item.title}
                        />
                    )}

                    {item.type === "videos" && (
                        <video
                            src={item.src}
                            className="h-full w-full object-cover object-center"
                            autoPlay
                            loop
                            muted
                        />
                    )}
                </a>
            </div>

            <div
                id="bottom"
                className="flex justify-between items-center gap-3 w-full px-4 py-6 absolute bottom-0 text-white"
            >
                <h2 className="text-xl font-semibold capitalize h-14 overflow-hidden">
                    {item.title}
                </h2>
                <button onClick={() => {
                    removeFromCollection(item)
                }} className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 font-medium cursor-pointer'>Romve</button>
            </div>
        </div>
    )
}

export default CollectionCard