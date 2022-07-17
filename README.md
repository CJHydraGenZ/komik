

# KOMIK API
Komik bahasa Indonesia built with Next.js and Bun

# Usage
1. Clone this repository
    ```bash
    git clone https://github.com/CJHydraGenZ/komik.git
    ```
2. Install dependecies (`yarn` or `npm`)
3. Start the development
    ```bash
    npm run dev or npm dev
    ```
4. visit http://localhost:3000/

# Using Bun (Linux,Mac,WSL)
1. Clone this repository
    ```bash
    git clone https://github.com/CJHydraGenZ/komik.git
    ```
2. Install dependecies (`bun`)
    ```bash
    bun install
    ```
3. Bundle dependencies 
    ```bash
    bun bun
    ```
4. Start the development
    ```bash
    bun dev
    ```
5. visit http://localhost:3000/

# Documentation
__API__ __PATH__ = https://localhost:3000/api/
</br>__ApI__ Version = `v0.0.1`

## All Manga
Daftar Komik
```
/komik/
```
example : https://localhost:3000/api/komik/

## Komik Rekomendasi
Get Komik Rekomendasi
```
/recommend
```
example : https://localhost:3000/api/recommend/

## Detail Komik
```
/komik/[endpoint]
```
example : https://localhost:3000/api/komik/academys-undercover-professor/
<!-- 
## Search Manga by Name
```
/search/[query]
```
example : https://localhost:3000/api/search/komi%20san

## Genre List
```
/genres
```
example : https://localhost:3000/api/genres

## Genre Detail
```
/genres/[endpoint]/[pagenumber]
```
example : https://localhost:3000/api/genres/action/1

## Recommended Manga
```
/recommended
```
example : https://localhost:3000/api/recommended

## Manhua List (Chinese Comic)
```
/manhua/[pageNumber]
```
example : https://localhost:3000/api/manhua/1

## Manhwa List (Korean Comic)
```
/manhwa/[pageNumber]
```
example : https://localhost:3000/api/manhua/1 -->

## Chapter
```
/chapter/[chapterEndpoint]
```
example :https://localhost:3000/api/chapter/infinite-level-up-in-murim-chapter-63/
<!-- ## Showcase
App Showcase that use this API (you can add your app by edit this readme)

- [MangaMint](https://github.com/febryardiansyah/manga_mint) Flutter Manga Reader Application by [Febry ardiansyah](https://github.com/febryardiansyah) -->