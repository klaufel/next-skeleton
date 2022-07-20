import HttpProductRepository from './HttpProductRepository'

export const httpProductRepository = ({ config }) => {
  return new HttpProductRepository({ config, fetcher: fetch })
}
const stages = [...Array(4).keys()].map(n => n + 1).map(stage => {
  return `<li><a href="https://github.com/${{ github.repository }}/actions/runs/ci?stage${stage}">Deploy on stage-${stage}</a> - <a href="https://stage${stage}-marketplace.blommarket.com/">View live site</a></li>`
}).join('')

github.rest.issues.createComment({
  issue_number: context.issue.number,
  owner: context.repo.owner,
  repo: context.repo.repo,
  body: `
    <strong>🚀 Deploy this branch on stage environment.</strong> View more info for <a href="https://github.com/${{ github.repository }}/actions">deploy actions ↗︎</a><br/>
    Current branch: ${{ github.event.pull_request.head.ref }}<br/>
    <ul>${stages}</ul>
  `
})