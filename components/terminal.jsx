import Terminal from 'react-bash';

const helpCmds = [
    'whoami',
    'ls',
    <a style={{color: 'white'}} href='https://lxynox.now.sh'>
        <b>Profile</b>
    </a>
]

const extensions = {
    help: {
        exec(state, command) {
            return {
                history: helpCmds.map(value => ({value})),
            }
        }
    },
    sudo: {
        exec: ({ structure, history, cwd  }) => {
            return {
                structure,
                cwd,
                history: history.concat({ value: 'Nice try... (ಠ(ಠ(ಠ_ಠ)ಠ)ಠ)'  }),
            };
        },
    },
}

const history = [
    { value: 'Type `help` to begin'  },
]

const structure = {
    '.hidden': {
        mobile: { content: <a style={{color: 'white'}} href="tel:7745785918">(774) 578-5918</a> },
    },
    public: {
        email: { content: 'lxynox@gmail.com'  },
    },
    'README.md': {
        content: 'Thanks for visiting the site, cheers!'
    },

};

export default () =>
    <Terminal
        history={history}
        structure={structure}
        extensions={extensions}
        prefix="xuanyul@worldwideweb"
        theme={Terminal.Themes.DARK}
        styles={{
            ReactBash: {
                height: '100vh',
            },
        }}
    />
