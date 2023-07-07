module.exports = function (eleventyConfig) {

    // Configure dist folder
    eleventyConfig.addPassthroughCopy("src/assets/favicon");
    eleventyConfig.addPassthroughCopy("src/assets/img/*.svg");
    eleventyConfig.addPassthroughCopy("robots.txt");

    // Get full year
    eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

    // 404 redirection
    eleventyConfig.setBrowserSyncConfig({
        callbacks: {
            ready: function (browserSync) {
                const content_404 = fs.readFileSync('dist/404.html');

                browserSync.addMiddleware("*", (req, res) => {
                    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
                    res.write(content_404);
                    res.end();
                });
            },
        },
    });

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
};
