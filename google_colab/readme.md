## Google Colab Scripts

### Username Fuzzer (username.py)

This script generates possible usernames based on a given name and any existing usernames you have found attached to the target.

#### Input
- Your target's name
- Any other usernames you have found attached to them

#### Output
- A file named `possible_usernames.csv` containing the generated usernames

### Username Enumeration (enumerate.py)

This script performs username enumeration using the Maigret tool.

#### Input
- Change the `username` variable to the username you want to search for

#### Output
- A folder named "Reports" containing a file named `username_report.pdf`

### Marple Script (marple.py)

This script performs username enumeration using the Marple tool. Collect links to profiles by username through 10+ search engines. 

#### Input
- Change the `username` variable to the username you want to search for

## Supported sources

| Name                | Method                                | Requirements      |
| ------------------- | --------------------------------------| ----------------- |
| [Google](http://google.com/)              | scraping                              | None, works out of the box; frequent captcha  |
| [DuckDuckGo](https://duckduckgo.com/)     | scraping                              | None, works out of the box                    |
| [Yandex](https://yandex.ru/)              | XML API                               | [Register and get YANDEX_USER/YANDEX_KEY tokens](https://github.com/fluquid/yandex-search)   |
| [Naver](https://www.naver.com/)           | SerpApi                               | [Register and get SERPAPI_KEY token](https://serpapi.com/)   |
| [Baidu](https://www.baidu.com/)           | SerpApi                               | [Register and get SERPAPI_KEY token](https://serpapi.com/)   |
| [Aol](https://search.aol.com/)            | scraping                              | None, scrapes with pagination  |
| [Ask](https://www.ask.com/)               | scraping                              | None, scrapes with pagination  |
| [Bing](https://www.bing.com/)             | scraping                              | None, scrapes with pagination  |
| [Startpage](https://www.startpage.com/)   | scraping                              | None, scrapes with pagination  |
| [Yahoo](https://yahoo.com/)               | scraping                              | None, scrapes with pagination  |
| [Mojeek](https://www.mojeek.com)          | scraping                              | None, scrapes with pagination  |
| [Dogpile](https://www.dogpile.com/)       | scraping                              | None, scrapes with pagination  |
| [Torch](http://torchdeedp3i2jigzjdmfpn5ttjhthh5wbmda2rr3jvqjg5p77c54dqd.onion)               | scraping                              | Tor proxies (socks5://localhost:9050 by default), scrapes with pagination  |
| [Qwant](https://www.qwant.com/)           | Qwant API                              | Check [if search available](https://www.qwant.com/) in your exit IP country, scrapes with pagination  |


#### Output
- A csv named `marple.csv`