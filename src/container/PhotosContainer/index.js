import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Photos from "../../components/Photos";
import { fetchPhotos } from "../../store/photos/actions";
import { addPhotos } from "../../store/photos/slice";
import { getPhotos } from "../../store/selectors";

function PhotosContainer () {
    const dispatch = useDispatch()

    const { photos, isLoad, error } = useSelector(getPhotos)

    const handleAddPhoto = () => {
        dispatch(addPhotos(
            {
                title: 'title'
            }))
    }

    useEffect(() => {
        dispatch(fetchPhotos())
    }, [dispatch])
    if (isLoad) return <h1>Загрузка Фотографий</h1>
    return <Photos error={error} photos={photos} handleAddPhoto={handleAddPhoto}/>
}

export default PhotosContainer