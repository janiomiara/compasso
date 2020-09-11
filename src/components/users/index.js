import React from 'react'
import { Container, NameUser } from './styles'
import { useUsers } from '../../providers/user'

//avatar_url: "https://avatars2.githubusercontent.com/u/2995165?v=4"
//bio: null
//blog: ""
//company: null
//created_at: "2012-12-08T10:01:08Z"
//email: null
//events_url: "https://api.github.com/users/Janio/events{/privacy}"
//followers: 0
//followers_url: "https://api.github.com/users/Janio/followers"
//following: 0
//following_url: "https://api.github.com/users/Janio/following{/other_user}"
//gists_url: "https://api.github.com/users/Janio/gists{/gist_id}"
//gravatar_id: ""
//hireable: null
//html_url: "https://github.com/Janio"
//id: 2995165
//location: null
//login: "Janio"
//name: null
//node_id: "MDQ6VXNlcjI5OTUxNjU="
//organizations_url: "https://api.github.com/users/Janio/orgs"
//public_gists: 0
//public_repos: 0
//received_events_url: "https://api.github.com/users/Janio/received_events"
//repos_url: "https://api.github.com/users/Janio/repos"
//site_admin: false
//starred_url: "https://api.github.com/users/Janio/starred{/owner}{/repo}"
//subscriptions_url: "https://api.github.com/users/Janio/subscriptions"
//twitter_username: null
//type: "User"
//updated_at: "2015-04-07T17:49:32Z"
//url: "https://api.github.com/users/Janio"

const UserDetails = () => {
  const { getUser, user } = useUsers()
  const { avatar_url, login } = user
  return (
    <>
      {user && (
        <Container>
          <img src={avatar_url} alt={'profile pic'} />
          <NameUser>{login}</NameUser>
        </Container>
      )}
    </>
  )
}

export default UserDetails
