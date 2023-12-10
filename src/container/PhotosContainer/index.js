import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Photos from "../../components/Photos";
import { fetchPhotos } from "../../store/photos/actions";
import { addPhotos } from "../../store/photos/slice";

function PhotosContainer () {
    const dispatch = useDispatch()

    const photos = useSelector((state) => state.photosReducer.photos)
    const isLoad = useSelector((state) => state.photosReducer.isLoad)
    const error = useSelector((state) => state.photosReducer.error)

    const handleAddPhoto = () => {
        dispatch(addPhotos(
            {
                title: 'title'
            }))
    }

    useEffect(() => {
        dispatch(fetchPhotos())
    }, [dispatch])

    return (
        <>
            {isLoad ? <h1>Загрузка Фотографий</h1> : <Photos error={error} photos={photos} handleAddPhoto={handleAddPhoto}/>}
        </>
    )
}

export default PhotosContainer