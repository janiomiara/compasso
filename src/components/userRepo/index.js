import React from 'react'
import {
  CardLiguagen,
  CardRepo,
  CardTitle,
  ContainerRepo,
  RepoTitle,
  WrapperRepo,
} from './styles'
import { useUsers } from '../../providers/user'
import { GitHub } from 'react-feather'

//archive_url: "https://api.github.com/repos/janiomiara/angular/{archive_format}{/ref}"
//archived: false
//assignees_url: "https://api.github.com/repos/janiomiara/angular/assignees{/user}"
//blobs_url: "https://api.github.com/repos/janiomiara/angular/git/blobs{/sha}"
//branches_url: "https://api.github.com/repos/janiomiara/angular/branches{/branch}"
//clone_url: "https://github.com/janiomiara/angular.git"
//collaborators_url: "https://api.github.com/repos/janiomiara/angular/collaborators{/collaborator}"
//comments_url: "https://api.github.com/repos/janiomiara/angular/comments{/number}"
//commits_url: "https://api.github.com/repos/janiomiara/angular/commits{/sha}"
//compare_url: "https://api.github.com/repos/janiomiara/angular/compare/{base}...{head}"
//contents_url: "https://api.github.com/repos/janiomiara/angular/contents/{+path}"
//contributors_url: "https://api.github.com/repos/janiomiara/angular/contributors"
//created_at: "2018-09-24T04:03:13Z"
//default_branch: "master"
//deployments_url: "https://api.github.com/repos/janiomiara/angular/deployments"
//description: "One framework. Mobile & desktop."
//disabled: false
//downloads_url: "https://api.github.com/repos/janiomiara/angular/downloads"
//events_url: "https://api.github.com/repos/janiomiara/angular/events"
//fork: true
//forks: 0
//forks_count: 0
//forks_url: "https://api.github.com/repos/janiomiara/angular/forks"
//full_name: "janiomiara/angular"
//git_commits_url: "https://api.github.com/repos/janiomiara/angular/git/commits{/sha}"
//git_refs_url: "https://api.github.com/repos/janiomiara/angular/git/refs{/sha}"
//git_tags_url: "https://api.github.com/repos/janiomiara/angular/git/tags{/sha}"
//git_url: "git://github.com/janiomiara/angular.git"
//has_downloads: true
//has_issues: false
//has_pages: false
//has_projects: true
//has_wiki: false
//homepage: "https://angular.io"
//hooks_url: "https://api.github.com/repos/janiomiara/angular/hooks"
//html_url: "https://github.com/janiomiara/angular"
//id: 150052225
//issue_comment_url: "https://api.github.com/repos/janiomiara/angular/issues/comments{/number}"
//issue_events_url: "https://api.github.com/repos/janiomiara/angular/issues/events{/number}"
//issues_url: "https://api.github.com/repos/janiomiara/angular/issues{/number}"
//keys_url: "https://api.github.com/repos/janiomiara/angular/keys{/key_id}"
//labels_url: "https://api.github.com/repos/janiomiara/angular/labels{/name}"
//language: "TypeScript"
//languages_url: "https://api.github.com/repos/janiomiara/angular/languages"
//license: {key: "mit", name: "MIT License", spdx_id: "MIT", url: "https://api.github.com/licenses/mit",…}
//merges_url: "https://api.github.com/repos/janiomiara/angular/merges"
//milestones_url: "https://api.github.com/repos/janiomiara/angular/milestones{/number}"
//mirror_url: null
//name: "angular"
//node_id: "MDEwOlJlcG9zaXRvcnkxNTAwNTIyMjU="
//notifications_url: "https://api.github.com/repos/janiomiara/angular/notifications{?since,all,participating}"
//open_issues: 0
//open_issues_count: 0
//owner: {login: "janiomiara", id: 15040775, node_id: "MDQ6VXNlcjE1MDQwNzc1",…}
//private: false
//pulls_url: "https://api.github.com/repos/janiomiara/angular/pulls{/number}"
//pushed_at: "2018-09-24T03:41:04Z"
//releases_url: "https://api.github.com/repos/janiomiara/angular/releases{/id}"
//size: 86842
//ssh_url: "git@github.com:janiomiara/angular.git"
//stargazers_count: 0
//stargazers_url: "https://api.github.com/repos/janiomiara/angular/stargazers"
//statuses_url: "https://api.github.com/repos/janiomiara/angular/statuses/{sha}"
//subscribers_url: "https://api.github.com/repos/janiomiara/angular/subscribers"
//subscription_url: "https://api.github.com/repos/janiomiara/angular/subscription"
//svn_url: "https://github.com/janiomiara/angular"
//tags_url: "https://api.github.com/repos/janiomiara/angular/tags"
//teams_url: "https://api.github.com/repos/janiomiara/angular/teams"
//trees_url: "https://api.github.com/repos/janiomiara/angular/git/trees{/sha}"
//updated_at: "2018-09-24T04:03:32Z"
//url: "https://api.github.com/repos/janiomiara/angular"
//watchers: 0
//watchers_count: 0

const UserRepo = () => {
  const { repo, getRepo } = useUsers()
  return (
    <>
      {repo && (
        <ContainerRepo>
          <RepoTitle>
            <GitHub />
            REPOSITORIOS
          </RepoTitle>
          <WrapperRepo>
            {repo.map((item) => {
              return (
                <CardRepo>
                  <CardTitle>{item.name}</CardTitle>
                  <CardLiguagen>{item.language}</CardLiguagen>
                </CardRepo>
              )
            })}
          </WrapperRepo>
        </ContainerRepo>
      )}
    </>
  )
}

export default UserRepo
