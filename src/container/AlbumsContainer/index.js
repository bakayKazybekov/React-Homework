import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Albums from "../../components/Albums";
import { fetchAlbums } from "../../store/albums/actions";
import { addAlbums } from "../../store/albums/slice";
import { getAlbums } from "../../store/selectors";

function AlbumsContainer () {
    const dispatch = useDispatch()

    const { albums, isLoad, error } = useSelector(getAlbums)

    const handleAddAlbum = () => {
        dispatch(addAlbums(
            {
                title: 'title'
            }))
    }

    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch])

    if (isLoad) return <h1>Загрузка Альбомов</h1>
    return <Albums error={error} albums={albums} handleAddAlbum={handleAddAlbum}/>
}

export default AlbumsContainer