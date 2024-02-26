import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPostById } from "../../store/utils/thunks";
import { useParams } from "react-router";


const PostComponent = () => {
    const posts = useSelector((state)=> state.posts);
    const dispatch = useDispatch();
    let params = useParams();

    useEffect(()=>{
        dispatch(fetchPostById(params.id))
    },[])

    return (
        <>
            {posts.postById ? 
                <div className="article_container">
                    <h1>{posts.postById.title}</h1>
                    <div style={{background: `url(${posts.postById.imagex1})` }}>
                    </div>
                </div>
                
            :null}
        </>
    )
}

export default PostComponent; 