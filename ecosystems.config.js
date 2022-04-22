module.exports = {
    apps: [
        {
            name: 'labqik',
            script: 'yarn',
            args: 'develop',
            exp_backoff_restart_delay: 100,
        },
    ],
};