# PunchWorX content editor

The editor lives at `/admin` after the site is deployed. It saves edits as commits on the `main` branch.

## Before the first login

1. Create a GitHub repository and push this project to it.
2. Open `public/admin/config.yml` and replace `OWNER/punchworx-site` with that repository, in the form `github-user/repository-name`.
3. In Netlify, add a site from that GitHub repository. Build command: `npm run build`. Publish directory: `out`.
4. Deploy the site once so `/admin` is online.

## Sign in

Open `https://your-site.netlify.app/admin` and choose GitHub. Netlify provides the GitHub sign-in used by this config (`base_url` `https://api.netlify.com`, `auth_endpoint` `auth`). The GitHub account must be allowed to commit to `main`.

Edits publish immediately. There is no draft workflow.

New images are stored in `public/images/uploads` and appear on the site as `/images/uploads/...`. Photos already on the site stay in `public/images` and keep working.
