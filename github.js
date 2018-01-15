class GitHub {
  constructor() {
    this.client_id = '2d46c88ca8471c1f569c';
    this.client_secret = '133c54339a68f4bace715faa4bc1132ce2d66986';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {    
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    
    return {
      profile,
      repos
    }
  }
}