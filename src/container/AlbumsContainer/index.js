import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Albums from "../../components/Albums";
import { fetchAlbums } from "../../store/albums/actions";
import { addAlbums } from "../../store/albums/slice";

function AlbumsContainer () {
    const dispatch = useDispatch()

    const albums = useSelector((state) => state.albumsReducer.albums)
    const isLoad = useSelector((state) => state.albumsReducer.isLoad)
    const error = useSelector((state) => state.albumsReducer.error)

    const handleAddAlbum = () => {
        dispatch(addAlbums(
            {
                title: 'title'
            }))
    }

    useEffect(() => {
        dispatch(fetchAlbums())
    }, [dispatch])

    return (
        <>
            {isLoad ? <h1>Загрузка Альбомов</h1> : <Albums error={error} albums={albums} handleAddAlbum={handleAddAlbum}/>}
        </>
    )
}

export default AlbumsContainer