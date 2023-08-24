import PostCard from "./post-card"


export function PostList ({posts}) {
    return (
        <>
        {
            posts?.map( post => {
                const {id, 
                    users,
                    content} = post
              const {
                user_name: userName, 
                name: userFullName, 
                avatar_url: avatartUrl, 
            } = users
            return <PostCard
            key={id}
            userName = {userName}
            userFullName={userFullName}
            avatarUrl={avatartUrl}
            content={content}  />
        })
    }
    </>
    )
}