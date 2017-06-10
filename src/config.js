var config = {
  api: 'https://data.auroraproject.xyz/data',
  landing: {
    projects: [
      {id: 'sigma', title: 'Apex Sigma', description: 'A bot made to bring knowledge to your discord server.', target: '/#sigma'},
      {id: 'bdlinestickers', title: 'BetterDiscord LINE Stickers', description: 'A BetterDiscord plugin to add LINE stickers into emote menu', target: 'https://github.com/awaken1ng/bd-linestickers'}
    ],
    others: [
      {id: 'hastebin', title: 'Hastebin', description: 'Just a regular hastebin, hosted by us.', target: 'https://haste.auroraproject.xyz'}
    ]
  },
  sigma: {
    links: {
      invite: 'https://discordapp.com/oauth2/authorize?client_id=216437513709944832&scope=bot&permissions=8',
      status: 'https://status.auroraproject.xyz/'
    },
    main: {
      placeholders: {
        version: { major: '0', minor: '00', patch: '0000' },
        codename: 'Kon'
      },
      makers: [
        {name: 'Alex', about: 'The lead developer and original creator of Sigma. The resident asshat of the group, pretty fun though.', avatar: 'https://www.gravatar.com/avatar/44b9428f767bead3e3745fdeb9625637.png?s=128', overlay: 'python'},
        {name: 'Awakening', about: 'A crazy Russian hacker. Talks the least, seriously silent like a shadow but has the biggest personality!', avatar: 'https://www.gravatar.com/avatar/77467fb9f03e2c5ebdccbc8a548a1147.png?s=128', overlay: 'js'},
        {name: 'Valeth', about: "Just popped up out of nowhere and started changing all the code! I haven't regretted it yet. He likes dry stuff.", avatar: 'https://www.gravatar.com/avatar/17d3a152085c9a4d08254acc7ee5d06e.png?s=128', overlay: 'ruby'}
      ]
    },
    navmenu: {
      common: {
        left: [],
        right: [
        { href: '#/sigma/commands', text: 'Commands' },
        // { href: '#/sigma/status', text: 'Status' },
        // { href: 'https://sigma.auroraproject.xyz/leaderboard', text: 'Leaderboard' },
        { href: 'https://github.com/aurora-pro/apex-sigma', text: 'Github' },
        { href: 'https://discordapp.com/invite/Ze9EfTd', text: 'Discord' }
        ]
      },
      conditional: {}
    }
  }
}
export default config
