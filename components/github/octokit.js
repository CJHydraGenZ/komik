// Octokit.js
import { Octokit } from "octokit"

// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: process.env.KOMIK_GITHUB_KEY
})



export const getCommitList = async () => {

  const response = await octokit.request('GET /repos/{owner}/{repo}/commits{?sha,path,author,since,until,per_page,page}', {
    owner: 'CJHydraGenZ',
    repo: 'komik',
  })
  return response.data
}
export const getCommitMessage = async () => {

  const response = await octokit.request('GET /repos/{owner}/{repo}/commits{?sha,path,author,since,until,per_page,page}', {
    owner: 'CJHydraGenZ',
    repo: 'komik',
  })
  return response.data.map(res => res.commit).reduce((a, b) => {
    return new Date(a.committer.date) > new Date(b.committer.date) ? a : b;
  })
}

// await octokit.request('GET /repos/{owner}/{repo}/compare/{basehead}{?page,per_page}', {
//   owner: 'CJHydraGenZ',
//   repo: 'komik',
//   basehead: 'BASEHEAD'
// })