<template>
    <header class="header">
        <div class="container header__inner">
            <a class="header__logo" href="#">
                <img src="../../assets/img/header-logo.png" alt="Tesla">
            </a>
            <nav class="nav">
                <a class="nav__link nav__link_active" href="#">{{ modelS }}</a>
                <a class="nav__link" href="#">{{ modelX }}</a>
                <a class="nav__link" href="#">{{ model3 }}</a>
                <a class="nav__link" href="#">{{ modelRoadster }}</a>
                <a class="nav__link" href="#">{{ modelEnergy }}</a>
            </nav>
            <div class="header__login">
                <a class="nav__link login__link" href="">{{ modelShop }}</a>
                <a class="nav__link login__link" href="">{{ modelLogin }}</a>
                <button class="header__burger">
                    <img class="burger-btn" src="../../assets/img/header-burger.png" alt="burger">
                </button>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'TheHeader',

        data() {
            return {
                modelS: 'Model S',
                modelX: 'Model X',
                model3: 'Model 3',
                modelRoadster: 'Roadster',
                modelEnergy: 'Energy',
                modelShop: 'Магазин',
                modelLogin: 'Войти',
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        max-width: 1440px;
        margin: 0 auto;
    }

    .header {
        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
        }

        &__logo img {
            width: 167px;
            height: 51px;
        }

        &__login {
            display: flex;
            align-items: center;
        }

        &__burger {
            cursor: pointer;
            background-color: transparent;
            border: none;
            padding-top: 5px;
        }
    }

    .nav {
        @media (max-width: 980px) {
            display: none;
        }

        &__link:last-child {
            margin-right: 0;
        }

        &__link {
            display: inline-block;
            text-decoration: none;
            margin-right: 50px;
            color: #000;
            font-weight: 600;
            transition: color .2s ease-in-out;
        }

        &__link_active,
        &__link:hover {
            color: #E51937;
        }

        &__link_active::after {
            position: absolute;
            content: "";
            width: 60px;
            margin-top: 5px;
            border-bottom: 2px solid #E51937;
            display: block;
            border-bottom-left-radius: 5px 2px;
            border-bottom-right-radius: 5px 2px;
        }
    }

    .login {
        &__link {
            margin-right: 30px;
        }

        @media (max-width: 1100px) {
            &__link {
                display: none;
            }
        }
    }
</style>