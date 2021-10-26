const { arch, freemem, hostname, totalmem, userInfo, platform } = require('os');

setInterval(() => {
    const fRAM = freemem() / 1024 / 1024;
    const tRAM = totalmem() / 1024 / 1024;
    const usage = (fRAM / tRAM) * 100;

    const status = {
        OS: platform(),
        Arch: arch(),
        Host: hostname(),
        UserInfo: userInfo().username,
        TotalRAM: `${parseInt(tRAM)} MB`,
        FreeRAM: `${parseInt(fRAM)} MB`,
        Usage: `${usage.toFixed(2)} %`
    }
    exports.status = status;
}, 1000)
