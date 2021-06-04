# chatBot.io

## Preview
![alt text](https://github.com/ewannpv/chatBot.io/blob/main/src/images/preview.png "chatBot.io preview")

### Installation
clone the repo:
```
git clone https://github.com/ewannpv/chatBot.io.git
```

#### Node server
install deps:
```
cd chatBot.io
npm install
```

start the node server:
```
npm run start
```

#### Docker
```
cd chatBot.io
```
Build docker image:
```
docker build . -t ewannpv/chatbot.io
```
Launch docker image:
```
docker run -p 8080:8080 -d ewannpv/chatbot.io
```

### Bots

#### Roger
Roger can display cute cat images, here is what he can exactly do:
1. cat, will return a random cat.
2. cat tag:, will return a random cat with a :tag, e.g: 
``` @roger cat tag:cute ```
3. cat says:, will return a random cat saying :text, e.g:
 ``` @roger cat says:hello ```
4. cat tag: says:, will return a random cat with a :tag and saying :text, e.g:
 ``` @roger cat tag:cute says:hello ```
 
 #### Maria
 Maria can track lot of cryptocurrencies, here is what can she do:
 1. assets, will return the list of supported assets.
 2. assets :id, will return the asset details associated with the given :id, e.g:
 ``` @maria assets bitcoin ```
 3. assets :id history, will return price evolution during the last 24 hours associated with the given :id, e.g:
``` @maria assets bitcoin history ```

#### Pedro
Pedro knows every beers that exist, here is what he can do:
1. beers, will return the first 50 beers we have.
2. beers random, will return a random beer;
3. beers id:id, will return the beer matching the given id.
``` @pedro beers id:2 ```
4. beers abv:abv, will return all beers with ABV greater than the supplied number.
``` @pedro beers abv:11 ```

#### John
John is here to help yopu if you have any problem, he'll always display the same message.

