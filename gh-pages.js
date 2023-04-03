var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/garrdbyrd/personal_site',
        user: {
            name: 'Garrett Byrd',
            email: 'garrett@byrd.email'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)