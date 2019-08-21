# Fex: Forum Explorer

Fex: Forum Explorer is a web application that provides a principled rethinking of the way in which we interact with async threaded conversations on the internet through the use of visualization. We focus on HackerNews because of its active community and advantageous api.

[You can use this app as website (which you can install on tablets as a PWA)](https://www.mcnutt.in/forum-explorer/)

Or

[You can install the app as a chrome extension](https://chrome.google.com/webstore/detail/fex-forum-explorer/dfideaogbjjahljobhpcohkghjicihdh?hl=en-US)


You can take a look at the theoretical justification for this work in [this extended abstract](https://www.mcnutt.in/assets/forum-explorer-paper.pdf) or take a look at the [poster that goes along with it](https://www.mcnutt.in/assets/forum-explorer-poster.pdf).

![demo image](https://www.mcnutt.in/assets/forum-ex-pic.png)


### Interesting Conversations

Maybe you are at a loss of which pages to look at? Here are a few interesting ones:

- [Instacart paying 80 cents an hour because worker received a large tip](https://www.mcnutt.in/forum-explorer/?id=19029801) <br/>
  This thread is pretty large! HN Id 19029801
- [Google Fires Employee Behind Controversial Diversity Memo](https://www.mcnutt.in/forum-explorer/?id=14952787)<br>
This is the biggest known HN thread! It's very large!! HN ID 14952787
- [I Sell Onions on the Internet](https://www.mcnutt.in/forum-explorer/?id=19728132)<br/>
The author of the article that this thread is about posts a lot on this thread, it's interesting to watch him address various issues. HN id 19728132.
- [FeX: Forum Explorer – Rethinking how we interact with threaded conversations](https://news.ycombinator.com/item?id=19912550)<br/>
The HackerNews thread about this tool. HN Id 19912550


### Contributions

Thoughts and PRs are always welcome. Make sure any changes you want to add run correctly in the the development environment, see above.


## Dev Notes

### Local Usage

To run the application  in development mode download and cd into the repo. Make sure you have node version >= 9 installed.  

```sh
npm install

npm run start
```
Point your browser to 8080. This will bring up the debugging page. Various environmental configurations can be altered in src/constants/environment-config.json, such as website mode (for demoing the functionality deployed on the PWA).

We make use of a caching micro-service hosted on Heroku to serve amortize the cost of building and serving our LDA topic models. If you are NOT okay with using this cloud resource, then you can run the service locally. To do so open a second terminal and run

```sh
npm run serve
```

### Creating builds

To create a chrome extension build, make sure DEV_MODE=false (see constants/index) and then run

```sh
./prepare-build.sh
```
You can then install this in chrome as above. Nb: this uses yarn for deterministic installs, so you should have that installed in order to create builds appropriately.

To create a web page build, make sure DEV_MODE=false and WEB_PAGE_MODE=true and the run

```sh
./prepare-site.sh
```

This will attempt to push up to a gh-pages hosting for whatever repository the remote is connected to.
