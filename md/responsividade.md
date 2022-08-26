# 📲 Responsividade

A responsividade foi acicionada via @media screen and (&lt;/code&gt;)

@filipelimavaz confira 👇

```diff
* {
    margin: 0;
    padding: 0;
    font-family: 'Arcade', 'sans-serif';
>    box-sizing: border-box;
}

body {
    display: flex;
    height: 100vh;

>    width: 100vw;
>    padding: 2rem;

    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(120deg, #ffe53bd8, #ff2525da);
}

.background-image {
    height: 150px;
    width: 550px;

>    margin: 30px;

    border-radius: 3px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.5);
    background-size: cover;
    background-position: 10% 20%;
    transform: scale(1.2);
}

.relogio {
    display: flex;

>    min-height: 200px;
>    width: 45vw;
>    padding: .5rem;

    align-items: center;
    justify-content: space-around;

>    flex-wrap: wrap;

    border-radius: 3px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 0.8);
}

.relogio div {
    display: flex;
    height: 170px;
    width: 150px;

>    margin: .3rem;
>    padding: 10px;

    justify-content: center;
    flex-direction: column;
    align-items: center;
    letter-spacing: 3px;
    border-radius: 7px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.7);
    color: #ffffff;
    background: rgba(5 ,5 , 5, 0.9);
}

  #   Responsividade
>  @media screen and (max-width: 1130px) {
>      .background-image {
>          position: absolute;
>          z-index: -1;
>
>          width: 70%;
>          height: 70%;    
>
>          background-size: cover;
>          background-position: 10% 20%;
>      }
>
>      .relogio div {
>          margin: 20px;
>      }
>
>  }
```