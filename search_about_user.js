window.addEventListener("load", () => {
  const { pathname } = location;

  if (/^\/\w+$/.test(pathname)) {
    waitForSelector("div[data-testid='UserName']").then((elm) => {
      if (!elm) return;
      const usernameElm = elm.getElementsByTagName("span")[5];
      if (!usernameElm) return;

      const username = usernameElm.textContent;
      // const username = pathname.replace("/", "");
      // from:@not_you_die until:2023-11-27
      // const html = `&nbsp;<a
      //     href="https://twitter.com/search?q=from%3A%40${username}%20until%3A2023-11-27&src=typed_query&f=live"
      //     target="_blank" rel="nofollow" class="search_about_user"
      //   >
      //     search
      //   </a>`;
      const button = document.createElement("button")
      button.textContent = "search"
      button.addEventListener("click", function(){
        console.log(username)
        console.log(this)
      })
      // const html = '&nbsp;<button type=button>search</button>'

      // usernameElm.insertAdjacentHTML("afterend", html);
      usernameElm.insertAdjacentElement("afterend", button)
    });
  }
});
