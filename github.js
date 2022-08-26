class Github {
    constructor() {
        this.client_id = "ee1b76f8ca2e6d305e85";
        this.client_secret = "13382da333a08dd092e1224f15bbf9f9ecb2b52e";
        this.repos_count = 5;
        this.repos_sort = "created:asc";
    }

    async getUser(user) {
        const profileRes = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const repoRes = await fetch(
            ` https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
        const profile = await profileRes.json();
        const repos = await repoRes.json();

        return {
            profile,
            repos,
        };
    }
}