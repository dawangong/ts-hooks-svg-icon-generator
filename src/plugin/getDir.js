const fs = require('fs');
const path = require('path');

const getDir = (dir) => {
    if (!fs.existsSync(dir)) {
        return null;
    }
    return fs.readdirSync(dir)
        .map((file) => {
            const absolutePath = path.join(dir, file);
            if (fs.lstatSync(absolutePath).isDirectory()) {
                return getDir(absolutePath);
            }
            if (!absolutePath.match(/\.svg$/)) {
                return null;
            }
            return absolutePath;
        })
        .filter(filePath => filePath !== null);
};

module.exports = getDir;
