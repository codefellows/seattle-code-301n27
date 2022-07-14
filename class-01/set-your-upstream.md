# ✍️ How to update a local repo with new changes made to a forked repo on GitHub?

1. List the current configured remote repository for your fork:

- `$ git remote -v`

1. Specify a new remote upstream repository that will be synced with the fork:

- `$ git remote add upstream {github url of repo you forked from}`

1. Verify the new upstream repository you've specified for your fork.

- `$ git remote -v`

1. Fetch the changes from the upstream remote:

- `$ git fetch upstream`

1. Pull the changes down from the upstream remote:

- `$ git pull upstream main`

## 📚 Resources

- [Configuring a remote for a fork](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork)
